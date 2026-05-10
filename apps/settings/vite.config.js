import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "analytics",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/SettingsApp.jsx", 
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3003,
    cors: true,
  },
  // --- YAI WALA BLOCK ADD KAREIN ---
  preview: {
    port: 3003,
    cors: true,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  // --------------------------------
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});