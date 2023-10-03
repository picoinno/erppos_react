import React, { useState } from "react";
import Button from "../form/button/Button";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Select from "../form/input/Select";

const data = [{ name: 10 }, { name: 20 }, { name: 30 }, { name: 40 }];
const TablePagination = () => {
	const [active, setActive] = useState(1);
	const getItemProps = (index) => {
		setActive(index);
		console.log("active ", active);
	};
	const next = () => {
		if (active === 5) return;

		setActive(active + 1);
	};

	const prev = () => {
		if (active === 1) return;

		setActive(active - 1);
	};
	return (
		<div className="flex items-center justify-between px-8">
			<div className="w-24 rounded-md shadow-sm cursor-pointer">
				<Select data={data} className="w-full text-center" />
			</div>
			<div className="flex items-center gap-1">
				<Button
					variant="text"
					className="bg-transparent text-[#95989a]"
					onClick={prev}
					disabled={active === 1}
					leftIcon={faArrowLeft}
					iconColor="text-[#95989a] h-[1rem] w-[1rem]"
				>
					Previous
				</Button>
				<div className="flex items-center gap-1">
					<span
						onClick={() => getItemProps(1)}
						className={`h-8 w-8 text-sm flex justify-center items-center  rounded-md cursor-pointer ${
							active === 1 ? "bg-gray-400 text-gray-100" : "hover:bg-gray-300"
						}`}
					>
						1
					</span>
					<span
						onClick={() => getItemProps(2)}
						className={`h-8 w-8 text-sm flex justify-center items-center rounded-md cursor-pointer ${
							active === 2 ? "bg-gray-400 text-gray-100" : "hover:bg-gray-300"
						}`}
					>
						2
					</span>
					<span
						onClick={() => getItemProps(3)}
						className={`h-8 w-8 text-sm flex justify-center items-center rounded-md cursor-pointer ${
							active === 3 ? "bg-gray-400 text-gray-100" : "hover:bg-gray-300"
						}`}
					>
						3
					</span>
					<span
						onClick={() => getItemProps(4)}
						className={`h-8 w-8 text-sm flex justify-center items-center rounded-md cursor-pointer ${
							active === 4 ? "bg-gray-400 text-gray-100" : "hover:bg-gray-300"
						}`}
					>
						4
					</span>
					<span
						onClick={() => getItemProps(5)}
						className={`h-8 w-8 text-sm flex justify-center items-center rounded-md cursor-pointer ${
							active === 5 ? "bg-gray-400 text-gray-100" : "hover:bg-gray-300"
						}`}
					>
						5
					</span>
				</div>
				<Button
					variant="text"
					className="bg-transparent text-[#95989a]"
					onClick={next}
					disabled={active === 5}
					rightIcon={faArrowRight}
					iconColor="text-[#95989a] h-[1rem] w-[1rem]"
				>
					Next
				</Button>
			</div>
		</div>
	);
};

export default TablePagination;
