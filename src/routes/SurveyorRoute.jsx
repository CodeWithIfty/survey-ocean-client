import { useLocation, useNavigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import useAuth from "../hooks/useAuth";

const SurveyorRoute = ({ children }) => {
  const { loading } = useAuth();
  const role = useRole();

  const location = useLocation();
  const navigate = useNavigate();
  if (loading) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <span className="loading loading-ring loading-md scale-150"></span>
      </div>
    );
  }
  if (role === "surveyor") {
    return children;
  }

  return navigate("/register", {
    state: { previousPath: location.pathname },
  });
};

export default SurveyorRoute;
