/// <reference types="vite/client" />

import path from "path";
import tailwind from "tailwindcss";
import { defineConfig, mergeConfig } from "vite";

import { preset } from "./vite-config-preset";

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
