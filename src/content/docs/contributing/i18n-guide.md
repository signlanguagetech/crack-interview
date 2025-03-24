---
title: Internationalization (i18n) Guide
description: How to add and maintain translations in the project
authors: ["Andrés García"]
createdDate: 2023-06-15
---

# Internationalization (i18n) Guide

This guide explains how to add a new language to the project and maintain existing translations.

## i18n Structure

The project uses a centralized system to manage translations:

- `src/content/i18n/ui.json`: Contains all translations in a structured format
- `src/utils/i18n.ts`: Contains utilities to access translations and detect the language
- `src/scripts/i18n-tools.ts`: Script to automate i18n tasks

## Adding a New Language (Automated Method)

We've created tools that automate the process of adding new languages:

### 1. Create the Structure for the New Language

To create a new language, run:

```bash
npm run i18n:create fr  # Replace "fr" with the ISO code of the language
```

This command:
- Creates a translation structure for the new language in `ui.json`
- Copies all keys from the main language (usually English)
- Marks strings for translation with a prefix `[en: text]`

### 2. Translate the Text Strings

Edit the `src/content/i18n/ui.json` file and look for all entries marked with `[en: text]` for the new language. Replace these strings with the corresponding translations.

### 3. Validate Translations

To verify that you've translated all necessary strings:

```bash
npm run i18n:validate
```

This command will show any keys that are missing translations.

### 4. Generate TypeScript Types

Once you've translated all strings, update the TypeScript types:

```bash
npm run i18n:generate
```

This command:
- Automatically updates `SupportedLocale` in `i18n.ts`
- Updates the list of languages in the `isSupportedLocale` function

### 5. Configure the Language in Astro/Starlight

To add the language to the Astro configuration:

```bash
npm run i18n:config fr "Français" # Language code and display label
```

## Maintaining Translations

To maintain translations:

1. **Centralization**: All text strings that need translation should be in `ui.json`
2. **Key Structure**: Use a hierarchical structure to organize translations (example: `components.header.title`)
3. **Consistency**: Make sure each key is present in all supported languages
4. **Fallback**: If a translation is missing in a language, the system will use the English version

## Using Translations in Components

To use translations in Astro components:

```astro
---
import { getCurrentLocale, getTranslation } from "../utils/i18n";

// Get the current language
const locale = getCurrentLocale(Astro);

// Get translations
const myLabel = getTranslation(locale, 'path.to.my.translation');
---

<div>{myLabel}</div>
```

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run i18n:create fr` | Create structure for a new language (e.g., fr) |
| `npm run i18n:validate` | Verify missing translations |
| `npm run i18n:generate` | Update TypeScript types |
| `npm run i18n:config fr "Français"` | Add language to Astro configuration |
| `npm run i18n:help` | Show help on available commands |

## Best Practices

- Keep key names in English to facilitate development
- Organize translations by components or sections
- Include comments for complex translations
- Run `npm run i18n:validate` regularly to detect missing translations
- Test all languages after making significant changes 
