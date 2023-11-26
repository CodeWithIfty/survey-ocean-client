import { FaUserTie } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProfileBtn = () => {
  return (
    <li>
      <Link
        to={"/dashboard/profile"}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <FaUserTie className="text-xl" />
        <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
      </Link>
    </li>
  );
};

export default ProfileBtn;
