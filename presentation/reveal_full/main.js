/* global Reveal, marked */

const SOM_SOURCE_URL =
  'https://docs.google.com/spreadsheets/d/1jzzUfvo3hHp4h_i9hOXBEJrKNEJ5Zv2G/edit?gid=1918265608#gid=1918265608&range=A2';

const APPENDIX_IDS = {
  A: 'appendix-a-ne-definition--classification',
  B: 'appendix-b-ne-case-studies--core-interactions',
  C: 'appendix-c-ne-success--virality',
  D: 'appendix-d-ne-current-state-in-fintech',
  E: 'appendix-e-ne-playbook--repeatable-patterns',
  F: 'appendix-f-unrealized-potential-in-finance',
  G: 'appendix-g-cross-industry-transfer',
  H: 'appendix-h-full-directions-map',
  I: 'appendix-i-segment-deep-dive',
  J: 'appendix-j-competitive-landscape',
  K: 'appendix-k-architecture--entities',
  L: 'appendix-l-freedom-of-use',
  M: 'appendix-m-engagement-first--second-user',
  N: 'appendix-n-mvp-scope',
  O: 'appendix-o-first-30-days',
  P: 'appendix-p-full-metrics-table',
  Q: 'appendix-q-tam--sam--som',
  R: 'appendix-r-artifacts-partner-functions',
  S: 'appendix-s-weird-hypotheses',
  T: 'appendix-t-faq-defense',
};

const LOCAL_REPO_PREFIXES = [
  '/Users/roman/Documents/Pet Projects/Salmon test task/',
  '/Users/roman/Documents/Pet%20Projects/Salmon%20test%20task/',
];

const INTERNAL_ANCHOR_ALIASES = Object.values(APPENDIX_IDS).reduce((acc, id) => {
  acc[id] = id;
  return acc;
}, {});

function slugAscii(input, fallback) {
  const clean = input
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return clean || fallback;
}

function deriveSlideId(title, index) {
  const slideMatch = title.match(/^Слайд\s+(\d+)\.\s*(.+)$/i);
  if (slideMatch) {
    const slideNo = slideMatch[1];
    const titlePart = slugAscii(slideMatch[2], `slide-${slideNo}`);
    return `slide-${slideNo}-${titlePart}`;
  }

  const appendixMatch = title.match(/^Appendix\s+([A-Z])\./i);
  if (appendixMatch) {
    const letter = appendixMatch[1].toUpperCase();
    return APPENDIX_IDS[letter] || `appendix-${letter.toLowerCase()}`;
  }

  return slugAscii(title, `slide-${index + 1}`);
}

function cleanDisplayTitle(title) {
  return title.replace(/^Слайд\s+\d+\.\s*/i, '').trim();
}

function parseSlideBlock(rawBlock, index) {
  const headingMatch = rawBlock.match(/^##\s+(.+)$/m);
  if (!headingMatch) {
    return null;
  }

  const title = headingMatch[1].trim();
  let body = rawBlock.replace(/^##\s+.+$/m, '').trim();

  let accent = '';
  const accentMatch = body.match(/Акцентная строка:\s*\n`([\s\S]*?)`\s*(?:\n+|$)/m);
  if (accentMatch) {
    accent = accentMatch[1].trim();
    body = body.replace(accentMatch[0], '').trim();
  }

  body = body.replace(/^Контент:\s*/m, '').trim();
  const slideId = deriveSlideId(title, index);

  return {
    id: slideId,
    title: cleanDisplayTitle(title),
    accent,
    contentMarkdown: body,
  };
}

function tryDecodeUri(value) {
  try {
    return decodeURI(value);
  } catch (err) {
    return value;
  }
}

function normalizeHref(href) {
  const raw = href.trim();
  const decoded = tryDecodeUri(raw);

  if (decoded.startsWith('#')) {
    const anchorKey = decoded.slice(1).toLowerCase();
    const normalizedAnchor = INTERNAL_ANCHOR_ALIASES[anchorKey] || anchorKey;
    return `#${normalizedAnchor}`;
  }

  if (/^https?:\/\//i.test(decoded)) {
    return decoded;
  }

  for (const prefix of LOCAL_REPO_PREFIXES) {
    if (decoded.startsWith(tryDecodeUri(prefix))) {
      const relativePath = decoded.slice(tryDecodeUri(prefix).length);
      return `/${encodeURI(relativePath)}`;
    }
  }

  const marker = '/Salmon test task/';
  const markerIndex = decoded.indexOf(marker);
  if (decoded.startsWith('/Users/') && markerIndex >= 0) {
    const relativePath = decoded.slice(markerIndex + marker.length);
    return `/${encodeURI(relativePath)}`;
  }

  if (decoded.startsWith('/')) {
    return encodeURI(decoded);
  }

  return raw;
}

function linkifyRawUrls(text) {
  return text.replace(/(?<!\]\()(https?:\/\/[^\s<>)\]]+)/g, (url) => {
    return `[${url}](${url})`;
  });
}

