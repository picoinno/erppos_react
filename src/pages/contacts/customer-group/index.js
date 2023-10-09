import React, { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Layout from "@/components/Layout";
import Button from "@/components/form/button/Button";
import Input from "@/components/form/input/Input";
import CustomTable from "@/components/table/CustomTable";
import TablePagination from "@/components/table/TablePagination";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { CustomerGroupList } from "constants/data";
import CreateCustomerGroupModals from "@/components/modals/CreateCustomerGroupModals";

const tableHeader = [
	"Customer Group Name",
	"Calculation Percentage",
	"Price List",
];
const CustomerGroupsList = () => {
	let [isOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}
	return (
		<Layout>
			<>
				<CreateCustomerGroupModals
					isOpen={isOpen}
					closeModal={closeModal}
					titleText="Add Customer Group"
				/>
				<div className="px-8 pt-6">
					<h1 className="font-semibold">All Customers Groups</h1>
					<div>
						<Breadcrumbs />
					</div>
				</div>
				<div className="bg-white m-8 p-8 border rounded-xl">
					<div className="flex items-center justify-between">
						<div>
							<Input placeholder="Search..." leftIcon={faSearch} />
						</div>
						<div className="flex items-center gap-5">
							<Button className="text-[#009ef7] bg-[#aadbf7] hover:bg-[#009ef7] hover:text-white">
								Export Report
							</Button>
							<Button className="text-white" onClick={openModal}>
								Add
							</Button>
						</div>
					</div>
					<div className="mt-5">
						<CustomTable
							tableHeader={tableHeader}
							rowData={CustomerGroupList}
						/>
						<div className="my-6">
							<TablePagination />
						</div>
					</div>
				</div>
			</>
		</Layout>
	);
};

export default CustomerGroupsList;
