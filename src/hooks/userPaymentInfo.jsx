import { useQuery } from "@tanstack/react-query";
import { getPaymentInfo } from "../api/Users";

const usePaymentInfo = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["payment_info"],
    queryFn: () => getPaymentInfo(),
  });

  return { data, isLoading };
};

export default usePaymentInfo;
