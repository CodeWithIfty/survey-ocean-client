import { useState } from "react";
import Heading from "../../components/Surveys/Heading";
import axiosSecure from "../../api";
import useUserId from "../../hooks/useUserId";
import toast from "react-hot-toast";

const AddSurvey = () => {
  const userId = useUserId();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    category: "",
    duration: "",
    questions: [{ text: "", options: [] }],
    pollQuestion: "",
    pollOptions: [""],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      author: userId,
    }));
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAddPollOption = () => {
    const updatedFormData = { ...formData };
    updatedFormData.pollOptions.push("");
    setFormData(updatedFormData);
  };

  const handlePollOptionChange = (index, value) => {
    const updatedFormData = { ...formData };
    updatedFormData.pollOptions[index] = value;
    setFormData(updatedFormData);
  };

  const handlePollQuestionChange = (value) => {
    const updatedFormData = { ...formData };
    updatedFormData.pollQuestion = value;
    setFormData(updatedFormData);
  };

  const handleAddOption = (questionIndex) => {
    const updatedFormData = { ...formData };
    updatedFormData.questions[questionIndex].options.push("");
    setFormData(updatedFormData);
  };

  const handleAddQuestion = () => {
    const updatedFormData = { ...formData };
    updatedFormData.questions.push({ text: "", options: [""] });
    setFormData(updatedFormData);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedFormData = { ...formData };
    updatedFormData.questions[questionIndex].options[optionIndex] = value;
    setFormData(updatedFormData);
  };

  const handleQuestionChange = (index, value) => {
    const updatedFormData = { ...formData };
    updatedFormData.questions[index].text = value;
    setFormData(updatedFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Posting...");
    console.log(formData);
    try {
      await axiosSecure.post("/survey", formData);
      toast.success("Successfully Published!", { id: toastId });

      setFormData({
        title: "",
        description: "",
        author: userId,
        category: "",
        duration: "",
        questions: [{ text: "", options: [""] }],
        pollQuestion: "",
        pollOptions: [""],
      });
    } catch (error) {
      toast.error("Something is wrong!", { id: toastId });
      console.error("Error posting data:", error);
    }
  };

  const handleRemoveOption = (questionIndex, optionIndex) => {
    const updatedFormData = { ...formData };
    updatedFormData.questions[questionIndex].options.splice(optionIndex, 1);
    setFormData(updatedFormData);
  };

  return (
    <div>
      <Heading title={"Add Survey"} />
      <div className="mb-10 border-b ">
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
                className="border bg-white px-3 py-2 rounded-md w-6/12 mt-2 text-gray-600 font-semibold"
                type="text"
                value={formData.title}
                onChange={handleInputChange}
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
                className="border bg-white px-3 py-2 rounded-md w-6/12 mt-2 text-gray-600 font-semibold"
                value={formData.description}
                onChange={handleInputChange}
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
                value={formData.category}
                onChange={handleInputChange}
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
                value={formData.duration}
                onChange={handleInputChange}
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
                  value={formData.pollQuestion}
                  onChange={(e) => handlePollQuestionChange(e.target.value)}
                />
              </label>

              {/* Poll Options */}
              <div className="">
                {formData.pollOptions.map((option, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      className="border bg-white px-3 py-2 rounded-md ml-4 w-3/12 mt-2 text-gray-600 font-semibold"
                      placeholder={`Poll Option ${index + 1}`}
                      value={option}
                      onChange={(e) =>
                        handlePollOptionChange(index, e.target.value)
                      }
                    />
                  </div>
                ))}

                {/* Add pol btn */}
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
              {formData.questions.map((question, index) => (
                <div className="" key={index}>
                  <label
                    htmlFor={`question-${index}`}
                    className="ml-1 font-semibold text-gray-600 flex flex-col mt-5"
                  >
                    Question {index + 1}:
                    <input
                      id={`question-${index}`}
                      className="border bg-white px-3 py-2 rounded-md w-6/12
                    mt-2 text-gray-600 font-semibold"
                      type="text"
                      value={question.text}
                      onChange={(e) =>
                        handleQuestionChange(index, e.target.value)
                      }
                    />
                  </label>
                  <div className="">
                    <div className="">
                      {question.options.map((option, opIndex) => (
                        <div key={opIndex} className="flex items-center">
                          <input
                            type="text"
                            className="border bg-white px-3 py-2 rounded-md w-72 mt-2 text-gray-600 font-semibold"
                            placeholder={`Question Option ${index + 1}`}
                            value={option}
                            onChange={(e) =>
                              handleOptionChange(index, opIndex, e.target.value)
                            }
                          />
                          <button
                            type="button"
                            className="ml-2 py-1 px-3 bg-red-500 text-white rounded-md"
                            onClick={() => handleRemoveOption(index, opIndex)}
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleAddOption(index)}
                      className="bg-secondary px-3 py-2 rounded-lg text-black font-semibold  mt-3"
                    >
                      Add Option
                    </button>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddQuestion}
                className="bg-primary px-3 py-2 rounded-lg text-white font-semibold  mt-3"
              >
                Add Question
              </button>
            </div>
          </div>

          <div className="">
            <input
              type="submit"
              value={"Submit"}
              className="bg-primary px-5 py-2 mt-5 text-white  font-bold  rounded-lg cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSurvey;
