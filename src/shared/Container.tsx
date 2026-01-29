import clsx from "clsx";
import { JSX, useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AnimatePresence, motion, useMotionValue } from "motion/react";

type Container = {
  children?: React.ReactNode;
  className?: string;
  image?: JSX.Element;
  background?: JSX.Element;
  disableAnimations?: boolean;
  rowSpan?: string;
  colSpan?: string;
};

const getColor = () => {
  const colors = [
    "bg-[#6e30a1]/70",
    "bg-[#7c235a]/70",
    "bg-[#7c6023]/70",
    "bg-[#237c7c]/70",
    "bg-[#29237c]/70",
    "bg-[#234c7c]/70",
  ];
  const place = Math.floor(Math.random() * colors.length);

  return colors[place];
};

const Container = ({ children, className, image, background, rowSpan, colSpan }: Container) => {
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const theme = useContext(ThemeContext);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    setColor(getColor());
  }, []);

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !divRef.current) return;

    const rect = ref.current.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  return (
    <div className={clsx("relative overflow-clip rounded-4xl w-full min-h-full", rowSpan, colSpan)}>
      <AnimatePresence>
        {visible && (
          <motion.div
            ref={divRef}
            className={clsx("absolute size-32 -z-5 rounded-full blur-xl", color)}
            style={{
              x,
              y,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{
              opacity: 0,
              scale: 0.6,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.6,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          />
        )}
      </AnimatePresence>
      <div
        className={clsx(className, "container-default h-full")}
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseEnter={(e) => {
          onMouseMove(e);
          setVisible(true);
        }}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
        <div className="absolute left-0 bottom-0 blur-xs size-16 -z-10">{image}</div>
        <div className="absolute left-0 top-0 -z-10 w-full h-full blur-sm">{background}</div>
      </div>
    </div>
  );
};

export default Container;
