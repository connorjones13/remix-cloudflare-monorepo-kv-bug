import path from 'node:path';

import { defineConfig } from "vite";
import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin,
} from "@remix-run/dev";
import tsconfigPaths from "vite-tsconfig-paths";

const __dirname = path.dirname(
  new URL(import.meta.url, 'https://www.example.com').pathname,
);

export default defineConfig({
  plugins: [
    cloudflareDevProxyVitePlugin({
      configPath: `${__dirname}/wrangler.toml`,
    }),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      appDirectory: `${__dirname}/app`,
    }),
    tsconfigPaths(),
  ],
  publicDir: `${__dirname}/public`,
  ssr: {
    resolve: {
      conditions: ["workerd", "worker", "browser"],
    },
  },
  resolve: {
    mainFields: ["browser", "module", "main"],
  },
  build: {
    minify: true,
  },
  server: {
    port: 3000,
    host: true,
  },
});
