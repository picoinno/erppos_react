import React from "react";

const RadioBox = ({ labelText, required, error, id }) => {
	return (
		<React.Fragment>
			{labelText ? (
				<div className="p-1">
					<label className="text-xs text-gray-700">{labelText}</label>
					{required === true && (
						<span className="text-red-500 ml-1">*</span>
					)}{" "}
					{error ? (
						<label className="text-xs text-red-700 pt-0 mt-0">
							( {error} )
						</label>
					) : null}
				</div>
			) : null}
			<div className="flex flex-col gap-4">
				<div className="flex items-center">
					<input
						type="radio"
						id={id}
						name="fav_language"
						value="CSS"
						className="bg-[#3e97ff] w-5 h-5 mr-4"
					/>
					<label htmlFor={id} className="ml-2">
						<div className="text-sm text-gray-700">Get more visitors</div>
						<div className="text-xs text-gray-500">
							Increase impression traffic onto the platfrom
						</div>
					</label>
				</div>
			</div>
		</React.Fragment>
	);
};

export default RadioBox;
