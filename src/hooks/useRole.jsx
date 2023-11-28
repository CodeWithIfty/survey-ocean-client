import { useEffect } from "react";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import { getRole } from "../api/auth";

const useRole = () => {
  const { user, SignOutUser } = useAuth();

  const handleSignOut = async () => {
    try {
      await SignOutUser();
      window.location.replace("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const { data, error } = useQuery({
    enabled: !!user,
    queryKey: ["user_role", user],
    queryFn: () => getRole(user?.email),
  });

  useEffect(() => {
    if (error?.response?.status) {
      handleSignOut();
      console.log(error?.response?.status);
    }
  }, [error, handleSignOut]);

  return data;
};

export default useRole;
