import Heading from "../../../components/Surveys/Heading";
import usePaymentInfo from "../../../hooks/userPaymentInfo";

const PaymentDetails = () => {
  const { data } = usePaymentInfo();
  const payments = data?.payments || [];
  return (
    <div>
      <Heading title={"Payment Details"} />
      <div className="relative h-screen overflow-auto  border sm:rounded-lg p-5">
        <table className="w-full text-sm text-left rtl:text-right  text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <p>#SL</p>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                User Name
              </th>
              <th scope="col" className="px-6 py-3">
                User Email
              </th>
              <th scope="col" className="px-6 py-3">
                Transaction ID
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((payment, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <p>{index + 1}</p>
                  </div>
                </td>
                <th scope="row" className="">
                  <h6> {payment?.user_name}</h6>
                </th>
                <td className="px-6 py-4">{payment?.user_email}</td>
                <td className="px-6 py-4">{payment?.trans_id}</td>
                <td className="px-6 py-4">{payment?.trans_amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentDetails;
