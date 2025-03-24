import uiTranslations from '../content/i18n/ui.json';

// Currently supported languages
type SupportedLocale = 'en' | 'es';
// Complete list of locales that could be added in the future
type FutureLocale = 'fr' | 'de' | 'it' | 'pt' | 'zh' | 'ja' | 'ko' | 'ru';
// Combines both for documentation, but we use SupportedLocale internally
type Locale = SupportedLocale | FutureLocale;
type TranslationPath = string;

// Define the supported locales in a single place to avoid duplication
const SUPPORTED_LOCALES: SupportedLocale[] = ['en', 'es'];
const DEFAULT_LOCALE: SupportedLocale = 'en';

/**
 * Locale mapping for date formatting
 * Maps our internal locale codes to proper locale codes for Intl.DateTimeFormat
 */
const DATE_LOCALE_MAPPING: Record<Locale, string> = {
  'en': 'en-US',
  'es': 'es',
  'fr': 'fr-FR',
  'de': 'de-DE',
  'it': 'it-IT',
  'pt': 'pt-BR',
  'zh': 'zh-CN',
  'ja': 'ja-JP',
  'ko': 'ko-KR',
  'ru': 'ru-RU'
};

/**
 * Gets a translation by key path
 * Examples:
 * - getTranslation('en', 'components.pageTitle.authors')
 * - getTranslation('es', 'components.pageTitle.created')
 *
 * To add a new language:
 * 1. Add the language to the SupportedLocale type
 * 2. Add translations in ui.json
 * 3. Update astro.config.mjs with the new locale
 */
export function getTranslation(locale: Locale, path: TranslationPath, fallbackLocale: SupportedLocale = DEFAULT_LOCALE): string {
  const localeParts = path.split('.');

  // Check if the locale is currently supported in our translations
  const safeLocale = isSupportedLocale(locale) ? locale : fallbackLocale;

  // Try to get translation from specified locale
  let translation = getNestedValue(uiTranslations[safeLocale], localeParts);

  // If not found and a fallback is specified, try fallback locale
  if (!translation && fallbackLocale && safeLocale !== fallbackLocale) {
    translation = getNestedValue(uiTranslations[fallbackLocale], localeParts);
  }

  // Return translation or key if not found
  return translation || path;
}

/**
 * Check if the locale is among those currently supported
 */
function isSupportedLocale(locale: Locale): locale is SupportedLocale {
  // Use the central shared array of supported locales
  return SUPPORTED_LOCALES.includes(locale as SupportedLocale);
}

/**
 * Get a nested value from an object using a path array
 * Example: getNestedValue(obj, ['components', 'pageTitle', 'authors'])
 */
function getNestedValue(obj: any, parts: string[]): string | undefined {
  if (!obj) return undefined;

  let current = obj;

  for (const part of parts) {
    if (current[part] === undefined) {
      return undefined;
    }
    current = current[part];
  }

  return typeof current === 'string' ? current : undefined;
}

/**
 * Helper function to determine the current locale from Astro context
 */
export function getCurrentLocale(Astro: any): SupportedLocale {
  try {
    // Try to get from Starlight
    const starlightLocale = Astro.locals.starlightRoute?.locale;
    if (starlightLocale && isSupportedLocale(starlightLocale)) return starlightLocale;

    // Automatically check URL path for any supported locale
    for (const locale of SUPPORTED_LOCALES) {
      if (locale === DEFAULT_LOCALE) continue; // Skip default as it's often without prefix
      if (Astro.url.pathname.includes(`/${locale}/`)) return locale;
    }

    // Default
    return DEFAULT_LOCALE;
  } catch (e) {
    // Fallback to default
    return DEFAULT_LOCALE;
  }
}

/**
 * Gets the appropriate locale string for date formatting
 * This converts our internal locale codes to proper locale codes for Intl.DateTimeFormat
 */
export function getDateLocale(locale: Locale): string {
  // Return the mapped locale or fallback to en-US
  return DATE_LOCALE_MAPPING[locale] || 'en-US';
}

/**
 * Format a date according to the specified locale
 */
export function formatDate(date: Date | undefined, locale: Locale): string {
  if (!date) {
    return getTranslation(locale, 'components.pageTitle.unknownDate');
  }

  const dateLocale = getDateLocale(locale);

  return date.toLocaleDateString(dateLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
