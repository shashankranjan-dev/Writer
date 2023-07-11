import React, { useState } from "react";
import Swal from "sweetalert2";

function Contact() {
  const [status, setStatus] = useState("Submit");
  const [mailSent, setMailSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    console.log("Sender:" + e.target.elements.email.value);
    let details = {
      name: e.target.elements.full_name.value,
      email: e.target.elements.email.value,
      message: e.target.elements.message.value,
      // phone: e.target.elements.phone.value,
    };
    console.log(details);
    let response = await fetch("https://writer-backend.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    console.log(result);
    if (result.status === "Message Sent") {
      Swal.fire({
        icon: "success",
        title: "Message Sent",
        text: "We will get back to you soon!",
      }).then((result) => {
        if (result.isConfirmed) {
          setMailSent(true);
        }
      });
    } else {
      alert("Message failed to send.");
    }
  };
  return (
    <div>
      <section class="relative z-10 overflow-hidden dark:bg-stone-900 py-20  lg:py-[70px]">
        <div class="container mx-auto">
          <div class="-mx-4 flex flex-wrap lg:justify-evenly">
            <div class=" py-6 sm:py-8 lg:py-12">
              <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div class="mb-10 md:mb-16">
                  <h2 class="mb-4 text-start px-6 sm:px-0 text-2xl font-bold font-assistant tracking-widest text-gray-100 md:mb-6 lg:text-3xl">
                    Get in touch
                  </h2>

                  <p class="mx-auto max-w-screen-md px-6 sm:px-0 font-assistant tracking-widest text-justify text-gray-100 md:text-lg">
                    I am available for general questions/comments/concerns as
                    well as potential employment opportunities in writing,
                    editing, or teaching/tutoring.
                  </p>
                </div>

                <form
                  id="contact"
                  onSubmit={handleSubmit}
                  class="mx-auto grid max-w-screen-md gap-6 px-6 sm:px-0 sm:grid-cols-2"
                >
                  <div>
                    <label
                      htmlFor="full_name"
                      class="mb-2 inline-block text-sm text-gray-100 sm:text-base"
                    >
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      placeholder="Your Name"
                      class="w-full rounded border bg-stone-900 px-3 py-2 text-gray-100 outline-none ring-indigo-300 transition duration-100 focus:ring"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      class="mb-2 inline-block text-sm text-gray-100 sm:text-base"
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      class="w-full rounded border bg-stone-900 px-3 py-2 text-gray-100 outline-none ring-indigo-300 transition duration-100 focus:ring"
                    />
                  </div>

                  <div class="sm:col-span-2">
                    <label
                      htmlFor="message "
                      class="mb-2 inline-block text-sm text-gray-100 sm:text-base"
                    >
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      class="h-64 w-full rounded border bg-stone-900 px-3 py-2 text-gray-100 outline-none ring-indigo-300 transition duration-100 focus:ring"
                    ></textarea>
                  </div>

                  <div class="flex items-center justify-between sm:col-span-2">
                    <button
                      type="submit"
                      class="inline-block rounded-lg bg-stone-700 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                    >
                      {status}
                    </button>
                  </div>

                  <p class="text-xs text-gray-400">
                    By signing up to our newsletter you agree to our{" "}
                    <a
                      href="#"
                      class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
