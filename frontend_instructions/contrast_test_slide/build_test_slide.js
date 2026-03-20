const path = require('path');
const PptxGenJS = require('pptxgenjs');
const { calcTextBox, autoFontSize } = require('./pptxgenjs_helpers/text');
const {
  warnIfSlideHasOverlaps,
  warnIfSlideElementsOutOfBounds,
} = require('./pptxgenjs_helpers/layout');

const stylePreset = require('../salmon_direct_contrast_style_v1.json');

const tokens = {
  bg: stylePreset.palette.bg_base.replace('#', ''),
  surface: stylePreset.palette.surface.replace('#', ''),
  surfaceSoft: stylePreset.palette.surface_soft.replace('#', ''),
  card: stylePreset.palette.surface.replace('#', ''),
  textPrimary: stylePreset.palette.text_primary.replace('#', ''),
  textSecondary: stylePreset.palette.text_secondary.replace('#', ''),
  textDark: stylePreset.palette.text_primary.replace('#', ''),
  coral: stylePreset.palette.brand_coral.replace('#', ''),
  teal: stylePreset.palette.brand_coral.replace('#', ''),
  line: stylePreset.palette.stroke.replace('#', ''),
};

const typeScale = stylePreset.fonts.sizes;

function addFittedText(slide, text, box, baseOpts, minFont, maxFont) {
  const fit = autoFontSize(text, baseOpts.fontFace, {
    x: box.x,
    y: box.y,
    w: box.w,
    h: box.h,
    minFontSize: minFont,
    maxFontSize: maxFont,
    leading: baseOpts.breakLine ? 1.12 : 1.08,
    bold: !!baseOpts.bold,
  });

  slide.addText(text, {
    ...baseOpts,
    ...fit,
    valign: 'top',
    breakLine: !!baseOpts.breakLine,
    color: baseOpts.color,
    margin: baseOpts.margin ?? 0,
    align: baseOpts.align ?? 'left',
  });
}

