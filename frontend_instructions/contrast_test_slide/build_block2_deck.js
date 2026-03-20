const fs = require("fs");
const path = require("path");
const PptxGenJS = require("pptxgenjs");
const { autoFontSize } = require("./pptxgenjs_helpers/text");
const {
  warnIfSlideHasOverlaps,
  warnIfSlideElementsOutOfBounds,
} = require("./pptxgenjs_helpers/layout");

const stylePreset = require("../salmon_direct_contrast_style_v1.json");

const colors = {
  bg: stylePreset.palette.bg_base.replace("#", ""),
  surface: stylePreset.palette.surface.replace("#", ""),
  surfaceSoft: stylePreset.palette.surface_soft.replace("#", ""),
  stroke: stylePreset.palette.stroke.replace("#", ""),
  primary: stylePreset.palette.text_primary.replace("#", ""),
  secondary: stylePreset.palette.text_secondary.replace("#", ""),
  muted: stylePreset.palette.text_muted.replace("#", ""),
  coral: stylePreset.palette.brand_coral.replace("#", ""),
  neutral: stylePreset.palette.chart_neutral.replace("#", ""),
};

const fonts = stylePreset.fonts;
const sizes = stylePreset.fonts.sizes;
const layout = stylePreset.layout;
let shapeTypes = null;

function addText(slide, text, opts) {
  slide.addText(text, {
    margin: 0,
    breakLine: true,
    valign: "top",
    fontFace: fonts.body,
    fontSize: sizes.body,
    color: colors.primary,
    ...opts,
  });
}

function addFitTitle(slide, text, box, maxFont = sizes.h2, minFont = 24) {
  const fit = autoFontSize(text, fonts.heading, {
    x: box.x,
    y: box.y,
    w: box.w,
    h: box.h,
    minFontSize: minFont,
    maxFontSize: maxFont,
    leading: 1.08,
    bold: true,
  });

  slide.addText(text, {
    ...box,
    ...fit,
    margin: 0,
    breakLine: true,
    valign: "top",
    fontFace: fonts.heading,
    bold: true,
    color: colors.primary,
  });
}

function addSlideBase(pptx, microLabel, title, subtitle) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.bg };

  addText(slide, microLabel, {
    x: layout.margin_left,
    y: 0.48,
    w: 4.2,
    h: 0.28,
    fontFace: fonts.heading,
    fontSize: 11,
    bold: true,
    color: colors.coral,
    charSpace: 1.1,
  });

  addFitTitle(
    slide,
    title,
    { x: layout.margin_left, y: 0.86, w: 8.2, h: 0.92 },
    28,
    22
  );

  if (subtitle) {
    addText(slide, subtitle, {
      x: layout.margin_left,
      y: 1.75,
      w: 10.8,
      h: 0.42,
      fontSize: 14,
      color: colors.secondary,
    });
  }

  return slide;
}

function addCard(slide, x, y, w, h, title, lines, opts = {}) {
  slide.addShape(shapeTypes.roundRect, {
    x,
    y,
    w,
    h,
    rectRadius: stylePreset.shape.card_radius,
    fill: { color: opts.fill ?? colors.surface },
    line: { color: opts.line ?? colors.stroke, pt: opts.linePt ?? 1 },
  });

  addText(slide, title, {
    x: x + 0.18,
    y: y + 0.16,
    w: w - 0.36,
    h: 0.3,
    fontFace: fonts.heading,
    fontSize: opts.titleSize ?? 15,
    bold: true,
    color: opts.titleColor ?? colors.primary,
  });

  let cursorY = y + 0.52;
  lines.forEach((line) => {
    if (typeof line === "string") {
      addBulletLine(slide, x + 0.2, cursorY, w - 0.4, line, opts);
      cursorY += opts.lineStep ?? 0.32;
      return;
    }

    if (line.type === "text") {
      addText(slide, line.text, {
        x: x + 0.18,
        y: cursorY,
        w: w - 0.36,
        h: line.h ?? 0.34,
        fontSize: line.fontSize ?? 12.5,
        color: line.color ?? colors.secondary,
        fontFace: line.fontFace ?? fonts.body,
        bold: !!line.bold,
      });
      cursorY += line.step ?? 0.34;
    }
  });
}

