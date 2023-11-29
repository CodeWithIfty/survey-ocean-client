import { useQuery } from "@tanstack/react-query";
import { getSurveyDetails, postSurveyResponse } from "../../api/survey";
import { useNavigate, useParams } from "react-router-dom";
import Heading from "../../components/Surveys/Heading";
import { useEffect, useState } from "react";
import useUserId from "../../hooks/useUserId";
import toast from "react-hot-toast";
import Timer from "./SurveyDetails/Timer";

const StartSurvey = () => {
  const { id } = useParams();
  const userId = useUserId();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isExpired, setIsExpired] = useState(false);
  const navigate = useNavigate();

  const { data: survey, isLoading } = useQuery({
    queryKey: ["start-surveys"],
    queryFn: () => getSurveyDetails(id),
  });

  useEffect(() => {
    if (survey) {
      setSelectedOptions(
        survey.questions.map((question) => ({
          questionName: question.text,
          selectedOption: "",
        }))
      );
    }
  }, [survey]);

  useEffect(() => {
    console.log(isExpired);
    if (isExpired) {
      navigate("/dashboard/surveys");
      toast.error("Duration Expired...!");
    }
  }, [isExpired]);

  console.log(selectedOptions);
  const handleOptionChange = (index, option) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[index] = {
      ...updatedOptions[index],
      selectedOption: option,
    };
    setSelectedOptions(updatedOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Loading...");
    const payload = {
      surveyId: id,
      userId: userId,
      responses: selectedOptions,
    };

    try {
      await postSurveyResponse(payload);
      toast.success("Successfully Submitted!", { id: toastId });
      navigate(`/dashboard/survey-details/${id}`);
    } catch (error) {
      if (error.message === "Request failed with status code 400") {
        toast.error("Already Submitted!", { id: toastId });
      } else {
        toast.error("Something is wrong please try again", { id: toastId });
      }
      console.error("Error posting survey response:", error);
    }
  };

  const { questions } = survey || [];
  return (
    <div>
      <Heading title={"Survey"} />
      <div className="p-5">
        <form onSubmit={handleSubmit} className="p-5">
          {questions?.map((question, index) => (
            <div key={question._id}>
              <p className="text-lg mb-3 font-semibold">
                {index + 1}. {question.text}
              </p>
              {question.options.map((option) => (
                <div key={option}>
                  <input
                    type="radio"
                    id={`${question._id}-${option}`}
                    name={question._id}
                    value={option}
                    checked={selectedOptions[index]?.selectedOption === option}
                    onChange={() => handleOptionChange(index, option)}
                    className="mb-3"
                  />
                  <label htmlFor={`${question._id}-${option}`} className="ml-2">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          ))}
          <button
            type="submit"
            className="px-4 py-2 mt-4 bg-primary text-white font-semibold rounded-lg"
          >
            Submit
          </button>
        </form>
        <Timer
          durationInSeconds={parseInt(survey?.duration)}
          onTimerExpired={() => setIsExpired(true)}
          isLoading ={isLoading}
        />
      </div>
    </div>
  );
};

export default StartSurvey;
