import { Link } from "react-router-dom";
import Drawer from "./Drawer";
import { useState } from "react";
import MenuItems from "./MenuItems";
import RightMenuItem from "./RightMenuItem";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="max-w-full lg:mx-24 flex flex-wrap items-center justify-between  p-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/assets/logo.png" className="h-10" alt="" />
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setDrawerOpen(!drawerOpen)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Menu Items */}
        <div className="hidden  lg:block md:w-auto " id="navbar-default">
          <MenuItems />
        </div>

        <div className="hidden lg:block">
          <RightMenuItem />
        </div>
      </div>
      <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </nav>
  );
};

export default Navbar;
