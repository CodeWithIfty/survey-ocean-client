import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import useUserId from "../../hooks/useUserId";
import useAuth from "../../hooks/useAuth";
import { postReport } from "../../api/survey";
import toast from "react-hot-toast";

export default function ReportForm({ survey }) {
  let [isOpen, setIsOpen] = useState(false);
  const userId = useUserId();
  const { user } = useAuth();
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleReportSubmit = async (e) => {
    e.preventDefault();

    try {
      let report_message = e.target.report.value;
      const reportData = {
        userId,
        surveyId: survey?._id,
        userName: user?.displayName,
        report_message,
      };

      await postReport(reportData);
      setIsOpen(false);
      toast.success("Report added...");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Report
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="w-full">
                    <form onSubmit={handleReportSubmit}>
                      <label
                        htmlFor="report"
                        className="ml-1 font-semibold text-gray-600 flex flex-col  mt-5"
                      >
                        Add your report:
                        <textarea
                          id="report"
                          name="report"
                          className="border bg-white px-3 py-2 rounded-md  mt-2 text-gray-600 font-semibold"
                          //   value={formData.description}
                          //   onChange={handleInputChange}
                        />
                      </label>

                      <input
                        type="submit"
                        name=""
                        value={"Report"}
                        className="px-3 py-2 bg-red-400  rounded-lg font-bold text-white mt-2 ml-2 cursor-pointer"
                      />
                    </form>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
