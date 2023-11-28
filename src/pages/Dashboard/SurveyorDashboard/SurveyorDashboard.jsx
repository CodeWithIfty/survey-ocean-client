import { useQuery } from "@tanstack/react-query";
import { getSurveyorAnalytics } from "../../../api/Users";
import useUserId from "../../../hooks/useUserId";
import { FcSurvey } from "react-icons/fc";
import { MdOutlineMessage, MdReport } from "react-icons/md";
import { FaPoll } from "react-icons/fa";
import StatCard from "../../../components/shared/StatCard";

const SurveyorDashboard = () => {
  const userId = useUserId();
  const { data } = useQuery({
    queryKey: ["surveyor_analytics", userId],
    queryFn: () => getSurveyorAnalytics(userId),
  });
  console.log(data);
  return (
    <div>
      {/* component */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        {/* Card one */}
        <StatCard
          title={"Total Surveys"}
          value={data?.totalSurvey}
          icon={<FcSurvey />}
        />
        <StatCard
          title={"Total Survey Response"}
          value={data?.totalResponse}
          icon={<MdOutlineMessage />}
        />
        <StatCard
          title={"Total Poll Response"}
          value={data?.totalPoll}
          icon={<FaPoll />}
        />
        <StatCard
          title={"Total Report"}
          value={data?.totalUserReports + data?.totalAdminReports}
          icon={<MdReport />}
        />
      </div>
    </div>
  );
};

export default SurveyorDashboard;
