import { BiDislike, BiLike } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { doLike } from "../../api/survey";
import useUserId from "../../hooks/useUserId";
import toast from "react-hot-toast";
import useSurveys from "../../hooks/useSurveys";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import LikeDisLike from "../shared/Sidebar/LikeDisLike";

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
      <div className="flex flex-col space-y-2">
        <Link
          to={`/dashboard/survey-details/${survey?._id}`}
          className="bg-primary px-2 py-1 font-semibold text-white rounded-md"
        >
          View Survey
        </Link>
        <Link className="bg-secondary px-2 py-1 text-center font-semibold text-gray-700 rounded-md">
          Report
        </Link>
      </div>
    </div>
  );
};

export default SurveyCard;
