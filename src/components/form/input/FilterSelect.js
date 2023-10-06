import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FilterSelect = ({ data, className }) => {
	const [selected, setSelected] = useState(data[0]);
	const [value, setValue] = useState("");
	const [filterItem, setFilterItems] = useState(data);

	const handleOnChangeInput = (e) => {
		const inputValue = e.target.value;
		setValue(inputValue);
		const filterItem = data.filter((item) => {
			return item?.name?.toLowerCase().includes(inputValue.toLowerCase());
		});
		setFilterItems(filterItem);
	};
	return (
		<div className={`w-full`}>
			<Listbox value={selected} onChange={setSelected}>
				<div className={`relative`}>
					<Listbox.Button
						className={`relative w-72 ${
							className ? className : null
						} cursor-pointer text-gray-600 rounded-lg bg-transparent border border-gray-300 py-[9px] pl-3 pr-10 text-left sm:text-sm`}
					>
						<span className="block truncate">{selected.name}</span>
						<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
							{/* <ChevronUpDownIcon
								className="h-5 w-5 text-gray-400"
								aria-hidden="true"
							/> */}
							<FontAwesomeIcon icon={faChevronDown} />
						</span>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-50 py-1 text-base shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
							<div className="p-3">
								<input
									value={value}
									onChange={handleOnChangeInput}
									className="bg-transparent py-1.5 px-2 appearance-none outline-none border rounded-md h-full w-full text-gray-600"
								/>
							</div>
							{filterItem.map((item, itemIdx) => (
								<Listbox.Option
									key={itemIdx}
									className={({ active }) =>
										`relative cursor-pointer select-none py-2 px-4 ${
											active ? "bg-gray-100 text-[#009ef7]" : "text-gray-500"
										}`
									}
									value={item}
								>
									{({ selected }) => (
										<>
											<span
												className={`block truncate ${
													selected
														? "font-medium text-[#009ef7]"
														: "font-normal"
												}`}
											>
												{item.name}
											</span>
											{selected ? (
												<span className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#009ef7]">
													{/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
													<FontAwesomeIcon icon={faCheck} />
												</span>
											) : null}
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	);
};

export default FilterSelect;
