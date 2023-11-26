import { MdAssignmentAdd } from "react-icons/md";
import { FcSurvey } from "react-icons/fc";
import { Link } from "react-router-dom";
import { FaChartPie, FaUserTie } from "react-icons/fa";
import { CiDollar } from "react-icons/ci";
import SignOutBtn from "./SignOutBtn";

const SurveyorMenu = () => {
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
          to={"/dashboard/surveys"}
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <CiDollar className="text-2xl" />
          <span className="ms-3">All Surveys</span>
        </Link>
      </li>

      <li>
        <Link
          to={"/dashboard/manage-surveys"}
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <FcSurvey className="text-2xl" />
          <span className="flex-1 ms-3 whitespace-nowrap">Manage Survey</span>
        </Link>
      </li>

      <li>
        <Link
          to={"/dashboard/add-survey"}
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <MdAssignmentAdd className="text-2xl" />
          <span className="flex-1 ms-3 whitespace-nowrap">Add Survey</span>
        </Link>
      </li>

      <li>
        <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <FaUserTie className="text-xl" />
          <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
        </button>
      </li>

      <SignOutBtn />
    </ul>
  );
};

export default SurveyorMenu;
