import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import components from "vite-plugin-components";

export default defineConfig({
  plugins: [vue(), components({ directoryAsNamespace: true })],
});
