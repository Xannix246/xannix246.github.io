import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import React from "react";
import clsx from "clsx";

type TextTag = "h1" | "h2" | "h3" | "p" | "span" | "a";

interface TextProps {
  children: React.ReactNode;
  as?: TextTag;
  className?: string;
  href?: string;
  useDots?: boolean;
  id?: string;
}

const motionMap: Record<TextTag, any> = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
  a: motion.a,
};

export function Text({ children, as = "span", className, href, useDots, id }: TextProps) {
  const { i18n } = useTranslation();
  const MotionTag = motionMap[as];

  return (
    <AnimatePresence mode="wait">
      <MotionTag
        key={i18n.language}
        href={as === "a" ? href : undefined}
        className={clsx(useDots && (i18n.language === "ru" ? "font-robotron" : "font-bitcount"), className)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        id={id}
      >
        {children}
      </MotionTag>
    </AnimatePresence>
  );
}
