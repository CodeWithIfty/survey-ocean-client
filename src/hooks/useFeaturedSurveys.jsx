import { useQuery } from "@tanstack/react-query";
import { getFeaturedSurvey } from "../api/survey";

const useFeaturedSurveys = () => {
  const {
    data: surveys,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["featured_surveys"],
    queryFn: () => getFeaturedSurvey(),
  });

  return { surveys, isLoading, refetch };
};

export default useFeaturedSurveys;