async function build() {
  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_WIDE';
  pptx.author = 'Roman';
  pptx.subject = `Salmon contrast design test (${stylePreset.style_preset_id})`;
  pptx.company = 'Salmon test task';
  pptx.title = 'Salmon Contrast Test Slide';
  pptx.lang = 'ru-RU';
  pptx.theme = {
    headFontFace: stylePreset.fonts.heading,
    bodyFontFace: stylePreset.fonts.body,
    lang: 'ru-RU',
  };

  const slide = pptx.addSlide();

  // Full-bleed white canvas for direct contrast style.
  slide.background = { color: tokens.bg };

  slide.addText('SALMON PRODUCT LOAN', {
    x: 0.86,
    y: 0.64,
    w: 3.8,
    h: 0.34,
    fontFace: stylePreset.fonts.heading,
    fontSize: 11,
    bold: true,
    color: tokens.coral,
    charSpace: 1.1,
  });

  const titleBox = { x: 0.84, y: 1.08, w: 6.2, h: 2.2 };
  addFittedText(
    slide,
    'Shop now. Pay monthly.',
    titleBox,
    {
      fontFace: stylePreset.fonts.heading,
      bold: true,
      color: tokens.textPrimary,
      breakLine: true,
      margin: 0,
    },
    typeScale.h2,
    typeScale.h1 + 2
  );

  const subtitle =
    'Прямой контраст: белая база, чёрный текст и красные акценты бренда Salmon.';
  const subtitleLayout = calcTextBox(18, {
    text: subtitle,
    w: 5.8,
    fontFace: stylePreset.fonts.body,
    leading: 1.25,
  });

  slide.addText(subtitle, {
    x: 0.86,
    y: 3.42,
    w: 5.8,
    h: subtitleLayout.h + 0.08,
    fontFace: stylePreset.fonts.body,
    fontSize: typeScale.body,
    color: tokens.textSecondary,
    valign: 'top',
    breakLine: true,
    margin: 0,
    lineSpacingMultiple: 1.15,
  });

  // Hero card on white base with red accents only.
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 7.18,
    y: 0.96,
    w: 5.34,
    h: 3.84,
    rectRadius: 0.16,
    fill: { color: tokens.card },
    line: { color: tokens.line, pt: 1 },
    shadow: {
      type: 'outer',
      color: '8C8880',
      blur: 3,
      angle: 45,
      distance: 1,
      opacity: 0.18,
    },
  });

  slide.addText('Monthly Plan', {
    x: 7.54,
    y: 1.34,
    w: 2.0,
    h: 0.36,
    fontFace: stylePreset.fonts.heading,
    fontSize: 12,
    bold: true,
    color: tokens.coral,
    charSpace: 0.5,
  });

  slide.addText('₱1,500 / month', {
    x: 7.54,
    y: 1.72,
    w: 3.2,
    h: 0.68,
    fontFace: stylePreset.fonts.heading,
    fontSize: 31,
    bold: true,
    color: tokens.textDark,
    margin: 0,
  });

  slide.addText('0% interest | approval under 1 minute', {
    x: 7.54,
    y: 2.46,
    w: 4.2,
    h: 0.36,
    fontFace: stylePreset.fonts.body,
    fontSize: 13,
    color: '5B6067',
    margin: 0,
  });

  slide.addShape(pptx.ShapeType.roundRect, {
    x: 7.54,
    y: 3.0,
    w: 1.95,
    h: 0.52,
    rectRadius: 0.12,
    fill: { color: 'FFFFFF' },
    line: { color: tokens.coral },
  });

  slide.addText('Apply now', {
    x: 7.54,
    y: 3.12,
    w: 1.95,
    h: 0.22,
    align: 'center',
    fontFace: stylePreset.fonts.heading,
    fontSize: 12,
    color: tokens.coral,
    bold: true,
    margin: 0,
  });

  slide.addShape(pptx.ShapeType.line, {
    x: 7.5,
    y: 3.74,
    w: 4.7,
    h: 0,
    line: { color: 'D8D3CB', pt: 1.1 },
  });

  const miniBars = [1.2, 2.0, 1.6, 2.5, 2.9];
  miniBars.forEach((height, idx) => {
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 7.68 + idx * 0.52,
      y: 4.5 - height * 0.27,
      w: 0.28,
      h: height * 0.27,
      rectRadius: 0.05,
      fill: { color: idx === 4 ? tokens.coral : 'C9D0D7' },
      line: { color: idx === 4 ? tokens.coral : 'C9D0D7' },
    });
  });

  // Bottom benefit pills.
  const pills = [
    { icon: '●', title: 'Borrow up to ₱60,000', text: 'Для техники, мебели и бытовых покупок.' },
    { icon: '◔', title: 'Pay nothing upfront', text: 'Чёткие выплаты без скрытых комиссий.' },
    { icon: '✓', title: 'Approved in 1 minute', text: 'Нужны только базовые документы.' },
  ];

  pills.forEach((pill, i) => {
    const x = 0.84 + i * 4.2;
    slide.addShape(pptx.ShapeType.roundRect, {
      x,
      y: 5.78,
      w: 3.86,
      h: 1.08,
      rectRadius: 0.14,
      fill: { color: tokens.surface },
      line: { color: tokens.line, pt: 1 },
    });

    slide.addShape(pptx.ShapeType.ellipse, {
      x: x + 0.22,
      y: 6.12,
      w: 0.34,
      h: 0.34,
      fill: { color: 'FFFFFF' },
      line: { color: tokens.coral, pt: 1.2 },
    });

    slide.addText(pill.icon, {
      x: x + 0.29,
      y: 6.13,
      w: 0.2,
      h: 0.2,
      fontFace: stylePreset.fonts.heading,
      fontSize: 10,
      color: tokens.coral,
      align: 'center',
      valign: 'mid',
      margin: 0,
      bold: true,
    });

    slide.addText(pill.title, {
      x: x + 0.66,
      y: 6.03,
      w: 3.1,
      h: 0.26,
      fontFace: stylePreset.fonts.heading,
      fontSize: 15,
      color: tokens.textPrimary,
      bold: true,
      margin: 0,
    });

    slide.addText(pill.text, {
      x: x + 0.66,
      y: 6.33,
      w: 3.1,
      h: 0.34,
      fontFace: stylePreset.fonts.body,
      fontSize: 11.5,
      color: tokens.textSecondary,
      margin: 0,
      breakLine: true,
      valign: 'top',
    });
  });

  warnIfSlideHasOverlaps(slide, pptx, { muteContainment: true });
  warnIfSlideElementsOutOfBounds(slide, pptx);

  const outPath = path.join(__dirname, 'test_contrast_slide.pptx');
  await pptx.writeFile({ fileName: outPath });
  console.log(`Created: ${outPath}`);
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
