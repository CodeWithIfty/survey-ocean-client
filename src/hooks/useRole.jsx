import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import { getRole } from "../api/auth";
import toast from "react-hot-toast";

const useRole = () => {
  const { user, SignOutUser } = useAuth();

  const { data, error } = useQuery({
    enabled: !!user,
    queryKey: ["user_role", user],
    queryFn: () => getRole(user?.email),
  });
  if (error) {
    SignOutUser();
    window.location.replace("/login");
    toast.error("Login Expired!");
    return;
  }
  return data;
};

export default useRole;
