import { Link } from "react-router-dom";
import Heading from "../../../components/Surveys/Heading";

const BecomeProPage = () => {
  return (
    <div>
      <Heading title={"Become Pro"} />
      <div className="p-5">
        {/* component */}
        <div className="h-screen flex justify-center items-center ">
          <card className="rounded w-72 shadow-xl flex flex-col text-gray-200 bg-gradient-to-t from-indigo-600 via-indigo-700 to-indigo-700">
            {/* Title */}
            <p className="font-semibold bg-white bg-opacity-20 rounded-t px-4 py-2">
              PRO
            </p>
            {/* Pricing */}
            <div className="flex flex-row items-center pt-8 bg-white bg-opacity-10 pl-12 pr-10 gap-3">
              <div className="flex flex-row gap-1">
                <span className="text-base"> $ </span>
                <p className="text-5xl font-semibold">10</p>
              </div>
              <p className="font-light text-xs">Pro Member </p>
            </div>
            {/* Pricing Additional Description */}
            <div className="flex flex-row items-center justify-center bg-white bg-opacity-10 pt-5 pb-10">
              <p className="text-xs text-gray-300 border border-gray-50 border-opacity-20 rounded-full py-1 px-2">
                LifeTime
              </p>
            </div>
            <div className="grid grid-cols-12 bg-white bg-opacity-20 px-4 gap-y-3 pt-10">
              {/* Details 1 */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="col-span-11 text-sm flex items-center font-semibold pl-2">
                Unlimited items per workspace
              </div>
              {/* Line */}
              <div className="col-span-12 h-[1px] bg-white bg-opacity-20" />
              {/* Details 2 */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </div>
              <div className="col-span-11 text-sm flex items-center font-light pl-2">
                Everything in Pro
              </div>
              {/* Details 3 */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="col-span-11 text-sm flex items-center font-light pl-2">
                Unlimited Comments
              </div>
              {/* Details 4 */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="col-span-11 text-sm flex items-center font-light pl-2">
                Unlimited Survey Access
              </div>
              {/* Details 5 */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="col-span-11 text-sm flex items-center font-light pl-2">
                Unlimited Poll Attend
              </div>
              {/* CTA Button */}
              <div className="col-span-12 mt-20 mb-5 text-gray-100">
                <Link
                  to={"/dashboard/checkout"}
                  className="rounded text-gray-700 font-bold bg-secondary flex text-center justify-center items-center py-3"
                >
                  Upgrade Now
                </Link>
              </div>
            </div>
          </card>
        </div>
        F
      </div>
    </div>
  );
};

export default BecomeProPage;
