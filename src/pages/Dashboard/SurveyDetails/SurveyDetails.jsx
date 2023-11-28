import { useParams } from "react-router-dom";
import Heading from "../../../components/Surveys/Heading";
import { useQuery } from "@tanstack/react-query";
import { getSurveyDetails } from "../../../api/survey";

import PollForm from "./PollForm";
import SurveyDetailsSection from "./SurveyDetailsSection";
import CommentSection from "./CommentSection";
import Loader from "../../../components/shared/Loader";

const SurveyDetails = () => {
  const { id } = useParams();
  const {
    data: survey,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["surveys"],
    queryFn: () => getSurveyDetails(id),
  });

  return (
    <div>
      <Heading title={`Details | ${survey?.title}`} />

      {isLoading ? (
        <Loader />
      ) : (
        <div className="p-5">
          <SurveyDetailsSection
            survey={survey}
            refetch={refetch}
            isLoading={isLoading}
          />

          <PollForm survey={survey} refetch={refetch} />

          <CommentSection survey={survey} refetch={refetch} />
        </div>
      )}
    </div>
  );
};

export default SurveyDetails;
