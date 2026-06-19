import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // A stray lockfile in the home dir makes Next infer the wrong workspace root;
  // pin tracing to this project so the build output is scoped correctly.
  outputFileTracingRoot: __dirname,
  images: {
    // A global custom loader maps alpha-2 `src` → FlagCDN bucket URLs. This keeps
    // <Flag> free of a function `loader` prop, so it can be rendered inside client
    // components (motion reveals, dossiers) without crossing a non-serializable
    // function over the Server→Client boundary.
    loader: "custom",
    loaderFile: "./src/shared/config/image-loader.ts",
    // Match the FlagCDN width buckets so the candidate widths snap cleanly.
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1280, 1920, 2560],
  },
  experimental: {
    // Keep client bundles lean: only ship the icons/motion entrypoints we touch.
    optimizePackageImports: ["motion", "lucide-react"],
  },
};

export default withNextIntl(nextConfig);
