/// <reference types="vite/client" />

import { preset } from "./vite-config-preset";
import path from "path";
import { defineConfig, mergeConfig } from "vite";
import tailwind from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const defaultConfig = preset({ mode });
  const customConfig = {
    resolve: {
      alias: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "src"),
        },
      ],
    },
    css: {
      postcss: {
        plugins: [tailwind],
      },
    },
  };
  return mergeConfig(defaultConfig, customConfig, true);
});
