import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Dropdown = ({ icon, children, className }) => {
	return (
		<div
			className={`w-[35px] h-[35px] flex items-center justify-center relative group cursor-pointer ${
				className ? className : null
			}`}
		>
			<div className="w-6 h-6 text-gray-500 ">
				<FontAwesomeIcon icon={icon} className="w-full h-full" />
			</div>

			<div className="invisible group-hover:visible group-hover:translate-y-0 absolute top-3 right-0 bottom-auto left-auto flex-col items-center w-[300px] max-w-lg-[325px] px-4 py-5 mt-3 bg-white z-50 transform ease-in-out duration-300 rounded-md shadow-sm translate-y-9">
				{children}
			</div>
		</div>
	);
};

export default Dropdown;
