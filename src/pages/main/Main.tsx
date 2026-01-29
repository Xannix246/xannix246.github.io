import clsx from "clsx";
import Container from "../../shared/Container";
import Header from "../../widgets/Header";
import Footer from "../../widgets/Footer";
import ImageContainer from "../../shared/ImageContainer";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Text } from "../../shared/Text";
import { FaDiscord, FaTelegram, FaSteam, FaGithub } from "react-icons/fa";

const Main = () => {
  const { t, i18n } = useTranslation();
  const [currentY, setCurrentY] = useState(0);
  const [width, setWidth] = useState(0);
  const scrollY = useScroll().scrollY;

  const handleWindowResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
    setCurrentY(latest);
  });

  return (
    <div className={clsx("flex flex-col place-items-center w-full text-white", "transition duration-300")}>
      <Header />

      <div className="flex flex-col p-4 gap-16 max-w-6xl">
        <Text as="h1" className="w-full text-3xl md:text-6xl text-center my-16" useDots={true}>
          {t("welcome")}
        </Text>

        <div className="flex flex-col md:flex-row w-full md:min-h-136 gap-8 place-items-center place-content-center my-32">
          <ImageContainer
            src="./assets/images/image1.png"
            className="w-90 md:w-auto md:max-w-90 group min-h-136"
            decorations={<p className="text-[150px] absolute -bottom-15 -right-15">🤗</p>}
          />
          <div>
            <Text as="h2" className="text-4xl w-70" useDots={true}>
              {t("some-title")}
            </Text>
            <Text as="h3" className="text-xl ml-5 md:w-105">
              {t("some-message")}
            </Text>
          </div>
        </div>

        <div className="flex flex-col gap-8 my-16">
          <div className="relative">
            <motion.div
              className={clsx(
                "absolute bg-[#ff6600]/50 h-10 top-0 -z-5",
                i18n.language === "en"
                  ? "rotate-6 w-25 left-52"
                  : width < 512
                    ? "rotate-2 w-62 -left-1 top-10"
                    : "rotate-2 w-62 left-59",
              )}
              animate={{
                scaleX: currentY > (width < 868 ? 1000 : 800) ? "100%" : 0,
              }}
            />
            <Text className="text-4xl" id="about" useDots={true}>
              {t("about-title")}
            </Text>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <Container className="md:min-h-136" image={<p className="text-[200px] absolute -bottom-30 -left-20">✌️</p>}>
              <Text as="p" className="whitespace-pre-line text-justify">
                {t("about-desc")}
              </Text>
            </Container>
            <ImageContainer src="./assets/images/image2.png" className="min-h-136 min-w-90" />
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-8 min-h-150 md:min-h-90">
            <Container>
              <Text as="p" className="whitespace-pre-line text-justify">
                {t("hobbies")}
              </Text>
            </Container>
            <ImageContainer src="./assets/images/image3.jpg" className="min-w-[50%]" />
          </div>
        </div>

        <div className="flex flex-col gap-8 my-16">
          <div className="relative">
            <motion.div
              className={clsx(
                "absolute bg-[#ff0055]/50 top-0 -z-5 -rotate-4 h-10",
                i18n.language === "en" ? "w-45 right-0" : "w-47 -right-2",
              )}
              animate={{
                scaleX: currentY > (width < 868 ? 2200 : 2000) ? "100%" : 0,
              }}
            />
            <Text as="h2" className="text-4xl text-right" id="projects" useDots={true}>
              {t("projects-title")}
            </Text>
          </div>
          <div className="flex flex-col md:flex-row gap-4 min-h-150 md:min-h-90">
            <Container>
              <a href="https://db.betonbrutal.com" className="font-bitcount text-2xl hover:underline">
                Beton Brutal Database
              </a>
              <Text as="p" className="whitespace-pre-line text-justify">
                {t("project1")}
              </Text>
            </Container>
            <ImageContainer src="/assets/images/image4.png" className="min-w-[50%]" />
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-4 min-h-150 md:min-h-90">
            <Container>
              <a href="https://github.com/Xannix246/BB-Map-Tools" className="font-bitcount text-2xl hover:underline">
                BB Map Tools
              </a>
              <Text as="p" className="whitespace-pre-line text-justify">
                {t("project2")}
              </Text>
            </Container>
            <ImageContainer src="./assets/images/image5.png" className="min-w-[50%]" />
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
                  scaleX: currentY > (width < 868 ? 3200 : 3000) ? "100%" : 0,
                }}
              />
              <Text as="h2" className="text-4xl font-bitcount w-fit" id="links" useDots={true}>
                {t("links-title")}
              </Text>
            </div>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 text-xl font-bold">
            <Container className="flex gap-4 justify-center place-items-center" rowSpan="sm:col-span-2">
              <FaDiscord size={32} className="text-[#2f4df5]" />
              <p>Discord: xannix_8248</p>
            </Container>
            <Container className="flex gap-4 justify-center place-items-center">
              <FaTelegram size={32} className="text-[#61c0ff]" />
              <a href="https://t.me/Xannix_8248" className="text-blue-400 hover:text-transparent underline link">
                Telegram
              </a>
            </Container>
            <Container className="flex gap-4 justify-center place-items-center">
              <FaSteam size={32} className="text-[#6577dd]" />
              <a
                href="https://steamcommunity.com/id/xannix_8248"
                className="text-blue-400 hover:text-transparent underline link"
              >
                Steam
              </a>
            </Container>
            <Container className="flex gap-4 justify-center place-items-center">
              <FaGithub size={32} />
              <a href="https://github.com/Xannix246" className="text-blue-400 hover:text-transparent underline link">
                Github
              </a>
            </Container>
            <Container className="flex justify-center place-items-center">
              <span>
                Email:{" "}
                <a href="mailto:albert.ohrimenko.contact@gmail.com" className="link">
                  albert.ohrimenko.contact@gmail.com
                </a>
              </span>
            </Container>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
