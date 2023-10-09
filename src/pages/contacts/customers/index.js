import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Layout from "@/components/Layout";
import Button from "@/components/form/button/Button";
import Input from "@/components/form/input/Input";
import CustomTable from "@/components/table/CustomTable";
import TablePagination from "@/components/table/TablePagination";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SuppliersInfos } from "constants/data";

const tableHeader = [
	"Contact Id",
	"Business Name",
	"Customer Name",
	"Mobile",
	"Email",
	"Address",
	"Payable Amount",
	"Receivable Amount",
	"Credit Limit",
	"Custom Field 1",
	"Custom Field 2",
	"Custom Field 3",
	"Custom Field 4",
];
const CustomersList = () => {
	return (
		<Layout>
			<>
				<div className="px-8 pt-6">
					<h1 className="font-semibold">All Customers</h1>
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
							<Button className="text-white">Add</Button>
						</div>
					</div>
					<div className="mt-5">
						<CustomTable tableHeader={tableHeader} rowData={SuppliersInfos} />
						<div className="my-6">
							<TablePagination />
						</div>
					</div>
				</div>
			</>
		</Layout>
	);
};

export default CustomersList;
