/**
 * Environment detection utilities for Astro configuration
 * Helps determine the correct site URL based on the current environment
 */

// Constants for URLs
const PORT = 4300;
const LOCAL_HOST_URL = `http://localhost:${PORT}`;
const PRODUCTION_URL = "https://interview.signlanguagetech.com";

/**
 * Detects if we're running in a PR preview environment by checking GitHub Actions environment variables
 * @param {Object} options Configuration options
 * @param {boolean} options.forceHttps Force HTTPS in all environments (default: false)
 * @returns {Object} Information about the current environment
 */
function detectEnvironment({ forceHttps = false } = {}) {
  // Detect if running in a PR preview environment (Surge.sh)
  // Check for PR number directly if we're in a GitHub Actions environment
  const prNumber = process.env.GITHUB_EVENT_NUMBER ||
    (process.env.GITHUB_REF && process.env.GITHUB_REF.match(/refs\/pull\/(\d+)\/merge/)?.[1]);
  const repoName = process.env.GITHUB_REPOSITORY?.replace('/', '-')?.toLowerCase() ||
    'signlanguagetech-sign-tech-interview';

  // Generate the preview URL or null if not in a PR environment
  const previewUrl = prNumber
    ? `https://${repoName}-preview-pr-${prNumber}.surge.sh`
    : null;

  // Determine site URL - PR preview takes priority, then production, then local
  const isProduction = process.env.NODE_ENV === 'production';

  // Use the correct scheme for localhost (http by default, unless forced to https)
  const localUrl = forceHttps ? LOCAL_HOST_URL.replace('http:', 'https:') : LOCAL_HOST_URL;

  const siteUrl = previewUrl || (isProduction ? PRODUCTION_URL : localUrl);

  // For debugging purposes
  if (process.env.NODE_ENV !== 'production') {
    console.log('Environment variables:', {
      NODE_ENV: process.env.NODE_ENV,
      GITHUB_REF: process.env.GITHUB_REF,
      GITHUB_HEAD_REF: process.env.GITHUB_HEAD_REF,
      GITHUB_REPOSITORY: process.env.GITHUB_REPOSITORY,
      GITHUB_EVENT_NUMBER: process.env.GITHUB_EVENT_NUMBER,
      prNumber,
      repoName,
      previewUrl,
      forceHttps,
      localUrl
    });
    console.log('Using site URL:', siteUrl);
  }

  return {
    port: PORT,
    isProduction,
    isPRPreview: !!previewUrl,
    siteUrl,
    previewUrl,
    prNumber,
    repoName
  };
}

// Exportación para ES modules
export {
  detectEnvironment,
  PORT,
  LOCAL_HOST_URL,
  PRODUCTION_URL
};
