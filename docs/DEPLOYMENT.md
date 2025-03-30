# Deployment System

This project uses two deployment environments:

1. **Preview (Surge.sh)**: For testing on PRs
2. **Production (GitHub Pages)**: For the production site

## Deployment Flow

### Preview on Pull Requests

When a Pull Request is created or updated:

1. GitHub Actions automatically deploys a preview version to Surge.sh
2. The URL is generated as: `pr-{PR-number}-{repository-name}.surge.sh`
3. A comment is added to the PR with the deployment link

When the PR is closed:

1. The Surge.sh deployment is automatically removed
2. A comment is added to the PR confirming the removal

### Production

When a push is made to the `main` branch:

1. GitHub Actions builds the project
2. The result is deployed to the `gh-pages` branch
3. GitHub Pages serves the content

## Required Configuration

For the system to work, you need to configure:

1. Secret `SURGE_TOKEN`: 
   - Go to your repository's "Settings" tab
   - In the left sidebar, under "Security", click on "Secrets and variables"
   - Select "Actions" from the dropdown
   - Click "New repository secret" button
   - Name it exactly `SURGE_TOKEN` and paste your Surge token as the value

2. Enable GitHub Pages: Configure to serve from the `gh-pages` branch

## Local Tools

The project includes pnpm scripts for local testing:

```bash
# Deploy to Surge manually
pnpm run deploy:surge

# Deploy to Surge with PR URL format
PR_NUMBER=123 REPO_NAME=repository-name pnpm run deploy:surge:pr

# Remove a Surge deployment
pnpm run undeploy:surge domain-name.surge.sh
```

## Environment Variables

GitHub Actions workflows automatically use:

- `github.repository`: To extract the repository name
- `github.event.pull_request.number`: To get the current PR number

## Special Configurations

- **Surge.sh Token**: Stored in the GitHub repository secrets as `SURGE_TOKEN`. The workflow verifies that the token is configured before attempting deployment.
- **Node.js**: The workflow uses Node.js version 23 as defined in the shared build workflow.
- **Package Manager**: The project uses pnpm instead of npm (version 10.6.5).

## Technical Dependencies

- Node.js: 23 (configured in GitHub Actions workflows)
- Package manager: pnpm
- Tools: Surge.sh for previews, GitHub Pages for production

## Obtaining a Surge Token

To get a Surge token, follow these steps:

1. Run one of these commands in your local terminal:
   ```bash
   npx surge token
   ```

   Alternatively, if you're using pnpm:
   ```bash
   pnpm exec surge token
   ```

2. This will generate a token that you should add as a secret in your GitHub repository settings.

## Workflow Structure

The project uses several GitHub Actions workflows:

1. **shared-build.yml**: Reusable workflow for building the project
2. **preview.yml**: Deploys preview versions for PRs to Surge.sh
3. **cleanup-preview.yml**: Removes Surge.sh deployments when PRs are closed
4. **deploy-production.yml**: Deploys to GitHub Pages when changes are pushed to main
