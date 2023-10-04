import Breadcrumbs from "@/components/Breadcrumbs";
import Layout from "@/components/Layout";
import Button from "@/components/form/button/Button";
import Input from "@/components/form/input/Input";
import CustomTable from "@/components/table/CustomTable";
import TablePagination from "@/components/table/TablePagination";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { RolesListInfos } from "constants/data";
import React from "react";

const tableHeader = ["Role"];
const rolesList = () => {
	return (
		<Layout>
			<>
				<div className="px-8 pt-6">
					<h1 className="font-semibold">Users List</h1>
					<div>
						<Breadcrumbs />
					</div>
				</div>
				<div className="bg-white m-8 p-8 border rounded-md">
					<div className="flex items-center justify-between">
						<div>
							<Input placeholder="Search role" leftIcon={faSearch} />
						</div>
						<div>
							<Button leftIcon={faPlus} className="text-white">
								Create Role
							</Button>
						</div>
					</div>
					<div className="mt-5">
						<CustomTable tableHeader={tableHeader} rowData={RolesListInfos} />
						<div className="my-6">
							<TablePagination />
						</div>
					</div>
				</div>
			</>
		</Layout>
	);
};

export default rolesList;
