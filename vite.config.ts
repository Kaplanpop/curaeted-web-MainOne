import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import { readFileSync } from "node:fs";
import path from "path";

const localizedEntryPlugin = (): Plugin => ({
  name: "localized-entry",
  configureServer(server) {
    server.middlewares.use(async (request, response, next) => {
      if (request.url?.split("?")[0] !== "/zh") return next();
      try {
        const source = readFileSync(path.resolve(__dirname, "zh/index.html"), "utf8");
        const html = await server.transformIndexHtml("/zh", source);
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        response.end(html);
      } catch (error) {
        next(error);
      }
    });
  },
  configurePreviewServer(server) {
    server.middlewares.use((request, response, next) => {
      if (request.url?.split("?")[0] !== "/zh") return next();
      try {
        const html = readFileSync(path.resolve(__dirname, "dist/zh/index.html"), "utf8");
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        response.end(html);
      } catch (error) {
        next(error);
      }
    });
  },
});

export default defineConfig({
  server: { host: "127.0.0.1", port: 8080 },
  plugins: [localizedEntryPlugin(), react()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  build: {
    rollupOptions: {
      input: {
        en: path.resolve(__dirname, "index.html"),
        zh: path.resolve(__dirname, "zh/index.html"),
      },
    },
  },
});
