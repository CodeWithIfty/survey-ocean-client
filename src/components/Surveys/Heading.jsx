import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import useAuth from "../../hooks/useAuth";

const Heading = ({ title }) => {
  const { setIsSidebarOpen, isSideBarOpen } = useAuth();
  return (
    <div className="px-5 border-b   py-5 flex items-center justify-between">
      <div className="">
        <button onClick={() => setIsSidebarOpen(!isSideBarOpen)} className="lg:hidden">
          <CiMenuFries />
        </button>
        <h1 className="font-bold lg:block hidden">{title}</h1>
      </div>

      <div className="">
        <Link
          to={"/"}
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          <img src="/assets/logo.png" alt="" className="h-12" />
        </Link>
      </div>
    </div>
  );
};

export default Heading;
