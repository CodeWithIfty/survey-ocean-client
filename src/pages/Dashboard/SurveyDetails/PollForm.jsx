import { useEffect, useState } from "react";
import useUserId from "../../../hooks/useUserId";
import { postPoll } from "../../../api/survey";

const PollForm = ({ survey }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isPolled, setIsPolled] = useState(false);
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const userId = useUserId();

  const handlePollSubmit = async (e) => {
    e.preventDefault();

    const poll = { userId, surveyId: survey?._id, selectedOption };

    const { data } = await postPoll(poll);
    console.log(data);
  };

  useEffect(() => {
    if (
      userId &&
      Array.isArray(survey?.polledBy) &&
      survey.polledBy.some((poll) => poll.user === userId)
    ) {
      setIsPolled(true);
    } else {
      setIsPolled(false);
    }
  }, [userId, survey]);
  console.log(isPolled);

  return (
    <div className={`${isPolled ? "bg-gray" : ""} border p-5 my-3 `}>
      <h1 className="text-2xl font-semibold">{isPolled ? "Voted" : "Poll"}</h1>
      {!isPolled && (
        <div className="mt-4">
          <h4 className="text-lg font-semibold">
            <span className="text-xl font-bold mr-2">Query:</span>
            {survey?.pollQuestion}
          </h4>
          {!isPolled && (
            <form className="mt-3" onSubmit={handlePollSubmit}>
              {survey?.pollOptions?.map((option, index) => (
                <div key={index} className="mb-2 ">
                  <label className="font-semibold ">
                    <input
                      type="checkbox"
                      value={option}
                      onChange={() => handleOptionSelect(option)}
                      checked={selectedOption === option}
                      className="mr-2"
                    />
                    {option}
                  </label>
                </div>
              ))}
              <input
                type="submit"
                name=""
                id=" "
                value={"Vote"}
                className="px-4 py-2 bg-primary rounded-lg text-white font-semibold mt-4 cursor-pointer"
              />
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default PollForm;
