import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  server: {
    host: true,
    port: 5174,
  },
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "AstroPanel",
        short_name: "AstroPanel",
        description: "Your astrophotography assistant",
        start_url: "/",
        display: "standalone",
        orientation: "landscape",
        background_color: "#000000",
        theme_color: "#000000",
        icons: [
          {
            src: "/public/favicon.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/public/favicon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
