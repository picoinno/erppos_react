import CustomTable from "@/components/table/CustomTable";
import Layout from "@/components/Layout";
import { UsersListInfos } from "constants/data";
import React from "react";
import TableFilter from "@/components/table/TableFilter";
import TablePagination from "@/components/table/TablePagination";
import Breadcrumbs from "@/components/Breadcrumbs";

const tableHeader = ["User", "Role", "Last Login", "Two-Step", "Joined Date"];
const UsersList = () => {
	return (
		<Layout>
			<>
				<div className="px-8 pt-6">
					<h1 className="font-semibold">Users List</h1>
					<div>
						<Breadcrumbs />
					</div>
				</div>
				<div className="rounded-md m-8 border">
					<div className="mb-4">
						<TableFilter placeholder="Search user" />
					</div>
					<CustomTable tableHeader={tableHeader} rowData={UsersListInfos} />
					<div className="my-6">
						<TablePagination />
					</div>
				</div>
			</>
		</Layout>
	);
};

export default UsersList;
