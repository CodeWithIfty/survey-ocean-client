import { useNavigate } from "react-router-dom";
import LikeDisLike from "../../../components/shared/Sidebar/LikeDisLike";
import { IoMdTime } from "react-icons/io";
import { useEffect, useState } from "react";
import useUserId from "../../../hooks/useUserId";
import useRole from "../../../hooks/useRole";
import toast from "react-hot-toast";
import { Chart } from "react-google-charts";
import Loader from "../../../components/shared/Loader";

const SurveyDetailsSection = ({ survey, refetch, isLoading }) => {
  const navigate = useNavigate();
  const [userAttended, setUserAttended] = useState(false);
  const [isDeadlineExpired, setIsDeadlineExpired] = useState(false);
  const durationInSeconds = parseInt(survey?.duration);
  const durationInMinutes = !isNaN(durationInSeconds)
    ? durationInSeconds / 1000
    : 0;

  const userId = useUserId();
  const role = useRole();

  console.log(survey?.survey_response);

  const checkDeadlineExpired = () => {
    const currentDate = new Date();
    const surveyDeadline = new Date(survey.deadline);
    setIsDeadlineExpired(currentDate > surveyDeadline);
  };

  useEffect(() => {
    if (survey) {
      if (
        survey.survey_response?.some(
          (response) => response.respondedUser === userId
        )
      ) {
        setUserAttended(true);
      } else {
        setUserAttended(false);
      }
      checkDeadlineExpired();
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

  const generateChartData = () => {
    return survey?.questions?.map((question) => {
      const chartData = [[question.text, "Number of Responses"]];

      question?.options.forEach((option) => {
        const count = survey?.survey_response.filter((response) =>
          response.responses.find(
            (res) =>
              res.questionName === question.text &&
              res.selectedOption === option
          )
        ).length;

        chartData?.push([option, count]);
      });

      return { questionText: question.text, data: chartData };
    });
  };

  const questionChartData = generateChartData();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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

          {(userAttended || survey.author === userId) &&
            !isDeadlineExpired &&
            questionChartData?.map((chart, index) => (
              <div key={index} className="border-t pt-5 mt-4">
                <h2 className="font-bold">Question {index + 1} :</h2>
                <Chart
                  key={index}
                  chartType="PieChart"
                  data={chart.data}
                  options={{ title: chart.questionText, is3D: true }}
                  width={"100%"}
                  height={"400px"}
                />
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default SurveyDetailsSection;
