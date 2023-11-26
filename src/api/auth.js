import axiosSecure from ".";

export const saveUser = async (user) => {
  const currentUser = {
    user_email: user?.email,
    user_name: user?.displayName,
    user_photo: user?.photoURL,
    user_role: "user",
  };

  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);

  return data;
};

export const createToken = async (user) => {
  const currentUser = { email: user?.email };
  const { data } = await axiosSecure.post(`/jwt`, currentUser);
  return data;
};
export const removeToken = async (user) => {
  try {
    const currentUser = { email: user?.email };
    const { data } = await axiosSecure.post(`/logout`, currentUser);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getRole = async (email) => {
  const { data } = await axiosSecure(`/user/${email}`);
  return data.user_role;
};
export const getUserInfo = async (email) => {
  const { data } = await axiosSecure(`/user/${email}`);
  return data;
};
export const getUser = async (email) => {
  const { data } = await axiosSecure(`/user/${email}`);
  return data._id;
};

