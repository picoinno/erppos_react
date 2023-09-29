import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Checkbox = ({ name, value, id, labelText, required }) => {
	const [checked, setChecked] = useState(false);
	const handleCheck = (e) => {
		const { checked } = e.target;
		setChecked(checked);
	};
	return (
		<React.Fragment>
			<div className="flex items-center">
				<div className="w-5 h-5 relative overflow-hidden cursor-pointer">
					<input
						type="checkbox"
						className="w-full h-full appearance-none cursor-pointer focus:outline-none"
						checked={checked}
						value={value}
						onChange={handleCheck}
						name={name}
						id={id}
					/>
					<div
						className={`pointer-events-none w-full h-full border absolute top-0 left-0 flex items-center justify-center text-xs text-white rounded shadow-inner ${
							checked
								? "bg-green-500 border-green-500"
								: "bg-gray-200 border-gray-400"
						}`}
					>
						{checked ? <FontAwesomeIcon icon="fa-regular fa-check" /> : null}
					</div>
				</div>
				{labelText ? (
					<div className="ml-2">
						<label
							htmlFor={id}
							className="text-sm font-base text-gray-400 cursor-pointer"
						>
							{labelText}
						</label>
						{required === true && <span className="text-red-500 ml-1">*</span>}
					</div>
				) : null}
			</div>
		</React.Fragment>
	);
};

export default Checkbox;
