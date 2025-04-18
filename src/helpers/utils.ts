export function isValidHttpsUrl(url: string): boolean | never{
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === "https:";
  } catch (_) {
    throw new Error(`${url} is not a valid URL. Please check the SITE_URL in your environment variables.`);
  }
}
