import { useState } from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { FaCamera, FaGoogle, FaRegUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { uploadImage } from "../../utils";
import toast from "react-hot-toast";
import { createToken, saveUser } from "../../api/auth";

const RegisterForm = ({
  handleUserNameChange,
  handleEmailClick,
  handleUserNameBlur,
  passwordShow,
  setPasswordShow,
  setPasswordOnFocus,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState();
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const { createUser, updateUserProfile, SignInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Logging in ...");

    // Validating user data
    if (password.length < 6) {
      setPasswordError("The password is less than 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("The password don't have a capital letter");
      return;
    } else if (!/[!@#$%^&*]/.test(password)) {
      setPasswordError("The password don't have a capital letter");
      return;
    } else {
      setPasswordError("");
    }

    try {
      // Upload Image to ImgBB
      const display_url = await uploadImage(photo);

      // console.log(name, email, password, photoURL);

      // Creating User
      const result = await createUser(email, password);
      console.log(result);

      // Updating user Display name and photoURL
      await updateUserProfile(name, display_url);

      // save user to db
      await saveUser(result?.user);

      // Get token
      await createToken(result?.user);

      toast.success("Successfully Registered !", { id: toastId });
      navigate(
        location?.state?.previousPath ? location?.state?.previousPath : "/"
      );
    } catch (err) {
      console.log("error from register ----->", err);
      if (err.message.match(/email-already-in-use/g)) {
        setEmailError("This email already in use");
        toast.error("This email already in use", { id: toastId });
      }
    }
  };

  const handleSignInWithGoogle = async () => {
    const toastId = toast.loading("Logging in ...");

    try {
      // Creating User
      const result = await SignInWithGoogle();
      console.log(result);

      // save user to db
      await saveUser(result?.user);

      // Get token
      await createToken(result?.user);
      // console.log(data);

      toast.success("Successfully Registered !", { id: toastId });
      navigate(
        location?.state?.previousPath ? location?.state?.previousPath : "/"
      );
    } catch (err) {
      console.log("error from register ----->", err);
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="login">
        {/* Full Name */}
        <label>
          <FaRegUser className="absolute top-[30%] left-[33px]" />

          <input
            className="username"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              handleUserNameChange(e);
            }}
            onFocus={handleEmailClick}
            onBlur={handleUserNameBlur}
            autoComplete="on"
            placeholder="Enter your name"
            required
          />
        </label>

        <label>
          <AiTwotoneMail className="absolute top-[30%] left-[33px]" />

          <input
            className="username"
            type="email"
            value={email}
            onChange={(e) => {
              handleUserNameChange(e);
              setEmail(e.target.value);
            }}
            onFocus={handleEmailClick}
            onBlur={handleUserNameBlur}
            autoComplete="on"
            placeholder="Email Address"
            required
          />
          {emailError && (
            <p className="text-xs text-error mt-2">{emailError}</p>
          )}
        </label>

        <label>
          <MdPassword className="absolute top-[30%] left-[33px]" />
          <input
            className="password"
            type={`${passwordShow ? "text" : "password"}`}
            onClick={() => setPasswordOnFocus(true)}
            onBlur={() => setPasswordOnFocus(false)}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          {passwordError && (
            <p className="text-xs text-error mt-2">{passwordError}</p>
          )}
        </label>

        <label>
          <FaCamera className="absolute top-[30%] left-[33px]" />

          <input
            className="username"
            type="file"
            onChange={(e) => {
              handleUserNameChange(e);
              setPhoto(e.target.files[0]);
            }}
            onFocus={handleEmailClick}
            onBlur={handleUserNameBlur}
            autoComplete="on"
          />
        </label>

        <button type="submit" className="login-button">
          Register
        </button>
      </div>
      <div className="social-buttons">
        <div className="social">
          <FaGoogle onClick={handleSignInWithGoogle} />
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
