import { SITE_PATHS, siteUrl } from "../lib/site-config";

export const dynamic = "force-static";

export default function sitemap() {
  return SITE_PATHS.map((path) => ({ url: siteUrl(path) }));
}
