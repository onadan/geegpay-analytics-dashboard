import {
  ArrowDown2,
  Calendar,
  Notification,
  SearchNormal1,
} from "iconsax-react";
import { getCurrentDate } from "../utils";

export default function Header() {
  const formattedDate = getCurrentDate();
  return (
    <>
      <div className="px-5 flex justify-between items-center h-[88px] bg-[#FAFAFA] dark:bg-neutral-900 dark:border-neutral-700 border-b">
        <p className="font-semibold">Dashboard</p>

        <div className="flex items-center gap-2 md:gap-5">
          <div className="relative hidden md:flex items-center">
            <div className="left-4 absolute flex items-center gap-2">
              <SearchNormal1 size={18} color="#78828A" />

              <p className="text-[#78828A]">Search ...</p>
            </div>
            <input
              type="search"
              className="h-12 border p-4 rounded-3xl w-[338px] dark:bg-neutral-800 dark:border-neutral-600"
            />
          </div>

          <div className="lg:flex gap-2 items-center px-4 hidden ">
            <Calendar size={20} className="text-black dark:text-neutral-100" />
            <p className="font-medium text-sm">{formattedDate}</p>
          </div>

          <div className="h-10 aspect-square rounded-full border dark:border-neutral-600  flex justify-center items-center">
            <Notification
              size="20"
              className="text-[#0D062D] dark:text-neutral-300"
            />
          </div>

          <div className="rounded-full h-[52px] border dark:border-neutral-700 flex gap-1 lg:gap-3 items-center px-2 py-[6px]">
            <div className="h-[38px] aspect-square bg-neutral-700 rounded-full">
              <img src="/pp.png" alt="" className="object-fit object-cover h-full w-full" />
            </div>
            <div className="text-center leading-none hidden xl:block">
              <p>John Doe</p>
              <p className="text-neutral-500 dark:text-neutral-400">
                onadan45@gmail.com
              </p>
            </div>
            <div className="lg:ml-1">
              <ArrowDown2
                size={20}
                className="text-black dark:text-neutral-100"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
