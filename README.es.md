# 🚀 Sign Tech Interview

<div align="center">

## Gracias a todos los increíbles colaboradores :heart:

[![Contributors](https://contrib.rocks/image?repo=signlanguagetech/crack-interview)](https://github.com/signlanguagetech/crack-interview/graphs/contributors)

**Una plataforma completa para preparar entrevistas técnicas**

[[English](README.md) | Español (actual)]

</div>

## 🔍 Descripción General

Este repositorio proporciona recursos y materiales de práctica para ayudar a los desarrolladores a tener éxito en entrevistas técnicas, con especial atención a la accesibilidad para personas sordas o con problemas de audición. Nuestra plataforma cubre múltiples tecnologías e incluye problemas de práctica, estrategias para entrevistas y materiales de referencia.

### 💼 ¿Para quién es?

- Desarrolladores de software preparándose para entrevistas técnicas
- Personas cambiando de carrera que buscan entrar en el sector tecnológico
- Personas sordas o con problemas de audición que necesitan preparación accesible para entrevistas
- Líderes técnicos y gerentes de contratación que buscan comprender las mejores prácticas de entrevistas

## ✨ Características Principales

- 📱 **Cobertura Tecnológica Completa**
  - Preparación para entrevistas de Angular, Flutter y Node.js
  - Ejemplos reales y desafíos de codificación
  - Mejores prácticas y errores comunes

- 🌎 **Soporte Multilingüe**
  - Inglés
  - Español

- 📊 **Aprendizaje Interactivo**
  - Ejemplos prácticos
  - Herramientas de autoevaluación
  - Seguimiento de progreso

- 🛠️ **Infraestructura Moderna**
  - Despliegues de vista previa para PR
  - Documentación potenciada por Astro
  - Optimizado para accesibilidad

## 📚 Contenido

- **Habilidades Tecnológicas**:
  - **Angular**: Arquitectura de componentes, RxJS, gestión de estado, optimización de rendimiento
  - **Flutter**: Ciclo de vida de widgets, gestión de estado, desarrollo multiplataforma, pruebas
  - **Node.js**: Event loop, programación asíncrona, APIs, integración de bases de datos, microservicios

## 🚦 Primeros Pasos

```bash
git clone git@github.com:signlanguagetech/crack-interview.git
cd crack-interview
pnpm install
pnpm dev         # Inicia servidor local en localhost:4321
```

## 📋 Comandos Disponibles

| Comando                 | Acción                                               |
| :---------------------- | :--------------------------------------------------- |
| `pnpm install`          | Instala dependencias                                 |
| `pnpm dev`              | Inicia servidor de desarrollo en `localhost:4321`    |
| `pnpm build`            | Construye el sitio para producción en `./dist/`      |
| `pnpm preview`          | Vista previa local de la compilación                 |
| `pnpm run deploy:surge` | Despliega manualmente a Surge                        |
| `pnpm astro ...`        | Ejecuta CLI comandos como `astro add`, `astro check` |
| `pnpm astro -- --help`  | Obtener ayuda utiliza el Astro CLI                   |

## 📖 Cómo Usar Este Recurso

1. **Identifica Tu Rol Objetivo**: Enfócate en la tecnología relevante para tu posición deseada
2. **Estudia Conceptos Fundamentales**: Revisa los conceptos fundamentales en tus tecnologías objetivo
3. **Practica Problemas de Codificación**: Trabaja en los ejercicios proporcionados
4. **Simulacros de Entrevistas**: Usa nuestros materiales para simular escenarios reales de entrevista

## 🔄 Desarrollo y Despliegue

### Entornos de Despliegue

Este proyecto utiliza una estrategia de despliegue dual:
- **Vista Previa (Surge.sh)**: Desplegado automáticamente para cada PR
- **Producción (GitHub Pages)**: Desplegado cuando los cambios llegan a la rama `main`

### Configuración de Despliegues de Vista Previa

Para habilitar vistas previas automáticas de PR:

1. **Genera un token de Surge**
   ```bash
   npx surge token   # O: pnpm exec surge token
   ```

2. **Configura en GitHub**
   - Ve a Configuración del repositorio → Secrets and variables → Actions
   - Añade un nuevo secreto de repositorio: `SURGE_TOKEN`

Para solución de problemas detallada, consulta [TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md).

## 👥 Contribuciones

¡Agradecemos profundamente a todos nuestros increíbles colaboradores que han ayudado a hacer posible este proyecto! ❤️

¡Las contribuciones son bienvenidas! Ya sea:
- Añadiendo nuevas preguntas de entrevista
- Traduciendo contenido
- Arreglando errores
- Mejorando la documentación

No dudes en enviar un Pull Request o abrir un Issue.

## 🔧 Detalles Técnicos

- **Framework**: Astro
- **Node.js**: v23
- **Gestor de Paquetes**: pnpm (v10.6.5)
- **CI/CD**: GitHub Actions
- **Despliegue**: Surge.sh (vista previa) y GitHub Pages (producción)

Para más información detallada sobre el sistema de despliegue, consulta [DEPLOYMENT.md](docs/DEPLOYMENT.md).

---

<div align="center">
  <sub>Construido con ❤️ por la comunidad Sign Language Tech</sub>
</div>
