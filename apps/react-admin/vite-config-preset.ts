import type { UserConfig } from "vite";

import path from "path";

import reactPlugin from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import reactSwc from "@vitejs/plugin-react-swc";

interface PresetOption {
  mode: string;
  useSwc?: true;
}
export function preset(option: PresetOption = { mode: "development" }): UserConfig {
  console.log(option.mode);
  const config: UserConfig = {
    plugins: [option.useSwc ? reactSwc() : reactPlugin(), tsconfigPaths()],

    resolve: {
      alias: {
        "@": path.resolve(process.cwd(), "src"),
      },
    },
    esbuild:
      option.mode === "production"
        ? {
            drop: ["debugger", "console"],
          }
        : {},

    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom", "react-router-dom", "axios"],
          },
        },
      },
    },
  };
  return config;
}
