// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Input = ({
	labelText,
	leftIcon,
	rightIcon,
	required,
	disable,
	className,
	type,
	placeholder,
	value,
	name,
	onChange,
	iconClick,
	onFocus,
	min,
	max,
	id,
	inputRef,
	error,
}) => {
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
			<div className="relative overflow-hidden">
				{leftIcon && (
					<span className="h-full inline-flex items-center justify-center p-0 absolute top-0 left-1 mx-3 text-gray-400">
						<FontAwesomeIcon icon={leftIcon} />
					</span>
				)}
				<input
					className={`block w-full text-gray-600 text-sm focus:outline-none h-10 px-4 ${
						className ? className : null
					} ${
						leftIcon ? "pl-10" : ""
					} rounded-lg focus:shadow-inner border focus:bg-gray-200 ${
						error ? "border-red-400 bg-red-100" : "border-gray-300 bg-white"
					} ${required ? "required" : ""}`}
					type={type}
					ref={inputRef}
					placeholder={placeholder}
					value={value}
					name={name}
					onChange={onChange}
					onFocus={onFocus}
					min={min}
					max={max}
					id={id}
					disabled={disable}
					autoComplete="off"
				/>
				{rightIcon && (
					<span
						className="h-full inline-flex items-center justify-center p-0 absolute top-0 right-0 mx-3 text-gray-400 cursor-pointer"
						onClick={iconClick}
					>
						<FontAwesomeIcon icon={rightIcon} />
					</span>
				)}
			</div>
		</React.Fragment>
	);
};

export default Input;
