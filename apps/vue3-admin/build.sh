#!/bin/sh
set -e

nvm use 18
pnpm install --frozen-lockfile --ignore-scripts
# pnpm ci-check
pnpm build
