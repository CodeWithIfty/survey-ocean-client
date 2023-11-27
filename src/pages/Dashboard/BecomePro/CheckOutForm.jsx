import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import axiosSecure from "../../../api";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useUserId from "../../../hooks/useUserId";
import { postPaymentInfo, updateUserRole } from "../../../api/Users";
import toast from "react-hot-toast";

const CheckOutForm = () => {
  const [error, setError] = useState("");
  const [paymentSucces, setPaymentSucces] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const price = 10;
  const { user } = useAuth();
  const userId = useUserId();

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      setClientSecret(res.data.clientSecret);
      console.log(res.data);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Loading...");
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setError(error.message);
    } else {
      console.log("Payment Method ", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    } else {
      console.log(paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setPaymentSucces(
          `Payment Successful! Transaction Id : ${paymentIntent.id} `
        );
        navigate("/");
        const role = {
          userId: userId,
          newRole: "pro-user", // New role to assign
        };
        await updateUserRole(role);

        const paymentInfo = {
          user_email: user?.email,
          user_name: user?.displayName,
          trans_id: paymentIntent.id,
          trans_amount: price,
        };
        const res = await postPaymentInfo(paymentInfo);
        console.log(res);
        toast.success("Congratulations! Now You are a 'Pro' Member...", {
          id: toastId,
        });
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} className="p-10">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe || !clientSecret}
        className="px-3 py-1 bg-primary text-white rounded-lg mt-5"
      >
        Pay
      </button>
      <p className="text-red-500">{error}</p>
      <p className="text-green-500 mt-1">{paymentSucces}</p>
    </form>
  );
};

export default CheckOutForm;
