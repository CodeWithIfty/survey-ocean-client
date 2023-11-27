import { loadStripe } from "@stripe/stripe-js";
import Heading from "../../../components/Surveys/Heading";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const CheckOut = () => {
  return (
    <div>
      <Heading title={"CheckOut"} />
      <div className="">
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </div>
    </div>
  );
};

export default CheckOut;
