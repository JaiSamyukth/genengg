// Development-only guard: some Node/Turbopack setups may inject a
// non-standard global `localStorage` (see runtime warning about
// `--localstorage-file`). That shim can lack the usual methods and
// break server-side execution when other code calls
// `localStorage.getItem(...)`. Patch it early and only in dev to
// avoid masking real issues in production.
if (process.env.NODE_ENV === "development") {
  try {
    // If a global localStorage exists but doesn't implement getItem as a function,
    // replace it with a harmless stub to prevent server crashes during SSR.
    // Keep this minimal and only for development.
    if (
      typeof (globalThis as any).localStorage !== "undefined" &&
      typeof (globalThis as any).localStorage.getItem !== "function"
    ) {
      (globalThis as any).localStorage = {
        getItem: (_: string) => null,
        setItem: (_: string, __: string) => {},
        removeItem: (_: string) => {},
        clear: () => {},
      };
      // eslint-disable-next-line no-console
      console.warn("Patched global.localStorage with a dev-only stub to avoid invalid shim.");
    }
  } catch (err) {
    // If anything goes wrong, silently continue — this is only a best-effort dev shim.
  }
}

import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  outputFileTracingRoot: path.resolve(__dirname, '../../'),
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER]
      }
    }
  }
};

export default nextConfig;
