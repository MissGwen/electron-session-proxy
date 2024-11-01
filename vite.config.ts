import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "electron-session-proxy",
      fileName: "main",
    },
    rollupOptions: {
      external: ["socks", /^node:.+/],
      output: { globals: (moduleName) => moduleName },
    },
  },
  plugins: [dts({ outDir: "./", include: "lib", rollupTypes: true })],
});
