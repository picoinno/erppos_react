import React from "react";

const Textarea = ({
	labelText,
	required,
	className,
	name,
	id,
	cols,
	row,
	placeholder,
	error,
	testValue,
}) => {
	return (
		<React.Fragment>
			{labelText ? (
				<div className="p-1">
					<label className="text-xs text-gray-700"> {labelText} </label>
					{required === true && <span className="text-red-500 ml-1"> * </span>}
					{error && (
						<span className="text-xs text-red-500 ml-1">( {error} )</span>
					)}
				</div>
			) : null}
			<textarea
				className={`block w-full text-gray-600 resize-none focus:outline-none px-4 py-2 rounded-lg focus:shadow-inner border ${
					error ? "border-red-300 bg-red-100" : "border-gray-300 bg-transparent"
				} ${className ? className : null}`}
				name={name}
				id={id}
				cols={cols}
				rows={row}
				placeholder={placeholder}
			>
				{testValue}
			</textarea>
		</React.Fragment>
	);
};
export default Textarea;
