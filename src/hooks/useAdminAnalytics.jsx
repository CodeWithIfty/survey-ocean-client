import { useQuery } from "@tanstack/react-query";
import { getAdminAnalytics } from "../api/Users";

const useAdminAnalytics = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["admin_analytics"],
    queryFn: () => getAdminAnalytics(),
  });

  return { data, isLoading, refetch };
};

export default useAdminAnalytics;
