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

function getRepoBasePath() {
  if (typeof window === 'undefined' || !window.location || !window.location.pathname) {
    return '/';
  }

  const marker = '/presentation/reveal_full/';
  const markerIndex = window.location.pathname.indexOf(marker);
  if (markerIndex >= 0) {
    const basePath = window.location.pathname.slice(0, markerIndex + 1);
    return basePath || '/';
  }

  if (window.location.pathname.endsWith('/')) {
    return window.location.pathname;
  }

  const lastSlash = window.location.pathname.lastIndexOf('/');
  return lastSlash >= 0 ? window.location.pathname.slice(0, lastSlash + 1) : '/';
}

const REPO_BASE_PATH = getRepoBasePath();

function toRepoRootPath(relativeOrAbsolutePath) {
  return `${REPO_BASE_PATH}${relativeOrAbsolutePath.replace(/^\/+/, '')}`;
}

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
  return title
    .replace(/^Слайд\s+\d+\.\s*/i, '')
    .replace(/^Appendix\s+[A-Z]\.\s*/i, '')
    .trim();
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
    return encodeURI(decoded);
  }

  for (const prefix of LOCAL_REPO_PREFIXES) {
    if (decoded.startsWith(tryDecodeUri(prefix))) {
      const relativePath = decoded.slice(tryDecodeUri(prefix).length);
      return encodeURI(toRepoRootPath(relativePath));
    }
  }

  const marker = '/Salmon test task/';
  const markerIndex = decoded.indexOf(marker);
  if (decoded.startsWith('/Users/') && markerIndex >= 0) {
    const relativePath = decoded.slice(markerIndex + marker.length);
    return encodeURI(toRepoRootPath(relativePath));
  }

  if (decoded.startsWith('/')) {
    return encodeURI(toRepoRootPath(decoded));
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
  out = out.replace(
    /Прим\. Будет валидировано на PH\./g,
    '<span class="note-muted"><em>Прим. Будет валидировано на PH.</em></span>'
  );
  out = out.replace(
    /Прим\. Будет рассчитан Bottom Up и cross-check\./g,
    '<span class="note-muted"><em>Прим. Будет рассчитан Bottom Up и cross-check.</em></span>'
  );
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

function renderInlineMarkdown(text) {
  const html = renderMarkdownFragment(text).trim();
  return html.replace(/^<p>/, '').replace(/<\/p>$/, '');
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

function parseFirstMarkdownTable(contentMarkdown) {
  const lines = contentMarkdown.split('\n');
  let start = -1;
  let end = -1;

  for (let i = 0; i < lines.length - 1; i += 1) {
    const row = lines[i].trim();
    const separator = lines[i + 1].trim();
    if (!row.startsWith('|') || !separator.startsWith('|')) {
      continue;
    }
    if (!/\|\s*:?-{3,}:?\s*\|/.test(separator)) {
      continue;
    }
    start = i;
    end = i + 1;
    break;
  }

  if (start < 0) {
    return null;
  }

  for (let i = end + 1; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (!line.startsWith('|')) {
      end = i - 1;
      break;
    }
    end = i;
  }

  const tableLines = lines.slice(start, end + 1).map((line) => line.trim());
  if (tableLines.length < 3) {
    return null;
  }

  const parseRow = (line) => {
    return line
      .replace(/^\|/, '')
      .replace(/\|$/, '')
      .split('|')
      .map((cell) => cell.trim());
  };

  const headers = parseRow(tableLines[0]);
  const rows = tableLines.slice(2).map(parseRow);

  return { headers, rows };
}

function extractBacktickBlockAfterHeading(contentMarkdown, headingText) {
  const escaped = headingText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`\`${escaped}\`\\s*\\n\`([^\`]+)\``);
  const match = contentMarkdown.match(pattern);
  return match ? match[1].trim() : '';
}

function trimCommonIndent(lines) {
  const nonEmptyLines = lines.filter((line) => line.trim().length > 0);
  if (!nonEmptyLines.length) {
    return '';
  }

  const minIndent = Math.min(
    ...nonEmptyLines.map((line) => {
      const match = line.match(/^(\s*)/);
      return match ? match[1].length : 0;
    })
  );

  return lines.map((line) => line.slice(Math.min(minIndent, line.length))).join('\n').trim();
}

function normalizeSectionKey(value) {
  return value
    .toLowerCase()
    .replace(/ё/g, 'е')
    .replace(/[^a-z0-9а-я]+/g, '');
}

function parseBacktickSections(contentMarkdown, headingPattern) {
  const sections = [];
  const lines = contentMarkdown.split('\n');
  let current = null;

  const flush = () => {
    if (!current) {
      return;
    }
    sections.push({
      title: current.title,
      bodyMarkdown: trimCommonIndent(current.lines),
    });
    current = null;
  };

  lines.forEach((line) => {
    const match = line.match(headingPattern);
    if (match) {
      flush();
      current = { title: match[1].trim(), lines: [] };
      return;
    }

    if (current) {
      current.lines.push(line);
    }
  });

  flush();
  return sections;
}

function parseLabeledBacktickSections(contentMarkdown) {
  return parseBacktickSections(contentMarkdown, /^\s*-\s+`([^`]+)`\s*$/);
}

function parseNumberedBacktickSections(contentMarkdown) {
  return parseBacktickSections(contentMarkdown, /^\s*\d+\.\s+`([^`]+)`\s*$/);
}

function findSectionBodyByAliases(sections, aliases) {
  const aliasKeys = aliases.map((alias) => normalizeSectionKey(alias)).filter(Boolean);
  if (!aliasKeys.length) {
    return '';
  }

  const exactMatch = sections.find((section) => {
    const sectionKey = normalizeSectionKey(section.title);
    return aliasKeys.includes(sectionKey);
  });
  if (exactMatch) {
    return exactMatch.bodyMarkdown;
  }

  const partialMatch = sections.find((section) => {
    const sectionKey = normalizeSectionKey(section.title);
    return aliasKeys.some((aliasKey) => sectionKey.includes(aliasKey) || aliasKey.includes(sectionKey));
  });
  if (partialMatch) {
    return partialMatch.bodyMarkdown;
  }

  return '';
}

function mapWhyBetTileHeading(sourceHeading, index) {
  const key = normalizeSectionKey(sourceHeading);
  if (key.includes('боль')) {
    return 'БОЛЬ';
  }
  if (key.includes('сетевойэффект')) {
    return 'СЕТЕВОЙ ЭФФЕКТ';
  }
  if (key.includes('экономика')) {
    return 'ЭКОНОМИКА';
  }
  if (key.includes('пилот')) {
    return 'ПИЛОТ';
  }
  const fallbackByIndex = ['БОЛЬ', 'СЕТЕВОЙ ЭФФЕКТ', 'ЭКОНОМИКА', 'ПИЛОТ'];
  return fallbackByIndex[index] || sourceHeading;
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

  const sections = parseLabeledBacktickSections(slide.contentMarkdown);
  const whatBody =
    findSectionBodyByAliases(sections, ['what']) ||
    '**Salmon Space** — приватное пространство группы, где связаны повод, затраты, сбор, цель, доли, обсуждение, расчет и история.';
  const howBody =
    findSectionBodyByAliases(sections, ['how']) ||
    '1. Проверяем боль и качество решения задачи.\n2. Проверяем привлечение новых активированных пользователей и повторяемость.\n3. Проверяем перенос в новые графы и банковскую экономику.';
  const whyBody =
    findSectionBodyByAliases(sections, ['why']) ||
    '- **Реальная боль [A]:** [75%](https://www.lendingtree.com/credit-cards/study/friends-money-report/) говорят, что деньги вредили дружбе; [32%](https://www.lendingtree.com/credit-cards/study/friends-money-report/) не получили деньги назад. Прим. Будет валидировано на PH.\n- **Сетевой эффект:** новый релевантный участник помогает другим участникам Space решить задачу; повтор в том же Space углубляет ценность, перенос в другую группу расширяет сеть.\n- **Масштаб:** SOM 4.2M [A] пользователей к 3-му году; ~ 17% цели Salmon в 25M активных пользователей [1](#appendix-q-tam--sam--som), [2](' +
      SOM_SOURCE_URL +
      '). Прим. Будет рассчитан Bottom Up и cross-check.';
  const riskBody =
    findSectionBodyByAliases(sections, ['главный риск', 'risk']) ||
    'Если Space не доводит группу до закрытого расчета и второго повода, он останется удобным инструментом, а не сетевым продуктом.';
  const tradeOffBody =
    findSectionBodyByAliases(sections, ['trade-off', 'trade off', 'tradeoff']) ||
    'Среди топ NE сегментов "друзья", "пары / партнеры", "дети в семьях" и "небольших групп коллег" я выбираю друзей: у них сильнее перенос в новые графы и сетевой эффект.';

  const whatTile = createCustomTile(
    'WHAT',
    whatBody,
    'exec-what'
  );

  const howTile = createCustomTile('HOW', howBody, 'exec-how');

  const whyTile = createCustomTile('WHY', whyBody, 'exec-why');

  const riskTile = createCustomTile('ГЛАВНЫЙ РИСК', riskBody, 'exec-risk');

  const tradeOffTile = createCustomTile('TRADE-OFF', tradeOffBody, 'exec-trade');

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
    accentText.innerHTML = renderInlineMarkdown(normalizeAccent(slide.accent));
    accentBody.append(accentHeading, accentText);
    accentTile.appendChild(accentBody);
    shell.appendChild(accentTile);
  }

  const grid = document.createElement('div');
  grid.className = 'tiles-grid bet-grid';
  const sections = parseNumberedBacktickSections(slide.contentMarkdown);
  const tileSpecs =
    sections.length > 0
      ? sections.slice(0, 4).map((sectionItem, index) => ({
          heading: mapWhyBetTileHeading(sectionItem.title, index),
          bodyMarkdown: sectionItem.bodyMarkdown,
        }))
      : [
          {
            heading: 'БОЛЬ',
            bodyMarkdown:
              '- Один платит за всех, дальше начинаются чаты, напоминания, ручная математика, неловкие напоминания и переводы в разных приложениях.\n- [75%](https://www.lendingtree.com/credit-cards/study/friends-money-report/) говорят, что деньги вредили дружбе; [32%](https://www.lendingtree.com/credit-cards/study/friends-money-report/) не получили деньги назад. Прим. Будет валидировано на PH.',
          },
          {
            heading: 'СЕТЕВОЙ ЭФФЕКТ',
            bodyMarkdown:
              '- Каждый новый участник Space приближает группу ближе к закрытому расчету или достигнутой финансовой цели.\n- Каждый новый участник может создавать новые контексты в существующем Space или создавать новые Spaces и приглашать новых пользователей.',
          },
          {
            heading: 'ЭКОНОМИКА',
            bodyMarkdown:
              'Цепочка ценности: Space -> новый активированный пользователь -> доходное банковое действие -> вклад когорты в банковскую экономику.',
          },
          {
            heading: 'ПИЛОТ',
            bodyMarkdown:
              '[A] В первый месяц верифицируем боль и снимаем качественные usability-сигналы с прототипом. В четвертый месяц получаем первые количественные данные.',
          },
        ];

  tileSpecs.forEach((tileSpec, index) => {
    grid.appendChild(createCustomTile(tileSpec.heading, tileSpec.bodyMarkdown, `bet-${index + 1}`));
  });
  shell.appendChild(grid);
  section.appendChild(shell);
  return section;
}

