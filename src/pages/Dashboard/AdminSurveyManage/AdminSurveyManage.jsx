import { useState } from "react";
import Heading from "../../../components/Surveys/Heading";
import useSurveys from "../../../hooks/useSurveys";
import { postAdminReport, publishUnPublish } from "../../../api/survey";
import useUserId from "../../../hooks/useUserId";
import toast from "react-hot-toast";

const AdminSurveyManage = () => {
  const [publicationStatus, setPublicationStatus] = useState({});
  const [showReportInput, setShowReportInput] = useState(false);
  const [reportValues, setReportValues] = useState({});
  const { surveys, refetch } = useSurveys();
  console.log(surveys);
  const userId = useUserId();

  const handleUpdateAction = async (id) => {
    console.log(id);
    if (publicationStatus[id]) {
      const publishedStatus = publicationStatus[id] === "true" ? true : false;
      if (publishedStatus) {
        const toastId = toast.loading("Loading...");
        const action = {
          surveyId: id,
          isPublished: publishedStatus,
        };
        const data = await publishUnPublish(action);
        console.log(data);
        refetch();
        toast.success("Status Updated", { id: toastId });
      } else if (!publishedStatus) {
        const toastId = toast.loading("Loading...");
        if (reportValues[id]) {
          const action = {
            surveyId: id,
            isPublished: publishedStatus,
          };
          await publishUnPublish(action);

          const reportData = {
            userId,
            surveyId: id,
            report_message: reportValues[id],
          };
          const data = await postAdminReport(reportData);
          console.log(data);
          setShowReportInput(false);
          setReportValues("");
          refetch();
          toast.success("Status Updated", { id: toastId });
        } else {
          toast.error("Write report please", { id: toastId });
        }
      }
    }
  };

  const handleStatusChange = (id, value) => {
    setPublicationStatus({
      ...publicationStatus,
      [id]: value,
    });

    if (value === "false") {
      setShowReportInput(true);
    } else {
      setShowReportInput(false);
    }
  };

  const handleReportInputChange = (id, value) => {
    setReportValues({
      ...reportValues,
      [id]: value,
    });
  };

  return (
    <div>
      <Heading title={"Manage Surveys"} />
      <div className="p-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Survey Name/ Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Likes/Dislikes
                </th>
                <th scope="col" className="px-6 py-3">
                  Vote
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {surveys?.map((survey, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="">
                      <h4 className="text-lg font-bold">{survey?.title}</h4>
                      <p className="text-sm">
                        {survey?.description.substring(0, 60)}...
                      </p>
                    </div>
                  </th>
                  <td className="px-6 py-4">
                    {survey?.likes}/{survey?.dislikes}
                  </td>
                  <td className="px-6 py-4">{survey?.vote}</td>
                  <td className="px-6 py-4">
                    {survey?.isPublished ? "Published" : "Unpublished"}
                  </td>
                  <td className="px-6 py-4 flex flex-col gap-2">
                    <select
                      name=""
                      id=""
                      className="px-2 py-1 bg-white border font-semibold "
                      value={publicationStatus[survey._id] || ""}
                      onChange={(e) =>
                        handleStatusChange(survey._id, e.target.value)
                      }
                    >
                      <option value="">select action</option>
                      <option value="true">Published</option>
                      <option value="false">Unpublished</option>
                    </select>
                    {/* Conditionally render textarea */}
                    {showReportInput &&
                      publicationStatus[survey._id] === "false" && (
                        <textarea
                          placeholder="Write your report here..."
                          value={reportValues[survey._id] || ""}
                          onChange={(e) =>
                            handleReportInputChange(survey._id, e.target.value)
                          }
                        />
                      )}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleUpdateAction(survey._id)}
                      className="font-medium bg-secondary px-2 py-1 rounded-lg text-gray-600 ml-4"
                    >
                      update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminSurveyManage;
