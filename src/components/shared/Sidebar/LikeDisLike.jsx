import { useEffect, useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import useUserId from "../../../hooks/useUserId";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { doLike } from "../../../api/survey";
import toast from "react-hot-toast";

const LikeDisLike = ({ survey, refetch }) => {
  const { user } = useAuth();
  const [liked, setLiked] = useState(false);
  const [dislike, setDislike] = useState(false);
  const navigate = useNavigate();

  const userId = useUserId();
  const handleLike = async (surveyId) => {
    if (user) {
      const toastId = toast.loading("Like...");
      try {
        const action = "like";
        const data = { userId, surveyId, action };

        const result = await doLike(data);
        refetch();
        toast.success("Liked", { id: toastId });
        console.log(result);
      } catch (error) {
        if (error.message === "Request failed with status code 400") {
          toast.error("Already Performed!", { id: toastId });
        }

        console.log(error);
      }
    } else {
      navigate("/login", {
        state: { previousPath: location.pathname },
      });
    }
  };
  const handleDisLike = async (surveyId) => {
    const toastId = toast.loading("Loading...");
    try {
      const action = "dislike";
      const data = { userId, surveyId, action };

      const result = await doLike(data);
      refetch();
      toast.success("Disliked", { id: toastId });
      console.log(result);
    } catch (error) {
      if (error.message === "Request failed with status code 400") {
        toast.error("Already Performed!", { id: toastId });
      }
      console.log(error);
    }
  };

  useEffect(() => {
    if (
      userId &&
      Array.isArray(survey?.likedBy) &&
      survey.likedBy.includes(userId)
    ) {
      setLiked(true);
    } else {
      setLiked(false);
    }

    if (
      userId &&
      Array.isArray(survey?.dislikedBy) &&
      survey.dislikedBy.includes(userId)
    ) {
      setDislike(true);
    } else {
      setDislike(false);
    }
  }, [userId, survey?.likedBy, survey?.dislikedBy]);

  return (
    <div className="flex gap-2 text-xl items-center mt-3">
      <div
        onClick={() => handleLike(survey?._id)}
        className="flex flex-col items-center justify-center"
      >
        <BiLike
          className={`${liked ? "text-blue-700 font-bold" : ""} cursor-pointer`}
        />
        <span className="text-sm">{survey?.likes}</span>
      </div>
      <div
        onClick={() => handleDisLike(survey?._id)}
        className="flex flex-col items-center justify-center pr-3"
      >
        <BiDislike
          className={`${
            dislike ? "text-blue-700 font-bold" : ""
          } cursor-pointer`}
        />
        <span className="text-sm">{survey?.dislikes}</span>
      </div>

      <div className="flex flex-col items-center justify-center border-l-2 pl-4">
        <span className="text-sm">voted </span>
        <span className="text-sm">{survey?.dislikes}</span>
      </div>
    </div>
  );
};

export default LikeDisLike;
