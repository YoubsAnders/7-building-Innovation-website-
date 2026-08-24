export function getSiteUrl() {
  const value = process.env.NEXT_PUBLIC_SITE_URL;
  return value ? new URL(value).origin : null;
}
