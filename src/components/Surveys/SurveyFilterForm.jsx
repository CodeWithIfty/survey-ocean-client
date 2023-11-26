import { useQuery } from "@tanstack/react-query";
import { getFilteredSurveys } from "../../api/survey";
import { useEffect, useState } from "react";

const SurveyFilterForm = ({ setSurveys, setIsLoading }) => {
  const [category, setCategory] = useState("");
  const [sortLike, setSortLike] = useState("");
  const [sortByVote, setSortByVote] = useState("");
  const [searchText, setSearchText] = useState("");

  const {
    data: surveys,
    isLoading,
  } = useQuery({
    queryKey: ["filtered-surveys", category, sortLike, sortByVote, searchText],
    queryFn: () =>
      getFilteredSurveys(category, sortLike, sortByVote, searchText),
  });

  useEffect(() => {
    setSurveys(surveys?.surveys);
    setIsLoading(isLoading);
  }, [surveys]);

  return (
    <div className="mb-10 border-b ">
      <div className=" bg-gray m-5 p-5  rounded-xl">
        <div className="flex  gap-4 flex-wrap justify-center">
          <div className="flex flex-col ">
            <label
              htmlFor="category"
              className="ml-1 font-semibold text-gray-600"
            >
              Sort by Category:
            </label>
            <select
              name="category"
              id="category"
              className="border bg-white px-3 py-2 rounded-md w-72
        mt-2 text-gray-600 font-semibold"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value=""> Select Category</option>
              <option value="Technology">Technology</option>
              <option value="Travel and Tourism">Travel and Tourism</option>
              <option value="Entertainment Choices">
                Entertainment Choices
              </option>
              <option value="Financial Management">Financial Management</option>
              <option value="Education and Learning">
                Education and Learning
              </option>
              <option value="Workplace Satisfaction">
                Workplace Satisfaction
              </option>
              <option value="Environmental Awareness">
                Environmental Awareness
              </option>
              <option value="Health and Wellness">Health and Wellness</option>
            </select>
          </div>

          <div className="flex flex-col ">
            <label
              htmlFor="category"
              className="ml-1 font-semibold text-gray-600"
            >
              Sort By Like or Dislike:
            </label>
            <select
              name="category"
              id="category"
              className="border bg-white px-3 py-2 rounded-md w-72
        mt-2 text-gray-600 font-semibold"
              onChange={(e) => setSortLike(e.target.value)}
            >
              <option value="">Select Options</option>
              <option value="mostLiked">Most Likes</option>
              <option value="mostDisLiked">Most Dislikes</option>
            </select>
          </div>

          <div className="flex flex-col ">
            <label
              htmlFor="category"
              className="ml-1 font-semibold text-gray-600"
            >
              Sort By Vote:
            </label>
            <select
              name="category"
              id="category"
              className="border bg-white px-3 py-2 rounded-md w-72
        mt-2 text-gray-600 font-semibold"
              onChange={(e) => setSortByVote(e.target.value)}
            >
              <option value="">Select Options</option>
              <option value="mostVoted">Most Voted</option>
            </select>
          </div>

          <div className="flex flex-col ">
            <label
              htmlFor="category"
              className="ml-1 font-semibold text-gray-600"
            >
              Search by title:
            </label>
            <input
              type="text"
              className="border bg-white px-3 py-2 rounded-md w-72
        mt-2 text-gray-600 font-semibold"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyFilterForm;
