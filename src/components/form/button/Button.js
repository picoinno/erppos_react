import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Button = ({
	className,
	children,
	rightIcon,
	leftIcon,
	iconColor,
	type,
	name,
	onClick,
	disabled,
}) => {
	return (
		<button
			className={`${
				className ? className : null
			} px-4 h-10 bg-[#009ef7] rounded-lg text-sm font-base ${
				disabled ? "cursor-not-allowed hover:bg-transparent" : ""
			} focus:outline-none`}
			type={type}
			name={name}
			onClick={onClick}
			disabled={disabled}
		>
			<div className="flex items-center gap-2">
				{leftIcon && (
					<FontAwesomeIcon
						icon={leftIcon}
						className={`h-[1.15rem] w-[1.15rem] ${
							iconColor ? iconColor : null
						} `}
					/>
				)}
				{children && children}
				{rightIcon && (
					<FontAwesomeIcon
						icon={rightIcon}
						className={`h-[1.15rem] w-[1.15rem] ${
							iconColor ? iconColor : null
						}`}
					/>
				)}
			</div>
		</button>
	);
};

export default Button;
