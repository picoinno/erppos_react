import { sidebarData } from "constants/data";
import Link from "next/link";
import React, { useState } from "react";
import { BiUser } from "react-icons/bi";

const Sidebar = ({ open }) => {
	const [activeMenu, setActiveMenu] = useState("");
	const [secondActiveMenu, setSecondActiveMenu] = useState("");
	const [itemMenu, setItemMenu] = useState("");

	const activeHandler = (active) => {
		if (activeMenu === active) {
			setActiveMenu("");
		} else {
			setActiveMenu(active);
		}
	};
	const secondActiveHandler = (active) => {
		if (secondActiveMenu === active) {
			setSecondActiveMenu("");
		} else {
			setSecondActiveMenu(active);
		}
	};
	const itemMenuHandler = (active) => {
		setItemMenu(active);
	};

	// group-hover:text-[#3E97FF]
	return (
		<div
			className={`min-h-[100vh] px-2 mr-2 border-r ${
				open ? "w-72" : "w-20"
			} duration-500 relative hover:w-72 group`}
		>
			<div className="flex flex-col gap-1 overflow-hidden">
				{sidebarData &&
					sidebarData.map((menu, index) => (
						<div key={index} className="block">
							<div
								onClick={() => activeHandler(menu.menu_name)}
								className="flex w-full justify-between items-center px-4 py-2 text-sm font-medium cursor-pointer hover:text-[#3E97FF]"
							>
								<div
									className={`flex items-center justify-center gap-4 ${
										activeMenu === menu.menu_name
											? "text-[#3E97FF]"
											: "text-[#A1A5B7] "
									}`}
								>
									<BiUser />

									<h2
										className={`${
											activeMenu === menu.menu_name
												? "text-[#3E97FF]"
												: "text-[#252f4a]"
										} duration-500 ${
											!open && "opacity-0"
										} group-hover:opacity-100`}
									>
										{menu.menu_name}
									</h2>
									{/* <h2
										className={`${
											open && "hidden"
										} absolute left-48 bg-white font-semibold whitespace-pre text-gray-500 rounded-md drop-shadow-lg w-0 overflow-hidden px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
									>
										{menu.menu_name}
									</h2> */}
								</div>

								<BiUser
									className={`w-[9px] h-[9px] ${
										activeMenu === menu.menu_name
											? "rotate-180 text-[#3E97FF]"
											: "text-[#4b5675]"
									} ease-in-out transform duration-300`}
								/>
							</div>

							<div
								className={`transition-all transform ease-in-out ${
									activeMenu === menu.menu_name
										? "visible max-h-[50rem] duration-500"
										: "invisible max-h-0 duration-300"
								} ${
									!open && "opacity-0 invisible hidden"
								} group-hover:opacity-100 group-hover:visible group-hover:flex flex duration-500 flex-col overflow-hidden w-full items-center px-4 text-left text-sm font-medium`}
							>
								{menu.child_menus.map((menu_item, index) => (
									<div key={index} className={`w-full flex flex-col gap-2`}>
										{menu_item?.child_menus ? (
											<div>
												<div
													onClick={() =>
														secondActiveHandler(menu_item.menu_name)
													}
													className="min-w-[200px] flex justify-between items-center pl-4 py-2 text-sm font-medium cursor-pointer hover:text-[#3E97FF] nav_menu"
												>
													<div
														className={`flex items-center justify-center gap-2 ${
															secondActiveMenu === menu_item.menu_name
																? "text-[#3E97FF]"
																: "text-[#A1A5B7]"
														}`}
													>
														<BiUser />
														<h2
															className={`${
																secondActiveMenu === menu_item.menu_name
																	? "text-[#3E97FF]"
																	: "text-[#252f4a]"
															}`}
														>
															{menu_item.menu_name}
														</h2>
													</div>

													<BiUser
														className={`w-[9px] h-[9px] ${
															secondActiveMenu === menu_item.menu_name
																? "rotate-180 text-[#3E97FF]"
																: "text-[#4b5675]"
														} ease-in-out transform duration-500`}
													/>
												</div>
												{menu_item.child_menus &&
													menu_item.child_menus?.map((child_menu, index) => (
														<div
															key={index}
															className={`transition ${
																secondActiveMenu === menu_item.menu_name
																	? "ease-in duration-300 visible max-h-[25rem]"
																	: "ease-out duration-200 invisible max-h-0"
															} flex flex-col overflow-hidden w-full items-center px-4 text-left text-sm font-medium`}
														>
															<div className={`w-full flex flex-col gap-1`}>
																<div
																	className={`px-4 py-2 w-full rounded-md cursor-pointer ${
																		itemMenu === child_menu.menu_name
																			? "bg-[#ffffff]"
																			: "bg-transparent"
																	}`}
																>
																	<Link href={`${child_menu.link}`}>
																		<span
																			onClick={() =>
																				itemMenuHandler(child_menu.menu_name)
																			}
																			className={`flex items-center gap-2 min-w-[200px] ${
																				itemMenu === child_menu.menu_name
																					? "text-[#3E97FF]"
																					: ""
																			} `}
																		>
																			<span
																				className={`w-1 h-1 rounded-full ${
																					itemMenu === child_menu.menu_name
																						? "bg-[#3E97FF]"
																						: "bg-[#7E8299]"
																				} `}
																			></span>
																			<h2 className={``}>
																				{child_menu.menu_name}
																			</h2>
																		</span>
																	</Link>
																</div>
															</div>
														</div>
													))}
											</div>
										) : (
											<div
												className={`px-4 py-2 w-full rounded-md cursor-pointer ${
													secondActiveMenu === menu_item.menu_name
														? "bg-[#ffffff]"
														: "bg-transparent"
												}`}
											>
												<Link href={`${menu_item.link}`}>
													<span
														onClick={() =>
															secondActiveHandler(menu_item.menu_name)
														}
														className={`flex items-center gap-2 min-w-[200px] ${
															secondActiveMenu === menu_item.menu_name
																? "text-[#3E97FF]"
																: "text-[#A1A5B7]"
														} `}
													>
														<BiUser />
														<h2
															className={`${
																secondActiveMenu === menu_item.menu_name
																	? "text-[#3E97FF]"
																	: "text-[#252f4a]"
															} `}
														>
															{menu_item.menu_name}
														</h2>
													</span>
												</Link>
											</div>
										)}
									</div>
								))}
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Sidebar;
