import { Link } from "react-router-dom";
import LikeDisLike from "../../../components/shared/Sidebar/LikeDisLike";

const ManageSurveyCard = ({ survey }) => {
  const durationInSeconds = parseInt(survey?.duration);
  const durationInMinutes = !isNaN(durationInSeconds)
    ? durationInSeconds / 1000
    : 0;

  return (
    <div className="bg-white shadow p-4 mr-4 flex justify-between items-center">
      <div className="">
        <h1 className="text-xl font-bold">{survey?.title}</h1>
        <p className="text-sm text-gray-400 mt-3 w-11/12">
          {survey?.description.substring(0, 120)}
        </p>
        <span className="text-xs">
          Duration: {durationInMinutes.toFixed(2)} minutes
        </span>
        <LikeDisLike survey={survey} />
      </div>

      <div className="flex flex-col space-y-2">
        <Link
          to={`/dashboard/survey-details/${survey?._id}`}
          className="bg-secondary px-2 py-1 font-semibold text-gray-600 rounded-md"
        >
          View Details
        </Link>
        <Link
          to={`/dashboard/survey-details/${survey?._id}`}
          className="bg-primary px-2 py-1 font-semibold text-white rounded-md"
        >
          Edit Survey
        </Link>
        <Link className="bg-red-500 px-2 py-1 text-center font-semibold text-white rounded-md">
          Delete
        </Link>
      </div>
    </div>
  );
};

export default ManageSurveyCard;
