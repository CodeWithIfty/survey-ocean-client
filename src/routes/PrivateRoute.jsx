import { useContext } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthProvider";
import Loader from "../components/shared/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();
  if (loading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }

  return navigate("/register", {
    state: { previousPath: location.pathname },
  });
};

export default PrivateRoute;
