import Breadcrumbs from "@/components/Breadcrumbs";
import Layout from "@/components/Layout";
import Button from "@/components/form/button/Button";
import FilterSelect from "@/components/form/input/FilterSelect";
import Input from "@/components/form/input/Input";
import RadioBox from "@/components/form/input/RadioBox";
import Select from "@/components/form/input/Select";
import Textarea from "@/components/form/input/Textarea";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const contactType = [
	{
		name: "suppliers",
	},
	{
		name: "customers",
	},
	{
		name: "Both (suppliers and customers)",
	},
];

const data = [
	{ name: "Months" },
	{
		name: "Days",
	},
];
const CreateSupplier = () => {
	const [moreInformations, setMoreInformations] = useState(false);
	const showHandle = () => {
		setMoreInformations(!moreInformations);
	};
	return (
		<Layout>
			<>
				<div className="bg-white rounded-xl px-8">
					<div className="pt-6">
						<h1 className="font-semibold text-xl text-gray-700">
							Create User Account
						</h1>
						<div>
							<Breadcrumbs />
						</div>
					</div>
					<div className="py-4">
						<div className="grid grid-cols-6 gap-10">
							<div className="col-span-2">
								<Select
									data={contactType}
									labelText="Contact Type"
									className="w-full"
									required
								/>
							</div>
							<div className="col-span-2 flex items-center justify-around">
								<RadioBox label="Individual" id="individual" />
								<RadioBox label="Business" id="business" />
							</div>
							<div className="col-span-2">
								<Input labelText="Contact ID" placeholder="Contac ID" />
								<p className="text-gray-300 text-xs mt-1">
									Leave empty to autogenerate
								</p>
							</div>
						</div>
						<div className="mt-5 grid grid-cols-8 gap-10">
							<div className="col-span-2">
								<Input labelText="Business Name" placeholder="Business Name" />
							</div>
						</div>
						<div className="mt-5 grid grid-cols-8 gap-x-10 gap-y-5">
							<div className="col-span-2">
								<Input labelText="Mobile" placeholder="Mobile" required />
							</div>
							<div className="col-span-2">
								<Input
									labelText="Alternate Contact Number"
									placeholder="Alternate Contact Number"
								/>
							</div>
							<div className="col-span-2">
								<Input labelText="Landline" placeholder="Landline" />
							</div>
							<div className="col-span-2">
								<Input labelText="Email" placeholder="Email" />
							</div>
							<div className="col-span-2">
								<Input
									labelText="Address Line 1"
									placeholder="Address Line 1"
								/>
							</div>
							<div className="col-span-2">
								<Input
									labelText="Address Line 2"
									placeholder="Address Line 2"
								/>
							</div>
							<div className="col-span-2">
								<Input labelText="City" placeholder="City" />
							</div>
							<div className="col-span-2">
								<Input labelText="State" placeholder="State" />
							</div>
							<div className="col-span-2">
								<Input labelText="Country" placeholder="Select Country" />
							</div>
							<div className="col-span-2">
								<Input labelText="Zip Code" placeholder="Zip Code" />
							</div>
						</div>

						<div className="mt-10 flex items-center justify-center">
							<Button
								onClick={showHandle}
								className="text-white"
								rightIcon={faChevronDown}
								iconClassName={`${
									moreInformations ? "rotate-180" : ""
								} ease-in-out transform duration-300`}
							>
								{`${
									moreInformations ? "Less Informations" : "More Informations"
								}`}
							</Button>
						</div>
						{moreInformations && (
							<>
								<div className="mt-5 grid grid-cols-8 gap-10">
									<div className="col-span-2">
										<Input labelText="Tex Number" placeholder="Tax Number" />
									</div>
									<div className="col-span-2 flex items-center">
										<div className="">
											<div className="p-1">
												<label className="text-xs text-gray-700">
													Pay Term
												</label>
											</div>
											<div className="flex items-center">
												<Input type="number" className="rounded-r-none" />
												<FilterSelect data={data} className="rounded-l-none" />
											</div>
										</div>
									</div>
									<div className="col-span-2">
										<Input
											type="number"
											className="focus:outline-none focus:border-none overflow-hidden rounded-lg"
											labelText="Receivable Amount"
											placeholder="Receivable Amount"
										/>
									</div>
									<div className="col-span-2">
										<Input
											type="number"
											className="focus:outline-none focus:border-none overflow-hidden rounded-lg"
											labelText="Payable Amount"
											placeholder="Payable Amount"
										/>
									</div>
								</div>
								<div className="w-full border-t border-gray-500 mt-10 mb-5"></div>
								<div className="mt-5 grid grid-cols-8 gap-x-10 gap-y-5">
									<div className="col-span-2">
										<Input
											labelText="Custom Field 1"
											placeholder="Custom Field 1"
										/>
									</div>
									<div className="col-span-2">
										<Input
											labelText="Custom Field 2"
											placeholder="Custom Field 2"
										/>
									</div>
									<div className="col-span-2">
										<Input
											labelText="Custom Field 3"
											placeholder="Custom Field 3"
										/>
									</div>
									<div className="col-span-2">
										<Input
											labelText="Custom Field 4"
											placeholder="Custom Field 4"
										/>
									</div>
									<div className="col-span-2">
										<Input
											labelText="Custom Field 5"
											placeholder="Custom Field 5"
										/>
									</div>
									<div className="col-span-2">
										<Input
											labelText="Custom Field 6"
											placeholder="Custom Field 6"
										/>
									</div>
									<div className="col-span-2">
										<Input
											labelText="Custom Field 7"
											placeholder="Custom Field 7"
										/>
									</div>
									<div className="col-span-2">
										<Input
											labelText="Custom Field 8"
											placeholder="Custom Field 8"
										/>
									</div>
									<div className="col-span-2">
										<Input
											labelText="Custom Field 9"
											placeholder="Custom Field 9"
										/>
									</div>
									<div className="col-span-2">
										<Input
											labelText="Custom Field 10"
											placeholder="Custom Field 10"
										/>
									</div>
								</div>
								<div className="w-full border-t border-gray-500 mt-10 mb-5"></div>
								<div className="w-[25%]">
									<Textarea labelText="Shopping Address" />
								</div>
							</>
						)}
					</div>
					<div className="flex justify-end py-10">
						<Button className="text-white">Save</Button>
					</div>
				</div>
			</>
		</Layout>
	);
};

export default CreateSupplier;
