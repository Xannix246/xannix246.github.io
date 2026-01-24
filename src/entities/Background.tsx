import clsx from "clsx";
import { motion, useScroll, useTransform } from "motion/react";

const Background = () => {
  const scrollY = useScroll().scrollY;
  const style = useTransform(scrollY, [0, 3000], [0, -100]);

  return (
    <motion.div
      className={clsx("fixed -z-10 w-full h-full flex")}
      style={{
        y: style,
      }}
    >
      <div className="w-full h-[200vh] bg-black absolute -z-10" />

      <div className="flex w-full justify-center">
        <div className="absolute size-[120vw] bg-[#ff3300] rounded-full top-[75%] blur-3xl" />
        <div className="absolute size-[120vw] bg-radial from-[#ffa733] to-[#ff5233] rounded-full top-[80%]" />
      </div>

      <div className="absolute w-full h-[60vh] bg-linear-0 from-[#a200ff] to-80% -bottom-55" />
    </motion.div>
  );
};

export default Background;
