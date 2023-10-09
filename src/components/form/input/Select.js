import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCheck,
	faChevronDown,
	faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const Select = ({ data, className, labelText, required, error }) => {
	const [selected, setSelected] = useState(data[0]);
	return (
		<React.Fragment>
			{labelText ? (
				<div className="p-1">
					<label className="text-xs text-gray-700 font-semibold">
						{labelText}
					</label>
					{required === true && <span className="text-red-500 ml-1">*</span>}{" "}
					{error ? (
						<label className="text-xs text-red-700 pt-0 mt-0">
							( {error} )
						</label>
					) : null}
				</div>
			) : null}
			<div className={`w-72 ${className ? className : null}`}>
				<Listbox value={selected} onChange={setSelected}>
					<div className="relative mt-1">
						<Listbox.Button className="relative w-full cursor-pointer text-gray-600 rounded-lg border border-gray-300 py-2 pl-3 pr-10 text-left sm:text-sm">
							<span className="block truncate capitalize">{selected.name}</span>
							<span className="pointer-events-none absolute inset-y-0 right-0 flex flex-col justify-center items-center pr-2">
								<FontAwesomeIcon
									icon={faChevronUp}
									className="h-5 w-5 text-gray-400"
								/>
								<FontAwesomeIcon
									icon={faChevronDown}
									className="h-5 w-5 text-gray-400"
								/>
							</span>
						</Listbox.Button>
						<Transition
							as={Fragment}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
								{data.map((person, personIdx) => (
									<Listbox.Option
										key={personIdx}
										className={({ active }) =>
											`relative cursor-pointer select-none py-2 px-4 ${
												active ? "bg-gray-100 text-[#009ef7]" : "text-gray-500"
											}`
										}
										value={person}
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
													{person.name}
												</span>
												{selected ? (
													<span className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#009ef7]">
														<FontAwesomeIcon
															icon={faCheck}
															className="h-5 w-5"
														/>
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
		</React.Fragment>
	);
};

export default Select;
