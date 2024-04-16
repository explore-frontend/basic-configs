#!/bin/sh
set -e

# 有 lockfile 的时候是不是 prefer-offline 也不会加速？
# 暂时没有需要 pre-gyp 安装的二进制依赖
pnpm install --frozen-lockfile --ignore-scripts

pnpm ci-check
