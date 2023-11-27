import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <main className="container mx-auto grid grid-cols-6 ">
      <div className="lg:col-span-1">
        <Sidebar />
      </div>
      <div className="lg:col-span-5 col-span-6 ">
        <Outlet />
      </div>
    </main>
  );
};

export default DashboardLayout;
