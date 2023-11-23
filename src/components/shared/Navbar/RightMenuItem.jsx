import { FaSearch } from "react-icons/fa";

const RightMenuItem = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between ">
      <FaSearch className="ml-12 hidden lg:block" />
      <button className="px-4 py-2 lg:ml-12 text-white  bg-primary uppercase font-semibold rounded">
        Become Pro
      </button>
    </div>
  );
};

export default RightMenuItem;
