import { useContext } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { authContext } from "./context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();
  if (loading) {
    return (
      <div className="h-[50vh] flex justify-center items-center">
        <span className="loading loading-ring loading-md scale-150"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return navigate("/register", {
    state: { previousPath: location.pathname },
  });
};

export default PrivateRoute;
