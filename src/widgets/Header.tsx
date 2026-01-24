import { useEffect, useState } from "react";
import Tabs from "../shared/Tabs";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [language, setLanguage] = useState<Lang>("en");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    (async () => {
      await i18n.changeLanguage(language);
    })();
  }, [language]);

  const tabs = [
    {
      id: "ru" as Lang,
      name: "Ru",
    },
    {
      id: "en" as Lang,
      name: "En",
    },
  ];

  return (
    <div className="flex w-full h-16">
      <header className="w-full fixed top-0 h-16 px-8 text-white bg-linear-0 from-0% to-black flex justify-between place-items-center z-10">
        <div className="flex gap-16">
          <h1>some header</h1>
          <div className="flex gap-4">
            <a href="#about">{t("about-me")}</a>
            <a href="#projects">{t("my-projects")}</a>
            <a href="#links">{t("links")}</a>
          </div>
        </div>
        <Tabs tab={language} setTab={setLanguage} tabs={tabs} />
      </header>
    </div>
  );
};

export default Header;
