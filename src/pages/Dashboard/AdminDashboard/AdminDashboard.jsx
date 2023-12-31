import StatCard from "../../../components/shared/StatCard";
import useAdminAnalytics from "../../../hooks/useAdminAnalytics";
import { MdPayments } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import Chart from "react-google-charts";
import Loader from "../../../components/shared/Loader";

export const AdminDashboard = () => {
  const { data, isLoading } = useAdminAnalytics();
  console.log(data);

  const { userRoleCounts } = data || [];

  const options = {
    title: "Total User Based On Role",
    is3D: true,
  };

  const chartData = [
    ["Users", "Users Based Role"],
    ["Admin", userRoleCounts?.admin],
    ["Surveyor", userRoleCounts?.surveyor],
    ["Pro User", userRoleCounts?.["pro-user"]],
    ["User", userRoleCounts?.user],
  ];

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="">
          <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
            {/* Card one */}
            <StatCard
              title={"Total Revenue"}
              value={`$ ${data?.totalSales}`}
              icon={<PiCurrencyDollarSimpleFill />}
            />
            <StatCard
              title={"Total  Sales"}
              value={data?.totalPayments}
              icon={<MdPayments />}
            />
            <StatCard
              title={"Total  Users"}
              value={data?.totalUsers}
              icon={<FaUsers />}
            />
          </div>
          <div className="">
            <Chart
              chartType="PieChart"
              data={chartData}
              options={options}
              width={"100%"}
              height={"400px"}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
