/**
 * Environment detection utilities for Astro configuration
 * Helps determine the correct site URL based on the current environment
 */

// Environment types
enum EnvironmentType {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
  PR_PREVIEW = 'pr_preview'
}

// Configuration constants
const CONFIG = {
  PORT: 4300,
  URLS: {
    LOCAL: (port: number) => `http://localhost:${port}`,
    PRODUCTION: 'https://interview.signlanguagetech.com',
    PREVIEW: (repo: string, pr: string) => `https://${repo}-preview-pr-${pr}.surge.sh`
  },
  DEFAULT_REPO: 'signlanguagetech-sign-tech-interview'
} as const;

/**
 * Options for environment detection
 */
export interface EnvironmentOptions {
  /** Force HTTPS in all environments (default: false) */
  forceHttps?: boolean;
}

/**
 * Environment information returned by the detection function
 */
export interface EnvironmentInfo {
  /** Server port number */
  port: number;
  /** Whether running in production environment */
  isProduction: boolean;
  /** Whether running in PR preview environment */
  isPRPreview: boolean;
  /** The fully qualified site URL to use */
  siteUrl: string;
  /** Preview URL if in PR environment, null otherwise */
  previewUrl: string | null;
  /** PR number if in PR environment, null otherwise */
  prNumber: string | null;
  /** Repository name */
  repoName: string;
  /** Environment type identifier */
  environment: EnvironmentType;
}

/**
 * Extracts PR number from GitHub environment variables
 * @returns PR number or null if not in PR environment
 */
function extractPrNumber(): string | null {
  return process.env.GITHUB_EVENT_NUMBER ||
    (process.env.GITHUB_REF && process.env.GITHUB_REF.match(/refs\/pull\/(\d+)\/merge/)?.[1]) ||
    null;
}

/**
 * Extracts repository name from GitHub environment variables
 * @returns Repository name
 */
function getRepoName(): string {
  return process.env.GITHUB_REPOSITORY?.replace('/', '-')?.toLowerCase() ||
    CONFIG.DEFAULT_REPO;
}

/**
 * Determines the current environment type
 * @param previewUrl PR preview URL if available
 * @returns Environment type
 */
function determineEnvironment(previewUrl: string | null): EnvironmentType {
  if (previewUrl) return EnvironmentType.PR_PREVIEW;
  return process.env.NODE_ENV === 'production' 
    ? EnvironmentType.PRODUCTION 
    : EnvironmentType.DEVELOPMENT;
}

/**
 * Logs environment information in non-production environments
 * @param envInfo Environment details to log
 */
function logEnvironmentInfo(envInfo: Record<string, unknown>): void {
  if (process.env.NODE_ENV !== 'production') {
    console.log('Environment variables:', envInfo);
    console.log('Using site URL:', envInfo.siteUrl);
  }
}

/**
 * Detects the current environment and returns configuration information
 * 
 * This utility determines where the application is running (local dev, production, or 
 * PR preview) and provides the correct site URL and other environment details.
 * 
 * @param options Configuration options
 * @returns Information about the current environment
 */
export function detectEnvironment({ forceHttps = false }: EnvironmentOptions = {}): EnvironmentInfo {
  // Extract environment information
  const prNumber = extractPrNumber();
  const repoName = getRepoName();

  // Generate preview URL if in PR environment
  const previewUrl = prNumber
    ? CONFIG.URLS.PREVIEW(repoName, prNumber)
    : null;

  // Determine environment type
  const environmentType = determineEnvironment(previewUrl);
  const isProduction = environmentType === EnvironmentType.PRODUCTION;

  // Determine the site URL
  const localUrl = forceHttps 
    ? CONFIG.URLS.LOCAL(CONFIG.PORT).replace('http:', 'https:') 
    : CONFIG.URLS.LOCAL(CONFIG.PORT);

  const siteUrl = previewUrl || (isProduction ? CONFIG.URLS.PRODUCTION : localUrl);

  // Prepare environment information
  const envInfo = {
    port: CONFIG.PORT,
    isProduction,
    isPRPreview: !!previewUrl,
    siteUrl,
    previewUrl,
    prNumber,
    repoName,
    environment: environmentType,
    
    // Debug info
    NODE_ENV: process.env.NODE_ENV,
    GITHUB_REF: process.env.GITHUB_REF,
    GITHUB_HEAD_REF: process.env.GITHUB_HEAD_REF,
    GITHUB_REPOSITORY: process.env.GITHUB_REPOSITORY,
    GITHUB_EVENT_NUMBER: process.env.GITHUB_EVENT_NUMBER,
    forceHttps,
    localUrl
  };

  // Log debug information in non-production environments
  logEnvironmentInfo(envInfo);

  // Return only the required information for the consumer
  return {
    port: CONFIG.PORT,
    isProduction,
    isPRPreview: !!previewUrl,
    siteUrl,
    previewUrl,
    prNumber,
    repoName,
    environment: environmentType
  };
}

// Constants exports (for backward compatibility)
export const PORT = CONFIG.PORT;
export const LOCAL_HOST_URL = CONFIG.URLS.LOCAL(CONFIG.PORT);
export const PRODUCTION_URL = CONFIG.URLS.PRODUCTION;

// Type exports
export { EnvironmentType };
