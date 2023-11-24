import Heading from "../components/Surveys/Heading";
import SurveyCard from "../components/Surveys/SurveyCard";
import SurveyFilterForm from "../components/Surveys/SurveyFilterForm";

const Surveys = () => {
  return (
    <div>
      <Heading />

      <SurveyFilterForm />

      <div className="p-10 space-y-3">
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
        <SurveyCard />
      </div>
    </div>
  );
};

export default Surveys;
