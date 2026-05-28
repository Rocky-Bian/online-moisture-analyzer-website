#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "==> Checking GitHub CLI login..."
if ! gh auth status >/dev/null 2>&1; then
  echo ""
  echo "Please log in to GitHub first:"
  echo "  gh auth login --hostname github.com --git-protocol https --web"
  echo ""
  echo "Then run this script again."
  exit 1
fi

REPO_NAME="${1:-online-moisture-analyzer-website}"

echo "==> Creating GitHub repo: $REPO_NAME"
if git remote get-url origin >/dev/null 2>&1; then
  echo "Remote 'origin' already exists:"
  git remote get-url origin
  read -r -p "Push to existing remote? [y/N] " confirm
  if [[ "${confirm,,}" == "y" ]]; then
    git push -u origin main
    echo "Done."
    exit 0
  fi
  exit 0
fi

gh repo create "$REPO_NAME" \
  --public \
  --source=. \
  --remote=origin \
  --description="ALZRO — Online Moisture Analyzer industrial B2B website (Next.js)" \
  --push

echo ""
echo "==> Repository created and pushed."
gh repo view --web 2>/dev/null || true
echo ""
echo "Next: connect Vercel to GitHub for auto-deploy:"
echo "  https://vercel.com/rocky-s-projects9/online-moisture-analyzer-website/settings/git"
