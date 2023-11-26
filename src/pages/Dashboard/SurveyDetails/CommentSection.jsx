import toast from "react-hot-toast";
import { postComment } from "../../../api/survey";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import useUserId from "../../../hooks/useUserId";

const CommentSection = ({ survey, refetch }) => {
  const userId = useUserId();
  const { user } = useAuth();
  const role = useRole();

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    try {
      let commentText = e.target.comment.value;
      const commentData = {
        userId,
        surveyId: survey?._id,
        userName: user?.displayName,
        commentText,
      };

      await postComment(commentData);
      toast.success("Comment added...");
      refetch();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="border p-5 my-3">
      <h1 className="text-2xl font-semibold border-b pb-3">Comments</h1>

      <div className="mt-5 px-5 ">
        {role === "pro-user" && (
          <div className=" pb-5">
            <form onSubmit={handleCommentSubmit}>
              <label
                htmlFor="comment"
                className="ml-1 font-semibold text-gray-600 flex flex-col mt-5"
              >
                Add your comment:
                <textarea
                  id="comment"
                  name="comment"
                  className="border bg-white px-3 py-2 rounded-md w-6/12 mt-2 text-gray-600 font-semibold"
                  //   value={formData.description}
                  //   onChange={handleInputChange}
                />
              </label>

              <input
                type="submit"
                name=""
                value={"Comment"}
                className="px-3 py-2 bg-primary  rounded-lg font-bold text-white mt-2 ml-2 cursor-pointer"
              />
            </form>
          </div>
        )}
        <div className="space-y-3">
          {survey?.comments?.map((comment) => (
            <div
              key={comment._id}
              className="bg-gray w-72 px-3 py-3 rounded-lg"
            >
              <h4 className="font-bold">{comment?.user_name}</h4>
              <p className="text-sm text-gray-700">{comment?.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