function addBulletLine(slide, x, y, w, text, opts = {}) {
  slide.addShape(shapeTypes.ellipse, {
    x,
    y: y + 0.06,
    w: 0.11,
    h: 0.11,
    fill: { color: colors.bg },
    line: { color: opts.bulletColor ?? colors.coral, pt: 1 },
  });

  addText(slide, text, {
    x: x + 0.18,
    y,
    w: w - 0.18,
    h: opts.height ?? 0.26,
    fontSize: opts.fontSize ?? 11.5,
    color: opts.color ?? colors.secondary,
  });
}

function addTakeaway(slide, text) {
  const x = layout.margin_left;
  const y = 6.58;
  const w = layout.slide_width - layout.margin_left - layout.margin_right;
  const h = 0.56;

  slide.addShape(shapeTypes.roundRect, {
    x,
    y,
    w,
    h,
    rectRadius: stylePreset.shape.button_radius,
    fill: { color: colors.surfaceSoft },
    line: { color: colors.stroke, pt: 1 },
  });

  addText(slide, "Что это значит для нашего кейса", {
    x: x + 0.16,
    y: y + 0.1,
    w: 2.55,
    h: 0.18,
    fontFace: fonts.heading,
    fontSize: 10.5,
    bold: true,
    color: colors.coral,
    charSpace: 0.4,
  });

  addText(slide, text, {
    x: x + 2.72,
    y: y + 0.1,
    w: w - 2.92,
    h: 0.2,
    fontSize: 11.5,
    color: colors.primary,
  });
}

function addSectionLabel(slide, x, y, text) {
  addText(slide, text, {
    x,
    y,
    w: 2.8,
    h: 0.22,
    fontFace: fonts.heading,
    fontSize: 11,
    bold: true,
    color: colors.coral,
    charSpace: 0.3,
  });
}

function finalizeSlide(slide, pptx) {
  warnIfSlideHasOverlaps(slide, pptx, { muteContainment: true });
  warnIfSlideElementsOutOfBounds(slide, pptx);
}

function buildSlide1(pptx) {
  const slide = addSlideBase(
    pptx,
    "BLOCK 2.1 / WHAT MAKES IT NETWORKED",
    "Не смешиваем task, context и behavior",
    "Сначала отделяем тип механики от эффекта присутствия и поздних moat-слоев."
  );

  addSectionLabel(slide, 0.84, 2.28, "НЕ network effect");
  addSectionLabel(slide, 7.05, 2.28, "3 слоя для анализа");

  const leftX = 0.84;
  const rightX = 7.05;
  const topY = 2.56;
  const cardWLeft = 2.78;
  const cardWRight = 1.74;
  const cardH = 1.12;
  const gap = 0.22;

  [
    ["Marketing", ["Покупает трафик", "но не увеличивает ценность"]],
    ["Scale", ["Дает эффективность", "но не делает продукт сетевым"]],
    ["Lock-in", ["Удерживает выход", "но не создает новую ценность"]],
    ["Habit", ["Возвращает юзера", "но может жить и без сети"]],
  ].forEach((item, idx) => {
    const row = Math.floor(idx / 2);
    const col = idx % 2;
    addCard(
      slide,
      leftX + col * (cardWLeft + gap),
      topY + row * (cardH + gap),
      cardWLeft,
      cardH,
      item[0],
      item[1],
      { titleColor: colors.primary, fontSize: 11.5 }
    );
  });

  [
    [
      "Intent",
      [
        { type: "text", text: "Задача требует второго участника.", fontSize: 10.8 },
        { type: "text", text: "P2P, split, shared goal.", fontSize: 10.8, color: colors.primary, bold: true },
      ],
    ],
    [
      "Context",
      [
        { type: "text", text: "Один создает контекст для другого.", fontSize: 10.5 },
        { type: "text", text: "Чек, request, view, rule.", fontSize: 10.5, color: colors.primary, bold: true },
      ],
    ],
    [
      "Behavior",
      [
        { type: "text", text: "Нужные люди уже внутри.", fontSize: 10.8 },
        { type: "text", text: "Сценарий стал нормой.", fontSize: 10.8, color: colors.primary, bold: true },
      ],
    ],
  ].forEach((item, idx) => {
    addCard(
      slide,
      rightX + idx * (cardWRight + 0.18),
      topY,
      cardWRight,
      1.68,
      item[0],
      item[1],
      { titleColor: colors.coral, titleSize: 16 }
    );
  });

  addCard(
    slide,
    rightX,
    4.52,
    5.44,
    1.38,
    "Later-stage amplifiers",
    [
      { type: "text", text: "Data effect чаще усиливает банк, а не user-facing network value.", fontSize: 11.2 },
      { type: "text", text: "Platform / standard effect обычно приходит после масштаба и дистрибуции.", fontSize: 11.2 },
    ],
    { fill: colors.surfaceSoft, titleColor: colors.primary }
  );

  addTakeaway(
    slide,
    "Для Salmon стартовая ставка: intent-driven + context-driven в малой доверенной группе; behavioral pull должен появиться позже."
  );

  finalizeSlide(slide, pptx);
}