function buildAppendixCaseStudiesCustom(slide) {
  const section = document.createElement('section');
  section.id = slide.id;
  section.dataset.backgroundColor = '#f5f5f6';

  const shell = document.createElement('div');
  shell.className = 'slide-shell';

  const title = document.createElement('h2');
  title.className = 'main-title';
  title.textContent = slide.title;
  shell.appendChild(title);

  const tilesStack = document.createElement('div');
  tilesStack.className = 'tiles-stack';
  const blocks = splitContentBlocks(slide.contentMarkdown);
  blocks.forEach((blockMarkdown) => {
    const match = blockMarkdown.match(/^\s*`([^`]+)`\s*\n([\s\S]+)$/);
    if (match && normalizeSectionKey(match[1]) === normalizeSectionKey('Best practice:')) {
      tilesStack.appendChild(
        createCustomTile(match[1], match[2].trim(), 'appendix-b-best-practice')
      );
      return;
    }
    tilesStack.appendChild(renderMarkdownBlock(blockMarkdown));
  });
  shell.appendChild(tilesStack);

  section.appendChild(shell);
  return section;
}

function buildAppendixDividerSlide(slide) {
  const section = document.createElement('section');
  section.id = slide.id;
  section.dataset.backgroundColor = '#f5f5f6';

  const shell = document.createElement('div');
  shell.className = 'slide-shell appendix-divider';

  const title = document.createElement('h2');
  title.className = 'main-title appendix-divider-title';
  title.textContent = slide.title;
  shell.appendChild(title);

  section.appendChild(shell);
  return section;
}

function buildCoverTitleSlide(slide) {
  const section = document.createElement('section');
  section.id = slide.id;
  section.className = 'cover-title-slide';
  section.dataset.backgroundColor = '#f5f5f6';

  const shell = document.createElement('div');
  shell.className = 'slide-shell cover-shell';

  const title = document.createElement('h2');
  title.className = 'main-title';
  title.textContent = slide.title;
  shell.appendChild(title);

  const subtitleLine =
    slide.contentMarkdown
      .split('\n')
      .map((line) => line.trim())
      .find((line) => line.length > 0) || '"Spaces" Роман Бабунц';

  const subtitle = document.createElement('h2');
  subtitle.className = 'main-title cover-subtitle';
  subtitle.textContent = subtitleLine;
  shell.appendChild(subtitle);

  section.appendChild(shell);
  return section;
}

function buildWhatScenariosCustom(slide) {
  const section = document.createElement('section');
  section.id = slide.id;
  section.dataset.backgroundColor = '#f5f5f6';

  const shell = document.createElement('div');
  shell.className = 'slide-shell';

  const title = document.createElement('h2');
  title.className = 'main-title';
  title.textContent = slide.title;
  shell.appendChild(title);

  const table = parseFirstMarkdownTable(slide.contentMarkdown);
  const creatorHeading = (table?.headers?.[0] || 'Создатель Space').toUpperCase();
  const participantHeading = (table?.headers?.[1] || 'Участник').toUpperCase();
  const creatorItems = (table?.rows || [])
    .map((row) => row[0])
    .filter(Boolean)
    .map((item) => `- ${item}`)
    .join('\n');
  const participantItems = (table?.rows || [])
    .map((row) => row[1])
    .filter(Boolean)
    .map((item) => `- ${item}`)
    .join('\n');

  const resultText =
    extractBacktickBlockAfterHeading(slide.contentMarkdown, 'ОБРАЗ РЕЗУЛЬТАТА') ||
    'Опыт должен быть короче и удобнее мультимодального ("ручного") пути: заведение затрат -> доли -> расчет -> выплата.';

  const grid = document.createElement('div');
  grid.className = 'tiles-grid scenarios-grid';

  const creatorTile = createCustomTile(creatorHeading, creatorItems, 'scenario-creator');
  const participantTile = createCustomTile(participantHeading, participantItems, 'scenario-participant');
  const resultTile = createCustomTile('ОБРАЗ РЕЗУЛЬТАТА', resultText, 'scenario-result');

  grid.append(creatorTile, participantTile, resultTile);
  shell.appendChild(grid);

  section.appendChild(shell);
  return section;
}

function buildPhoneRightColumnsCustom(slide) {
  const section = document.createElement('section');
  section.id = slide.id;
  section.dataset.backgroundColor = '#f5f5f6';

  const shell = document.createElement('div');
  shell.className = 'slide-shell phone-right-shell';

  const columns = document.createElement('div');
  columns.className = 'why-not-columns';

  const leftCol = document.createElement('div');
  leftCol.className = 'why-not-left-col';

  const title = document.createElement('h2');
  title.className = 'main-title';
  title.textContent = slide.title;
  leftCol.appendChild(title);

  const left = document.createElement('div');
  left.className = 'tiles-stack why-not-left';
  const blocks = splitContentBlocks(slide.contentMarkdown);
  blocks.forEach((blockMarkdown) => {
    left.appendChild(renderMarkdownBlock(blockMarkdown));
  });
  leftCol.appendChild(left);

  const right = document.createElement('aside');
  right.className = 'why-not-phone-slot';
  const phoneFrame = document.createElement('div');
  phoneFrame.className = 'why-not-phone-frame';
  const phoneImage = document.createElement('img');
  phoneImage.className = 'why-not-phone-image';
  phoneImage.src = '../../image.png';
  phoneImage.alt = 'Slide screenshot';
  phoneFrame.appendChild(phoneImage);
  right.appendChild(phoneFrame);

  columns.append(leftCol, right);
  shell.appendChild(columns);

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
  const titleKey = normalizeSectionKey(slide.title);

  if (slide.id === 'slide-1-executive-summary') {
    return buildExecutiveSummaryCustom(slide);
  }

  if (slide.id === 'slide-2-why-the-bet') {
    return buildWhyBetCustom(slide);
  }

  if (
    slide.id === 'slide-0-testovoe-zadanie-salmon' ||
    slide.id === 'slide-0-salmon' ||
    (titleKey.includes('тестовоезадание') && titleKey.includes('salmon'))
  ) {
    return buildCoverTitleSlide(slide);
  }

  if (slide.id === 'slide-5-what') {
    return buildWhatScenariosCustom(slide);
  }

  if (slide.id === 'slide-4-what-salmon-space') {
    return buildPhoneRightColumnsCustom(slide);
  }

  if (slide.id === 'appendix-b-ne-case-studies--core-interactions') {
    return buildAppendixCaseStudiesCustom(slide);
  }

  if (slide.id === 'appendix') {
    return buildAppendixDividerSlide(slide);
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
    accentText.innerHTML = renderInlineMarkdown(normalizeAccent(slide.accent));
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
  const sources = [
    '../../slides_draft_final.md',
    `${REPO_BASE_PATH}slides_draft_final.md`,
    '/slides_draft_final.md',
  ];

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

function applyColumnWidthsFromSource(sourceTable, targetTable) {
  const sourceHeaderRow = sourceTable.querySelector('thead tr') || sourceTable.querySelector('tr');
  if (!sourceHeaderRow) {
    return;
  }

  const sourceCells = [...sourceHeaderRow.children].filter((cell) => {
    return cell.tagName === 'TH' || cell.tagName === 'TD';
  });

  if (!sourceCells.length) {
    return;
  }

  const tableWidth = sourceTable.getBoundingClientRect().width || sourceTable.offsetWidth;
  if (!tableWidth) {
    return;
  }

  const widths = sourceCells.map((cell) => {
    return (cell.getBoundingClientRect().width / tableWidth) * 100;
  });

  const setColgroup = (table) => {
    const oldColgroup = table.querySelector('colgroup');
    if (oldColgroup) {
      oldColgroup.remove();
    }

    const colgroup = document.createElement('colgroup');
    widths.forEach((width) => {
      const col = document.createElement('col');
      col.style.width = `${width.toFixed(3)}%`;
      colgroup.appendChild(col);
    });

    table.prepend(colgroup);
    table.style.tableLayout = 'fixed';
  };

  setColgroup(sourceTable);
  setColgroup(targetTable);
}

function syncWhyNotAlternativesTableColumns() {
  const slide = document.getElementById('slide-3-why-not-alternatives');
  if (!slide) {
    return;
  }

  const tables = slide.querySelectorAll('.content-block table');
  if (tables.length < 2) {
    return;
  }

  applyColumnWidthsFromSource(tables[0], tables[1]);
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
    const syncWhyNotTables = () => {
      requestAnimationFrame(syncWhyNotAlternativesTableColumns);
    };
    // Keep the second table on slide 3 aligned with the first one.
    syncWhyNotTables();
    deck.on('ready', syncWhyNotTables);
    deck.on('slidechanged', syncWhyNotTables);
    window.addEventListener('resize', syncWhyNotTables);
    loading.classList.add('hidden');
  } catch (err) {
    loading.textContent = `Ошибка сборки слайдов: ${err.message}`;
  }
}

renderDeck();
