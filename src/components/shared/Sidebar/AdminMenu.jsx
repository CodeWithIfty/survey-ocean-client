import { Link } from "react-router-dom";
import { FaChartPie, FaUsers } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import SignOutBtn from "./SignOutBtn";
import ProfileBtn from "../ProfileBtn";
import { RiSurveyLine } from "react-icons/ri";
import { MdOutlinePayment } from "react-icons/md";

const AdminMenu = () => {
  return (
    <ul className="space-y-2 font-medium">
      <li>
        <Link
          to={"/dashboard"}
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <FaChartPie className="text-xl" />
          <span className="ms-3">Dashboard</span>
        </Link>
      </li>

      <li>
        <Link
          to={"/dashboard/manage-users"}
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <FaUsers className="text-xl" />
          <span className="ms-3">Manage User</span>
        </Link>
      </li>

      <li>
        <Link
          to={"/dashboard/admin-manage-surveys"}
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <RiSurveyLine className="text-xl" />
          <span className="ms-3">Manage Survey</span>
        </Link>
      </li>

      <li>
        <Link
          to={"/dashboard/surveys"}
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <CiDollar className="text-2xl" />
          <span className="ms-3">All Surveys</span>
        </Link>
      </li>

      <li>
        <Link
          to={"/dashboard/payment-details"}
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <MdOutlinePayment className="text-xl" />
          <span className="ms-3">Payments</span>
        </Link>
      </li>
      <ProfileBtn />

      <SignOutBtn />
    </ul>
  );
};

export default AdminMenu;
