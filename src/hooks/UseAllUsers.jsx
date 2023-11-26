import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../api/Users";

const useAllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => getAllUsers(),
  });

  return { users, isLoading, refetch };
};

export default useAllUsers;
