# 🚀 Sign Tech Interview

<div align="center">

## Agradeciendo a todos los Increíbles Contribuidores :heart:

[![Contribuidores](https://contrib.rocks/image?repo=signlanguagetech/crack-interview)](https://github.com/signlanguagetech/crack-interview/graphs/contributors)

**Una plataforma integral para la preparación de entrevistas técnicas**

[[English](README.md) | Español (actual)]

</div>

## 🔍 Descripción General

Este repositorio proporciona recursos seleccionados y materiales de práctica para ayudar a los desarrolladores a tener éxito en las entrevistas técnicas, con especial énfasis en la accesibilidad para personas sordas y hipoacusias. Nuestra plataforma cubre múltiples tecnologías e incluye problemas de práctica, estrategias de entrevista y materiales de referencia.

### 💼 ¿Para quién es esto?

- Desarrolladores de software que se preparan para entrevistas técnicas
- Personas que buscan cambiar de carrera hacia la tecnología
- Personas sordas y con discapacidad auditiva que necesitan preparación accesible para entrevistas
- Líderes técnicos y gerentes de contratación que buscan entender las mejores prácticas de entrevista

## ✨ Características Principales

- 📱 **Cobertura Tecnológica Integral**
  - Preparación para entrevistas de Angular, Flutter y Node.js
  - Ejemplos del mundo real y desafíos de programación
  - Mejores prácticas y errores comunes

- 🌎 **Soporte Multilingüe**
  - Inglés
  - Español

- 📊 **Aprendizaje Interactivo**
  - Ejemplos prácticos
  - Herramientas de autoevaluación
  - Seguimiento del progreso

- 🛠️ **Infraestructura Moderna**
  - Despliegues de vista previa para PR
  - Documentación impulsada por Astro
  - Optimizado para accesibilidad
  - Etiquetas meta Open Graph para mejor compartición en redes sociales

## 📚 Contenido

- **Habilidades Tecnológicas**:
  - **Angular**: Arquitectura de componentes, RxJS, gestión de estado, optimización de rendimiento
  - **Flutter**: Ciclo de vida de widgets, gestión de estado, desarrollo multiplataforma, pruebas
  - **Node.js**: Bucle de eventos, programación asíncrona, APIs, integración de bases de datos, microservicios
  - **TypeScript**: Sistema de tipos, interfaces, genéricos, tipos avanzados, herramientas
  - **ReactJs**: Ciclo de vida de componentes, hooks, gestión de estado, DOM virtual, rendimiento

## 🚦 Comenzando

```bash
git clone git@github.com:signlanguagetech/crack-interview.git
cd crack-interview
pnpm install
pnpm dev         # Inicia el servidor local en localhost:4300
```

## 📋 Comandos Disponibles

| Comando                 | Acción                                               |
| :---------------------- | :--------------------------------------------------- |
| `pnpm install`          | Instala las dependencias                             |
| `pnpm dev`              | Inicia el servidor de desarrollo en `localhost:4300` |
| `pnpm build`            | Construye el sitio de producción en `./dist/`        |
| `pnpm preview`          | Vista previa de la construcción localmente           |
| `pnpm run deploy:surge` | Despliega manualmente a Surge                        |
| `pnpm astro ...`        | Ejecuta comandos CLI como `astro add`, `astro check` |
| `pnpm astro -- --help`  | Obtiene ayuda usando el CLI de Astro                 |

## 📖 Cómo Usar Este Recurso

1. **Identifica Tu Rol Objetivo**: Enfócate en la pila tecnológica relevante para tu posición deseada
2. **Estudia Conceptos Fundamentales**: Revisa conceptos fundamentales en tus tecnologías objetivo
3. **Practica Problemas de Código**: Trabaja en los ejercicios proporcionados
4. **Entrevistas Simuladas**: Usa nuestros materiales para simular escenarios reales de entrevista

## 🔄 Desarrollo y Despliegue

### Entornos de Despliegue

Este proyecto utiliza una estrategia de despliegue dual:
- **Vista Previa (Surge.sh)**: Desplegado automáticamente para cada PR
- **Producción (GitHub Pages)**: Desplegado cuando los cambios llegan a la rama `main`

### Configuración de Despliegues de Vista Previa

Para habilitar las vistas previas automáticas de PR:

1. **Genera un token de Surge**
   ```bash
   npx surge token   # O: pnpm exec surge token
   ```

2. **Configura en GitHub**
   - Ve a Configuración del repositorio → Secretos y variables → Acciones
   - Agrega los siguientes secretos:
     - `SURGE_TOKEN`: Tu token de autenticación de Surge.sh

Para solución de problemas detallada, consulta [TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md).

### SEO y Compartición en Redes Sociales

El proyecto incluye:
- Etiquetas meta Open Graph para mejor compartición en redes sociales
- Datos estructurados para mejorar la visibilidad en motores de búsqueda
- Soporte multilingüe con etiquetas de idioma apropiadas
- Diseño responsivo para todos los dispositivos

> **Nota**: Necesitarás crear y agregar un archivo de imagen real en `/public/og-image.jpg` para que la etiqueta `og:image` funcione. Esta imagen debe ser:
> - Al menos 1200x630 píxeles para una visualización óptima en la mayoría de las plataformas de redes sociales
> - Menos de 1MB de tamaño de archivo
> - En formato JPG o PNG

## 👥 Contribuir

¡Agradecemos profundamente a todos nuestros increíbles contribuidores que han ayudado a hacer posible este proyecto! ❤️

¡Las contribuciones son bienvenidas! Ya sea:
- Agregar nuevas preguntas de entrevista
- Traducir contenido
- Corregir errores
- Mejorar la documentación

No dudes en enviar un Pull Request o abrir un Issue.

## 🔧 Detalles Técnicos

- **Framework**: Astro
- **Node.js**: v23
- **Gestor de Paquetes**: pnpm (v10.6.5)
- **CI/CD**: GitHub Actions
- **Despliegue**: Surge.sh (vista previa) y GitHub Pages (producción)

Para información más detallada sobre el sistema de despliegue, consulta [DEPLOYMENT.md](docs/DEPLOYMENT.md).

## 📝 Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- Todos nuestros contribuidores y seguidores
- Los equipos de Astro y Starlight por su increíble framework de documentación
- La comunidad de código abierto por sus invaluables recursos

---

<div align="center">
  <sub>Construido con ❤️ por la comunidad Sign Language Tech</sub>
</div>
