import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <main className="">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default MainLayout;
