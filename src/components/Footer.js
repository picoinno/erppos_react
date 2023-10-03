import React from "react";

const Footer = () => {
	return (
		<footer
			className={`h-10 w-[90%] mx-auto my-3 flex items-center justify-between`}
		>
			<p className="text-sm text-gray-400">Created by Pico SBS</p>
			<div className="flex items-center justify-between gap-2 text-gray-400 text-sm">
				<p>About</p>
				<p>Support</p>
				<p>Purchase</p>
			</div>
		</footer>
	);
};

export default Footer;
