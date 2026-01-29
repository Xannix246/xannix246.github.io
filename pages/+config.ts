import type { Config } from "vike/types";
import vikeReact from "vike-react/config";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/head-tags
  title: "Xannix's site",
  description: "Some awesome site",
  prerender: true,

  extends: [vikeReact],
} satisfies Config;
