import { SalesTrendBarChart } from "../components/bar-chart";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { lastOrdersData, overviewCardsData, topPlatformsData } from "../data";
import { USDollar } from "../utils";
import { DocumentDownload } from "iconsax-react";

const people = [{ id: 1, name: "Monthly" }];

export default function MainView() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <>
      <div className="p-5">
        <div className="w-full flex justify-center">
          <div className="max-w-[1440px] w-full">
            <div className="w-full grid grid-cols-1 xl:grid-cols-5 gap-y-5 lg:gap-5">
              {/* <div className="border h-[374px] w-[806px] rounded-xl dark:border-neutral-700">
            <SimpleBarChart />
            34CAA5
          </div> */}

              {/* bar Chart */}

              <div className="col-span-3 border h-[374px] w-full rounded-xl dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col justify-between gap-10 p-5">
                <header className="flex flex-wrap justify-between items-center">
                  <h1 className="font-semibold text-[18px] text-[#26282C] dark:text-neutral-100">
                    Sales Trends
                  </h1>

                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-[#3A3F51] text-sm dark:text-neutral-100 shrink-0">
                      Sort by:
                    </p>

                    <Listbox value={selected} onChange={setSelected}>
                      <div className="relative ">
                        <Listbox.Button className="relative w-full cursor-default rounded-full py-2 pl-3 pr-10 text-left border focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 sm:text-sm">
                          <span className="block truncate">
                            {selected.name}
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm ">
                            {people.map((person, personIdx) => (
                              <Listbox.Option
                                key={personIdx}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active
                                      ? "bg-neutral-200 text-black"
                                      : "text-gray-900"
                                  }`
                                }
                                value={person}
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selected ? "font-medium" : "font-normal"
                                      }`}
                                    >
                                      {person.name}
                                    </span>
                                    {selected ? (
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                                        <CheckIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
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
                </header>
                <SalesTrendBarChart />
              </div>

              {/* trends */}

              <div className="col-span-2 h-full sm:h-[374px] rounded-xl dark:border-neutral-700 grid sm:grid-cols-2 sm:grid-rows-2 gap-4">
                {overviewCardsData.map((data, index) => (
                  <div
                    key={index}
                    className="border p-4 h-[179px]  rounded-xl dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col justify-between gap-1"
                  >
                    <div className="w-max h-10 aspect-square rounded-full border dark:border-neutral-700 flex justify-center items-center">
                      <data.icon size="24" color="#34caa5" variant="Bulk" />
                    </div>
                    <h3 className="text-lg font-medium text-neutral-400">
                      {data.name}
                    </h3>

                    <h1 className="font-semibold text-2xl text-[#3A3F51] dark:text-neutral-200">
                      {index === 3 ? USDollar.format(data.amount) : data.amount}
                    </h1>

                    <div className="flex justify-between flex-wrap">
                      <div className="bg-[#34CAA5]/20 rounded-full flex justify-center items-center px-2 gap-2">
                        {data.profit ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                          >
                            <path
                              d="M0.5 5.5L3.5 2.5L5.5 4.5L9.5 0.5"
                              stroke="#34CAA5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M6 0.5H9.5V4"
                              stroke="#34CAA5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                          >
                            <path
                              d="M0.5 0.5L3.5 3.5L5.5 1.5L9.5 5.5"
                              stroke="#ED544E"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M6 5.5H9.5V2"
                              stroke="#ED544E"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        )}

                        <p className="font-medium text-xs">{data.stat}</p>
                      </div>
                      <p className="text-sm">vs. previous month</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* list of last orders */}

              <div className="w-full col-span-3">
                <div className=" border w-full rounded-xl dark:border-neutral-700 bg-white dark:bg-neutral-900 p-5 flex flex-col gap-4">
                  <header className="flex justify-between">
                    <h2 className="text-lg font-semibold">Last Orders</h2>
                    <button className="text-lg font-semibold text-[#34CAA5]">
                      See All
                    </button>
                  </header>

                  <div className="hidden sm:grid sm:grid-cols-6 mb-2">
                    {["Name", "Date", "Amount", "Status", "Invoice"].map(
                      (name, index) => (
                        <div
                          key={index}
                          className={name === "Name" && "col-span-2"}
                        >
                          <p className="font-medium text-neutral-500">{name}</p>
                        </div>
                      )
                    )}
                  </div>

                  <div className="flex flex-col gap-6">
                    {lastOrdersData.map((data, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:grid sm:grid-cols-6 gap-1 sm:gap-1 sm:border-none border border-dashed dark:border-neutral-600 rounded-2xl p-2"
                      >
                        <div className="col-span-2 flex items-center gap-2">
                          <img
                            // src="/pp.png"
                            src={`https://xsgames.co/randomusers/assets/avatars/male/${
                              20 + index
                            }.jpg`}
                            alt=""
                            className="h-8 aspect-square rounded-full"
                          />
                          <p className="font-medium  text-[#3A3F51] dark:text-neutral-200">
                            {data.name}
                          </p>
                        </div>

                        <p className="sm:text-base text-xs text-neutral-600 dark:text-neutral-400">
                          {data.date}
                        </p>
                        <p className="font-medium text-[#0D062D] dark:text-neutral-200">
                          {data.amount}
                        </p>
                        <p
                          className={`${
                            data.status === "Paid"
                              ? "text-[#34CAA5]"
                              : "text-[#ED544E]"
                          } sm:text-base text-sm font-medium `}
                        >
                          {data.status}
                        </p>

                        <div className="hidden sm:flex items-center gap-2">
                          <DocumentDownload
                            size="16"
                            className="text-[#0D062D] dark:text-neutral-200"
                            variant="Outline"
                          />
                          <p className="text-[#0D062D] dark:text-neutral-200">
                            View
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* top platform */}
              <div className="col-span-2 border rounded-xl dark:border-neutral-700 bg-white dark:bg-neutral-900 p-4">
                <header className="flex justify-between">
                  <h2 className="text-lg font-semibold">Top Platform</h2>
                  <button className="text-lg font-semibold text-[#34CAA5]">
                    See All
                  </button>
                </header>

                <div className="flex flex-col gap-6 mt-4">
                  {topPlatformsData.map((data, index) => (
                    <div key={index} className="flex flex-col gap-4">
                      <h2 className="text-lg font-medium">{data.name}</h2>

                      <div className="relative w-full bg-neutral-200 dark:bg-neutral-700 h-3 rounded-[40px]">
                        <div
                          className={`absolute left-0 top-0 h-full rounded-[40px]  ${
                            data.width === 60
                              ? "w-[60%]"
                              : data.width === 50
                              ? "w-[50%]"
                              : data.width === 40
                              ? "w-[40%]"
                              : data.width === 45
                              ? "w-[50%]"
                              : null
                          }  ${
                            index === 0
                              ? "bg-[#6160DC]"
                              : index === 1
                              ? "bg-[#54C5EB]"
                              : index === 2
                              ? "bg-[#FFB74A]"
                              : index === 3
                              ? "bg-[#FF4A55]"
                              : null
                          }`}
                        ></div>
                      </div>

                      <div className="font-medium flex justify-between text-neutral-500 dark:text-neutral-300">
                        <p>{data.amount}</p>

                        <p>{data.stat}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
