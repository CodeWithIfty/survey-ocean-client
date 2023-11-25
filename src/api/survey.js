import axiosSecure from ".";

export const getSurveys = async () => {
  const { data } = await axiosSecure(`/surveys`);
  return data;
};

export const getSurveyDetails = async (id) => {
  const { data } = await axiosSecure(`/survey/${id}`);
  return data;
};

export const doLike = async (data) => {
  const { res } = await axiosSecure.post(`/like-dislike`, data);
  return res;
};

export const postComment = async (comment) => {
  const data = await axiosSecure.post(`/comment`, comment);
  return data;
};
export const postPoll = async (poll) => {
  const data = await axiosSecure.post(`/post-poll`, poll);
  return data;
};
