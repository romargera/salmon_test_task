const fs = require('fs');
const path = require('path');
const Module = require('module');
const { createRequire } = require('module');

const frontendNodeModules = path.join(
  __dirname,
  '../../frontend_instructions/contrast_test_slide/node_modules'
);
process.env.NODE_PATH = process.env.NODE_PATH
  ? `${frontendNodeModules}${path.delimiter}${process.env.NODE_PATH}`
  : frontendNodeModules;
Module._initPaths();

const requireFromFrontend = createRequire(
  path.join(__dirname, '../../frontend_instructions/contrast_test_slide/package.json')
);
const PptxGenJS = requireFromFrontend('pptxgenjs');

const {
  warnIfSlideHasOverlaps,
  warnIfSlideElementsOutOfBounds,
} = require('./pptxgenjs_helpers/layout');

const stylePreset = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../../frontend_instructions/salmon_direct_contrast_style_v1.json'),
    'utf8'
  )
);

const colors = {
  bg: stylePreset.palette.bg_base.replace('#', ''),
  surface: stylePreset.palette.surface.replace('#', ''),
  surfaceSoft: stylePreset.palette.surface_soft.replace('#', ''),
  stroke: stylePreset.palette.stroke.replace('#', ''),
  textPrimary: stylePreset.palette.text_primary.replace('#', ''),
  textSecondary: stylePreset.palette.text_secondary.replace('#', ''),
  textMuted: stylePreset.palette.text_muted.replace('#', ''),
  coral: stylePreset.palette.brand_coral.replace('#', ''),
};

const FONT_HEADING = stylePreset.fonts.heading;
const FONT_BODY = stylePreset.fonts.body;
const ShapeType = new PptxGenJS().ShapeType;
const TILE_FONT_SIZE = 10.5;
const MAIN_TITLE_FONT_SIZE = 22;
const SOURCE_URL =
  'https://docs.google.com/spreadsheets/d/1jzzUfvo3hHp4h_i9hOXBEJrKNEJ5Zv2G/edit?gid=1918265608#gid=1918265608&range=A2';
const BULLET_TEXT_OFFSET = 0.34;

function addCardBase(slide, box, fillColor = colors.surface) {
  slide.addShape(ShapeType.roundRect, {
    x: box.x,
    y: box.y,
    w: box.w,
    h: box.h,
    rectRadius: 0.12,
    fill: { color: fillColor },
    line: { color: colors.stroke, pt: 1 },
  });
}

function addBulletMarker(slide, x, y) {
  slide.addShape(ShapeType.ellipse, {
    x,
    y,
    w: 0.13,
    h: 0.13,
    fill: { color: colors.surface },
    line: { color: colors.coral, pt: 1.15 },
  });
}

function addSectionLabel(slide, box, text) {
  slide.addText(text, {
    x: box.x + 0.17,
    y: box.y + 0.15,
    w: box.w - 0.34,
    h: 0.2,
    fontFace: FONT_HEADING,
    fontSize: 11,
    bold: true,
    color: colors.coral,
    margin: 0,
    charSpace: 0.7,
  });
}

function addSectionCard(slide, box, label, items, opts = {}) {
  addCardBase(slide, box, opts.fillColor ?? colors.surface);
  const hasLabel = !!label;
  const showBullets = opts.showBullets ?? items.length > 1;

  if (hasLabel) {
    addSectionLabel(slide, box, label);
  }

  const top = hasLabel ? box.y + 0.4 : box.y + 0.18;
  const markerX = box.x + 0.18;
  const textX = showBullets ? markerX + BULLET_TEXT_OFFSET : box.x + 0.18;
  const textW = showBullets
    ? box.w - (textX - box.x) - 0.18
    : box.w - 0.36;
  const availableH = box.h - (top - box.y) - 0.12;
  const gap = opts.gap ?? 0.08;
  const itemH =
    items.length > 1
      ? (availableH - gap * (items.length - 1)) / items.length
      : availableH;

  items.forEach((item, idx) => {
    const rowY = top + idx * (itemH + gap);
    if (showBullets) {
      addBulletMarker(slide, markerX, rowY + 0.03);
    }
    slide.addText(item, {
      x: textX,
      y: rowY,
      w: textW,
      h: itemH,
      fontFace: FONT_BODY,
      fontSize: opts.fontSize ?? TILE_FONT_SIZE,
      color: colors.textSecondary,
      margin: 0,
      valign: 'top',
      breakLine: true,
      lineSpacingMultiple: opts.lineSpacingMultiple ?? 1.06,
      align: 'left',
    });
  });
}

