import Heading from "../../components/Surveys/Heading";
import SurveyCard from "../../components/Surveys/SurveyCard";
import SurveyFilterForm from "../../components/Surveys/SurveyFilterForm";
import useSurveys from "../../hooks/useSurveys";
import Loader from "../../components/shared/Loader";

const Surveys = () => {
  const { surveys, isLoading } = useSurveys();

  return (
    <div>
      <Heading title={"Add Survey"} />

      <SurveyFilterForm />

      {isLoading ? (
        <Loader />
      ) : (
        <div className="p-10 space-y-3">
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