function buildSlide2(pptx) {
  const slide = addSlideBase(
    pptx,
    "BLOCK 2.2 / CASES",
    "Сильные кейсы собирают слои последовательно",
    "Один и тот же продукт может решать задачу, создавать контекст и затем превращаться в норму внутри круга."
  );

  const cards = [
    {
      x: 0.84, y: 2.5, w: 2.9, h: 1.56,
      title: "Splitwise",
      lines: [
        { type: "text", text: "Слой: context-driven", fontSize: 11.2, color: colors.coral, bold: true },
        { type: "text", text: "Один создает долг и структуру расчета.", fontSize: 11.2 },
        { type: "text", text: "Другие заходят в уже готовый контекст.", fontSize: 11.2 },
      ],
    },
    {
      x: 3.98, y: 2.5, w: 2.9, h: 1.56,
      title: "M-Pesa",
      lines: [
        { type: "text", text: "Слой: intent-driven", fontSize: 11.2, color: colors.coral, bold: true },
        { type: "text", text: "Перевод закрывал реальную жизненную задачу.", fontSize: 11.2 },
        { type: "text", text: "Каждый use case тянул следующего участника.", fontSize: 11.2 },
      ],
    },
    {
      x: 7.12, y: 2.5, w: 2.6, h: 1.56,
      title: "WhatsApp",
      lines: [
        { type: "text", text: "Слой: behavioral", fontSize: 11.2, color: colors.coral, bold: true },
        { type: "text", text: "Ценность = нужные люди уже внутри.", fontSize: 11.2 },
        { type: "text", text: "Присутствие сети удерживает продукт.", fontSize: 11.2 },
      ],
    },
    {
      x: 9.96, y: 2.5, w: 2.53, h: 1.56,
      title: "Venmo / WeChat",
      lines: [
        { type: "text", text: "Слой: hybrid", fontSize: 11.2, color: colors.coral, bold: true },
        { type: "text", text: "Intent решает платеж.", fontSize: 11.2 },
        { type: "text", text: "Context делает его социально видимым.", fontSize: 11.2 },
      ],
    },
  ];

  cards.forEach((card) => addCard(slide, card.x, card.y, card.w, card.h, card.title, card.lines));

  addCard(
    slide,
    0.84,
    4.36,
    11.65,
    1.76,
    "Общий паттерн",
    [
      { type: "text", text: "1. Value появляется уже в атомарной сети 2-5 человек.", fontSize: 12.5, color: colors.primary, bold: true },
      { type: "text", text: "2. Новый участник приходит не в пустой продукт, а в конкретную ситуацию.", fontSize: 12 },
      { type: "text", text: "3. Behavioral pull появляется не первым, а после серии повторяющихся действий.", fontSize: 12 },
    ],
    { fill: colors.surfaceSoft, titleColor: colors.coral, titleSize: 16 }
  );

  addTakeaway(
    slide,
    "Нам нужен wedge, где intent и context работают сразу; behavioral layer должен возникнуть как следствие повторяющихся групповых действий."
  );

  finalizeSlide(slide, pptx);
}

