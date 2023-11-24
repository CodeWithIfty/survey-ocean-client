import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <main className="container mx-auto grid grid-cols-6 ">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-5  ">
        <Outlet />
      </div>
    </main>
  );
};

export default DashboardLayout;
