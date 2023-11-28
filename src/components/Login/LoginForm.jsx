import toast from "react-hot-toast";
import { AiTwotoneMail } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { createToken, saveUser } from "../../api/auth";

const LoginForm = ({
  handleUserNameChange,
  handleEmailClick,
  handleUserNameBlur,
  passwordShow,
  setPasswordShow,
  setPasswordOnFocus,
}) => {
  const { SignInUser, setLoading, SignInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");
  const location = useLocation();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Logging in ...");

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password);
    try {
      // SignIn User
      const result = await SignInUser(email, password);

      // get token
      const token = await createToken(result?.user);
      if (token.success) {
        toast.success("Logged in", { id: toastId });
        navigate(
          location?.state?.previousPath ? location?.state?.previousPath : "/"
        );
      }
    } catch (err) {
      setLoginError("Invalid login details!");
      toast.error("Invalid login details!", { id: toastId });
      setLoading(false);
    }
  };

  const handleSignInWithGoogle = async () => {
    const toastId = toast.loading("Logging in ...");

    try {
      // Creating User
      const result = await SignInWithGoogle();
      console.log(result);

      // Get token
      const token = await createToken(result?.user);

      if (token.success) {
        // save user to db
        await saveUser(result?.user);

        // console.log(data);

        toast.success("Successfully Registered !", { id: toastId });
        navigate(
          location?.state?.previousPath ? location?.state?.previousPath : "/"
        );
      }
    } catch (err) {
      console.log("error from register ----->", err);
    }
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <div className="login">
        <label>
          <AiTwotoneMail className="absolute top-[30%] left-[33px]" />

          <input
            className="username"
            type="email"
            name="email"
            onChange={handleUserNameChange}
            onFocus={handleEmailClick}
            onBlur={handleUserNameBlur}
            autoComplete="on"
            placeholder="Email Address"
            required
          />
        </label>

        <label>
          <MdPassword className="absolute top-[30%] left-[33px]" />
          <input
            className="password"
            name="password"
            type={`${passwordShow ? "text" : "password"}`}
            onClick={() => setPasswordOnFocus(true)}
            onBlur={() => setPasswordOnFocus(false)}
            autoComplete="off"
            placeholder="password"
            required
          />
          <button
            type="button"
            onClick={() => {
              setPasswordShow(!passwordShow);
              if (passwordShow) {
                setPasswordOnFocus(true);
              }
            }}
            onBlur={() => setPasswordOnFocus(false)}
            className="password-button"
          >
            {passwordShow ? "hide" : "show"}
          </button>
        </label>

        {loginError && <p className="text-xs text-error ml-6">{loginError}</p>}

        <button type="submit" className="login-button">
          log in
        </button>
      </div>
      <div className="social-buttons cursor-pointer">
        <div className="social w-full h-full " onClick={handleSignInWithGoogle}>
          <FaGoogle />
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
