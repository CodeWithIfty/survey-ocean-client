import { useParams } from "react-router-dom";
import Heading from "../../../components/Surveys/Heading";
import { useQuery } from "@tanstack/react-query";
import { getSurveyDetails } from "../../../api/survey";

import PollForm from "./PollForm";
import SurveyDetailsSection from "./SurveyDetailsSection";
import CommentSection from "./CommentSection";
import { useEffect } from "react";

const SurveyDetails = () => {
  const { id } = useParams();
  const { data: survey, refetch } = useQuery({
    queryKey: ["surveys"],
    queryFn: () => getSurveyDetails(id),
  });


  return (
    <div>
      <Heading title={`Details | ${survey?.title}`} />

      <div className="p-5">
        <SurveyDetailsSection survey={survey} refetch={refetch} />

        <PollForm survey={survey} />

        <CommentSection survey={survey} />
      </div>
    </div>
  );
};

export default SurveyDetails;
