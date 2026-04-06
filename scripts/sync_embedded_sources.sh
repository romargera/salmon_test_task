#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

slides_b64="$(base64 < "$ROOT_DIR/slides_draft_final.md" | tr -d '\n')"
notes_b64="$(base64 < "$ROOT_DIR/speaker_notes.md" | tr -d '\n')"

cat > "$ROOT_DIR/presentation/reveal_full/slides_source.js" <<EOF
window.SLIDES_SOURCE_BASE64 = '${slides_b64}';
EOF

cat > "$ROOT_DIR/presentation/reveal_full/speaker_notes_source.js" <<EOF
window.SPEAKER_NOTES_SOURCE_BASE64 = '${notes_b64}';
EOF

echo "Embedded sources updated:"
echo "  presentation/reveal_full/slides_source.js"
echo "  presentation/reveal_full/speaker_notes_source.js"
