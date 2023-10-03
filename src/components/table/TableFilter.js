import React from "react";
import Button from "../form/button/Button";
import Input from "../form/input/Input";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const TableFilter = ({ placeholder }) => {
	return (
		<>
			<div className="flex items-center justify-between flex-wrap gap-4 px-8 pt-8">
				<div className="flex items-center">
					<Input leftIcon={faSearch} placeholder={placeholder} />
				</div>
				<div className="flex items-center gap-4">
					<div>
						<Button className="bg-[#dae4f1] text-[#3e97ff] hover:bg-[#3e97ff] hover:text-white">
							Filter
						</Button>
					</div>
					<div>
						<Button className="bg-[#dae4f1] text-[#3e97ff] hover:bg-[#3e97ff] hover:text-white">
							Export
						</Button>
					</div>
					<div>
						<Button className="text-white">Add User</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default TableFilter;
