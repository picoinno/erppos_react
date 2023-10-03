import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { Calendar } from "primereact/calendar";

const DateInput = ({ labelText, required, error, placeholder }) => {
	const [date, setDate] = useState(null);
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

			<div className="">
				<div className="grid w-full">
					<Calendar
						value={date}
						placeholder={placeholder}
						dateFormat="dd/mm/yy"
						className="date_input"
						onChange={(event) => setDate(event.value)}
						showIcon
					/>
				</div>
			</div>
		</React.Fragment>
	);
};

export default DateInput;
