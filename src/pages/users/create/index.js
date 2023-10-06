import Breadcrumbs from "@/components/Breadcrumbs";
import Layout from "@/components/Layout";
import Button from "@/components/form/button/Button";
import Checkbox from "@/components/form/input/Checkbox";
import DateInput from "@/components/form/input/DateInput";
import Input from "@/components/form/input/Input";
import Select from "@/components/form/input/Select";
import Textarea from "@/components/form/input/Textarea";
import {
	faArrowLeft,
	faEye,
	faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const roles = [
	{ name: "Administrator" },
	{ name: "Cashier" },
	{ name: "Store Keeper" },
];
const accessLocation = [
	{ name: "All Locations" },
	{ name: "Yangon" },
	{ name: "Mandalay" },
];
const gender = [
	{ name: "Male" },
	{ name: "Female" },
	{ name: "Rather not say" },
];
const marital = [
	{ name: "Married" },
	{ name: "Unmarried" },
	{ name: "Divorced" },
];
const defaultLocation = [{ name: "No Results Fount" }];
const CreateUser = () => {
	const [open, setOpen] = useState(false);
	const handleChange = () => {
		setOpen(!open);
	};
	return (
		<Layout>
			<div className="w-full h-full">
				<div className="my-2">
					<Button
						leftIcon={faArrowLeft}
						className="bg-transparent text-gray-400 hover:bg-gray-200"
					>
						Back
					</Button>
				</div>
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
						<div className="grid grid-cols-5 gap-10">
							<div>
								<Input labelText="Prefix:" placeholder="Mr / Mrs / Miss" />
							</div>
							<div className="col-span-2">
								<Input
									labelText="First Name"
									placeholder="First Name"
									required
								/>
							</div>
							<div className="col-span-2">
								<Input labelText="Last Name" placeholder="Last Name" />
							</div>
						</div>
						<div className="mt-5">
							<Input
								labelText="Email Address"
								placeholder="username@domain.xyz"
							/>
						</div>
						<div className="flex items-center gap-5 mt-5 mb-7">
							<Checkbox />
							<div className="flex flex-col">
								<h1 className="text-sm text-gray-400">Is Active?</h1>
								<p className="text-xs text-gray-500">
									User account is activate or deactivate
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-white rounded-xl mt-5 px-8 py-6">
					<h1 className="font-semibold text-xl text-gray-700">
						Roles and Permissions
					</h1>

					<div className="mt-5">
						<Input labelText="User Name" placeholder="User Name" required />
					</div>
					<div className="grid grid-cols-2 gap-10 mt-5">
						<div className="w-full">
							<Input
								// type={`${open ? "text" : "password"}`}
								className="bg-transparent focus:outline-none focus-within:bg-none"
								placeholder="Password"
								labelText="Password"
								rightIcon={`${open ? faEye : faEyeSlash}`}
								iconClick={handleChange}
							/>
							<p className="text-gray-400 text-sm mt-3 border-t-2 border-dashed pt-1">
								Use 8 or more characters with a mix of letters, numbers &
								symbols
							</p>
						</div>
						<div className="w-full">
							<Input
								placeholder="Confirm Password"
								labelText="Confirm Password"
							/>
						</div>
					</div>
					<div className="mt-5 w-full">
						<Select
							data={roles}
							labelText="Roles"
							className="w-full"
							required
						/>
					</div>
					<div className="flex gap-10 mt-5 mb-10">
						<div className="w-full">
							<Select
								data={accessLocation}
								labelText="Access Location"
								className="w-full"
								required
							/>
						</div>
						<div className="w-full">
							<Select
								data={defaultLocation}
								labelText="Default Location"
								className="w-full"
								required
							/>
						</div>
					</div>
				</div>
				<div className="bg-white rounded-xl mt-5 px-8 py-6">
					<h1 className="font-semibold text-xl text-gray-700">
						More Information
					</h1>
					<div className="grid grid-cols-8 gap-10 mt-5">
						<div className="col-span-2">
							<DateInput
								labelText="Date of birth"
								placeholder="Date of birth"
								required
							/>
						</div>
						<div className="col-span-2">
							<Select data={gender} labelText="Gender" />
						</div>
						<div className="col-span-2">
							<Select data={marital} labelText="Gender" />
						</div>
						<div className="col-span-2">
							<Input labelText="Blood Group" placeholder="Blood Group" />
						</div>
					</div>
					<div className="grid grid-cols-8 gap-10 mt-5">
						<div className="col-span-2">
							<Input labelText="Phone" placeholder="## ### ####" />
						</div>
						<div className="col-span-2">
							<Input labelText="Contact Number" placeholder="## ### ####" />
						</div>
						<div className="col-span-2">
							<Input
								labelText="Family contact number"
								placeholder="## ### ####"
							/>
						</div>
						<div className="col-span-2">
							<Input
								labelText="Facebook Link"
								placeholder="https://facebook.com/"
							/>
						</div>
					</div>
					<div className="grid grid-cols-8 gap-10 mt-5">
						<div className="col-span-2">
							<Input
								labelText="Twitter Link"
								placeholder="https://twitter.com/"
							/>
						</div>
						<div className="col-span-2">
							<Input labelText="Social Media 1" placeholder="Social media 1" />
						</div>
						<div className="col-span-2">
							<Input labelText="Social Media 2" placeholder="Social media 2" />
						</div>
						<div className="col-span-2">
							<Input labelText="Custom field 1" placeholder="Custom field 1" />
						</div>
					</div>
					<div className="grid grid-cols-8 gap-10 mt-5">
						<div className="col-span-2">
							<Input labelText="Custom field 2" placeholder="Custom field 2" />
						</div>
						<div className="col-span-2">
							<Input labelText="Custom field 3" placeholder="Custom field 3" />
						</div>
						<div className="col-span-2">
							<Input labelText="Custom field 4" placeholder="Custom field 4" />
						</div>
						<div className="col-span-2">
							<Input labelText="Guardian Name" placeholder="Guardian Name" />
						</div>
					</div>
					<div className="grid grid-cols-6 gap-10 mt-5">
						<div className="col-span-2">
							<Input labelText="Language" placeholder="Language" />
						</div>
						<div className="col-span-2">
							<Input labelText="ID Proof Name" placeholder="ID proof name" />
						</div>
						<div className="col-span-2">
							<Input
								labelText="ID Proof Number"
								placeholder="ID Proof number"
							/>
						</div>
					</div>
					<div className="flex gap-10 mt-5">
						<div className="w-full">
							<Textarea labelText="Permanent Address" />
						</div>
						<div className="w-full">
							<Textarea labelText="Current Address" />
						</div>
					</div>
					<div className="w-full border-t mt-7"></div>
					<div className="w-full mt-5">
						<Input labelText="Bank Details" placeholder="Bank Details" />
					</div>
				</div>

				<div className="flex items-center justify-center mt-10 mb-5">
					<Button className="text-white">Create User Account</Button>
				</div>
			</div>
		</Layout>
	);
};

export default CreateUser;
