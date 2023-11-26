import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaChartPie, FaUserTie, FaUsers } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";

const AdminMenu = () => {
  const { SignOutUser } = useAuth();
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
          to={"/dashboard/surveys"}
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <CiDollar className="text-2xl" />
          <span className="ms-3">All Surveys</span>
        </Link>
      </li>

      <li>
        <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <FaUserTie className="text-xl" />

          <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
        </button>
      </li>
      <li>
        <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <IoSettingsOutline className="text-xl" />

          <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
        </button>
      </li>

      <li>
        <button
          onClick={SignOutUser}
          className="flex items-center p-2 text-red-500 rounded-lg dark:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <svg
            className="flex-shrink-0 w-5 h-5 text-red-500 transition duration-75 dark:text-red-500 group-hover:dark:text-red-700 dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
            />
          </svg>

          <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
        </button>
      </li>
    </ul>
  );
};

export default AdminMenu;
