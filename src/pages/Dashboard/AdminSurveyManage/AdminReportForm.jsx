import { FocusTrap } from "@headlessui/react";

import toast from "react-hot-toast";
import useUserId from "../../../hooks/useUserId";
import { postAdminReport } from "../../../api/survey";

export default function AdminReportForm({
  survey,
  setIsOpen,
  isOpen,
  refetch,
}) {
  function closeModal() {
    setIsOpen(false);
  }

  const userId = useUserId();

  const handleReportSubmit = async (e) => {
    e.preventDefault();

    try {
      let report_message = e.target.report.value;
      const reportData = {
        userId,
        surveyId: survey?._id,
        report_message,
      };
    //   await postAdminReport(reportData);
    //   refetch();
    //   setIsOpen(false);
      toast.success("Report added...");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FocusTrap active={isOpen}>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black bg-opacity-25" />

          <div className="relative z-50 bg-white rounded-2xl p-6 w-full max-w-md">
            <form onSubmit={handleReportSubmit}>
              <label
                htmlFor="report"
                className="block mb-4 font-semibold text-gray-600"
              >
                Add your report:
                <textarea
                  id="report"
                  name="report"
                  className="border bg-white px-3 py-2 rounded-md mt-2 text-gray-600 font-semibold w-full"
                />
              </label>

              <div className="flex justify-end">
                <input
                  type="submit"
                  value={"Report"}
                  className="px-4 py-2 bg-red-400 rounded-lg font-bold text-white cursor-pointer"
                />
              </div>
            </form>

            <div className="mt-4 flex justify-end">
              <button
                type="button"
                className="px-4 py-2 bg-blue-100 rounded-md border border-transparent text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </FocusTrap>
  );
}
