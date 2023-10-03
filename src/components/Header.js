import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowRightFromBracket,
	faBars,
	faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import Input from "./form/input/Input";
import Dropdown from "./drawer/Dropdown";
import Badge from "./Badge";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const Header = ({ open, setOpen }) => {
	return (
		<header className="z-50 fixed top-0 left-0 right-0 p-4 md:px-4 bg-[#f4f2f2]">
			<nav className={`px-4 flex items-center`}>
				<div className="flex items-center gap-3 w-[10rem] md:w-[17rem]">
					<div
						className="flex py-2 px-3 cursor-pointer bg-white rounded-md"
						onClick={() => setOpen(!open)}
					>
						<FontAwesomeIcon icon={faBars} className="text-gray-500" />
					</div>
					<Link href="/" className="text-xl text-[#3E97FF] font-bold">
						ERPPOS
					</Link>
				</div>
				<div className="w-full flex items-center justify-between">
					<div className="w-[20rem]">
						<Input placeholder="Search..." />
					</div>
					<div className="flex items-center justify-between">
						<Dropdown icon={faLayerGroup}>
							<div>Hello</div>
						</Dropdown>
						<Badge count={3} icon={faBell} />
						<button className="w-[35px] h-[35px] flex items-center justify-center text-gray-500">
							<FontAwesomeIcon
								icon={faArrowRightFromBracket}
								className="w-full h-full"
							/>
						</button>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
