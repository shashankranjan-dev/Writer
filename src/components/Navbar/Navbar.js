import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "../../index.css";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav class=" bg-stone-900 border-gray-700">
      {/* <div className="mx-auto text-red-500 text-center pt-1 -ml-20 ">🔴</div> */}
      <div class="max-w-screen-xl pt-6 pl-10 sm:pl-10 flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" class="flex items-center">
          <span class="self-center text-4xl sm:text-3xl  text-white naziya   tracking-wider">
            Naziya Khan
          </span>
        </Link>

        <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          {/* <ul class="flex flex-col font-medium mt-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link
                to="/about"
                href="#1"
                class="block py-2 pl-3 pr-4 text-white

                font-bold font-assistant tracking-widest rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                href="#!"
                class="block py-2 pl-3 pr-4 font-bold font-assistant tracking-widest  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
          </ul> */}
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/about"
                href="#1"
                class="block py-2 pl-3 pr-4 text-white

                font-bold font-assistant tracking-widest rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                href="#!"
                class="block py-2 pl-3 pr-4 font-bold font-assistant tracking-widest  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg class="w-5 text-gray-300" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div class="absolute top-0 left-0 w-full">
              <div class="p-5 bg-white border rounded shadow-sm z-100">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      class="inline-flex items-center"
                    >
                      <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Naziya Khan
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul class="space-y-4">
                    <li>
                      <Link
                        to="/about"
                        aria-label="Our product"
                        title="Our product"
                        class="  font-bold font-assistant tracking-widest text-black"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        aria-label="Our product"
                        title="Our product"
                        class="font-bold font-assistant tracking-widest text-black"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