function unwrapBacktickLinks(text) {
  return text.replace(/`([^`\n]*\[[^\]]+\]\([^`]+\)[^`]*)`/g, '$1');
}

function sanitizeMarkdownLinks(text) {
  let output = '';

  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];

    if (ch !== '[' || text[i - 1] === '!') {
      output += ch;
      continue;
    }

    let labelEnd = -1;
    for (let j = i + 1; j < text.length; j += 1) {
      if (text[j] === ']' && text[j - 1] !== '\\') {
        labelEnd = j;
        break;
      }
    }

    if (labelEnd === -1 || text[labelEnd + 1] !== '(') {
      output += ch;
      continue;
    }

    let depth = 1;
    let cursor = labelEnd + 2;
    let href = '';
    while (cursor < text.length && depth > 0) {
      const current = text[cursor];
      if (current === '(') {
        depth += 1;
        href += current;
      } else if (current === ')') {
        depth -= 1;
        if (depth > 0) {
          href += current;
        }
      } else {
        href += current;
      }
      cursor += 1;
    }

    if (depth !== 0) {
      output += ch;
      continue;
    }

    const label = text.slice(i + 1, labelEnd);
    output += `[${label}](${normalizeHref(href.trim())})`;
    i = cursor - 1;
  }

  return output;
}

function promoteTileSubtitles(md) {
  return md
    .split('\n')
    .map((line) => {
      const topLevelLabeledList = line.match(/^\s*(?:[-*]|\d+\.)\s+`([^`]+)`\s*$/);
      if (topLevelLabeledList) {
        return `### ${topLevelLabeledList[1].trim()}`;
      }

      const standaloneCode = line.match(/^\s*`([^`]+)`\s*$/);
      if (standaloneCode) {
        const candidate = standaloneCode[1].trim();
        const words = candidate.split(/\s+/).filter(Boolean).length;
        if (candidate.length <= 64 || words <= 8) {
          return `### ${candidate}`;
        }
        return candidate;
      }

      return line;
    })
    .join('\n');
}

