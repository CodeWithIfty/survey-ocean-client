
import { Link } from "react-router-dom";

const Heading = ({ title }) => {
  return (
    <div className="px-5 border-b   py-5 flex items-center justify-between">
      <div className="">
        <h1 className="font-bold">{title}</h1>
      </div>

      <div className="">
        <Link
          to={"/"}
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          <img src="/assets/logo.png" alt="" className="h-12" />
        </Link>
      </div>
    </div>
  );
};

export default Heading;
