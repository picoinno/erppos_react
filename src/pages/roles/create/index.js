import Breadcrumbs from "@/components/Breadcrumbs";
import Layout from "@/components/Layout";
import Button from "@/components/form/button/Button";
import Checkbox from "@/components/form/input/Checkbox";
import Input from "@/components/form/input/Input";
import { faArrowLeft, faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const roleRequire = [
	"User",
	"Role",
	"Supplier",
	"Customer",
	"Product",
	"Variation",
	"Selling Price Groups",
	"Unit",
	"Uom",
	"Category",
	"Brand",
	"Warranty",
	"Manufacture",
	"Generic",
	"Pos",
	"Purchase",
	"Sell",
	"Stock Transfer",
	"Stock Adjustment",
	"Opening Stock",
	"Cash & Payment",
	"Expense",
	"Module",
	"Exchange Rate",
	"Reservation",
	"Restaurant",
	"Room Management",
	"Stockin",
	"Stockout",
];
const CreateRole = () => {
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
				<div className="bg-white rounded-lg px-8">
					<div className="pt-6">
						<h1 className="font-semibold text-md text-gray-700">Role Add</h1>
						<div>
							<Breadcrumbs />
						</div>
					</div>
					<div className="w-full mt-5">
						<Input labelText="Role name" placeholder="Enter a role name" />
					</div>
					<div className="mt-5">
						<h1 className="text-md font-semibold text-gray-700">
							Role Permissions
						</h1>
						<div className="mt-5 pb-5 flex gap-10">
							<div className="flex items-center gap-3 w-[13rem]">
								<h1 className="text-md font-semibold text-gray-600">
									Administrator Access
								</h1>
								<div className="w-4 h-4 flex items-center justify-center bg-gray-400 rounded-full">
									<FontAwesomeIcon
										icon={faExclamation}
										size="xs"
										className="text-white"
									/>
								</div>
							</div>
							<div>
								<Checkbox labelText="Select all" />
							</div>
						</div>
						{roleRequire &&
							roleRequire.map((name, index) => (
								<div
									className="py-5 border-t border-dashed flex items-center gap-10"
									key={index}
								>
									<h1 className="text-sm text-left w-[13rem]">{name}</h1>
									<div className="w-full flex items-center gap-10">
										<div>
											<Checkbox labelText="Select all" />
										</div>
										<div>
											<Checkbox labelText="View" />
										</div>
										<div>
											<Checkbox labelText="Create" />
										</div>
										<div>
											<Checkbox labelText="Update" />
										</div>
										<div>
											<Checkbox labelText="Delete" />
										</div>
										<div>
											<Checkbox labelText="Import" />
										</div>
										<div className={`${name === "Module" ? "hidden" : ""}`}>
											<Checkbox labelText="Export" />
										</div>
										<div className={`${name === "Module" ? "hidden" : ""}`}>
											<Checkbox labelText="Print" />
										</div>
										{name === "Cash & Payment" && (
											<div>
												<Checkbox labelText="Transfer" />
											</div>
										)}
									</div>
								</div>
							))}
					</div>
					<div className="flex items-center justify-center mt-10 pb-5">
						<Button className="text-white">Create Role</Button>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default CreateRole;
