import React from "react";
import { Link } from "react-router-dom";

const Feature6 = () => {
  return (
    <div className="py-6 sm:py-8 lg:py-96">
      <div class="mx-auto max-w-screen-xl  px-4 md:px-8">
        <div class="mb-6 flex items-end justify-between gap-4">
          <Link
            to="/writing"
            class="inline-block rounded-lg  text-center text-sm font-semibold text-white outline-none  tracking-widest  md:px-8 md:py-3 md:text-5xl font-assistant"
          >
            Writing
          </Link>
          <Link
            to="/find"
            class="inline-block rounded-lg   text-center text-sm font-semibold text-white outline-none tracking-wide  md:px-8 md:py-3 md:text-5xl font-assistant"
          >
            I and Eye
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feature6;
