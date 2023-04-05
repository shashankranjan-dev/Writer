import React from "react";

export default function Home() {
  return (
    <>
      <section class="text-gray-600 body-font relative">
        <div class="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14004.94041590989!2d77.14794963916768!3d28.652678336376148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02ec77443acb%3A0xc3e201a78b8d9851!2sPatel%20Nagar%2C%20New%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1680688360091!5m2!1sen!2sus"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="container px-5 py-96 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"></div>
        </div>
      </section>
    </>
  );
}
