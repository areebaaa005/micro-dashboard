import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell",
      // shell/vite.config.js
remotes: {
  analytics: 'https://micro-dashboard-beryl.vercel.app/assets/remoteEntry.js',
  users: 'https://micro-dashboard-users.vercel.app/assets/remoteEntry.js',
  settings: 'https://micro-dashboard-settings.vercel.app/assets/remoteEntry.js',
},
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});