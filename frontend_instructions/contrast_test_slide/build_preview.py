from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
import json

W, H = 1600, 900

STYLE_PATH = Path(__file__).resolve().parent.parent / "salmon_direct_contrast_style_v1.json"
STYLE = json.loads(STYLE_PATH.read_text(encoding="utf-8"))

TOKENS = {
    "bg": STYLE["palette"]["bg_base"],
    "surface": STYLE["palette"]["surface"],
    "line": STYLE["palette"]["stroke"],
    "card": STYLE["palette"]["surface"],
    "text_primary": STYLE["palette"]["text_primary"],
    "text_secondary": STYLE["palette"]["text_secondary"],
    "text_dark": STYLE["palette"]["text_primary"],
    "coral": STYLE["palette"]["brand_coral"],
    "teal": STYLE["palette"]["brand_coral"],
}


def load_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = []
    if bold:
        candidates = [
            "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
            "/Library/Fonts/Arial Bold.ttf",
        ]
    else:
        candidates = [
            "/System/Library/Fonts/Supplemental/Arial.ttf",
            "/Library/Fonts/Arial.ttf",
        ]

    for p in candidates:
        if Path(p).exists():
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()


def rounded(draw: ImageDraw.ImageDraw, xy, r, fill, outline=None, width=1):
    draw.rounded_rectangle(xy, radius=r, fill=fill, outline=outline, width=width)


def main():
    out = Path(__file__).resolve().parent / "test_contrast_slide_preview.png"
    img = Image.new("RGB", (W, H), TOKENS["bg"])
    d = ImageDraw.Draw(img, "RGBA")

    # Top micro label
    d.text((102, 78), "SALMON PRODUCT LOAN", font=load_font(18, True), fill=TOKENS["coral"])

    # Main title and subtitle
    d.text((98, 132), "Shop now. Pay monthly.", font=load_font(64, True), fill=TOKENS["text_primary"])
    d.text(
        (98, 314),
        "Прямой контраст: белая база,\n"
        "чёрный текст и красные акценты Salmon.",
        font=load_font(34, False),
        fill=TOKENS["text_secondary"],
        spacing=8,
    )

    # Hero card
    rounded(d, (860, 116, 1510, 516), 24, TOKENS["card"], TOKENS["line"], 2)
    d.text((906, 156), "Monthly Plan", font=load_font(22, True), fill=TOKENS["coral"])
    d.text((906, 205), "₱1,500 / month", font=load_font(60, True), fill=TOKENS["text_dark"])
    d.text((906, 286), "0% interest | approval under 1 minute", font=load_font(24), fill="#5B6067")

    rounded(d, (906, 336, 1140, 398), 14, "#FFFFFF", TOKENS["coral"], 3)
    d.text((974, 351), "Apply now", font=load_font(24, True), fill=TOKENS["coral"])

    d.line((906, 430, 1460, 430), fill="#D8D3CB", width=2)

    bars = [1.2, 2.0, 1.6, 2.5, 2.9]
    for i, h in enumerate(bars):
        x = 926 + i * 62
        y2 = 496
        height = int(h * 42)
        color = TOKENS["coral"] if i == 4 else "#C9D0D7"
        rounded(d, (x, y2 - height, x + 34, y2), 6, color)

    pills = [
        ("●", "Borrow up to ₱60,000", "Для техники, мебели и бытовых покупок.", TOKENS["coral"]),
        ("◔", "Pay nothing upfront", "Чёткие выплаты без скрытых комиссий.", TOKENS["teal"]),
        ("✓", "Approved in 1 minute", "Нужны только базовые документы.", TOKENS["coral"]),
    ]

    for i, (icon, title, text, color) in enumerate(pills):
        x1 = 100 + i * 500
        x2 = x1 + 462
        rounded(d, (x1, 694, x2, 825), 16, TOKENS["surface"], TOKENS["line"], 2)
        d.ellipse((x1 + 28, 736, x1 + 72, 780), fill="#FFFFFF", outline=color, width=2)
        d.text((x1 + 41, 742), icon, font=load_font(18, True), fill=color)
        d.text((x1 + 92, 726), title, font=load_font(24, True), fill=TOKENS["text_primary"])
        d.text((x1 + 92, 770), text, font=load_font(16), fill=TOKENS["text_secondary"])

    img.save(out)
    print(f"Created: {out}")


if __name__ == "__main__":
    main()
