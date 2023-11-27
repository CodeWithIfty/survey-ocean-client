import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import ProfileBtn from "../ProfileBtn";
import SignOutBtn from "./SignOutBtn";
import { FaCommentDots } from "react-icons/fa6";

const ProUserMenu = () => {
  return (
    <ul className="space-y-2 font-medium">
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
          to={"/dashboard/surveys"}
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <FaCommentDots className="text-2xl" />
          <span className="ms-3">Comments</span>
        </Link>
      </li>
      <ProfileBtn />

      <SignOutBtn />
    </ul>
  );
};

export default ProUserMenu;
