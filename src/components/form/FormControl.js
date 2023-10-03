import React from "react";

const FormControl = ({ className, children }) => {
	return (
		<div className={`p-1 py-2 ${className ? className : null}`}>{children}</div>
	);
};

export default FormControl;
