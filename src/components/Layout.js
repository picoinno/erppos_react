import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { BiListUl } from "react-icons/bi";

const Layout = ({ title, children }) => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Head>
				<title>{title ? "ERPPOS | " + title : "ERPPOS"}</title>
				<meta name="description" content="ERPPOS" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div
				className={`flex min-h-screen flex-col justify-between shadow-md relative`}
			>
				<header>
					<nav className="flex h-25 justify-between items-center px-2 md:px-4 shadow-md bg-[#203040]">
						<Link
							href="/"
							className="text-[1.5rem] md:text-[3rem] text-blue-600 font-bold mb-[5px]"
						>
							ERPPOS
						</Link>
						<div>
							<div
								className="flex py-3 px-5 cursor-pointer bg-gray-200"
								onClick={() => setOpen(!open)}
							>
								<BiListUl className="text-gray-500" />
								{/* <FontAwesomeIcon
									icon="fa-solid fa-bars-staggered"
									className="text-gray-500"
								/> */}
							</div>
						</div>
						<div className="flex items-center">
							<Link
								href="/cart"
								className="p-1 md:p-3 text-blue-600 text-[1rem] md:text-2xl relative mx-1 md:mx-2"
							>
								Cart
								<span className="ml-1 rounded-full bg-green-600 px-2 py-1 text-xs font-bold text-white absolute -right-2 top-0 flex items-center justify-center">
									1
								</span>
							</Link>
						</div>
					</nav>
				</header>

				<main className="flex min-h-[80vh] mt-4 px-4">
					<Sidebar open={open} />
					<div className="flex-grow w-full overflow-auto customize__scroll">
						{children}
						<footer
							className={`flex h-10 w-[90%] mx-auto items-center justify-between shadow-inner `}
						>
							<p className="text-sm">
								<span className="text-gray-400">2023©</span> ERPPOS
							</p>
							<div className="flex items-center justify-between gap-2 text-gray-400 text-sm">
								<p>About</p>
								<p>Support</p>
								<p>Purchase</p>
							</div>
						</footer>
					</div>
				</main>
			</div>
		</>
	);
};

export default Layout;
