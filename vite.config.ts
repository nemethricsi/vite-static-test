import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        koszonom: "./koszonom.html",
        "exkluziv-tartalom/meditacios-video-1-6588954":
          "./exkluziv-tartalom/meditacios-video-1-6588954.html",
      },
    },
  },
});