function buildSlide3(pptx) {
  const slide = addSlideBase(
    pptx,
    "BLOCK 2.2 / PLAYBOOK",
    "Cold start выигрывает плотность микросети",
    "Ширина платформы не спасает, если ценность не появляется внутри малого network unit."
  );

  const steps = [
    ["1", "Один узкий сценарий", "Не строить «соцсеть про деньги» с первого дня."],
    ["2", "Atomic network", "Ценность должна появляться уже в группе 2-5 человек."],
    ["3", "Invite inside action", "Приглашение вшито в сценарий, а не живет отдельной кнопкой."],
    ["4", "Import existing group", "Пара, семья, поездка, друзья, соседи."],
    ["5", "Repeatable ritual", "Не one-off split, а повторяемое действие с возвращением."],
  ];

  steps.forEach((step, idx) => {
    const x = 0.84 + idx * 2.47;
    slide.addShape(shapeTypes.roundRect, {
      x,
      y: 2.52,
      w: 2.2,
      h: 2.06,
      rectRadius: stylePreset.shape.card_radius,
      fill: { color: colors.surface },
      line: { color: colors.stroke, pt: 1 },
    });
    slide.addShape(shapeTypes.ellipse, {
      x: x + 0.16,
      y: 2.7,
      w: 0.34,
      h: 0.34,
      fill: { color: colors.bg },
      line: { color: colors.coral, pt: 1.2 },
    });
    addText(slide, step[0], {
      x: x + 0.24,
      y: 2.77,
      w: 0.18,
      h: 0.12,
      fontFace: fonts.heading,
      fontSize: 11,
      bold: true,
      color: colors.coral,
      align: "center",
      valign: "mid",
    });
    addText(slide, step[1], {
      x: x + 0.16,
      y: 3.16,
      w: 1.88,
      h: 0.35,
      fontFace: fonts.heading,
      fontSize: 15,
      bold: true,
      color: colors.primary,
    });
    addText(slide, step[2], {
      x: x + 0.16,
      y: 3.58,
      w: 1.88,
      h: 0.72,
      fontSize: 11.2,
      color: colors.secondary,
    });
  });

  addCard(
    slide,
    0.84,
    4.94,
    5.72,
    1.18,
    "Marketing",
    [
      { type: "text", text: "Линейно покупает следующий install.", fontSize: 11.5 },
      { type: "text", text: "После отключения бюджета рост останавливается.", fontSize: 11.5 },
    ],
    { fill: colors.surface, titleColor: colors.primary }
  );

  addCard(
    slide,
    6.78,
    4.94,
    5.71,
    1.18,
    "Network effect",
    [
      { type: "text", text: "Каждое использование усиливает будущую ценность сети.", fontSize: 11.5 },
      { type: "text", text: "После отключения маркетинга петля не умирает.", fontSize: 11.5 },
    ],
    { fill: colors.surfaceSoft, titleColor: colors.coral }
  );

  addTakeaway(
    slide,
    "Стартовая ставка должна быть на один повторяемый intent-driven сценарий, усиленный context-driven value."
  );

  finalizeSlide(slide, pptx);
}

