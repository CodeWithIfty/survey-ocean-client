import { useNavigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import useAuth from "../hooks/useAuth";
import Loader from "../components/shared/Loader";

const DashboardRoute = ({ children }) => {
  const { loading } = useAuth();
  const role = useRole();
  const navigate = useNavigate();
  if (loading) {
    return <Loader />;
  }
  if (role === "admin" || role === "surveyor") {
    return children;
  }

  return navigate("/dashboard/surveys");
};

export default DashboardRoute;
