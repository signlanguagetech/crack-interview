# Troubleshooting: GitHub Actions and Secrets

This document provides detailed instructions for resolving common issues with GitHub Actions, especially those related to secrets.

## Issue: "SURGE_TOKEN is not set in the repository secrets"

If you see this error, it means the `SURGE_TOKEN` secret is not properly configured in your repository. Follow these steps to resolve it:

### 1. Verify Current Secret Configuration

1. Go to your repository on GitHub.
2. Click on "Settings" tab at the top of the repository page.
3. In the left sidebar menu, scroll down to the "Security" section and click on "Secrets and variables".
4. Select "Actions" from the dropdown menu.
5. Check the "Repository secrets" section to see if a secret named `SURGE_TOKEN` exists. If it doesn't exist, you need to create it by clicking "New repository secret".

### 2. Generate a New Surge Token

1. In your local terminal, run:
   ```bash
   npx surge token
   ```
   
   Alternatively, you can use pnpm if you prefer:
   ```bash
   pnpm exec surge token
   ```
   
2. You should see a long alphanumeric token. Copy it.

### 3. Add or Update the Secret

1. On the GitHub secrets page (where you checked in step 1):
   - If the secret already exists: Click the edit (pencil) icon next to `SURGE_TOKEN`.
   - If the secret doesn't exist: Click "New repository secret" button.

2. Configure the secret:
   - **Name**: `SURGE_TOKEN` (the name must be exactly like this, respecting case)
   - **Value**: Paste the token you copied in step 2
   - Click "Add secret" or "Update secret" as appropriate

### 4. Verify Secret Scope

Make sure the secret is configured in the **correct repository**, not in your user account or another repository.

### 5. Test Surge Authentication Manually

If you're unsure if your token is valid, you can test it manually:

```bash
echo "your-token-here" > ~/.surge/token
surge whoami
```

You should see your email associated with Surge if the token is valid.

## Common Causes of the Problem:

1. **Secret doesn't exist**: The secret hasn't been created in GitHub.
2. **Incorrect name**: The secret is not named exactly `SURGE_TOKEN`.
3. **Incorrect scope**: The secret is configured in another repository or at organization/user level instead of repository level.
4. **Invalid token**: The generated token is not valid or has expired.
5. **Insufficient permissions**: The person running the workflow doesn't have permissions to access the secret.

## Note on Secret Visibility

Secrets are never shown in GitHub Actions logs for security reasons. When a secret is used in a workflow, it will appear as `***` in the logs.

## If Nothing Works...

As an alternative, you can:

1. Temporarily disable token checks and deploy manually.
2. Use an alternative preview deployment service like Netlify or Vercel that have native GitHub integrations. 