function buildSlide4(pptx) {
  const slide = addSlideBase(
    pptx,
    "BLOCK 2.3 / FINTECH TODAY",
    "Инфраструктура уже сетeвая, отношения между людьми — почти нет",
    "Главный gap не в платежных rails, а в том, что everyday group money до сих пор живет вне продукта."
  );

  addCard(
    slide,
    0.84,
    2.52,
    3.55,
    3.18,
    "Где NE уже работает",
    [
      "Карточные сети",
      "P2P внутри замкнутой сети",
      "Super-app payment loops",
      "Локальные split / group bill use cases",
    ],
    { titleColor: colors.primary, lineStep: 0.4, fontSize: 11.6 }
  );

  addCard(
    slide,
    4.68,
    2.52,
    5.14,
    3.18,
    "Где до сих пор пусто",
    [
      "Пары, семьи, travel-группы, соседи",
      "Shared expenses живут в чатах и заметках",
      "Нет social layer: группа, событие, fairness, history",
      "Банки мыслят user -> account, а не relationship -> group",
    ],
    { titleColor: colors.coral, lineStep: 0.45, fontSize: 12 }
  );

  addCard(
    slide,
    10.08,
    2.52,
    2.41,
    3.18,
    "Ограничения",
    [
      "KYC friction",
      "Privacy",
      "Social pressure",
      "Trust radius",
      "Negative NE в больших группах",
    ],
    { titleColor: colors.primary, lineStep: 0.41, fontSize: 11.2 }
  );

  addTakeaway(
    slide,
    "Наш white space не «еще один кошелек», а relationship layer для trusted groups поверх уже существующих денег и счетов."
  );

  finalizeSlide(slide, pptx);
}

function buildSlide5(pptx) {
  const slide = addSlideBase(
    pptx,
    "BLOCK 2.4 / WHITE SPACE",
    "Социальные деньги: финансовое действие как социальный жест",
    "Не публичная соцсеть про деньги, а слой координации, контекста и мягкой групповой динамики."
  );

  slide.addShape(shapeTypes.roundRect, {
    x: 4.54,
    y: 2.9,
    w: 4.18,
    h: 1.48,
    rectRadius: stylePreset.shape.card_radius,
    fill: { color: colors.surfaceSoft },
    line: { color: colors.coral, pt: 1.2 },
  });
  addText(slide, "SOCIAL MONEY", {
    x: 5.62,
    y: 3.15,
    w: 2.05,
    h: 0.22,
    fontFace: fonts.heading,
    fontSize: 18,
    bold: true,
    color: colors.coral,
    align: "center",
  });
  addText(slide, "Финансовое действие одновременно меняет баланс и состояние отношений.", {
    x: 4.88,
    y: 3.58,
    w: 3.48,
    h: 0.36,
    fontSize: 11.5,
    color: colors.primary,
    align: "center",
  });

  const spokes = [
    [0.84, 2.5, "Feed", "Из соцсетей", "Реакции и group feed только внутри своего контекста."],
    [9.74, 2.5, "Matching", "Из маркетплейсов", "Кто заплатил, кто должен, кто подтверждает."],
    [0.84, 4.58, "Streaks", "Из игр", "Progression, челленджи, unlocks для общих целей."],
    [9.74, 4.58, "Workspace", "Из SaaS", "Shared view, роли и правила для группы."],
    [4.62, 5.12, "Group context", "Из community apps", "Сценарий живет внутри доверенной группы, а не в ленте на всех."],
  ];

  spokes.forEach(([x, y, title, source, body]) => {
    addCard(
      slide,
      x,
      y,
      title === "Group context" ? 4.02 : 2.75,
      title === "Group context" ? 0.98 : 1.28,
      title,
      [
        { type: "text", text: source, fontSize: 10.8, color: colors.coral, bold: true },
        { type: "text", text: body, fontSize: 10.8 },
      ],
      { titleColor: colors.primary, titleSize: 14 }
    );
  });

  addTakeaway(
    slide,
    "Основа решения: shared view + contextual split + recurring rituals; behavioral pull должен появляться из повторяемого использования."
  );

  finalizeSlide(slide, pptx);
}

