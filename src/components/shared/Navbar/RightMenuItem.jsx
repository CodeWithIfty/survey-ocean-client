import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { removeToken } from "../../../api/auth";

const RightMenuItem = () => {
  const { user, SignOutUser } = useAuth();
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const handleLogOut = async () => {
    await SignOutUser();
    await removeToken(user);
  };
  return (
    <>
      {user ? (
        <div className="flex flex-col lg:flex-row items-center justify-between ">
          <div className="">
            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                onClick={() => setDropDownOpen(!dropDownOpen)}
                type="button"
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 hover:ring-4"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src={user?.photoURL}
                  alt="user photo"
                />
              </button>
              {/* Dropdown menu */}
              <div
                className={`${
                  dropDownOpen ? "" : "hidden"
                } z-50 absolute top-10 transition ease-in-out duration-100  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    {user?.displayName}
                  </span>
                  <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                    {user?.email}
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={handleLogOut}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button className="px-4 py-2 lg:ml-12 text-white  bg-primary uppercase font-semibold rounded">
            Become Pro
          </button>
        </div>
      ) : (
        <>
          <Link
            to={"/login"}
            className="px-4 py-2 lg:ml-12 text-white  bg-primary uppercase font-semibold rounded"
          >
            Get Started
          </Link>
        </>
      )}
      {/*  */}
    </>
  );
};

export default RightMenuItem;
