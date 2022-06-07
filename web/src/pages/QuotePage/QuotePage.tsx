import { Link, routes } from "@redwoodjs/router";
import { MetaTags } from "@redwoodjs/web";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Alert from "src/components/Alert";
import Layout from "src/layouts/Layout";
import { StoryBlok } from "src/types";
import Fade from "react-reveal/Fade";
import { richText } from "src/utils/storyblok";
const QuotePage = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([] as unknown as StoryBlok);
  const [isError, setIsError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    who: "",
    numbers: "",
    email: "",
    dfunction: "",
    phone: "",
    name: "",
    lastname: "",
    structure: "",
    message: "",
    error: "",
  });
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
  });
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e)
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      console.log(e)
      setIsError(true)
    } catch(e) {
      console.log("obj:" + e)
      setIsError(false)
    }
  };

  return (
    <>
      <MetaTags title="Quote" description="Quote page" />

      <Layout
        children={
          <>
            <Alert
              state="success"
              message={"Merci de votre confiance !"}
              show={success}
              action={() => setSuccess(false)}
              alertMessage={"Votre formulaire à bien été envoyer !"}
            />
            <Alert
              state="error"
              message={form.error}
              show={isError}
              action={() => setIsError(false)}
              alertMessage={"Woops.."}
            />

            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={500}
              delay={500}
              distance="30px"
            >
              <div className="content-center justify-center my-3 max-w-screen">
                <div className="grid grid-cols-1 mx-0 my-2 space-x-10 md:grid-cols-2 xl:grid-cols-2 sm:grid-cols-2 sm:mx-5 md:mx-5">
                  <div className="flex justify-center">
                    <form
                      className="grid justify-center grid-cols-1 md:grid-cols-1 xl:grid-cols-2 xl:w-100 md:w-96 sm:grid-cols-1 gap-x-2 gap-y-3"
                      onSubmit={onSubmit}
                    >
                      <div className="flex flex-col">
                        <label className="font-light">Vous êtes:*</label>
                        <input
                          className="h-12 p-3 transition bg-white border-2 rounded-md dark:bg-neutral-900 border-orangeDTTV w-26 focus:outline-none"
                          autoComplete="off"
                          onChange={(e: ChangeEvent<HTMLInputElement>) => handleSubmit(e)
                          }
                          value={form.who}
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-light">
                          Nombre de repas servis par jour:*
                        </label>
                        <input
                          className="h-12 p-3 transition bg-white border-2 rounded-md dark:bg-neutral-900 border-orangeDTTV w-26 focus:outline-none"
                          autoComplete="off"
                          onChange={(e: ChangeEvent<HTMLInputElement>) => handleSubmit(e)
                          }
                          value={form.numbers}
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-light">Structure:*</label>
                        <input
                          className="h-12 p-3 transition bg-white border-2 rounded-md dark:bg-neutral-900 border-orangeDTTV w-26 focus:outline-none"
                          autoComplete="off"
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setForm({
                              ...form,
                              structure: e.target.value
                            })
                          }
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-light">Fonction:*</label>
                        <input
                          className="h-12 p-3 transition bg-white border-2 rounded-md dark:bg-neutral-900 border-orangeDTTV w-26 focus:outline-none"
                          autoComplete="off"
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setForm({
                              ...form,
                              dfunction: e.target.value
                            })
                          }
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-light">Nom:*</label>
                        <input
                          className="h-12 p-3 transition bg-white border-2 rounded-md dark:bg-neutral-900 border-orangeDTTV w-26 focus:outline-none"
                          autoComplete="off"
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setForm({
                              ...form,
                              name: e.target.value
                            })
                          }
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-light">Prénom:*</label>
                        <input
                          className="h-12 p-3 transition bg-white border-2 rounded-md dark:bg-neutral-900 border-orangeDTTV w-26 focus:outline-none"
                          autoComplete="off"
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setForm({
                              ...form,
                              lastname: e.target.value
                            })
                          }
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-light">Email:*</label>
                        <input
                          className="h-12 p-3 transition bg-white border-2 rounded-md dark:bg-neutral-900 border-orangeDTTV w-26 focus:outline-none"
                          autoComplete="off"
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setForm({
                              ...form,
                              email: e.target.value
                            })
                          }
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-light">Téléphone:*</label>
                        <input
                          className="h-12 p-3 transition bg-white border-2 rounded-md dark:bg-neutral-900 border-orangeDTTV w-26 focus:outline-none"
                          autoComplete="off"
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setForm({
                              ...form,
                              phone: e.target.value
                            })
                          }
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <label className="font-light">Message:*</label>
                        <textarea
                          className="w-full h-auto p-3 px-3 py-2 text-black transition bg-white border-2 rounded-md focus:outline-none dark:bg-neutral-900 border-orangeDTTV w-26 dark:text-white"
                          autoComplete="off"
                          rows={5}
                          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                            setForm({
                              ...form,
                              message: e.target.value
                            })
                          }
                        />
                        <div className="flex items-center justify-center p-2">
                          <button
                            type="submit"
                            className="rounded-full relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-orange-600 active:shadow-none shadow-lg bg-gradient-to-tr from-orange-500 to-orange-600 border-orangeDTTV text-white"
                          >
                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                            <span className="relative text-[15px]">
                              Envoyer
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="flex flex-col space-x-10">
                    {data ? (
                      <>
                        <div className="space-y-4">
                          <h1 className="text-left pb-2 text-2xl lg:text-3xl md:!text-4xl sm:text-3xl xl:!text-6xl 2xl:!text-6xl font-bold text-orangeDTTV -rotate-2">
                            {data?.story?.content?.MoneyTitle}
                            <div className="hidden bg-growing-underline-black">
                              &nbsp;
                            </div>
                          </h1>
                          <div className="space-y-4">
                            <p className="text-xl font-bold sm:text-md">
                              Vous aussi, valorisez vos biodéchets
                            </p>
                            <div className="flex flex-col space-y-2">
                              <p className="space-y-2 text-xl font-light">
                                {richText(data?.story?.content?.MoneyText)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="space-y-4">
                        <h1 className="text-left pb-2 text-2xl lg:text-3xl md:!text-4xl sm:text-3xl xl:!text-6xl 2xl:!text-6xl font-bold text-orangeDTTV -rotate-2 bg-neutral-100 dark:bg-neutral-800 h-20 rounded-lg animate-pulse"></h1>
                        <br />
                        <div className="space-y-4">
                          <p className="text-xl font-bold rounded-lg sm:text-md bg-neutral-100 dark:bg-neutral-800 h-28 animate-pulse"></p>
                          <div className="flex flex-col space-y-2">
                            <p className="h-20 space-y-2 text-xl font-light rounded-lg bg-neutral-100 dark:bg-neutral-800 animate-pulse"></p>
                          </div>
                        </div>
                      </div>
                    )}
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

export default QuotePage;
