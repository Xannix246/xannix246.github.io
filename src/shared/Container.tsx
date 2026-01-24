import clsx from "clsx";
import { JSX, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

type Container = {
  children?: React.ReactNode;
  className?: string;
  image?: JSX.Element;
  background?: JSX.Element;
  disableAnimations?: boolean;
};

const Container = ({ children, className, image, background }: Container) => {
  const theme = useContext(ThemeContext);

  return (
    <div className={clsx(className, "container-default")}>
      {children}
      <div className="absolute left-0 bottom-0 blur-xs size-16 -z-10">{image}</div>
      <div className="absolute left-0 top-0 -z-10 w-full h-full blur-sm">{background}</div>
    </div>
  );
};

export default Container;
