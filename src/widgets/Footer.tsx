import { footer } from "motion/react-client";
import { useTranslation } from "react-i18next";
import { Text } from "../shared/Text";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="w-full flex justify-center mt-16">
      <footer className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] w-full h-128 top-full text-white text-xl">
        <div className="p-1 bg-black/30 col-span-2 row-span-2 flex font-bitcount justify-center">
          <Text useDots={true}>{t("footer1")}</Text>
        </div>
        <div className="p-1 flex"></div>
        <div className="p-1 flex"></div>
        <div className="p-1 bg-black/80 flex"></div>
        <div className="p-1 bg-black/50 col-span-2 row-span-2 flex flex-col justify-center">
          <Text useDots={true}>Used fonts:</Text>
          <a href="https://fonts.google.com/specimen/Roboto" className="w-fit">
            Roboto
          </a>
          <a href="https://fonts.google.com/specimen/Bitcount+Single" className="w-fit">
            Bitcount
          </a>
          <a href="https://github.com/nzeemin/robotron-dotmatrix-font" className="w-fit">
            Robotron
          </a>
        </div>
        <div className="p-1 bg-black/60 flex"></div>
        <div className="p-1 bg-black/50 flex"></div>
        <div className="p-1 bg-black/40 col-span-2 flex gap-4 justify-center">
          <Text as="p" useDots={true}>
            Github source page:
          </Text>
          <Text as="a" href="https://github.com/Xannix246/my-page.github.io">
            Click
          </Text>
        </div>
        <div className="p-1 flex"></div>
        <div className="p-1 bg-black/20 flex"></div>
        <div className="p-1 bg-black/60 flex justify-center">
          <Text as="p" useDots={true}>
            Site by Xannix
          </Text>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
