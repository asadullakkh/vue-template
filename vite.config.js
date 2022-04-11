import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { resolve } from "path";
import eslintPlugin from "vite-plugin-eslint";
import { ViteWebfontDownload } from "vite-plugin-webfont-dl";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin(),
    ViteWebfontDownload(),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: path.resolve(
        path.resolve(__dirname, "src/json/"),
        "components.d.ts"
      ),
    }),
  ],

  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
      img: resolve(__dirname, "src/assets/images"),
      js: resolve(__dirname, "src/assets/helpers"),
      css: resolve(__dirname, "src/assets/styles"),
    },
  },
  server: {
    open: true,
  },
});
