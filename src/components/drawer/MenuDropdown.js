import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

const MenuDropdown = ({ className }) => {
	return (
		<div className={`${className ? className : null}`}>
			<Menu as="div" className="relative inline-block text-left">
				<div>
					<Menu.Button className="inline-flex w-full justify-center items-center rounded-md bg-gray-300 bg-opacity-20 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
						Actions
						<FontAwesomeIcon
							icon={faChevronDown}
							className="ml-2 -mr-1 h-3 w-3 text-gray-400"
						/>
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-300"
					enterFrom="transform opacity-0 scale-75"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-200"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-75"
				>
					<Menu.Items className="absolute z-50 right-0 mt-1 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						<div className="px-1 py-1 ">
							<Menu.Item>
								{({ active }) => (
									<button
										className={`${
											active ? "bg-gray-200 text-[#3e97ff]" : "text-gray-500"
										} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
									>
										View
									</button>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<button
										className={`${
											active ? "bg-gray-200 text-[#3e97ff]" : "text-gray-500"
										} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
									>
										Edit
									</button>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<button
										className={`${
											active ? "bg-gray-200 text-[#3e97ff]" : "text-gray-500"
										} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
									>
										Delete
									</button>
								)}
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
};

export default MenuDropdown;
