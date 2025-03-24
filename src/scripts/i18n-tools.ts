/**
 * Internationalization (i18n) Automation Tools
 *
 * This script provides functions for:
 * 1. Automatically generating TypeScript types based on languages in ui.json
 * 2. Validating translations and finding missing keys
 * 3. Creating a new language file with all required keys
 */

import * as fs from 'fs';
import * as path from 'path';

// Paths to relevant files
const UI_JSON_PATH = path.resolve('./src/content/i18n/ui.json');
const I18N_TS_PATH = path.resolve('./src/utils/i18n.ts');
const ASTRO_CONFIG_PATH = path.resolve('./astro.config.mjs');

/**
 * Reads the translations file
 */
function readTranslations() {
  try {
    const fileContents = fs.readFileSync(UI_JSON_PATH, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading translations file:', error);
    return {};
  }
}

/**
 * Generates TypeScript types based on available languages
 */
function generateTypeDefinitions() {
  const translations = readTranslations();
  const supportedLocales = Object.keys(translations);

  if (supportedLocales.length === 0) {
    console.error('No languages found in translations file');
    return;
  }

  // Read the current i18n.ts file
  let i18nFileContent = fs.readFileSync(I18N_TS_PATH, 'utf8');

  // Replace the SupportedLocale type definition
  const supportedLocaleType = `type SupportedLocale = ${supportedLocales.map(locale => `'${locale}'`).join(' | ')};`;
  i18nFileContent = i18nFileContent.replace(
    /type SupportedLocale = .*?;/,
    supportedLocaleType
  );

  // Update the isSupportedLocale function
  const localesArray = `[${supportedLocales.map(locale => `'${locale}'`).join(', ')}]`;
  i18nFileContent = i18nFileContent.replace(
    /return \[.*?\].includes\(locale\);/,
    `return ${localesArray}.includes(locale);`
  );

  // Write the updated file
  fs.writeFileSync(I18N_TS_PATH, i18nFileContent, 'utf8');
  console.log('✅ TypeScript types updated successfully');
}

/**
 * Finds missing keys in translations
 */
function findMissingTranslations() {
  const translations = readTranslations();
  const locales = Object.keys(translations);

  if (locales.length <= 1) {
    console.log('At least two languages are needed for comparison');
    return;
  }

  // Use the first language as reference (usually English)
  const referenceLocale = locales[0];
  const missingByLocale: Record<string, string[]> = {};

  // Recursive function to find missing keys
  function findMissingKeys(refObj: any, compareObj: any, currentPath: string = '', missing: string[] = []) {
    for (const key in refObj) {
      const newPath = currentPath ? `${currentPath}.${key}` : key;

      if (typeof refObj[key] === 'object' && refObj[key] !== null) {
        // It's a nested object, continue searching
        findMissingKeys(refObj[key], compareObj?.[key] || {}, newPath, missing);
      } else if (compareObj?.[key] === undefined) {
        // The key is missing in the compared object
        missing.push(newPath);
      }
    }
    return missing;
  }

  // Compare each language with the reference
  for (const locale of locales) {
    if (locale === referenceLocale) continue;

    const missingKeys = findMissingKeys(translations[referenceLocale], translations[locale]);
    if (missingKeys.length > 0) {
      missingByLocale[locale] = missingKeys;
    }
  }

  // Show results
  const hasMissing = Object.keys(missingByLocale).length > 0;

  if (hasMissing) {
    console.log('⚠️ Missing translations found:');

    for (const locale in missingByLocale) {
      console.log(`\n📌 ${locale}:`);
      for (const key of missingByLocale[locale]) {
        console.log(`  - ${key}`);
      }
    }
  } else {
    console.log('✅ No missing translations');
  }

  return missingByLocale;
}

/**
 * Creates a new language file with all necessary keys
 */
function createNewLanguage(newLocale: string) {
  if (!newLocale) {
    console.error('You must provide a language code');
    return;
  }

  const translations = readTranslations();
  const locales = Object.keys(translations);

  if (locales.length === 0) {
    console.error('No existing languages found');
    return;
  }

  // Check if the language already exists
  if (translations[newLocale]) {
    console.error(`Language '${newLocale}' already exists`);
    return;
  }

  // Use the first language as a template (usually English)
  const referenceLocale = locales[0];

  // Recursive function to create an empty translation structure
  function createEmptyTranslation(obj: any): any {
    if (typeof obj !== 'object' || obj === null) {
      // For primitive values, use the original value as reference
      return `[${referenceLocale}: ${obj}]`;
    }

    const result: any = {};

    for (const key in obj) {
      result[key] = createEmptyTranslation(obj[key]);
    }

    return result;
  }

  // Create the new language object
  translations[newLocale] = createEmptyTranslation(translations[referenceLocale]);

  // Write the updated file
  fs.writeFileSync(UI_JSON_PATH, JSON.stringify(translations, null, 2), 'utf8');

  console.log(`✅ New language '${newLocale}' created successfully`);
  console.log('💡 Next steps:');
  console.log('1. Translate all strings in the ui.json file');
  console.log('2. Run "npm run i18n:validate" to confirm there are no missing translations');
  console.log('3. Run "npm run i18n:generate" to update TypeScript types');
  console.log('4. Add the language to the Astro configuration');
}

/**
 * Adds the language to the Astro configuration
 */
function updateAstroConfig(newLocale: string, label: string) {
  if (!newLocale || !label) {
    console.error('You must provide a language code and a label');
    return;
  }

  try {
    let configContent = fs.readFileSync(ASTRO_CONFIG_PATH, 'utf8');

    // Find the locales section
    const localesRegex = /locales\s*:\s*{([^}]*)}/;
    const localesMatch = configContent.match(localesRegex);

    if (!localesMatch) {
      console.error('Could not find the locales section in the Astro configuration');
      return;
    }

    // Check if the language is already in the configuration
    const localeRegex = new RegExp(`${newLocale}\\s*:\\s*{`);
    if (localeRegex.test(configContent)) {
      console.log(`Language '${newLocale}' is already configured in Astro`);
      return;
    }

    // Add the new language to the locales section
    const localesSection = localesMatch[1];
    const newLocaleConfig = `
    ${newLocale}: {
      label: "${label}",
      locale: "${newLocale}",
    },`;

    // Insert after the last entry
    const updatedLocalesSection = localesSection + newLocaleConfig;
    configContent = configContent.replace(localesRegex, `locales: {${updatedLocalesSection}}`);

    // Write the updated file
    fs.writeFileSync(ASTRO_CONFIG_PATH, configContent, 'utf8');

    console.log(`✅ Language '${newLocale}' added to Astro configuration`);
  } catch (error) {
    console.error('Error updating Astro configuration:', error);
  }
}

// Process command line arguments
const [command, ...args] = process.argv.slice(2);

switch (command) {
  case 'generate':
    generateTypeDefinitions();
    break;
  case 'validate':
    findMissingTranslations();
    break;
  case 'create':
    const [newLocale] = args;
    createNewLanguage(newLocale);
    break;
  case 'config':
    const [locale, label] = args;
    updateAstroConfig(locale, label);
    break;
  default:
    console.log(`
🌐 i18n Tools

Available commands:
  generate   - Updates TypeScript types based on available languages
  validate   - Finds missing translations between languages
  create     - Creates a new language file with all necessary keys
  config     - Adds a language to the Astro configuration

Examples:
  npm run i18n:generate
  npm run i18n:validate
  npm run i18n:create fr
  npm run i18n:config fr "Français"
`);
}
