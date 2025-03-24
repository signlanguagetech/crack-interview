---
title: Guía de Internacionalización (i18n)
description: Cómo añadir y mantener traducciones en el proyecto
authors: ["Andrés García"]
createdDate: 2023-06-15
---

# Guía de Internacionalización (i18n)

Esta guía explica cómo añadir un nuevo idioma al proyecto y mantener las traducciones existentes.

## Estructura de i18n

El proyecto usa un sistema centralizado para gestionar las traducciones:

- `src/content/i18n/ui.json`: Contiene todas las traducciones en un formato estructurado
- `src/utils/i18n.ts`: Contiene las utilidades para acceder a las traducciones y detectar el idioma
- `src/scripts/i18n-tools.ts`: Script para automatizar tareas de i18n

## Añadir un nuevo idioma (Método automatizado)

Hemos creado herramientas que automatizan el proceso de añadir nuevos idiomas:

### 1. Crear la estructura del nuevo idioma

Para crear un nuevo idioma, ejecuta:

```bash
npm run i18n:create fr  # Sustituye "fr" por el código ISO del idioma
```

Este comando:
- Crea una estructura de traducción para el nuevo idioma en `ui.json`
- Copia todas las claves del idioma principal (generalmente inglés)
- Marca las cadenas para traducir con un prefijo `[en: texto]`

### 2. Traducir las cadenas de texto

Edita el archivo `src/content/i18n/ui.json` y busca todas las entradas marcadas con `[en: texto]` para el nuevo idioma. Reemplaza estas cadenas con las traducciones correspondientes.

### 3. Validar traducciones

Para verificar que has traducido todas las cadenas necesarias:

```bash
npm run i18n:validate
```

Este comando mostrará cualquier clave que falte por traducir.

### 4. Generar tipos TypeScript

Una vez que hayas traducido todas las cadenas, actualiza los tipos TypeScript:

```bash
npm run i18n:generate
```

Este comando:
- Actualiza automáticamente `SupportedLocale` en `i18n.ts`
- Actualiza la lista de idiomas en la función `isSupportedLocale`

### 5. Configurar el idioma en Astro/Starlight

Para añadir el idioma a la configuración de Astro:

```bash
npm run i18n:config fr "Français" # Código del idioma y etiqueta para mostrar
```

## Mantener traducciones

Para mantener las traducciones:

1. **Centralización**: Todas las cadenas de texto que necesiten traducción deben estar en `ui.json`
2. **Estructura de claves**: Utiliza una estructura jerárquica para organizar las traducciones (ejemplo: `components.header.title`)
3. **Consistencia**: Asegúrate de que cada clave esté presente en todos los idiomas soportados
4. **Fallback**: Si una traducción falta en un idioma, el sistema utilizará la versión en inglés

## Usar traducciones en componentes

Para usar traducciones en componentes Astro:

```astro
---
import { getCurrentLocale, getTranslation } from "../utils/i18n";

// Obtener el idioma actual
const locale = getCurrentLocale(Astro);

// Obtener traducciones
const myLabel = getTranslation(locale, 'ruta.a.mi.traduccion');
---

<div>{myLabel}</div>
```

## Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run i18n:create fr` | Crea estructura para un nuevo idioma (ej: fr) |
| `npm run i18n:validate` | Verifica traducciones faltantes |
| `npm run i18n:generate` | Actualiza los tipos TypeScript |
| `npm run i18n:config fr "Français"` | Añade idioma a la configuración de Astro |
| `npm run i18n:help` | Muestra ayuda sobre los comandos disponibles |

## Buenas prácticas

- Mantén los nombres de las claves en inglés para facilitar el desarrollo
- Organiza las traducciones por componentes o secciones
- Incluye comentarios en las traducciones complejas
- Ejecuta `npm run i18n:validate` regularmente para detectar traducciones faltantes
- Prueba todos los idiomas después de hacer cambios importantes 
