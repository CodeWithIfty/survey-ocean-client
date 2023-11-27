import { useParams } from "react-router-dom";
import Heading from "../../../components/Surveys/Heading";
import { getSurveyDetails } from "../../../api/survey";
import { useQuery } from "@tanstack/react-query";
import UpdateSurveyForm from "./UpdateSurveyForm";

const UpdateSurvey = () => {
  const { id } = useParams();
  console.log(id);
  const {
    data: survey,
    isLoading,
  } = useQuery({
    queryKey: ["update_survey", id],
    queryFn: () => getSurveyDetails(id),
  });
  console.log(survey);
  return (
    <div>
      <Heading title={`Update Survey | `} />
      <div className="">
        {!isLoading && (
          <UpdateSurveyForm survey={survey} isLoading={isLoading} />
        )}
      </div>
    </div>
  );
};

export default UpdateSurvey;
