import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import AdminMenu from "./AdminMenu";
import DefaultMenu from "./DefaultMenu";
import ProUserMenu from "./ProUserMenu";
import SurveyorMenu from "./SurveyorMenu";
import UserMenu from "./UserMenu";

const Sidebar = () => {
  const { user, loading } = useAuth();

  const role = useRole();
  return (
    <>
      {/* drawer component */}

      <div
        id="drawer-navigation"
        className="top-0 left-0 z-40 h-full p-4 overflow-y-auto transition-transform  bg-white w-64 dark:bg-gray-800 border-r" //-translate-x-full
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
      >
        {/* Logo */}
        <h1 className="text-base font-semibold  ml-5 text-gray-500 uppercase dark:text-gray-400">
          Menu bar
        </h1>

        {/* <button
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button> */}

        {loading ? (
          <></>
        ) : (
          <div className="py-4 overflow-y-auto">
            {!user && <DefaultMenu />}
            {role === "user" && <UserMenu />}
            {role === "admin" && <AdminMenu />}
            {role === "pro-user" && <ProUserMenu />}
            {role === "surveyor" && <SurveyorMenu />}
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
