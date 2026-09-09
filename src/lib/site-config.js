// Keep search-engine URLs independent of local and Vercel preview hostnames.
export const SITE_URL = "https://corevolvix.com";

export const SITE_PATHS = [
  "/",
  "/services/",
  "/industries/",
  "/about/",
  "/contact/",
];

export function siteUrl(path) {
  return new URL(path, SITE_URL).toString();
}
