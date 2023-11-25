import LikeDisLike from "../../../components/shared/Sidebar/LikeDisLike";
import { IoMdTime } from "react-icons/io";

const SurveyDetailsSection = ({ survey, refetch }) => {
  const durationInSeconds = parseInt(survey?.duration);
  const durationInMinutes = !isNaN(durationInSeconds)
    ? durationInSeconds / 1000
    : 0;
  return (
    <div className="border p-5">
      <div className="border-b py-3">
        <h1 className="text-xl font-semibold">{survey?.title}</h1>
        <p className="text-sm text-gray-600 mt-2">{survey?.description}</p>
      </div>

      <div className="flex justify-between items-center">
        <LikeDisLike survey={survey} refetch={refetch} />
        <div className="flex items-center mt-4">
          <IoMdTime className={`cursor-pointer`} />
          <span className="text-sm font-sans">
            Duration: {durationInMinutes.toFixed(2)} minutes
          </span>
        </div>
        <div className="">
          <button className="bg-primary px-4 py-2 rounded-lg text-white font-semibold mt-3">
            Start Survey
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyDetailsSection;
