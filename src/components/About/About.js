import { useRef } from "react";
import "../../App.css";
import Resume from "./Resume.pdf";

function About() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  setTimeout(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, 2000);

  return (
    <div>
      <header class="bg-header flex items-center justify-center h-screen pb-20">
        <div class="  mx-4 p-4 text-center md:p-4 ">
          {/* <button
            onClick={handleClick}
            class="text-2xl text-white font-bold  p-4 font-assistant uppercase tracking-widest"
          >
            About
          </button> */}
        </div>
      </header>

      <div ref={ref} class="py-28 bg-stone-900">
        <div class="container m-auto px-6 text-white md:px-12 xl:px-40">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-6/12">
              <img
                src="/IMG_20200106_203830_129.jpg"
                alt=""
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div class="md:7/12 lg:w-7/12">
              <h2 class="text-2xl text-white font-bold tracking-wide font-assistant md:text-3xl">
                <span className="text-white tracking-wide text-5xl">I</span>
                ntroduction
              </h2>
              <p class="mt-4 text-white font-light text-base font-assistant tracking-wide text-justify">
                I am a writer and journalist based in Delhi. Art, philosophy,
                culture, and truth are a few fascinating assimilations for me. I
                hold a bachelor's degree in Journalism from the International
                Institute of Mass Media, Delhi. Later, I started preparing for
                civil services and failed twice but gained a lifetime of
                abundant knowledge and a perspective that isn't clouded by
                societal and cultural biases.
              </p>
              <p class="mt-2 text-white font-light text-base font-assistant tracking-wide text-justify">
                {" "}
                Writing is a love affair with the written word and lingering
                thoughts, an eternal dance between experience, expression, and
                enactment, serving as a testament to the power of the human mind
                to give birth to new worlds, ideas, and possibilities. We become
                architects of our reality and, in turn, we shape and solidify
                our understanding of the subject.
              </p>
              <p class="mt-2 text-white font-light text-base font-assistant tracking-wide text-justify">
                {" "}
                My writing interests lie in building the power of storytelling
                in our society. Through poems, short stories, articles, and
                visual documentation, striving to weave threads of intellectual
                curiosity and emotional resonance. It is through these endeavors
                that we celebrate stories.
              </p>
              <br />
              <a
                href={Resume}
                download
                class="lg:inline-block mt-0  font-assistant tracking-widest text-sm text-white font-bold  hover:text-orange-200"
              >
                DOWNLOAD CV / RESUME
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
