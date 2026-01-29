import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vike(), react(), tailwindcss()],
  base: "/",
  // server: {
  //   hmr: {
  //     overlay: false,
  //   },
  //   host: "0.0.0.0",
  // },
});