function buildSlide6(pptx) {
  const slide = addSlideBase(
    pptx,
    "BLOCK 2.5 / ARCHITECTURE",
    "Intent и context первичны, behavior — следствие",
    "Типология должна отделять способ создания ценности от более поздних усиливающих эффектов."
  );

  addCard(
    slide,
    0.84,
    2.48,
    3.7,
    2.82,
    "3 слоя анализа",
    [
      { type: "text", text: "Intent-driven", fontSize: 12, color: colors.coral, bold: true },
      { type: "text", text: "Какая задача требует второго участника.", fontSize: 11.4 },
      { type: "text", text: "Context-driven", fontSize: 12, color: colors.coral, bold: true, step: 0.42 },
      { type: "text", text: "Какой контекст один создает для другого.", fontSize: 11.4 },
      { type: "text", text: "Behavioral", fontSize: 12, color: colors.coral, bold: true, step: 0.42 },
      { type: "text", text: "Когда нужные люди уже внутри и сценарий стал нормой.", fontSize: 11.4 },
    ],
    { titleColor: colors.primary, titleSize: 16 }
  );

  addCard(
    slide,
    4.82,
    2.48,
    3.74,
    2.82,
    "Relationship-first primitives",
    [
      { type: "text", text: "identity -> relationship -> group", fontSize: 11.8, color: colors.primary, bold: true },
      { type: "text", text: "event -> shared view / rule -> reaction", fontSize: 11.8, color: colors.primary, bold: true },
      { type: "text", text: "Group и Relationship должны быть first-class entities.", fontSize: 11.4 },
      { type: "text", text: "Shared account не нужен на старте; shared view дает меньше трения.", fontSize: 11.4 },
    ],
    { fill: colors.surfaceSoft, titleColor: colors.coral, titleSize: 16 }
  );

  addCard(
    slide,
    8.82,
    2.48,
    3.67,
    0.92,
    "Now",
    [
      { type: "text", text: "Split, shared view, group rules, recurring rituals", fontSize: 11.3 },
    ],
    { titleColor: colors.primary }
  );
  addCard(
    slide,
    8.82,
    3.56,
    3.67,
    0.82,
    "Later",
    [
      { type: "text", text: "Behavioral pull, premium analytics, stronger money layer", fontSize: 11.1 },
    ],
    { titleColor: colors.coral, fill: colors.surfaceSoft }
  );
  addCard(
    slide,
    8.82,
    4.54,
    3.67,
    0.92,
    "Do not start with",
    [
      { type: "text", text: "Joint account, public feed, credit layer, broad marketplace", fontSize: 11.1 },
    ],
    { titleColor: colors.primary }
  );

  addTakeaway(
    slide,
    "MVP должен сначала доказать силу task + context в малой группе; только потом имеет смысл наращивать behavioral layer и более сильные moat-эффекты."
  );

  finalizeSlide(slide, pptx);
}

async function build() {
  const outDir = path.join(__dirname, "out", "block2");
  const singleDir = path.join(outDir, "single");
  fs.mkdirSync(outDir, { recursive: true });
  fs.mkdirSync(singleDir, { recursive: true });

  function makeDeck(title) {
    const deck = new PptxGenJS();
    shapeTypes = deck.ShapeType;
    deck.layout = "LAYOUT_WIDE";
    deck.author = "Codex";
    deck.company = "Salmon test task";
    deck.subject = `Block 2 deck (${stylePreset.style_preset_id})`;
    deck.title = title;
    deck.lang = "ru-RU";
    deck.theme = {
      headFontFace: fonts.heading,
      bodyFontFace: fonts.body,
      lang: "ru-RU",
    };
    return deck;
  }

  const builders = [
    ["01_what_makes_it_networked", buildSlide1],
    ["02_cases", buildSlide2],
    ["03_playbook", buildSlide3],
    ["04_fintech_today", buildSlide4],
    ["05_white_space", buildSlide5],
    ["06_architecture", buildSlide6],
  ];

  const pptx = makeDeck("Salmon Network Effects - Block 2");
  builders.forEach(([, buildSlide]) => buildSlide(pptx));

  const outPath = path.join(outDir, "salmon_block2_network_effects.pptx");
  await pptx.writeFile({ fileName: outPath });
  console.log(`Created: ${outPath}`);

  for (const [fileStem, buildSlide] of builders) {
    const singleDeck = makeDeck(`Salmon Block 2 - ${fileStem}`);
    buildSlide(singleDeck);
    const singlePath = path.join(singleDir, `${fileStem}.pptx`);
    await singleDeck.writeFile({ fileName: singlePath });
    console.log(`Created: ${singlePath}`);
  }
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
