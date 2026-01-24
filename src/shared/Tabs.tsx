import { Tab, TabGroup, TabList } from "@headlessui/react";
import clsx from "clsx";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

type Tab<T> = {
  id: T;
  name: string;
};

type Props<T> = {
  tab: Tab<T>["id"];
  setTab: Dispatch<SetStateAction<T>>;
  tabs: Tab<T>[];
};

const Tabs = <T extends string>({ tab, setTab, tabs }: Props<T>) => {
  const tabRefs = useRef<(HTMLElement | null)[]>([]);

  const [style, setStyle] = useState({
    width: 0,
    x: 0,
  });

  useEffect(() => {
    const index = tabs.findIndex((t) => t.id === tab);
    const el = tabRefs.current[index];

    if (!el) return;

    setStyle({
      width: el.offsetWidth,
      x: el.offsetLeft,
    });
  }, [tab, tabs]);

  return (
    <TabGroup>
      <TabList className="relative flex gap-2">
        <div
          className="absolute py-5 px-6 container-default transition duration-300 -left-1.25"
          style={{
            width: style.width,
            transform: `translateX(${style.x}px)`,
          }}
        />
        {tabs.map((curTab, i) => (
          <Tab
            key={i}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            onClick={() => setTab(curTab.id)}
            className={clsx(
              tab === curTab.id ? "text-green" : "text-white",
              "font-semibold z-10 transition duration-300",
            )}
          >
            {curTab.name}
          </Tab>
        ))}
      </TabList>
    </TabGroup>
  );
};

export default Tabs;
