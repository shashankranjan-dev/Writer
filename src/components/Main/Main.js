import React from "react";
import { Link } from "react-router-dom";

const Feature6 = () => {
  return (
    <div>
      <div className="mx-auto container py-8  sm:py-10 md:py-12 lg:py-16 px-4 md:px-6 2xl:px-40 flex justify-center items-center">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 space-y-6 lg:space-y-0">
          <div className="relative">
            <img
              className="hidden lg:block h-[700px] w-[600px]"
              src="/IMG_20230712_205114.jpg"
              alt="table-chair"
            />
            <img
              className="hidden sm:block lg:hidden h-[600px] w-[800px]"
              src="/IMG_20230712_205114.jpg"
              alt="table-chair"
            />
            <img
              className="sm:hidden h-[400px] w-[600px]"
              src="/IMG_20230712_205114.jpg"
              alt="table-chair"
            />
            <div className="absolute bottom-4 sm:bottom-10 inset-x-4 sm:inset-x-10 p-6 bg-white rounded-t-xl flex flex-col justify-start items-start">
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
                  Includes Information, utterance and self reflection
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
              className="hidden lg:block h-[700px] w-[620px]"
              src="/twhrn-4vy1i-001-01-01.jpeg.jpg"
              alt="table-chair"
            />
            <img
              className="hidden sm:block lg:hidden h-[600px] w-[800px]"
              src="/twhrn-4vy1i-001-01-01.jpeg.jpg"
              alt="table-chair"
            />
            <img
              className="sm:hidden h-[400px] w-[600px]"
              src="/twhrn-4vy1i-001-01-01.jpeg.jpg"
              alt="table-chair"
            />

            <div className="absolute bottom-4 sm:bottom-10 inset-x-4 sm:inset-x-10 p-6 bg-white flex flex-col justify-start items-start">
              <div>
                <p className="text-2xl font-semibold leading-6 text-gray-800 tracking-widest font-assistant">
                  I and Eye
                </p>
              </div>
              <div className="mt-2">
                <p className="text-base leading-6 sm:leading-4 text-gray-600">
                  I saw all this, hence
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
    </div>
  );
};

export default Feature6;
