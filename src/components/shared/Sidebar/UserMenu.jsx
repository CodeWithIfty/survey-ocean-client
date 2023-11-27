import { Link } from "react-router-dom";
import SignOutBtn from "./SignOutBtn";
import { CiDollar } from "react-icons/ci";
import ProfileBtn from "../ProfileBtn";

const UserMenu = () => {
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

      <ProfileBtn />

      <SignOutBtn />

      <li className="">
        <Link
          to={"/dashboard/become-pro"}
          className="px-4 py-2 bg-primary text-white text-center rounded-lg "
        >
          <span>Become Pro</span>
        </Link>
      </li>
    </ul>
  );
};

export default UserMenu;
