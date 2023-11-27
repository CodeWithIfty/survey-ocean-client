import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function ResponseViewModal({ Response }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className=" px-3 py-1 bg-primary  rounded text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Response
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeModal}>
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
                  {Response.length <= 0 && (
                    <Dialog.Title>No Responses</Dialog.Title>
                  )}
                  {Response?.map((response, index) => (
                    <Dialog.Title
                      key={index}
                      as="h3"
                      className=" font-medium leading-6 text-gray-900"
                    >
                      <p className="text-gray-500 text-sm mt-2">
                        <span className="font-bold">User: </span>
                        {response?.respondedUser}
                      </p>
                      <hr />
                      {response?.responses.map(
                        ({ questionName, selectedOption }, index) => (
                          <div key={index} className="ml-3 mt-2  border p-3">
                            <h1 className="font-bold border-b mb-3">
                              Question {index + 1}: {questionName}
                            </h1>
                            <p className="ml-3">
                              <span className="font-bold">Selected:</span>{" "}
                              {selectedOption}
                            </p>
                          </div>
                        )
                      )}
                    </Dialog.Title>
                  ))}

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
