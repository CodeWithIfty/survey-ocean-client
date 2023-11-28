import axiosSecure from ".";

export const getAllUsers = async () => {
  const { data } = await axiosSecure(`/users`);
  return data;
};
export const updateUserRole = async (role) => {
  const { data } = await axiosSecure.put("/updateUserRole", role);
  return data;
};

export const deleteUser = async (id) => {
  const { data } = await axiosSecure.delete(`/delete-user/${id}`);
  return data;
};
export const postPaymentInfo = async (paymentInfo) => {
  const data = await axiosSecure.post(
    `/post-user-payment-details`,
    paymentInfo
  );
  return data;
};
export const getPaymentInfo = async () => {
  const { data } = await axiosSecure.get(`/payments`);
  return data;
};
export const getSurveyorAnalytics = async (authorId) => {
  const { data } = await axiosSecure.get(`/surveyor-analytics/${authorId}`);
  return data;
};
export const getAdminAnalytics = async () => {
  const { data } = await axiosSecure.get(`/admin-analytics`);
  return data;
};
