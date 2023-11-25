import { FaSearch } from "react-icons/fa";

const Heading = ({ title }) => {
  return (
    <div className="px-5 border-b   py-5 flex items-center justify-between">
      <div className="">
        <h1 className="font-bold">{title}</h1>
      </div>

      <div className="flex items-center px-3 py-2 bg-white border shadow rounded">
        <input
          type="text"
          name="searchText"
          placeholder="Search by title..."
          className=" bg-transparent w-full h-full outline-none"
        />
        <FaSearch className="border-l text-2xl pl-1 text-gray-500" />
      </div>
    </div>
  );
};

export default Heading;
