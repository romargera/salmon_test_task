#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
START_PORT="${1:-4173}"

is_port_busy() {
  local port="$1"
  lsof -nP -iTCP:"$port" -sTCP:LISTEN >/dev/null 2>&1
}

port="$START_PORT"
while is_port_busy "$port"; do
  port=$((port + 1))
done

url="http://127.0.0.1:${port}/presentation/reveal_full/index.html"
echo "Serving from: $ROOT_DIR"
echo "Open in browser: $url"
echo "Press Ctrl+C to stop."

if command -v open >/dev/null 2>&1; then
  open "$url" >/dev/null 2>&1 || true
fi

cd "$ROOT_DIR"
exec python3 -m http.server "$port" --bind 127.0.0.1
