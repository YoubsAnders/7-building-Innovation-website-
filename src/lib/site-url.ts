export function getSiteUrl() {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!value) return null;
  const url = new URL(value);
  if (!["https:", "http:"].includes(url.protocol) || url.username || url.password) {
    throw new Error("NEXT_PUBLIC_SITE_URL must be a public HTTP(S) URL without credentials.");
  }
  return url.origin;
}
