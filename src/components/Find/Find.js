import React from "react";

export default function Home() {
  return (
    <>
      {/* <div className="xl:px-20 px-6 py-2 xl:mx-auto xl:container">
        <div className="md:mt-0 mt-4 relative sm:flex items-center justify-center">
          <img
            src="/hi-removebg.png"
            alt=""
            className="w-full xl:h-full h-96  object-fill sm:block hidden"
          />
          <img
            src="/hi-removebg.png"
            alt=""
            className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0"
          />

          <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white bg-opacity-0 sm:absolute relative z-20 md:-mt-5 sm:-mt-5 mt-4 right-0 xl:mr-80 sm:mr-24">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991231.png"
              alt=""
              className="h-8 w-8 animate-bounce"
            />
            <p className="text-2xl font-bold leading-4 xl:mt-4 mt-2 bg-white bg-opacity-0  text-white animate-pulse">
              New Delhi
            </p>
          </div>
        </div>
      </div> */}
      <section class="px-4 py-24 mx-auto max-w-7xl">
        <div class="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div>
            <h2 class="mb-4 text-2xl font-extrabold font-assistant tracking-widest text-center text-blue-400 md:leading-tight sm:text-left md:text-4xl">
              Clear overview for efficient tracking
            </h2>
            <p class="mb-5 text-base  text-neutral-400  text-justify sm:text-left md:text-lg">
              Handle your subscriptions and transactions efficiently with the
              clear overview in Dashboard. Features like the smart search option
              allow you to quickly find any data you’re looking for.
            </p>
            <a href="!#" class="w-full btn text-white   btn-sm sm:w-auto">
              Learn More
            </a>
          </div>

          <div className="relative w-full  duration-300 hover:shadow-sm hover:shadow-blue-400 ">
            <video
              className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96 "
              controls
            >
              <source src="/VID_20230331_173630.mp4" type="video/mp4" />
            </video>

            {/* <button
              aria-label="Play Video"
              className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
            >
              <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                <svg
                  className="w-10 text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                </svg>
              </div>
            </button> */}
          </div>
        </div>
        <div class="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div class="order-none md:order-2">
            <h2 class="mb-4 text-2xl font-extrabold font-assistant tracking-widest text-center text-blue-400 md:leading-tight sm:text-left md:text-4xl">
              Decide how you integrate Payments
            </h2>
            <p class="mb-5 text-base text-justify text-neutral-400  sm:text-left md:text-lg">
              Love to code? Next to our ready-made and free plugins you can use
              our expansive yet simple API; decide how you integrate Payments
              and build advanced and reliable products yourself from scratch.
            </p>
            <a href="!#" class="w-full btn text-white btn-lg sm:w-auto">
              Learn More
            </a>
          </div>
          <div className="relative w-full transition-shadow duration-300 hover:shadow-sm hover:shadow-blue-400">
            <video
              className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
              controls
            >
              <source src="/VID_20230331_173630.mp4" type="video/mp4" />
            </video>
            {/* <a
              href="/"
              aria-label="Play Video"
              className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
            >
              <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                <svg
                  className="w-10 text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                </svg>
              </div>
            </a> */}
          </div>
        </div>
      </section>
    </>
  );
}
