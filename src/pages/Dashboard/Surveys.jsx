import Heading from "../../components/Surveys/Heading";
import SurveyCard from "../../components/Surveys/SurveyCard";
import SurveyFilterForm from "../../components/Surveys/SurveyFilterForm";
import Loader from "../../components/shared/Loader";
import { useState } from "react";

const Surveys = () => {
  const [surveys, setSurveys] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <Heading title={"Add Survey"} />

      <SurveyFilterForm setSurveys={setSurveys} setIsLoading={setIsLoading} />

      {isLoading ? (
        <Loader />
      ) : (
        <div className="p-10 space-y-3">
          {surveys.length <= 0 && (
            <div className="flex justify-center">
              <h1 className="text-xl font-bold">No Survey Matched</h1>
            </div>
          )}
          {Array.isArray(surveys) &&
            surveys.length > 0 &&
            surveys?.map((survey, index) => (
              <SurveyCard key={index} survey={survey} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Surveys;
