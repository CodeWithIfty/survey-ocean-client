import { useQuery } from "@tanstack/react-query";
import { getUsersSurvey } from "../../../api/survey";
import Heading from "../../../components/Surveys/Heading";
import useUserId from "../../../hooks/useUserId";
import ReportViewModal from "./ReportViewModal";
import { Link } from "react-router-dom";
import ResponseViewModal from "./ResponseViewModal";
import ResultViewModal from "./ResultViewModal";
import UserReportViewModal from "./UserReportViewModal";

const ManageSurveys = () => {
  const userId = useUserId();

  const { data: surveys } = useQuery({
    queryKey: ["user-survey", userId],
    queryFn: () => getUsersSurvey(userId),
  });
  console.log(surveys);

  return (
    <div>
      <Heading title={"Surveyor | Manage Surveys"} />

      <div className=" p-5 overflow-auto">
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
                Edit Survey
              </th>
              <th scope="col" className="px-6 py-3">
                View Response
              </th>
              <th scope="col" className="px-6 py-3">
                View Result
              </th>
              <th scope="col" className="px-6 py-3">
                View Report
              </th>
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
                <td className="px-6 py-4 flex flex-col items-center justify-center">
                  {survey?.isPublished ? "Published" : "Unpublished"}
                  {!survey?.isPublished && (
                    <ReportViewModal adminReports={survey?.adminReports} />
                  )}
                </td>

                <td className="px-6 py-4">
                  <Link
                    to={`/dashboard/update-survey/${survey._id}`}
                    className="font-medium bg-secondary px-2 py-1 rounded-lg text-gray-600 ml-4"
                  >
                    Edit
                  </Link>
                </td>

                <td className="px-6 py-4 ">
                  <ResponseViewModal Response={survey?.survey_response} />
                </td>

                <td className="px-6 py-4 ">
                  <ResultViewModal adminReports={survey?.adminReports} />
                </td>
                <td className="px-6 py-4 ">
                  <UserReportViewModal userReport={survey?.reports} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageSurveys;
