import { Link, routes } from "@redwoodjs/router";
import { MetaTags } from "@redwoodjs/web";
import { useEffect, useState } from "react";
import { Icons } from "src/components/Icons";
import Layout from "src/layouts/Layout";
import { StoryBlok } from "src/types";
import { cn } from "src/utils/classNames";
import { richText } from "src/utils/storyblok";
import Fade from "react-reveal/Fade";
import Alert from "src/components/Alert";

const CompostingPage = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([] as unknown as StoryBlok);
  useEffect(() => {
    fetch(
      `https://api.storyblok.com/v2/cdn/stories/preview?version=draft&token=4Sl5OG2kesCX0K97UTd0Wwtt`,
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .then(() => setLoading(false));
  }, []);
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }

    if (typeof window !== "undefined") {
      document.body.scrollTop = 0;
    }
  });
  return (
    <>
      <MetaTags title="Composting" description="Composting page" />

      <Layout
        children={
          <>
            <Alert
              show={showModal}
              alertMessage="Woops !"
              message="Cette action n'est pas encore disponible."
              action={() => setShowModal(false)}
              state="warning"
            />

            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={500}
              delay={500}
              distance="30px"
            >
              <div className="content-center justify-center my-3 max-w-screen">
                <div className="grid grid-cols-1 mx-5 my-2 space-y-2 md:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1">
                  <div className="flex flex-col space-y-4">
                    {data ? (
                      <>
                        <div className="space-y-4">
                          <h1 className="pb-2 text-2xl font-bold text-left md:text-6xl text-orangeDTTV -rotate-2">
                            COMPOSTAGE
                            <div className="hidden bg-growing-underline-black">
                              &nbsp;
                            </div>
                          </h1>
                          <div className="space-y-4">
                            <p className="text-xl font-bold sm:text-md">
                              {richText(
                                data?.story?.content?.compostSecondText,
                              )}
                            </p>
                            <div className="flex flex-col space-y-2">
                              <p className="p-4 pl-10 space-y-2 text-xl font-light">
                                {richText(
                                  data?.story?.content?.compostTreeText,
                                )}
                              </p>
                              <div className="inline-flex space-x-2">
                                <Icons icons="check" className="w-5 h-5" />
                                <p className="text-xl font-bold text-orangeDTTV">
                                  {richText(
                                    data?.story?.content?.compostFourText,
                                  )}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="grid justify-center md:space-y-0 space-y-2 space-x-0 md:inline-flex md:space-x-2 sm:space-x-0">
                            <div className="w-60">
                              <img
                                className={cn(
                                  "duration-700 ease-in-out group-hover:opacity-75 !rounded-2xl",
                                  isLoading
                                    ? "blur-xl !rounded-2xl"
                                    : "blur-0 !rounded-2xl",
                                )}
                                width="240"
                                height="180"
                                src="/static/images/DETRI_211007_399.jpg"
                                onLoadedData={() => setLoading(false)}
                              />
                            </div>
                            <div className="w-60">
                              <img
                                className={cn(
                                  "duration-700 ease-in-out group-hover:opacity-75 !rounded-2xl h-[10.002rem]",
                                  isLoading
                                    ? "blur-xl !rounded-2xl"
                                    : "blur-0 !rounded-2xl",
                                )}
                                width="240"
                                height="180"
                                src="/static/images/IMG_0553.jpg"
                                onLoadedData={() => setLoading(false)}
                              />
                            </div>
                            <div className="w-60">
                              <img
                                className={cn(
                                  "duration-700 ease-in-out group-hover:opacity-75 !rounded-2xl h-[10.002rem]",
                                  isLoading
                                    ? "blur-xl !rounded-2xl"
                                    : "blur-0 !rounded-2xl",
                                )}
                                width="240"
                                height="180"
                                src="/static/images/IMG_0278.jpg"
                                onLoadedData={() => setLoading(false)}
                              />
                            </div>
                          </div>
                          <span className="flex justify-center space-x-2 2xl:justify-start xl:justify-start sm:justify-start md:justify-start">
                            <Icons
                              icons="photo"
                              className="w-6 h-6 text-black fill-current dark:text-white"
                            />
                            <p className="font-normal text-base mt-0.5">
                              François Passerini
                            </p>
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="space-y-4">
                        <h1 className="h-20 pb-4 text-2xl font-bold text-left rounded-lg md:text-6xl text-orangeDTTV animate-pulse -rotate-2 bg-neutral-100 dark:bg-neutral-800"></h1>
                        <br />
                        <div className="space-y-6">
                          <p className="h-10 text-xl font-bold rounded-lg sm:text-md bg-neutral-100 dark:bg-neutral-800 animate-pulse"></p>
                          <div className="flex flex-col space-y-2">
                            <p className="h-20 p-4 pl-10 space-y-2 text-xl font-light rounded-lg animate-pulse bg-neutral-100"></p>
                            <div className="inline-flex space-x-2 rounded-lg animate-pulse bg-neutral-100 dark:bg-neutral-800">
                              <p className="h-20 text-xl font-bold text-orangeDTTV"></p>
                            </div>
                          </div>
                        </div>
                        <div className="grid justify-center space-x-0 md:inline-flex md:space-x-2 sm:space-x-0">
                          <div className="w-60">
                            <div className="!rounded-2xl w-60 h-44 animate-pulse bg-neutral-100 dark:bg-neutral-800" />
                          </div>
                          <div className="w-60">
                            <div className="!rounded-2xl w-60 h-44 animate-pulse bg-neutral-100 dark:bg-neutral-800" />
                          </div>
                          <div className="w-60">
                            <div className="!rounded-2xl w-60 h-44 animate-pulse bg-neutral-100 dark:bg-neutral-800" />
                          </div>
                        </div>
                        <span className="flex justify-center space-x-2 2xl:justify-start xl:justify-start sm:justify-start md:justify-start">
                          <p className="font-normal text-base mt-0.5 bg-neutral-100 dark:bg-neutral-800"></p>
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h1 className="pb-2 font-bold text-center md:text-vw text-vw text-orangeDTTV">
                      Vous souhaitez acheter du compost auprès de
                      <br /> la SCIC SA LES DETRITIVORES ?
                      <div className="hidden bg-growing-underline-black">
                        &nbsp;
                      </div>
                    </h1>
                    <div className="flex flex-col">
                      <button className="p-4 m-auto text-white transition rounded-full bg-greenDTTV hover:bg-green-900 dark:hover:bg-orange-600 dark:bg-orangeDTTV w-60 focus:outline-none">
                        <Link to="/quote">
                          <span className="text-xl font-normal uppercase focus:outline-none">
                            Commandez-le ici
                          </span>
                        </Link>
                      </button>
                      <span className="text-center text-orangeDTTV">ou</span>
                      <button
                        className="w-auto p-4 m-auto text-white transition rounded-full bg-greenDTTV hover:bg-green-900 dark:hover:bg-orange-600 dark:bg-orangeDTTV sm:w-auto xl:w-100 2xl:w-100 md:w-auto focus:outline-none"
                        onClick={() => {
                          setShowModal(true);
                          setTimeout(() => {
                            setShowModal(false);
                          }, 5000);
                        }}
                      >
                        <span className="font-normal uppercase focus:outline-none text-md md:text-xl">
                          Retrouvez-le dans nos magasins partenaires
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </>
        }
      />
    </>
  );
};

export default CompostingPage;
