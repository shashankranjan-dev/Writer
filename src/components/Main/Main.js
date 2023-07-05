import React from "react";
import { Link } from "react-router-dom";

const Feature6 = () => {
  return (
    // <div
    //   className="py-6 sm:py-8 lg:py-96"

    // >
    //   <div class="mx-auto max-w-screen-xl  px-4 md:px-8">
    //     <div class="mb-6 flex items-end justify-between gap-4">
    //       <Link
    //         to="/writing"
    //         class="inline-block rounded-lg  text-center text-sm font-semibold text-white outline-none  tracking-widest  md:px-8 md:py-3 md:text-5xl font-assistant"
    //       >
    //         Writing
    //       </Link>
    //       <Link
    //         to="/find"
    //         class="inline-block rounded-lg   text-center text-sm font-semibold text-white outline-none tracking-wide  md:px-8 md:py-3 md:text-5xl font-assistant"
    //       >
    //         I and Eye
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="mx-auto container py-8  sm:py-10 md:py-12 lg:py-32 px-4 md:px-6 2xl:px-0 flex justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 space-y-6 lg:space-y-0">
        <div className="relative">
          <img
            className="hidden lg:block"
            src="https://i.ibb.co/0qHj658/Group-1786.png"
            alt="chair-wood-fire"
          />
          <img
            className="hidden sm:block lg:hidden"
            src="https://i.ibb.co/mGM3xtB/Group-1786-1.png"
            alt="chair-wood-fire"
          />
          <img
            className="sm:hidden w-[1200px]"
            src="https://i.ibb.co/ZVX8rPm/Group-1786.png"
            alt="chair-wood-fire"
          />
          <div className="absolute bottom-4 sm:bottom-10 inset-x-4 sm:inset-x-10 p-6 bg-white flex flex-col justify-start items-start">
            <div>
              <Link
                to="/writing"
                className="text-2xl font-semibold leading-6 text-gray-800 tracking-widest font-assistant"
              >
                Writing
              </Link>
            </div>
            <div className="mt-2">
              <p className="text-base leading-6 sm:leading-4 text-gray-600">
                Explore kitchen’s latest interior designs
              </p>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center space-x-2">
                <Link
                  to="/writing"
                  className="text-base font-medium leading-none hover:underline text-gray-800"
                >
                  Explore
                </Link>
                <svg
                  className="fill-current"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33337 8H12.6667"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 10.6667L12.6667 8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 5.33333L12.6667 8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            className="hidden lg:block"
            src="https://i.ibb.co/0qHj658/Group-1786.png"
            alt="chair-wood-fire"
          />
          <img
            className="hidden sm:block lg:hidden"
            src="https://i.ibb.co/mGM3xtB/Group-1786-1.png"
            alt="chair-wood-fire"
          />
          <img
            className="sm:hidden w-[1200px]"
            src="https://i.ibb.co/ZVX8rPm/Group-1786.png"
            alt="chair-wood-fire"
          />
          <div className="absolute bottom-4 sm:bottom-10 inset-x-4 sm:inset-x-10 p-6 bg-white flex flex-col justify-start items-start">
            <div>
              <p className="text-2xl font-semibold leading-6 text-gray-800 tracking-widest font-assistant">
                I and Eye
              </p>
            </div>
            <div className="mt-2">
              <p className="text-base leading-6 sm:leading-4 text-gray-600">
                Explore Patio’s latest interior design collection
              </p>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center space-x-2">
                <Link
                  to="/find"
                  className="text-base font-medium leading-none hover:underline text-gray-800"
                >
                  Explore
                </Link>
                <svg
                  className="fill-current"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33337 8H12.6667"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 10.6667L12.6667 8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 5.33333L12.6667 8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature6;
