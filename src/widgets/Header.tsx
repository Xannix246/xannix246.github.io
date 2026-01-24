import { useState } from "react";
import Tabs from "../shared/Tabs";

const Header = () => {
  const [language, setLanguage] = useState<Lang>("en");

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
      <header className="w-full fixed top-0 h-16 px-8 text-white flex justify-between place-items-center z-10">
        <div className="flex gap-6">
          <h1>some header</h1>
          <div className="flex gap-4">
            <a>About me</a>
            <a>My projects</a>
          </div>
        </div>
        <Tabs tab={language} setTab={setLanguage} tabs={tabs} />
      </header>
    </div>
  );
};

export default Header;
