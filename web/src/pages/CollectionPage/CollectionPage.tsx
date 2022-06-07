import { MetaTags } from "@redwoodjs/web";
import { useEffect, useState } from "react";
import { Icons } from "src/components/Icons";
import { StoryBlok } from "src/types";
import { richText } from "src/utils/storyblok";
import Fade from "react-reveal/Fade";
import Layout from "src/layouts/Layout";
import Images from "src/components/Card/Images";
import Content from "src/components/Card/Content";

const CollectionPage = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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
      <MetaTags title="Collection" description="Collection page" />

      <Layout
        children={
          <>
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={500}
              delay={500}
              distance="30px"
            >
              <div className="max-w-screen">
                <div className="grid grid-cols-1 mx-5 my-2 md:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1">
                  <div className="flex flex-col space-y-2">
                    {data ? (
                      <>
                        <Images
                          isLoading={isLoading}
                          image="/static/images/DETRI_211007_137.jpg"
                          width={320}
                          height={200}
                          onLoadingComplete={() => setLoading(false)}
                        />
                        <Images
                          isLoading={isLoading}
                          image="/static/images/DETRI_211007_336.jpg"
                          width={320}
                          height={200}
                          onLoadingComplete={() => setLoading(false)}
                        />
                        <Images
                          isLoading={isLoading}
                          image="/static/images/IMG_0099.jpg"
                          width={320}
                          height={200}
                          onLoadingComplete={() => setLoading(false)}
                        />
                        <Images
                          isLoading={isLoading}
                          image="/static/images/DETRI_211007_623.jpg"
                          width={320}
                          height={200}
                          onLoadingComplete={() => setLoading(false)}
                        />
                      </>
                    ) : (
                      <>
                        {[...Array(4)].map((_, i) => (
                          <>
                            <div>
                              <div className="rounded-lg w-80 bg-greenDTTV" />
                            </div>
                          </>
                        ))}
                      </>
                    )}
                    <span className="inline-flex justify-center space-x-2 2xl:justify-start xl:justify-start sm:justify-start md:justify-start">
                      <Icons
                        icons="photo"
                        className="w-6 h-6 text-black fill-current dark:text-white"
                      />
                      <p className="font-normal text-base mt-0.5">
                        François Passerini
                      </p>
                    </span>
                  </div>
                  <div className="flex flex-col justify-between space-x-10">
                    <>
                      <div className="space-y-4">
                        <h1 className="pb-2 text-3xl font-bold text-left md:text-6xl text-orangeDTTV -rotate-2">
                          COLLECTE
                        </h1>
                        <div className="space-y-4">
                          <p className="text-xl font-bold">
                            {data?.story?.content?.collectMiniText}
                          </p>
                          <div className="flex flex-col items-center content-center space-y-2">
                            <Content
                              number={1}
                              text={richText(
                                data?.story?.content?.collectFirstText,
                              )}
                            />
                            <Content
                              number={2}
                              text={richText(
                                data?.story?.content?.collectSecondText,
                              )}
                            />
                            <Content
                              number={3}
                              text={richText(
                                data?.story?.content?.collectTreeText,
                              )}
                            />

                            <div>
                              <p className="text-xl font-bold">
                                En camions, à vélos ou grâce à l'installation de
                                Bornes d'Apport Volontaire, nos équipes
                                parcourent les rues de Bordeaux et ses alentours
                                pour collecter l'ensemble de vos restes
                                alimentaires !
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  </div>
                  <div className="hidden space-y-2">
                    <h1 className="text-2xl font-medium text-center ">
                      Où intervenons-nous ?
                    </h1>
                    <div className="flex justify-center">
                      <iframe
                        title="Maps"
                        src="https://www.google.com/maps/d/embed?mid=1olZRTAgF9fAuYSYS-eFXcWhBzopWmh3g&ehbc=2E312F"
                        className="w-96 h-80 sm:w-52 sm:h-52 md:w-80 md:h-150 lg:w-200 lg:200 rounded-2xl"
                        loading="lazy"
                        style={{ border: 0 }}
                        allowFullScreen
                      />
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

export default CollectionPage;
