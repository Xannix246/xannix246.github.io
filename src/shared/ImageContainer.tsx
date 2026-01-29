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
    <div className={clsx(className, "relative flex-1 rounded-4xl border border-white/50")}>
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover rounded-4xl" />

      {decorations && <div className="absolute inset-0 z-10">{decorations}</div>}
    </div>
  );
};

export default ImageContainer;
