import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Badge = ({ count, icon }) => {
	return (
		<div className="p-1 md:p-3 text-[0.5rem] md:text-xl relative mx-1 md:mx-2 cursor-pointer hover:text-[#4ca0d4]">
			<FontAwesomeIcon icon={icon} />
			{count > 0 && (
				<span className="ml-1 rounded-full bg-red-500 w-5 h-5 text-xs font-bold text-white absolute right-0 top-1 flex items-center justify-center">
					{count}
				</span>
			)}
		</div>
	);
};

export default Badge;
