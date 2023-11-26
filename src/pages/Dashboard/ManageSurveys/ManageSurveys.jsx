import { useQuery } from "@tanstack/react-query";
import { getUsersSurvey } from "../../../api/survey";
import Heading from "../../../components/Surveys/Heading";
import useUserId from "../../../hooks/useUserId";
import ManageSurveyCard from "./ManageSurveyCard";

const ManageSurveys = () => {
  const userId = useUserId();

  const {
    data: surveys,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user-survey", userId],
    queryFn: () => getUsersSurvey(userId),
  });
  console.log(surveys);
  return (
    <div>
      <Heading title={"Manage Surveys"} />

      <div className=" p-5">
        {Array.isArray(surveys) &&
          surveys.length > 0 &&
          surveys?.map((survey) => (
            <ManageSurveyCard key={survey._id} survey={survey} />
          ))}
      </div>
    </div>
  );
};

export default ManageSurveys;
