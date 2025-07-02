export const dynamic = "force-static";

///
/// This page doesn't work in dev mode (in SSR mode),
/// but works pretty fine in SSG.
///

import type { MetadataRoute } from "next";
import { manifestIcons } from "./iconset";
import { site } from "../settings";

export async function generateStaticParams() {
  return {};
}

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "browser",
    theme_color: "#2f6be4",
    background_color: "#111213",
    icons: manifestIcons.map((item) => ({
      src: `/icons/${item.name}`,
      type: "image/png",
      sizes: `${item.width}x${item.height}`,
    })),
  };
}
