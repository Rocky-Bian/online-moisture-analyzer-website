#!/usr/bin/env bash
# Connect local repo to GitHub without `gh auth login --web`.
# Run with: bash scripts/connect-github.sh  (use bash explicitly if ./ shows no output)

set -euo pipefail

cd "$(dirname "$0")/.."

echo "==> ALZRO GitHub push script"

REPO_NAME="${REPO_NAME:-online-moisture-analyzer-website}"
GITHUB_USERNAME="${GITHUB_USERNAME:-Rocky-Bian}"

if [[ -z "${GITHUB_TOKEN:-}" ]]; then
  echo "ERROR: Set GITHUB_TOKEN (Personal Access Token with 'repo' scope)."
  echo ""
  echo "Steps:"
  echo "  1. Browser: https://github.com/new → create '$REPO_NAME' (empty, no README)"
  echo "  2. Browser: https://github.com/settings/tokens → Generate token (repo)"
  echo "  3. Run:"
  echo "     GITHUB_USERNAME=$GITHUB_USERNAME GITHUB_TOKEN=ghp_xxxx ./scripts/connect-github.sh"
  echo ""
  echo "If gh login fails with timeout, use this script instead of: gh auth login --web"
  exit 1
fi

# Fix common typo: ghp_ghp_xxx → ghp_xxx
if [[ "$GITHUB_TOKEN" == ghp_ghp_* ]]; then
  echo "WARN: Token had duplicate 'ghp_' prefix — fixing automatically."
  GITHUB_TOKEN="${GITHUB_TOKEN#ghp_}"
fi

if [[ "$GITHUB_TOKEN" != ghp_* ]]; then
  echo "ERROR: Token must start with ghp_ (one prefix only, not ghp_ghp_)."
  exit 1
fi

REMOTE_URL="https://${GITHUB_TOKEN}@github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"

echo "==> Setting remote origin → github.com/${GITHUB_USERNAME}/${REPO_NAME}"
if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"
else
  git remote add origin "https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"
fi

echo "==> Pushing main branch..."
git push "${REMOTE_URL}" main
git remote set-url origin "https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"
git fetch origin 2>/dev/null || true
git branch --set-upstream-to=origin/main main 2>/dev/null || git push -u origin main

echo ""
echo "==> Done! Repository: https://github.com/${GITHUB_USERNAME}/${REPO_NAME}"
echo ""
echo "Next — connect Vercel for auto-deploy on push:"
echo "  https://vercel.com/rocky-s-projects9/online-moisture-analyzer-website/settings/git"
