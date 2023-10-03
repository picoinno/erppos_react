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
			<div className={`flex min-h-screen flex-col bg-[#f4f2f2]`}>
				<Header open={open} setOpen={setOpen} />

				<main className="flex min-h-[80vh] mt-[85px] px-4 pt-5">
					<Sidebar open={open} />
					<div className="flex-grow w-full flex flex-col justify-between pb-5 overflow-auto customize__scroll">
						<div className="bg-white rounded-md">{children}</div>
						<Footer />
					</div>
				</main>
			</div>
		</>
	);
};

export default Layout;
