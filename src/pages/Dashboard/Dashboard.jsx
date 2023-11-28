import Heading from "../../components/Surveys/Heading";
import useRole from "../../hooks/useRole";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import SurveyorDashboard from "./SurveyorDashboard/SurveyorDashboard";

const Dashboard = () => {
  const role = useRole();
  return (
    <div>
      <Heading title={"Dashboard"} />
      <div className="p-5">
        <h1>Hi there, Welcome to Dashboard!</h1>

        <div className=" p-5">
          {role === "surveyor" && <SurveyorDashboard />}
          {role === "admin" && <AdminDashboard />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
