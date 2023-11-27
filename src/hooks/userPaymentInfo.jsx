import { useQuery } from "@tanstack/react-query";
import { getPaymentInfo } from "../api/Users";

const useRole = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["payment_info"],
    queryFn: () => getPaymentInfo(),
  });

  return { data, isLoading };
};

export default useRole;
