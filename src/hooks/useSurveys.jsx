import { useQuery } from "@tanstack/react-query";
import { getSurveys } from "../api/survey";

const useSurveys = () => {
  const {
    data: surveys,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["surveys"],
    queryFn: () => getSurveys(),
  });

  return { surveys, isLoading, refetch };
};

export default useSurveys;
