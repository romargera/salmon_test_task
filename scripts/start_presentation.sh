#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
STATE_FILE="$ROOT_DIR/.presentation_server.state"
LOG_FILE="$ROOT_DIR/.presentation_server.log"
START_PORT="${1:-4173}"

is_port_busy() {
  local port="$1"
  lsof -nP -iTCP:"$port" -sTCP:LISTEN >/dev/null 2>&1
}

read_state() {
  if [[ -f "$STATE_FILE" ]]; then
    # shellcheck disable=SC1090
    source "$STATE_FILE"
  fi
}

write_state() {
  local pid="$1"
  local port="$2"
  cat >"$STATE_FILE" <<EOF
PID=$pid
PORT=$port
EOF
}

read_state

if [[ -n "${PID:-}" ]] && [[ "${PORT:-}" == "$START_PORT" ]] && kill -0 "${PID}" 2>/dev/null; then
  url="http://127.0.0.1:${PORT}/presentation/reveal_full/index.html"
  if command -v open >/dev/null 2>&1; then
    open "$url" >/dev/null 2>&1 || true
  fi
  echo "Presentation server is already running (pid ${PID})"
  echo "URL: $url"
  exit 0
fi

if is_port_busy "$START_PORT"; then
  echo "Port ${START_PORT} is busy."
  lsof -nP -iTCP:"$START_PORT" -sTCP:LISTEN || true
  echo "Stop that process or run: scripts/serve_presentation.sh ${START_PORT}"
  exit 1
fi

(
  cd "$ROOT_DIR"
  nohup python3 -m http.server "$START_PORT" --bind 127.0.0.1 >"$LOG_FILE" 2>&1 < /dev/null &
  server_pid=$!
  write_state "$server_pid" "$START_PORT"
  disown "$server_pid" >/dev/null 2>&1 || true
)

sleep 1
read_state

if [[ -z "${PID:-}" ]] || ! kill -0 "${PID}" 2>/dev/null; then
  echo "Failed to start presentation server. Check log: $LOG_FILE"
  exit 1
fi

url="http://127.0.0.1:${PORT}/presentation/reveal_full/index.html"

reachable=false
for _ in 1 2 3 4 5; do
  if curl -fsS "$url" >/dev/null 2>&1; then
    reachable=true
    break
  fi
  sleep 0.4
done

if [[ "$reachable" != "true" ]]; then
  if [[ -n "${PID:-}" ]] && kill -0 "${PID}" 2>/dev/null; then
    kill "${PID}" >/dev/null 2>&1 || true
  fi
  rm -f "$STATE_FILE"
  echo "Server process started but URL is not reachable yet."
  echo "Use foreground mode instead: scripts/serve_presentation.sh"
  exit 1
fi

if command -v open >/dev/null 2>&1; then
  open "$url" >/dev/null 2>&1 || true
fi

echo "Presentation server started"
echo "PID: ${PID}"
echo "URL: $url"
echo "Log: $LOG_FILE"
echo "Stop: scripts/stop_presentation.sh"
