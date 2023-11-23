import MenuItems from "./MenuItems";
import RightMenuItem from "./RightMenuItem";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Drawer = ({ setDrawerOpen, drawerOpen }) => {
  return (
    <>
      {/* drawer component */}
      <div
        id="drawer-navigation"
        className={`${
          drawerOpen ? "-translate-x-full" : " "
        } fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-64 dark:bg-gray-800 lg:hidden`}
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
      >
        {/* Logo */}
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Menu
        </h5>

        {/* Close Btn */}
        <button
          onClick={() => setDrawerOpen(!drawerOpen)}
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
        </button>

        {/* Menu Items */}
        <div className="py-4 overflow-y-auto">
          <MenuItems />
        </div>

        <RightMenuItem />
      </div>
    </>
  );
};

export default Drawer;
