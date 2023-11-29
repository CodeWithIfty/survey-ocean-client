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
export const postReport = async (report) => {
  const data = await axiosSecure.post(`/report`, report);
  return data;
};
export const postAdminReport = async (report) => {
  const data = await axiosSecure.post(`/admin-report`, report);
  return data;
};

export const postPoll = async (poll) => {
  const data = await axiosSecure.post(`/post-poll`, poll);
  return data;
};

export const postSurveyResponse = async (response) => {
  const data = await axiosSecure.post(`/survey/response`, response);
  return data;
};

export const getUsersSurvey = async (userId) => {
  const { data } = await axiosSecure(`/user-surveys/${userId}`);
  return data;
};
export const getFeaturedSurvey = async () => {
  const data = await axiosSecure(`/get-featured-surveys`);
  return data.data.surveys;
};

export const getFilteredSurveys = async (
  category,
  sortLike,
  sortByVote,
  searchText
) => {
  // console.log(sortByVote);
  try {
    const { data } = await axiosSecure(
      `/get-filtered-survey?category=${category}&sortByLikeDislike=${sortLike}&sortByVote=${sortByVote}&searchTerm=${searchText}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const publishUnPublish = async (action) => {
  const data = await axiosSecure.put(`/survey/publish`, action);
  return data;
};

export const updateSurvey = async (surveyId, updateSurvey) => {
  const data = await axiosSecure.put(
    `/update-survey/${surveyId}`,
    updateSurvey
  );
  return data;
};
