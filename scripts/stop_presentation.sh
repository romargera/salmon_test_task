#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
STATE_FILE="$ROOT_DIR/.presentation_server.state"

if [[ ! -f "$STATE_FILE" ]]; then
  echo "No running presentation server found (state file is missing)."
  exit 0
fi

# shellcheck disable=SC1090
source "$STATE_FILE"

if [[ -n "${PID:-}" ]] && kill -0 "${PID}" 2>/dev/null; then
  kill "${PID}" >/dev/null 2>&1 || true
  sleep 0.3
  if kill -0 "${PID}" 2>/dev/null; then
    kill -9 "${PID}" >/dev/null 2>&1 || true
  fi
  echo "Stopped presentation server (pid ${PID})."
else
  echo "Presentation server process is not running."
fi

rm -f "$STATE_FILE"
