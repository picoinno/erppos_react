import Head from "next/head";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

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

			<main className="flex min-h-screen px-4 bg-[#f4f2f2] relative">
				<Sidebar open={open} />
				<div className="flex-1 w-full pb-5 overflow-auto relative">
					<Header open={open} setOpen={setOpen} />
					<div className="flex flex-col justify-between h-[90%]">
						<div>{children}</div>
						<Footer />
					</div>
				</div>
			</main>
		</>
	);
};

export default Layout;
