import { useLocation, useNavigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import useAuth from "../hooks/useAuth";
import Loader from "../components/shared/Loader";

const SurveyorRoute = ({ children }) => {
  const { loading } = useAuth();
  const role = useRole();

  const location = useLocation();
  const navigate = useNavigate();
  if (loading) {
    return (
      <Loader/>
    );
  }
  if (role === "surveyor") {
    return children;
  }

  return navigate("/dashboard", {
    state: { previousPath: location.pathname },
  });
};

export default SurveyorRoute;
