import clsx from "clsx";
import Container from "../../shared/Container";
import Header from "../../widgets/Header";
import Footer from "../../widgets/Footer";
import ImageContainer from "../../shared/ImageContainer";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Text } from "../../shared/Text";

const Main = () => {
  const { t, i18n } = useTranslation();
  const [currentY, setCurrentY] = useState(0);
  const scrollY = useScroll().scrollY;

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
    setCurrentY(latest);
  });

  return (
    <div className={clsx("flex flex-col place-items-center w-full text-white", "transition duration-300")}>
      <Header />

      <div className="flex flex-col p-4 gap-16 max-w-6xl">
        <Text as="h1" className="w-full text-6xl text-center my-16" useDots={true}>
          {t("welcome")}
        </Text>

        <div className="flex w-full md:min-h-136 gap-8 place-items-center place-content-center my-32">
          <ImageContainer
            src="/assets/images/image1.png"
            className="max-w-90 group min-h-136"
            decorations={
              <div className="relative w-full h-full rounded-4xl overflow-clip">
                <div className="absolute -bottom-32 group-hover:bottom-10 left-10 size-32 bg-[#f3114a]/30 shadow-md transform duration-300 group-hover:rotate-45" />
                <div className="absolute -bottom-32 group-hover:bottom-5 left-5 size-32 bg-[#ce4217]/40 shadow-md transform duration-300 group-hover:rotate-12" />
                <div className="absolute -bottom-32 group-hover:bottom-0 size-32 bg-[#f39111]/50 shadow-md transform duration-300" />

                <div className="absolute w-0 h-8 bg-[#df610c]/70 group-hover:w-full transform duration-300" />
                <div className="absolute mt-5 w-0 h-8 bg-[#dcdf0c]/60 group-hover:w-[80%] transform duration-300" />
                <div className="absolute mt-3 w-0 h-8 bg-[#a0df0c]/50 group-hover:w-[60%] transform duration-300" />
              </div>
            }
          />
          <div>
            <Text as="h2" className="text-4xl w-70" useDots={true}>
              {t("some-title")}
            </Text>
            <Text as="h3" className="text-xl ml-5 w-105">
              {t("some-message")}
            </Text>
          </div>
        </div>

        <div className="flex flex-col gap-8 my-16">
          <div className="relative">
            <motion.div
              className={clsx(
                "absolute bg-[#ff6600]/50 h-10 top-0 -z-5",
                i18n.language === "en" ? "rotate-6 w-25 left-52" : "rotate-2 w-62 left-59",
              )}
              animate={{
                scaleX: currentY > 900 ? "100%" : 0,
              }}
            />
            <Text className="text-4xl" id="about" useDots={true}>
              {t("about-title")}
            </Text>
          </div>
          <div className="flex gap-8">
            <Container image={<p className="text-[200px] absolute -bottom-30 -left-20">✌️</p>}>
              Hello, I&apos;m Albert and I was born in Karelia, Russia
              <br />
              and some text
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aperiam, neque in voluptatem quas sunt
              quisquam ipsam facere, nulla ratione aliquid nostrum ducimus praesentium assumenda commodi beatae
              expedita! Quae, excepturi.
              <Text as="p">{t("about-me")}</Text>
            </Container>
            <ImageContainer src="/assets/images/image2.png" className="min-h-136 min-w-90" />
          </div>
          <Container>
            <Text as="p">{t("hobbies")}</Text>
          </Container>
        </div>

        <div className="flex flex-col gap-8 my-16">
          <div className="relative">
            <motion.div
              className={clsx(
                "absolute bg-[#ff0055]/50 top-0 -z-5 -rotate-4 h-10",
                i18n.language === "en" ? "w-45 right-0" : "w-47 -right-2",
              )}
              animate={{
                scaleX: currentY > 1800 ? "100%" : 0,
              }}
            />
            <Text as="h2" className="text-4xl text-right" id="projects" useDots={true}>
              {t("projects-title")}
            </Text>
          </div>
          <div>
            <Container className="">
              <Text as="p">{t("projects-desc")}</Text>
            </Container>
          </div>
        </div>

        <div className="flex flex-col gap-8 my-16">
          <div className="place-items-center">
            <div className="relative w-fit">
              <motion.div
                className={clsx(
                  "absolute bg-[#7700ff]/50 h-10 top-0 -z-5",
                  i18n.language === "en" ? "rotate-4 w-30 left-14" : "rotate-4 w-40 left-22",
                )}
                animate={{
                  scaleX: currentY > 2200 ? "100%" : 0,
                }}
              />
              <Text as="h2" className="text-4xl font-bitcount w-fit" id="links" useDots={true}>
                {t("links-title")}
              </Text>
            </div>
          </div>
          <div className="grid gap-4 grid-cols-2 text-xl font-bold">
            <Container className="col-span-2 text-center">Discord: xannix_8248</Container>
            <Container className="text-center">
              <a href="https://t.me/Xannix_8248" className="text-blue-400 hover:text-transparent underline">
                Telegram
              </a>
            </Container>
            <Container className="text-center">
              <a
                href="https://steamcommunity.com/id/xannix_8248"
                className="text-blue-400 hover:text-transparent underline"
              >
                Steam
              </a>
            </Container>
            <Container className="text-center">
              <a href="https://github.com/Xannix246" className="text-blue-400 hover:text-transparent underline">
                Github
              </a>
            </Container>
            <Container className="text-center">Email: some-email@mail.com</Container>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
