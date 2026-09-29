import netlify from "@netlify/vite-plugin-tanstack-start";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    plugins: [netlify()],
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
