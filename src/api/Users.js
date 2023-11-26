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
