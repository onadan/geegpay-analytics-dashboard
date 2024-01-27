import {
  ArrowCircleRight2,
  Box,
  Category,
  DiscountShape,
  InfoCircle,
  Logout,
  Moon,
  Profile2User,
  Setting2,
  Sun1,
  TrendUp,
} from "iconsax-react";
import useDarkMode from "../hooks/useDarkMode";

export default function Sidebar() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <>
      <div className="flex fixed top-0 left-0 w-16 sm:w-20 flex-col justify-between pb-5 gap-[36px] dark:bg-neutral-900 dark:border-neutral-700 bg-[#F7F8FA] h-screen border-[#EBECF2] border pt-5 overflow-y-auto custom-scrollbar">
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
    </>
  );
}