function normalizeMarkdown(md) {
  let out = md;

  out = unwrapBacktickLinks(out);
  out = out.replace(/`?SOM\s*=?\s*4\.2M`?/g, '__SOM_4_2M__');
  out = out.replace(/\[\[([0-9]+)\]\]\(([^)]+)\)/g, '[$1]($2)');
  out = out.replace(/\[\[([0-9]+)\]\]/g, '[$1]');
  out = out.replace(/`?\[A\]`?/g, '<span class="meta-flag">A</span>');
  out = promoteTileSubtitles(out);
  out = linkifyRawUrls(out);
  out = sanitizeMarkdownLinks(out);
  out = out.replace(/`([^`\n]+)`/g, '$1');

  out = out.replace(/__SOM_4_2M__/g, `[SOM 4.2M](${SOM_SOURCE_URL})`);

  return out;
}

function normalizeAccent(text) {
  return text
    .replace(/`?SOM\s*=?\s*4\.2M`?/g, 'SOM 4.2M')
    .replace(/`?\[A\]`?/g, 'A')
    .trim();
}

function splitContentBlocks(contentMarkdown) {
  const lines = contentMarkdown.split('\n');
  const blocks = [];
  let current = [];
  let inFence = false;

  const flush = () => {
    if (!current.length) {
      return;
    }
    const block = current.join('\n').trim();
    if (block) {
      blocks.push(block);
    }
    current = [];
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('```')) {
      inFence = !inFence;
      current.push(line);
      return;
    }

    if (!inFence && trimmed === '') {
      flush();
      return;
    }

    current.push(line);
  });

  flush();
  return blocks;
}

