import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Input from "../form/input/Input";
import Select from "../form/input/Select";
import Button from "../form/button/Button";

const PriceCalculationType = [{ name: "Percentage" }, { name: "Price List" }];

const CreateCustomerGroupModals = ({ isOpen, titleText, closeModal }) => {
	return (
		<div>
			<div
				className={`fixed inset-0 z-20 bg-black opacity-50 transform ease-in-out duration-300 ${
					isOpen ? "opacity-100 visible" : "opacity-0 invisible"
				}`}
			></div>
			<div className="overflow-hidden">
				<div
					className={`fixed inset-0 z-20 transition ease-in-out ${
						isOpen
							? "opacity-100 scale-100 duration-200 visible"
							: "opacity-0 scale-50 duration-300 invisible"
					}`}
				>
					<div className="min-h-full min-w-full flex items-center justify-center">
						<div className="bg-white rounded-lg shadow-lg w-1/2">
							<div className="flex items-center justify-between px-7 py-3 lg:py-5 border-b border-dashed">
								<h1 className="text-lg">{titleText}</h1>
								<span
									className="text-gray-400 cursor-pointer w-7 h-7 rounded-md flex items-center justify-center hover:text-[#009ef7] hover:bg-[#d9f0fe]"
									onClick={closeModal}
								>
									<FontAwesomeIcon icon={faXmark} />
								</span>
							</div>
							<div className="w-full py-5 px-14 flex flex-col">
								<div className="mt-5">
									<Input
										labelText="Customer Group Name"
										placeholder="Customer Group Name"
										required
									/>
								</div>
								<div className="mt-5">
									<Select
										data={PriceCalculationType}
										labelText="Price Calculation Type"
										className="w-full"
									/>
								</div>
								<div className="mt-5">
									<Input
										labelText="Calculation Percentage(%)"
										placeholder="Calculation Percentage(%)"
									/>
								</div>
							</div>
							<div className="my-5 border-t w-full"></div>
							<div className="my-5 px-14 flex justify-end gap-2">
								<Button
									onClick={closeModal}
									className="text-gray-500 bg-gray-200 px-6"
								>
									Close
								</Button>
								<Button className="text-white px-6">Save</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateCustomerGroupModals;

{
	/* <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
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
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </> */
}
