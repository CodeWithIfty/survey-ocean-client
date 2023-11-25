import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/auth";

const useUserId = () => {
  const { user } = useAuth();

  const { data } = useQuery({
    enabled: !!user,
    queryKey: ["user_id", user],
    queryFn: () => getUser(user?.email),
  });
  // console.log(data);
  return data;
};

export default useUserId;