function normalizeRenderedHtml(html) {
  return html
    .replace(/<a([^>]*)>(\d+)<\/a>/g, '<a$1>[$2]</a>')
    .replace(
      /\[([^\]]+)\]\((#[^)]+|https?:\/\/[^)\s]+|\/[^)\s]+)\)/g,
      '<a href="$2">$1</a>'
    )
    .replace(/(?<!\[)\[([0-9]+)\](?!\()(?=[,.])/g, '[$1]')
    .replace(/`/g, '');
}

function applySingleItemBulletRule(root) {
  root.querySelectorAll('.markdown-body ul').forEach((ul) => {
    const directItems = [...ul.children].filter((node) => node.tagName === 'LI');
    if (directItems.length === 1) {
      ul.classList.add('single-item');
    }
  });
}

function renderMarkdownFragment(md) {
  const parsed = marked.parse(normalizeMarkdown(md), {
    gfm: true,
    breaks: true,
    headerIds: false,
    mangle: false,
  });
  return normalizeRenderedHtml(parsed);
}

function createCustomTile(heading, bodyMarkdown, extraClass = '') {
  const tile = document.createElement('article');
  tile.className = `tile content-block ${extraClass}`.trim();
  const body = document.createElement('div');
  body.className = 'markdown-body';

  const h = document.createElement('h3');
  h.className = 'tile-heading';
  h.textContent = heading.toUpperCase();
  body.appendChild(h);

  body.insertAdjacentHTML('beforeend', renderMarkdownFragment(bodyMarkdown));
  tile.appendChild(body);
  applySingleItemBulletRule(tile);
  return tile;
}

function buildExecutiveSummaryCustom(slide) {
  const section = document.createElement('section');
  section.id = slide.id;
  section.dataset.backgroundColor = '#f5f5f6';

  const shell = document.createElement('div');
  shell.className = 'slide-shell';

  const title = document.createElement('h2');
  title.className = 'main-title';
  title.textContent = slide.title;
  shell.appendChild(title);

  const grid = document.createElement('div');
  grid.className = 'tiles-grid exec-grid';

  const whatTile = createCustomTile(
    'WHAT',
    '**Salmon Space** — приватное пространство группы, где связаны повод, расход / сбор / цель, доли, обсуждение, расчет и история.',
    'exec-what'
  );

  const howTile = createCustomTile(
    'HOW',
    '- Сначала проверяем боль и качество решения задачи.\n- Затем — привлечение новых активированных пользователей и повторяемость.\n- После этого — перенос в новые графы и банковую экономику.',
    'exec-how'
  );

  const whyTile = createCustomTile(
    'WHY',
    '- **Боль реальна:** [75%](https://www.lendingtree.com/credit-cards/study/friends-money-report/) говорят, что деньги вредили дружбе; [32%](https://www.lendingtree.com/credit-cards/study/friends-money-report/) не получили деньги назад. US-данные валидируют силу боли, а PH-данные — поведение и реализуемость сценария [A].\n- **Сетевой эффект здесь работает:** новый релевантный участник помогает другим участникам Space решить задачу; повтор в том же Space углубляет ценность, перенос в другую группу расширяет сеть.\n- **Масштаб материален:** SOM 4.2M пользователей к 3-му году; это около 17% цели Salmon в 25M активных пользователей [1](#appendix-q-tam--sam--som), [2](' +
      SOM_SOURCE_URL +
      ').',
    'exec-why'
  );

  const riskTile = createCustomTile(
    'ГЛАВНЫЙ РИСК',
    'Если Space не доводит группу до закрытого расчета и второго повода, он останется удобным инструментом, а не сетевым продуктом.',
    'exec-risk'
  );

  const tradeOffTile = createCustomTile(
    'TRADE-OFF',
    'Среди друзей, пар / партнеров, семей с детьми и небольших групп коллег я выбираю друзей: у них сильнее перенос в новые графы и сетевой эффект, хотя пары и семьи могут выглядеть сильнее по частоте и немедленной монетизации, а коллеги — по утилитарности сценария.',
    'exec-trade'
  );

  grid.append(whatTile, howTile, whyTile, riskTile, tradeOffTile);
  shell.appendChild(grid);

  section.appendChild(shell);
  return section;
}

function buildWhyBetCustom(slide) {
  const section = document.createElement('section');
  section.id = slide.id;
  section.dataset.backgroundColor = '#f5f5f6';

  const shell = document.createElement('div');
  shell.className = 'slide-shell';

  const title = document.createElement('h2');
  title.className = 'main-title';
  title.textContent = slide.title;
  shell.appendChild(title);

  if (slide.accent) {
    const accentTile = document.createElement('article');
    accentTile.className = 'tile tile-accent';
    const accentBody = document.createElement('div');
    accentBody.className = 'markdown-body';
    const accentHeading = document.createElement('h3');
    accentHeading.className = 'tile-heading';
    accentHeading.textContent = 'SUMMARY';
    const accentText = document.createElement('p');
    accentText.className = 'accent-text';
    accentText.textContent = normalizeAccent(slide.accent);
    accentBody.append(accentHeading, accentText);
    accentTile.appendChild(accentBody);
    shell.appendChild(accentTile);
  }

  const grid = document.createElement('div');
  grid.className = 'tiles-grid bet-grid';

  const t1 = createCustomTile(
    'БОЛЬ',
    'Один платит за всех, дальше начинаются чат, напоминания, ручная математика и переводы в разных приложениях.\n\n[75%](https://www.lendingtree.com/credit-cards/study/friends-money-report/) респондентов сообщают, что деньги вредили дружбе; [32%](https://www.lendingtree.com/credit-cards/study/friends-money-report/) так и не получили деньги назад. US-данные валидируют силу боли, а PH-данные — поведение и реализуемость сценария [A].',
    'bet-1'
  );

  const t2 = createCustomTile(
    'СЕТЕВОЙ ЭФФЕКТ',
    'Это локальный прямой эффект: каждый новый участник Space делает общий расход точнее, видимее и ближе к закрытому расчету.\n\nОдин человек обычно состоит сразу в [нескольких компаниях друзей](#appendix-i-segment-deep-dive), поэтому паттерн переносится дальше.',
    'bet-2'
  );

  const t3 = createCustomTile(
    'ЭКОНОМИКА',
    'Контекстное приглашение может быть дешевле платного канала, а цепочка ценности выглядит так: Space -> новый активированный пользователь -> доходное банковое действие -> вклад когорты в экономику [A].\n\nВпервые фиксирую расчетный возрастной фокус 20-39: в этой рамке SOM 4.2M пользователей к 3-му году; это около 17% цели Salmon в 25M активных пользователей [1](#appendix-q-tam--sam--som), [2](' +
      SOM_SOURCE_URL +
      '), [3](#appendix-p-full-metrics-table), [A].',
    'bet-3'
  );

  const t4 = createCustomTile(
    'ПИЛОТ',
    'Достаточно 15-20 реальных групп и 30 дней, чтобы проверить боль, первый закрытый расчет, повтор и перенос в новые графы [3](#appendix-o-first-30-days), [A].\n\nУ сценария есть короткие go / no-go пороги, а не многомесячный горизонт неопределенности.',
    'bet-4'
  );

  grid.append(t1, t2, t3, t4);
  shell.appendChild(grid);
  section.appendChild(shell);
  return section;
}

function renderMarkdownBlock(blockMarkdown) {
  const block = document.createElement('article');
  block.className = 'tile content-block markdown-body';

  block.innerHTML = renderMarkdownFragment(blockMarkdown);
  applySingleItemBulletRule(block);
  return block;
}

function buildSlideSection(slide) {
  if (slide.id === 'slide-1-executive-summary') {
    return buildExecutiveSummaryCustom(slide);
  }

  if (slide.id === 'slide-2-why-the-bet') {
    return buildWhyBetCustom(slide);
  }

  const section = document.createElement('section');
  section.id = slide.id;
  section.dataset.backgroundColor = '#f5f5f6';

  const shell = document.createElement('div');
  shell.className = 'slide-shell';

  const title = document.createElement('h2');
  title.className = 'main-title';
  title.textContent = slide.title;
  shell.appendChild(title);

  if (slide.accent) {
    const accentTile = document.createElement('article');
    accentTile.className = 'tile tile-accent';
    const accentText = document.createElement('p');
    accentText.className = 'accent-text';
    accentText.textContent = normalizeAccent(slide.accent);
    accentTile.appendChild(accentText);
    shell.appendChild(accentTile);
  }

  const tilesStack = document.createElement('div');
  tilesStack.className = 'tiles-stack';
  const blocks = splitContentBlocks(slide.contentMarkdown);
  blocks.forEach((blockMarkdown) => {
    tilesStack.appendChild(renderMarkdownBlock(blockMarkdown));
  });
  shell.appendChild(tilesStack);

  section.appendChild(shell);
  return section;
}

async function loadMarkdownSource() {
  const sources = ['../../slides_draft_final.md', '/slides_draft_final.md'];

  for (const sourcePath of sources) {
    try {
      const response = await fetch(sourcePath);
      if (!response.ok) {
        continue;
      }
      return await response.text();
    } catch (err) {
      // noop, try next path
    }
  }

  throw new Error('Не удалось загрузить slides_draft_final.md');
}

function splitSlides(markdown) {
  return markdown
    .split(/\n-{3,}\n/g)
    .map((chunk) => chunk.trim())
    .filter(Boolean);
}

async function renderDeck() {
  const loading = document.getElementById('loading');
  const slidesRoot = document.querySelector('.reveal .slides');

  try {
    const sourceMarkdown = await loadMarkdownSource();
    const blocks = splitSlides(sourceMarkdown);
    const parsedSlides = blocks
      .map((block, idx) => parseSlideBlock(block, idx))
      .filter(Boolean);

    parsedSlides.forEach((slide) => {
      slidesRoot.appendChild(buildSlideSection(slide));
    });

    const isNarrowScreen = window.matchMedia('(max-width: 980px)').matches;
    const deck = new Reveal({
      hash: true,
      controls: true,
      progress: true,
      center: true,
      transition: 'fade',
      transitionSpeed: 'fast',
      backgroundTransition: 'fade',
      width: isNarrowScreen ? 420 : 1366,
      height: isNarrowScreen ? 900 : 768,
      margin: isNarrowScreen ? 0.05 : 0.03,
      minScale: 0.3,
      maxScale: 2.2,
    });

    await deck.initialize();
    loading.classList.add('hidden');
  } catch (err) {
    loading.textContent = `Ошибка сборки слайдов: ${err.message}`;
  }
}

renderDeck();