function addRiskStrip(slide, box, text) {
  addCardBase(slide, box, colors.surface);

  slide.addText('Главный риск', {
    x: box.x + 0.18,
    y: box.y + 0.14,
    w: 1.7,
    h: 0.2,
    fontFace: FONT_HEADING,
    fontSize: 11,
    bold: true,
    color: colors.coral,
    margin: 0,
  });
  slide.addText(text, {
    x: box.x + 1.95,
    y: box.y + 0.13,
    w: box.w - 2.13,
    h: box.h - 0.2,
    fontFace: FONT_BODY,
    fontSize: TILE_FONT_SIZE,
    color: colors.textSecondary,
    margin: 0,
    valign: 'mid',
    align: 'center',
    breakLine: true,
    lineSpacingMultiple: 1.04,
  });
}

function buildSlide(pptx) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.bg };

  slide.addText('EXECUTIVE SUMMARY', {
    x: 0.84,
    y: 0.42,
    w: 5.2,
    h: 0.34,
    fontFace: FONT_HEADING,
    fontSize: MAIN_TITLE_FONT_SIZE,
    bold: true,
    color: colors.coral,
    margin: 0,
    charSpace: 0.3,
  });

  addSectionCard(
    slide,
    { x: 0.84, y: 1.02, w: 11.653, h: 1.18 },
    null,
    [
      [
        {
          text: 'Рекомендация: стартовать с Salmon Space для общих расходов и расчетов внутри малых доверенных групп друзей; это лучший вход по сочетанию боли, переноса в новые графы и шанса привести пользователя в банковое ядро.',
          options: { color: colors.textPrimary },
        },
      ],
    ],
    {
      fillColor: colors.surfaceSoft,
      showBullets: false,
      fontSize: TILE_FONT_SIZE,
      lineSpacingMultiple: 1.06,
    }
  );

  addSectionCard(
    slide,
    { x: 0.84, y: 2.36, w: 3.0, h: 2.32 },
    'WHAT',
    [
      [
        { text: 'Salmon Space', options: { bold: true, color: colors.textPrimary } },
        {
          text: ' — приватное пространство группы, где связаны повод, расход / сбор / цель, доли, обсуждение, расчет и история.',
          options: { color: colors.textSecondary },
        },
      ],
    ],
    { fontSize: TILE_FONT_SIZE, lineSpacingMultiple: 1.06 }
  );

  addSectionCard(
    slide,
    { x: 4.12, y: 2.36, w: 8.373, h: 2.32 },
    'WHY',
    [
      [
        { text: 'Боль реальна: ', options: { bold: true, color: colors.textPrimary } },
        {
          text: '75%',
          options: {
            hyperlink: {
              url: 'https://www.lendingtree.com/credit-cards/study/friends-money-report/',
            },
            color: colors.coral,
            bold: true,
            underline: true,
          },
        },
        { text: ' говорят, что деньги вредили дружбе; ', options: { color: colors.textSecondary } },
        {
          text: '32%',
          options: {
            hyperlink: {
              url: 'https://www.lendingtree.com/credit-cards/study/friends-money-report/',
            },
            color: colors.coral,
            bold: true,
            underline: true,
          },
        },
        {
          text: ' не получили деньги назад. US-данные валидируют силу боли, а PH-данные — поведение и реализуемость сценария ',
          options: { color: colors.textSecondary },
        },
        { text: 'Ⓐ', options: { color: colors.textMuted, bold: true } },
        { text: '.', options: { color: colors.textSecondary } },
      ],
      [
        {
          text: 'Сетевой эффект здесь работает: ',
          options: { bold: true, color: colors.textPrimary },
        },
        {
          text: 'новый релевантный участник помогает другим участникам Space решить задачу; повтор в том же Space углубляет ценность, перенос в другую группу расширяет сеть.',
          options: { color: colors.textSecondary },
        },
      ],
      [
        {
          text: 'Масштаб материален: ',
          options: { bold: true, color: colors.textPrimary },
        },
        {
          text: 'SOM 4.2M',
          options: {
            hyperlink: { url: SOURCE_URL },
            color: colors.coral,
            bold: true,
            underline: true,
          },
        },
        {
          text: ' пользователей к 3-му году; это около ',
          options: { color: colors.textSecondary },
        },
        { text: '17%', options: { bold: true, color: colors.textPrimary } },
        { text: ' цели Salmon в ', options: { color: colors.textSecondary } },
        { text: '25M', options: { bold: true, color: colors.textPrimary } },
        { text: ' активных пользователей ', options: { color: colors.textSecondary } },
        {
          text: '[1]',
          options: {
            hyperlink: { url: SOURCE_URL },
            color: colors.coral,
            bold: true,
            underline: true,
          },
        },
        { text: ', ', options: { color: colors.textSecondary } },
        {
          text: '[2]',
          options: {
            hyperlink: { url: SOURCE_URL },
            color: colors.coral,
            bold: true,
            underline: true,
          },
        },
        { text: '.', options: { color: colors.textSecondary } },
      ],
    ],
    { fontSize: TILE_FONT_SIZE, lineSpacingMultiple: 1.06 }
  );

  addSectionCard(
    slide,
    { x: 0.84, y: 4.84, w: 6.0, h: 1.26 },
    'Trade-off',
    [
      [
        {
          text: 'Среди друзей, пар / партнеров, семей с детьми и небольших групп коллег я выбираю друзей: у них сильнее перенос в новые графы и сетевой эффект, хотя пары и семьи могут выглядеть сильнее по частоте и немедленной монетизации, а коллеги — по утилитарности сценария.',
          options: { color: colors.textSecondary },
        },
      ],
    ],
    { fontSize: TILE_FONT_SIZE, lineSpacingMultiple: 1.06 }
  );

  addSectionCard(
    slide,
    { x: 7.12, y: 4.84, w: 5.373, h: 1.26 },
    'HOW',
    [
      [{ text: 'Сначала проверяем боль и качество решения задачи.', options: { color: colors.textSecondary } }],
      [{ text: 'Затем — привлечение новых активированных пользователей и повторяемость.', options: { color: colors.textSecondary } }],
      [{ text: 'После этого — перенос в новые графы и банковую экономику.', options: { color: colors.textSecondary } }],
    ],
    { fontSize: TILE_FONT_SIZE, gap: 0.05, lineSpacingMultiple: 1.05 }
  );

  addRiskStrip(
    slide,
    { x: 0.84, y: 6.22, w: 11.653, h: 0.64 },
    'Если Space не доводит группу до закрытого расчета и второго повода, он останется удобным инструментом, а не сетевым продуктом.'
  );

  warnIfSlideHasOverlaps(slide, pptx);
  warnIfSlideElementsOutOfBounds(slide, pptx);
}

async function build() {
  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_WIDE';
  pptx.author = 'Codex';
  pptx.company = 'Salmon test task';
  pptx.subject = 'Slide 1 test build';
  pptx.title = 'Slide 1 - Executive Summary';
  pptx.lang = 'ru-RU';
  pptx.theme = {
    headFontFace: FONT_HEADING,
    bodyFontFace: FONT_BODY,
    lang: 'ru-RU',
  };

  buildSlide(pptx);
  await pptx.writeFile({ fileName: path.join(__dirname, 'slide_1.pptx') });
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
