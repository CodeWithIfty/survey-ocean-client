import { useNavigate } from "react-router-dom";
import LikeDisLike from "../../../components/shared/Sidebar/LikeDisLike";
import { IoMdTime } from "react-icons/io";
import { useEffect, useState } from "react";
import useUserId from "../../../hooks/useUserId";
import useRole from "../../../hooks/useRole";
import toast from "react-hot-toast";

const SurveyDetailsSection = ({ survey, refetch }) => {
  const navigate = useNavigate();
  const [userAttended, setUserAttended] = useState(false);
  const durationInSeconds = parseInt(survey?.duration);
  const durationInMinutes = !isNaN(durationInSeconds)
    ? durationInSeconds / 1000
    : 0;

  const userId = useUserId();
  const role = useRole();

  useEffect(() => {
    if (survey) {
      if (
        survey?.survey_response?.some(
          (response) => response.respondedUser === userId
        )
      ) {
        setUserAttended(true);
      } else {
        setUserAttended(false);
      }
    }
  }, [survey, userId]);
  console.log(userAttended);

  const handleStartSurvey = () => {
    if (role === "user" || role === "pro-user") {
      navigate(`/dashboard/survey/${survey?._id}`, {
        state: { previousPath: location.pathname },
      });
    } else {
      toast.error("You are not allowed to do any survey");
    }
  };
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
          {userAttended ? (
            <button className="bg-gray px-4 py-2 rounded-lg text-black font-semibold mt-3">
              Already Submitted
            </button>
          ) : (
            <button
              onClick={handleStartSurvey}
              className="bg-primary px-4 py-2 rounded-lg text-white font-semibold mt-3"
            >
              Start Survey
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SurveyDetailsSection;
