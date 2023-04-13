import { PrismicRichText, usePrismicDocumentByUID } from "@prismicio/react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import RelatedArticle from "../../components/Article/RelatedArticle";
import Write from "../../components/Write/Write";

function ReadArticle() {
  const params = useParams();
  const { slug } = params;

  const [article] = usePrismicDocumentByUID("article", slug);
  console.log(article);

  return article ? (
    <div className="text-white">
      <Write />
      {/* <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    className="mr-4 w-16 h-16 rounded-full"
                    src="/nazu1.jpg"
                    alt="Jese Leos"
                  />
                  <div>
                    <a
                      href="!#"
                      rel="author"
                      className="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      Naziya Khan
                    </a>
                    <p className="text-base font-light text-gray-500 dark:text-gray-400">
                      Writer
                    </p>
                    <p className="text-base font-light text-gray-500 dark:text-gray-400">
                      <time
                        pubdate
                        datetime="2022-02-08"
                        title="February 8th, 2022"
                      >
                        Feb. 8, 2022
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold font-assistant tracking-widest leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                <PrismicRichText field={article.data.heading} />
              </h1>
            </header>
            <figure>
              <img
                src={article?.data.banner.url}
                alt={article?.data.banner.alt}
                className="mt-6 w-[1200px]"
              />
            </figure>
            <p className="lead text-justify mt-6 font-assistant font-semibold tracking-widest">
              <PrismicRichText field={article.data.description} />
            </p>
          </article>
        </div>
      </main> */}
      <div className="max-w-screen-lg mx-auto">
        <main class="mt-10">
          <div class="mb-4 md:mb-0 w-full mx-auto relative">
            <div class="px-4 lg:px-0">
              <h2 class="text-4xl font-semibold text-white text-center text-assistant tracking-widest leading-tight">
                <PrismicRichText field={article.data.heading} />
              </h2>
              {/* <a
                href="!#"
                class="py-2 text-blue-600 font-bold font-assistant tracking-widest inline-flex items-center justify-center mb-2"
              >
                Cryptocurrency
              </a> */}
            </div>

            <img
              src={article?.data.banner.url}
              alt={article?.data.banner.alt}
              class="w-full mt-6  sm:h-[600px] object-center lg:rounded"
            />
          </div>

          <div class="flex flex-col lg:flex-row lg:space-x-12">
            <div class="px-4 lg:px-0 mt-6 text-white text-justify text-base leading-relaxed w-full lg:w-3/4">
              <p class="pb-6 text-justify font-assistant tracking-wide">
                <PrismicRichText field={article.data.description} />
              </p>
            </div>

            <div class="w-full lg:w-1/4 m-auto mt-8 max-w-screen-sm">
              <div class="p-4 border-t border-b  md:border md:rounded">
                <div class="flex py-2">
                  <img
                    src="/nazu1.jpg"
                    class="h-12 w-12 rounded-full mr-2 object-cover"
                    alt=""
                  />
                  <div>
                    <p class="font-semibold text-white text-base">
                      {" "}
                      Naziya Khan{" "}
                    </p>
                    <p class="font-semibold text-white text-sm"> Writer </p>
                  </div>
                </div>
                <p class="text-white text-justify py-3">
                  Naziya Khan writes about technology Yourself required no at
                  thoughts delicate landlord it be. Branched dashwood do is
                  whatever it.
                </p>
                <button class="px-2 py-1 text-white bg-blue-700 flex w-full items-center justify-center rounded">
                  <a href="https://www.linkedin.com/in/naziya-perveen-3a010b262/">
                    {" "}
                    Follow
                  </a>

                  <i class="bx bx-user-plus ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <aside
        aria-label="Related articles "
        className="py-8 lg:py-24 mt-16  bg-stone-800"
      >
        <div className="px-20 sm:px-0 justify-center mx-auto max-w-screen-lg">
          <h2 className="mb-8 text-2xl font-bold  text-white">
            Related articles
          </h2>
          <div className="grid gap-12  sm:grid-cols-2 lg:grid-cols-4">
            {article.data?.body1[0]?.items.map((item) => (
              <RelatedArticle uid={item?.link.uid} />
            ))}
          </div>
        </div>
      </aside>
    </div>
  ) : (
    <></>
  );
}

export default ReadArticle;
