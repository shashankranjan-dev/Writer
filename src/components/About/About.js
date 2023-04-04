import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div>
      <div class="py-6 bg-stone-900">
        <div class="container m-auto px-6 text-white md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-5/12">
              <img src="/nazu1.jpg" alt="" loading="lazy" width="" height="" />
            </div>
            <div class="md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-white font-bold  font-assistant md:text-3xl">
                <span className="text-white text-5xl">I</span>ntroduction
              </h2>
              <p class="mt-6 text-white font-light text-lg font-assistant text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
                consequatur! Officiis id consequatur atque doloremque!
              </p>
              <p class="mt-4 text-white font-light text-lg  font-assistant  text-justify">
                {" "}
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia. Nobis minus voluptatibus pariatur
                dignissimos libero quaerat iure expedita at? Asperiores nemo
                possimus nesciunt dicta veniam aspernatur quam mollitia.
              </p>
              <p class="mt-4 text-white font-light text-lg font-assistant text-justify">
                {" "}
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia. Nobis minus voluptatibus pariatur
                dignissimos libero quaerat iure expedita at? Asperiores nemo
                possimus nesciunt dicta veniam aspernatur quam mollitia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
