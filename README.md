# 🚀 Sign Tech Interview

<div align="center">

## Thanking all Awesome Contributors :heart:

[![Contributors](https://contrib.rocks/image?repo=signlanguagetech/crack-interview)](https://github.com/signlanguagetech/crack-interview/graphs/contributors)

**A comprehensive platform for technical interview preparation**

[English (current) | [Español](README.es.md)]

</div>

## 🔍 Overview

This repository provides curated resources and practice materials to help developers succeed in technical interviews, with special focus on accessibility for deaf and hard of hearing individuals. Our platform covers multiple technologies and includes practice problems, interview strategies, and reference materials.

### 💼 Who is this for?

- Software developers preparing for technical interviews
- Career changers looking to break into tech
- Deaf and hard of hearing individuals who need accessible interview preparation
- Tech leads and hiring managers seeking to understand interview best practices

## ✨ Key Features

- 📱 **Comprehensive Technology Coverage**
  - Angular, Flutter, and Node.js interview preparation
  - Real-world examples and coding challenges
  - Best practices and common pitfalls

- 🌎 **Multilingual Support**
  - English
  - Spanish (Español)

- 📊 **Interactive Learning**
  - Practical examples
  - Self-assessment tools
  - Progress tracking

- 🛠️ **Modern Infrastructure**
  - PR preview deployments
  - Astro-powered documentation
  - Optimized for accessibility
  - Open Graph meta tags for better social sharing

## 📚 Contents

- **Technology Skills**:
  - **Angular**: Component architecture, RxJS, state management, performance optimization
  - **Flutter**: Widget lifecycle, state management, cross-platform development, testing
  - **Node.js**: Event loop, async programming, APIs, database integration, microservices

## 🚦 Getting Started

```bash
git clone git@github.com:signlanguagetech/crack-interview.git
cd crack-interview
pnpm install
pnpm dev         # Starts local server at localhost:4300
```

## 📋 Available Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4300`      |
| `pnpm build`           | Builds production site to `./dist/`              |
| `pnpm preview`         | Preview build locally                            |
| `pnpm run deploy:surge`| Deploy to Surge manually                         |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 📖 How to Use This Resource

1. **Identify Your Target Role**: Focus on the technology stack relevant to your desired position
2. **Study Core Concepts**: Review fundamental concepts in your target technologies
3. **Practice Coding Problems**: Work through the provided exercises
4. **Mock Interviews**: Use our materials to simulate real interview scenarios

## 🔄 Development & Deployment

### Deployment Environments

This project uses a dual deployment strategy:
- **Preview (Surge.sh)**: Automatically deployed for each PR
- **Production (GitHub Pages)**: Deployed when changes reach the `main` branch

### Setting up Preview Deployments

To enable automatic PR previews:

1. **Generate a Surge token**
   ```bash
   npx surge token   # Or: pnpm exec surge token
   ```

2. **Configure in GitHub**
   - Go to repository Settings → Secrets and variables → Actions
   - Add the following secrets:
     - `SURGE_TOKEN`: Your Surge.sh authentication token
     - `SURGE_DOMAIN`: Your Surge.sh domain (e.g., `your-project.surge.sh`)

For detailed troubleshooting, see [TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md).

### SEO and Social Sharing

The project includes:
- Open Graph meta tags for better social media sharing
- Structured data for improved search engine visibility
- Multilingual support with proper language tags
- Responsive design for all devices

> **Note**: You'll need to create and add an actual image file at `/public/og-image.jpg` for the `og:image` tag to work. This image should be:
> - At least 1200x630 pixels for optimal display on most social media platforms
> - Less than 1MB in file size
> - In JPG or PNG format

## 👥 Contributing

We deeply appreciate all our amazing contributors who have helped make this project possible! ❤️

Contributions are welcome! Whether it's:
- Adding new interview questions
- Translating content
- Fixing bugs
- Improving documentation

Please feel free to submit a Pull Request or open an Issue.

## 🔧 Technical Details

- **Framework**: Astro
- **Node.js**: v23
- **Package Manager**: pnpm (v10.6.5)
- **CI/CD**: GitHub Actions
- **Deployment**: Surge.sh (preview) and GitHub Pages (production)

For more detailed information about the deployment system, see [DEPLOYMENT.md](docs/DEPLOYMENT.md).

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- All our contributors and supporters
- The Astro and Starlight teams for their amazing documentation framework
- The open-source community for their invaluable resources

---

<div align="center">
  <sub>Built with ❤️ by the Sign Language Tech community</sub>
</div>
