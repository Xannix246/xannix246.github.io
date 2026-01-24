import clsx from "clsx";
import { JSX } from "react";

type ImageContainer = {
  src: string;
  alt?: string;
  className?: string;
  decorations?: JSX.Element;
};

const ImageContainer = ({ src, alt, className, decorations }: ImageContainer) => {
  return (
    <div className={clsx(className, "rounded-4xl border border-white/50 relative w-full h-full")}>
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover rounded-4xl" />
      <div className="absolute top-0 w-full h-full z-10">{decorations}</div>
    </div>
  );
};

export default ImageContainer;
