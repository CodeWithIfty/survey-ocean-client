import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

import { Link } from "react-router-dom";
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
  const [passwordOnFocus, setPasswordOnFocus] = useState();
  const [passwordShow, setPasswordShow] = useState(false);
  const [emailLength, setEmailLength] = useState();

  useEffect(() => {
    document.querySelector(".face");
  }, []);

  const handleUserNameChange = (e) => {
    let length = Math.min(e.target.value.length - 16, 19);
    setEmailLength(length);
    let face = document.querySelector(".face");
    if (face) {
      face.style.setProperty("--rotate-head", `${-length}deg`);
    }
  };

  const handleEmailClick = () => {
    let face = document.querySelector(".face");
    if (face) {
      face.style.setProperty(
        "--rotate-head",
        `${emailLength ? `${-emailLength}deg` : "16deg"}`
      );
    }
  };

  const handleUserNameBlur = () => {
    let face = document.querySelector(".face");
    if (face) {
      face.style.setProperty("--rotate-head", "0deg");
    }
  };

  return (
    <div className="h-[85vh] w-full bg-[#e0e0e0]">
      <div className="center   h-[490px] ">
        <div className="ear ear--left"></div>
        <div className="ear ear--right"></div>
        <div className="face">
          <div className="eyes">
            <div className="eye eye--left">
              <div className="glow"></div>
            </div>
            <div className="eye eye--right">
              <div className="glow"></div>
            </div>
          </div>
          <div className="nose">
            <svg width="38.161" height="22.03">
              <path
                d="M2.017 10.987Q-.563 7.513.157 4.754C.877 1.994 2.976.135 6.164.093 16.4-.04 22.293-.022 32.048.093c3.501.042 5.48 2.081 6.02 4.661q.54 2.579-2.051 6.233-8.612 10.979-16.664 11.043-8.053.063-17.336-11.043z"
                fill="#243946"
              ></path>
            </svg>
            <div className="glow"></div>
          </div>
          <div className="mouth">
            <svg className="smile" viewBox="-2 -2 84 23" width="84" height="23">
              <path
                d="M0 0c3.76 9.279 9.69 18.98 26.712 19.238 17.022.258 10.72.258 28 0S75.959 9.182 79.987.161"
                fill="none"
                strokeWidth="3"
                strokeLinecap="square"
                strokeMiterlimit="3"
              ></path>
            </svg>
            <div className="mouth-hole"></div>
            <div className={`${passwordOnFocus ? "" : "breath"}  tongue`}>
              <div className="tongue-top"></div>
              <div className="line"></div>
              <div className="median"></div>
            </div>
          </div>
        </div>
        <div className="hands">
          <div
            className={`hand ${passwordOnFocus ? "hide" : ""} hand--left ${
              passwordShow ? "peek " : ""
            }`}
          >
            <div className="finger">
              <div className="bone"></div>
              <div className="nail"></div>
            </div>
            <div className="finger">
              <div className="bone"></div>
              <div className="nail"></div>
            </div>
            <div className="finger">
              <div className="bone"></div>
              <div className="nail"></div>
            </div>
          </div>
          <div
            className={`${passwordOnFocus ? "hide" : ""} hand hand--right ${
              passwordShow ? "peek " : ""
            }`}
          >
            <div className="finger">
              <div className="bone"></div>
              <div className="nail"></div>
            </div>
            <div className="finger">
              <div className="bone"></div>
              <div className="nail"></div>
            </div>
            <div className="finger">
              <div className="bone"></div>
              <div className="nail"></div>
            </div>
          </div>
        </div>

        <LoginForm
          handleUserNameChange={handleUserNameChange}
          handleEmailClick={handleEmailClick}
          handleUserNameBlur={handleUserNameBlur}
          passwordShow={passwordShow}
          setPasswordShow={setPasswordShow}
          setPasswordOnFocus={setPasswordOnFocus}
        />

        <div className="text-center">
          Don&apos;t Have Account?
          <Link to={"/register"} className="text-blue-600  underline ml-1">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
