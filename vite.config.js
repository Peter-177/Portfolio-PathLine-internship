import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import compression from "vite-plugin-compression";


export default defineConfig({
  plugins: [react(), tailwindcss(), compression()],
  base:'/Portfolio--PathLine-internship',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          gsap: ["gsap"],
          icons: ["react-icons"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 5173,
    host: true,
    watch: {
      usePolling: true,
    },
  },
});
