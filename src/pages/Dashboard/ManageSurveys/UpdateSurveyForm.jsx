import { useState } from "react";
import Loader from "../../../components/shared/Loader";
import { updateSurvey } from "../../../api/survey";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UpdateSurveyForm = ({ survey, isLoading }) => {
  const [updatedSurvey, setUpdatedSurvey] = useState({ ...survey });
  const navigate = useNavigate();

  const handleInputChange = (e, index, questionIndex) => {
    const { name, value } = e.target;
    const updatedSurveyCopy = { ...updatedSurvey };

    // If it's a poll option or question option update
    if (name === "pollOption" || name === "questionOption") {
      updatedSurveyCopy.questions[questionIndex].options[index] = value;
    } else {
      updatedSurveyCopy[name] = value;
    }

    setUpdatedSurvey(updatedSurveyCopy);
  };

  const handlePollOptionChange = (e, index) => {
    const { value } = e.target;
    const updatedSurveyCopy = { ...updatedSurvey };
    updatedSurveyCopy.pollOptions[index] = value;
    setUpdatedSurvey(updatedSurveyCopy);
  };

  // Function to handle adding poll options
  const handleAddPollOption = () => {
    const updatedSurveyCopy = { ...updatedSurvey };
    updatedSurveyCopy.pollOptions.push("");
    setUpdatedSurvey(updatedSurveyCopy);
  };

  const handleQuestionTextChange = (e, questionIndex) => {
    const { value } = e.target;
    const updatedSurveyCopy = { ...updatedSurvey };
    updatedSurveyCopy.questions[questionIndex].text = value;
    setUpdatedSurvey(updatedSurveyCopy);
  };

  const handleQuestionOptionChange = (e, questionIndex, optionIndex) => {
    const { value } = e.target;
    const updatedSurveyCopy = { ...updatedSurvey };
    updatedSurveyCopy.questions[questionIndex].options[optionIndex] = value;
    setUpdatedSurvey(updatedSurveyCopy);
  };

  const handleAddQuestionOption = (questionIndex) => {
    const updatedSurveyCopy = { ...updatedSurvey };
    updatedSurveyCopy.questions[questionIndex].options.push("");
    setUpdatedSurvey(updatedSurveyCopy);
  };
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const toastId = toast.loading("Loading...");
      const surveyId = survey?._id;
      const data = await updateSurvey(surveyId, updatedSurvey);
      console.log("Updated Survey Data:", updatedSurvey);
      toast.success("Successfully Updated!", { id: toastId });
      navigate("/dashboard/manage-surveys");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mb-10 border-b ">
      {isLoading ? (
        <Loader />
      ) : (
        <form className=" bg-gray m-5 p-5  rounded-xl" onSubmit={handleSubmit}>
          <div className="">
            {/* Title */}
            <label
              htmlFor="title"
              className="ml-1 font-semibold text-gray-600 flex flex-col mt-5"
            >
              Title:
              <input
                id="title"
                name="title"
                value={updatedSurvey?.title}
                onChange={(e) => handleInputChange(e)}
                className="border bg-white px-3 py-2 rounded-md w-6/12 mt-2 text-gray-600 font-semibold"
                type="text"
                required
              />
            </label>

            {/* Description */}
            <label
              htmlFor="description"
              className="ml-1 font-semibold text-gray-600 flex flex-col mt-5"
            >
              Description:
              <textarea
                id="description"
                name="description"
                value={updatedSurvey?.description}
                onChange={(e) => handleInputChange(e)}
                className="border bg-white px-3 py-2 rounded-md w-6/12 mt-2 text-gray-600 font-semibold"
                required
              />
            </label>

            {/* Category */}
            <label
              htmlFor="category"
              className="ml-1 font-semibold text-gray-600 flex flex-col mt-5"
            >
              Category:
              <select
                id="category"
                name="category"
                className="border bg-white px-3 py-2 rounded-md w-6/12 mt-2 text-gray-600 font-semibold"
                value={updatedSurvey?.category}
                onChange={(e) => handleInputChange(e)}
                required
              >
                <option value="">Select Category</option>
                <option value="Technology">Technology</option>
                <option value="Travel and Tourism">Travel and Tourism</option>
                <option value="Entertainment Choices">
                  Entertainment Choices
                </option>
                <option value="Financial Management">
                  Financial Management
                </option>
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
            </label>

            {/* Duration */}
            <label
              htmlFor="duration"
              className="ml-1 font-semibold text-gray-600 flex flex-col mt-5"
            >
              Duration (in second) :
              <input
                id="duration"
                name="duration"
                className="border bg-white px-3 py-2 rounded-md w-6/12 mt-2 text-gray-600 font-semibold"
                type="number"
                value={updatedSurvey?.duration}
                onChange={(e) => handleInputChange(e)}
                required
              />
            </label>

            {/* Polls */}
            <div className="">
              <label
                htmlFor="pollQuestion"
                className="ml-1 font-semibold text-gray-600 flex flex-col mt-5"
              >
                Poll Question:
                <input
                  id="pollQuestion"
                  name="pollQuestion"
                  className="border bg-white px-3 py-2 rounded-md w-6/12 mt-2 text-gray-600 font-semibold"
                  type="text"
                  value={updatedSurvey?.pollQuestion}
                  onChange={(e) => handleInputChange(e)}
                />
              </label>

              <div className="">
                {updatedSurvey?.pollOptions &&
                  updatedSurvey?.pollOptions?.map((option, index) => (
                    <div key={index}>
                      <input
                        type="text"
                        value={option}
                        onChange={(e) => handlePollOptionChange(e, index)}
                        className="border bg-white px-3 py-2 rounded-md ml-4 w-3/12 mt-2 text-gray-600 font-semibold"
                      />
                    </div>
                  ))}

                {/* Add poll button */}
                <button
                  type="button"
                  onClick={handleAddPollOption}
                  className="bg-secondary px-3 py-2 rounded-lg text-black font-semibold mt-3"
                >
                  Add Poll Option
                </button>
              </div>
            </div>

            {/* Question Options */}
            <div className="">
              {updatedSurvey?.questions.map((question, questionIndex) => (
                <div className="" key={questionIndex}>
                  <label
                    htmlFor={`question-${questionIndex}`}
                    className="ml-1 font-semibold text-gray-600 flex flex-col mt-5"
                  >
                    Question {questionIndex + 1}:
                    <input
                      id={`question-${questionIndex}`}
                      name={`question-${questionIndex}`}
                      className="border bg-white px-3 py-2 rounded-md w-6/12 mt-2 text-gray-600 font-semibold"
                      type="text"
                      value={question.text}
                      onChange={(e) =>
                        handleQuestionTextChange(e, questionIndex)
                      }
                    />
                  </label>
                  <div className="">
                    {question.options.map((option, optionIndex) => (
                      <div key={optionIndex}>
                        <input
                          type="text"
                          value={option}
                          onChange={(e) =>
                            handleQuestionOptionChange(
                              e,
                              questionIndex,
                              optionIndex
                            )
                          }
                          className="border bg-white px-3 py-2 rounded-md ml-4 w-3/12 mt-2 text-gray-600 font-semibold"
                        />
                      </div>
                    ))}
                    {/* Add option button */}
                    <button
                      type="button"
                      onClick={() => handleAddQuestionOption(questionIndex)}
                      className="bg-secondary px-3 py-2 rounded-lg text-black font-semibold mt-3"
                    >
                      Add Option
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="">
            <input
              type="submit"
              value={"Update"}
              className="bg-primary px-5 py-2 mt-5 text-white  font-bold  rounded-lg cursor-pointer"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default UpdateSurveyForm;
