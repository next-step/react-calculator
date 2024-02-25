import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      data: "/src/data",
      components: "/src/components",
      context: "/src/context",
      utils: "/src/utils",
    },
  },
});
