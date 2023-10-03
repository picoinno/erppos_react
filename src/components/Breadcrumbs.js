import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Breadcrumbs = () => {
	const { asPath } = useRouter();
	let currentLink = [];
	const crumbs = asPath
		.split("/")
		.filter((crumb) => crumb !== "")
		.map((crumb) => {
			currentLink.push(`/${crumb}`);

			return (
				<div className="crumb" key={crumb}>
					<Link
						className={`text-[#8c8c8c] text-sm ${
							asPath === currentLink.join("")
								? "cursor-text disabled"
								: "hover:text-[#4ca0d4]"
						}`}
						href={currentLink.join("")}
					>
						{crumb}
					</Link>
				</div>
			);
		});
	return <div className="breadcrumbs">{crumbs}</div>;
};

export default Breadcrumbs;
