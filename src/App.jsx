import {
  ArrowCircleRight2,
  ArrowDown2,
  Box,
  Calendar,
  Category,
  DiscountShape,
  InfoCircle,
  Logout,
  Moon,
  Notification,
  Profile2User,
  SearchNormal1,
  Setting2,
  Sun1,
  TrendUp,
} from "iconsax-react";
import useMode from "./hooks/useDarkMode";
import { format } from "date-fns";

function getCurrentDate() {
  const currentDate = new Date();
  return format(currentDate, "MMMM d, yyyy");
}

export default function App() {
  const [isDarkMode, toggleDarkMode] = useMode();
  const formattedDate = getCurrentDate();

  return (
    <>
      {/* <div className="text-3xl">App</div> */}

      {/* <div>Dark Mode: {isDarkMode}</div> */}

      {/* Sidebar */}

      <div className="fixed top-0 left-0 w-20 flex flex-col justify-between pb-5 gap-[56px] dark:bg-neutral-900 dark:border-neutral-700 bg-[#F7F8FA] h-screen border-[#EBECF2] border pt-5 overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-w-6">
        <div className="flex flex-col gap-[26px] items-center">
          <img src="/logo.svg" alt="logo" className="py-1" />

          <div className="relative w-full flex justify-center items-center">
            <Category
              className="text-[#0D062D] dark:text-white"
              variant="Bulk"
              role="button"
              tabIndex={1}
              aria-label="Dashboard"
            />
            <svg
              className="right-0 absolute "
              xmlns="http://www.w3.org/2000/svg"
              width="3"
              height="21"
              viewBox="0 0 3 21"
              fill="none"
            >
              <path
                d="M6.53467e-06 3.02509C7.11773e-06 1.42129 1.40951 0.182713 3 0.388889V21C1.34315 21 4.88293e-07 19.6569 1.09063e-06 18L6.53467e-06 3.02509Z"
                fill="#0D062D"
                className="dark:fill-[white]"
              />
            </svg>
          </div>

          <div>
            <TrendUp
              color="#B2ABAB"
              variant="Broken"
              role="button"
              tabIndex={1}
              aria-label="Dashboard"
            />
          </div>

          <div>
            <Profile2User
              color="#B2ABAB"
              variant="Broken"
              role="button"
              tabIndex={1}
              aria-label="Dashboard"
            />
          </div>

          <div>
            <Box
              color="#B2ABAB"
              variant="Broken"
              role="button"
              tabIndex={1}
              aria-label="Dashboard"
            />
          </div>

          <div>
            <DiscountShape
              color="#B2ABAB"
              variant="Broken"
              role="button"
              tabIndex={1}
              aria-label="Dashboard"
            />
          </div>

          <div>
            <InfoCircle
              color="#B2ABAB"
              variant="Broken"
              role="button"
              tabIndex={1}
              aria-label="Dashboard"
            />
          </div>

          <div
            className="flex flex-col gap-4 items-center w-max bg-white p-2 rounded-full dark:bg-neutral-800"
            onClick={() => {
              toggleDarkMode();
            }}
          >
            <button
              className={`${
                !isDarkMode && "bg-[#34CAA5]"
              } transition duration-150 rounded-full w-[30px] aspect-square flex items-center justify-center`}
              tabIndex={1}
            >
              <Sun1
                size={!isDarkMode ? "16" : "24"}
                color={!isDarkMode ? "#fff" : "#B2ABAB"}
                variant="Bold"
              />
            </button>

            <button
              className={`${
                isDarkMode && "bg-[#34CAA5]"
              } transition duration-150 rounded-full w-[30px] aspect-square flex items-center justify-center  `}
              tabIndex={1}
            >
              <Moon
                size={isDarkMode ? "16" : "24"}
                color={isDarkMode ? "#fff" : "#B2ABAB"}
                variant="Bold"
              />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-[26px] items-center">
          <div>
            <ArrowCircleRight2
              color="#B2ABAB"
              variant="Broken"
              role="button"
              tabIndex={1}
              aria-label="Dashboard"
            />
          </div>

          <div>
            <Setting2
              color="#B2ABAB"
              variant="Broken"
              role="button"
              tabIndex={1}
              aria-label="Dashboard"
            />
          </div>

          <div>
            <Logout
              color="#B2ABAB"
              variant="Broken"
              role="button"
              tabIndex={1}
              aria-label="Dashboard"
            />
          </div>
        </div>
      </div>

      {/* Top bar */}

      <div className="ml-20">
        <div className="px-5 flex justify-between items-center h-[88px] bg-[#FAFAFA] dark:bg-neutral-900 dark:border-neutral-700 border-b">
          <p className="font-semibold">Dashboard</p>

          <div className="flex items-center gap-5">
            <div className="relative flex items-center">
              <div className="left-4 absolute flex items-center gap-2">
                <SearchNormal1 size={18} color="#78828A" />

                <p className="text-[#78828A]">Search ...</p>
              </div>
              <input
                type="search"
                className="h-12 border p-4 rounded-3xl w-[338px] dark:bg-neutral-800 dark:border-neutral-600"
              />
            </div>

            <div className="flex gap-2 items-center px-4">
              <Calendar
                size={20}
                className="text-black dark:text-neutral-100"
              />
              <p className="font-medium text-sm">{formattedDate}</p>
            </div>

            <div className="h-10 aspect-square rounded-full border dark:border-neutral-600  flex justify-center items-center">
              <Notification
                size="20"
                className="text-[#0D062D] dark:text-neutral-300"
              />
            </div>

            <div className="rounded-full h-[60px] border dark:border-neutral-700 flex gap-4 items-center px-4 py-2">
              <div className="h-[38px] aspect-square bg-neutral-700 rounded-full"></div>
              <div className="text-right leading-none">
                <p>John Doe</p>
                <p className="text-neutral-500 dark:text-neutral-400">
                  onadan45@gmail.com
                </p>
              </div>
              <div>
                <ArrowDown2
                  size={20}
                  className="text-black dark:text-neutral-100"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="border h-[374px] w-[806px] rounded-xl dark:border-neutral-700"></div>
        </div>
      </div>
    </>
  );
}
