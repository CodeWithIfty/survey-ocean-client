import { Link } from "react-router-dom";
import useSurveys from "../../hooks/useSurveys";
import LikeDisLike from "../shared/Sidebar/LikeDisLike";
import ReportForm from "./ReportForm";

const SurveyCard = ({ survey }) => {
  const { refetch } = useSurveys();

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
        <LikeDisLike survey={survey} refetch={refetch} />
      </div>
      <div className="flex flex-col space-y-2  items-center">
        <Link
          to={`/dashboard/survey-details/${survey?._id}`}
          className="bg-primary px-2 py-1 font-semibold text-white rounded-md"
        >
          View Survey
        </Link>
        <div className="">
          <ReportForm survey={survey} />
        </div>
      </div>
    </div>
  );
};

export default SurveyCard;
