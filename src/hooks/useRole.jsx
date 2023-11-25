import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import { getRole } from "../api/auth";

const useRole = () => {
  const { user } = useAuth();

  const { data } = useQuery({
    enabled: !!user,
    queryKey: ["user_role", user],
    queryFn: () => getRole(user?.email),
  });

  return data;
};

export default useRole;
