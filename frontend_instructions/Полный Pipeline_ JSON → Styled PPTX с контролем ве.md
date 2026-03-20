<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Полный Pipeline: JSON → Styled PPTX с контролем верстки

Разберем детально, как контролировать стили на каждом этапе.

## Архитектура Pipeline

```
┌─────────────────────────────────────────────────────────┐
│ Antigravity (LLM генерирует JSON)                       │
│ + Styling Schema (цвета, шрифты, layout)               │
└──────────────────────┬──────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────┐
│ JSON с метаданными верстки                              │
│ (тема, палитра цветов, размеры, выравнивание)          │
└──────────────────────┬──────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────┐
│ Python Converter (python-pptx)                          │
│ - Парсит JSON                                           │
│ - Применяет стили                                       │
│ - Создает структуру слайдов                             │
│ - Генерирует PPTX                                       │
└──────────────────────┬──────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────┐
│ PPTX файл (редактируемый в PowerPoint)                  │
│ Все элементы — нативные текстбоксы, фигуры, таблицы    │
└─────────────────────────────────────────────────────────┘
```


***

## Этап 1: Extended JSON Schema с Styling

Вот расширенный JSON schema, который ты отправляешь LLM в Antigravity:
Эталон токенов хранится в `frontend_instructions/salmon_direct_contrast_style_v1.json`.

```json
{
  "metadata": {
    "title": "Q1 Product Strategy",
    "theme": "light_contrast",
    "style_preset_id": "salmon_direct_contrast_v1",
    "palette": {
      "bg_base": "#FFFFFF",
      "surface": "#FFFFFF",
      "surface_soft": "#F8F6F3",
      "stroke": "#E3DFD9",
      "text_primary": "#141414",
      "text_secondary": "#555555",
      "text_muted": "#777777",
      "brand_coral": "#F45B5F",
      "chart_neutral": "#C9D0D7"
    },
    "fonts": {
      "heading": "Arial Rounded MT Bold",
      "body": "Arial",
      "heading_size": 54,
      "body_size": 18,
      "subtitle_size": 32
    },
    "layout": {
      "slide_width": 13.333,
      "slide_height": 7.5,
      "margin_left": 0.84,
      "margin_right": 0.84,
      "margin_top": 0.64,
      "margin_bottom": 0.64,
      "grid_gap": 0.28
    },
    "shape": {
      "card_radius": 0.14,
      "button_radius": 0.12,
      "stroke_width": 1,
      "icon_border_width": 1.2
    },
    "components": {
      "micro_label": {
        "color": "#F45B5F",
        "size": 11
      },
      "cta_primary": {
        "fill": "#FFFFFF",
        "stroke": "#F45B5F",
        "text_color": "#F45B5F"
      },
      "benefit_card": {
        "fill": "#FFFFFF",
        "stroke": "#E3DFD9",
        "icon_fill": "#FFFFFF",
        "icon_stroke": "#F45B5F",
        "icon_color": "#F45B5F"
      }
    }
  },
  "slides": [
    {
      "id": 1,
      "type": "title",
      "title": "Shop now. Pay monthly.",
      "subtitle": "White base, black text, and coral accents for consistency.",
      "style": {
        "bg_color": "#FFFFFF",
        "title_color": "#141414",
        "subtitle_color": "#555555",
        "micro_label": "SALMON PRODUCT LOAN"
      }
    },
    {
      "id": 2,
      "type": "content",
      "layout_variant": "bullets",
      "title": "Key Initiatives",
      "title_style": {
        "color": "#141414",
        "size": 48,
        "font": "Arial Rounded MT Bold",
        "bold": true
      },
      "content": [
        {
          "text": "Deploy one shared contrast preset across all slide types.",
          "level": 0,
          "color": "#141414"
        },
        {
          "text": "Use white cards with coral outlines for CTAs.",
          "level": 1,
          "color": "#555555"
        },
        {
          "text": "Keep only one accent family: coral.",
          "level": 0,
          "color": "#141414"
        },
        {
          "text": "Limit bullet copy to short readable phrases.",
          "level": 1,
          "color": "#555555"
        }
      ],
      "style": {
        "bg_color": "#FFFFFF",
        "bullet_color": "#F45B5F",
        "text_align": "left",
        "line_spacing": 1.5
      }
    },
    {
      "id": 3,
      "type": "two_column",
      "title": "Before vs After",
      "title_style": {
        "color": "#141414",
        "size": 48
      },
      "columns": [
        {
          "title": "Current State",
          "title_color": "#141414",
          "bg_color": "#FFFFFF",
          "content": [
            "Mixed styles per slide",
            "Inconsistent CTA treatment",
            "Unclear visual hierarchy"
          ],
          "text_color": "#555555"
        },
        {
          "title": "With Preset",
          "title_color": "#F45B5F",
          "bg_color": "#FFFFFF",
          "content": [
            "Single visual system",
            "Predictable component design",
            "Fast template-based production"
          ],
          "text_color": "#555555"
        }
      ],
      "style": {
        "gap": 0.3,
        "bg_color": "#FFFFFF",
        "border_color": "#E3DFD9"
      }
    },
    {
      "id": 4,
      "type": "paragraph",
      "title": "Implementation Notes",
      "title_color": "#141414",
      "content": "Use salmon_direct_contrast_v1 as immutable style contract. Override only by explicit per-slide exception notes.",
      "style": {
        "bg_color": "#FFFFFF",
        "text_color": "#141414",
        "text_size": 20,
        "text_align": "left",
        "line_spacing": 1.6
      }
    },
    {
      "id": 5,
      "type": "table",
      "title": "Resource Allocation",
      "title_color": "#141414",
      "headers": ["Team", "Q1", "Q2", "Q3"],
      "rows": [
        ["Engineering", "5", "8", "10"],
        ["Product", "2", "2", "3"],
        ["Design", "1", "2", "2"]
      ],
      "style": {
        "bg_color": "#FFFFFF",
        "header_bg": "#FFFFFF",
        "header_text": "#141414",
        "row_bg_alternate": ["#FFFFFF", "#F8F6F3"],
        "text_color": "#141414",
        "key_value_color": "#F45B5F",
        "border_color": "#E3DFD9"
      }
    },
    {
      "id": 6,
      "type": "closing",
      "title": "Thank You!",
      "subtitle": "Questions?",
      "contact": "roman@example.com",
      "style": {
        "bg_color": "#FFFFFF",
        "title_color": "#141414",
        "subtitle_color": "#555555",
        "contact_color": "#777777",
        "layout": "centered"
      }
    }
  ]
}
```


***

## Этап 2: Prompting для LLM в Antigravity

Вот промт, который даст LLM инструкцию генерировать правильный JSON:

```
Ты специалист по созданию презентаций в JSON формате.
Твоя задача — генерировать структурированный JSON для презентации.

ВАЖНО:
1. Генерируй ТОЛЬКО валидный JSON (без дополнительного текста)
2. Следуй схеме ниже
3. Каждый пункт в списке не более 15 слов
4. Максимум 5 пунктов на слайде
5. Всегда используй style_preset_id = "salmon_direct_contrast_v1"
6. Не используй белый текст на красной заливке в основных текстовых блоках
7. CTA: белая кнопка + красная обводка + красный текст

JSON SCHEMA:
{
  "metadata": {
    "title": "string",
    "theme": "light_contrast",
    "style_preset_id": "salmon_direct_contrast_v1",
    "palette": { // используй только эту палитру
      "bg_base": "#FFFFFF",
      "surface": "#FFFFFF",
      "surface_soft": "#F8F6F3",
      "stroke": "#E3DFD9",
      "text_primary": "#141414",
      "text_secondary": "#555555",
      "text_muted": "#777777",
      "brand_coral": "#F45B5F",
      "chart_neutral": "#C9D0D7"
    },
    "fonts": {
      "heading": "Arial Rounded MT Bold",
      "body": "Arial",
      "heading_size": 54,
      "body_size": 18,
      "subtitle_size": 32
    },
    "shape": {
      "card_radius": 0.14,
      "button_radius": 0.12,
      "stroke_width": 1
    }
  },
  "slides": [
    {
      "type": "title" | "content" | "two_column" | "paragraph" | "table" | "closing",
      "title": "string",
      ... // дополнительные поля в зависимости от type
    }
  ]
}

ТИПЫ СЛАЙДОВ:

1. "title": {
   "type": "title",
   "title": "Main title",
   "subtitle": "Subtitle",
   "style": {
     "bg_color": "#FFFFFF",
     "title_color": "#141414",
     "subtitle_color": "#555555",
     "micro_label": "SALMON PRODUCT LOAN"
   }
}

2. "content" (bullets): {
   "type": "content",
   "layout_variant": "bullets",
   "title": "Section title",
   "content": [
     {"text": "Point 1", "level": 0, "color": "#141414"},
     {"text": "Sub-point", "level": 1, "color": "#555555"},
     {"text": "Point 2", "level": 0, "color": "#141414"}
   ],
   "style": {"bullet_color": "#F45B5F"}
}

3. "two_column": {
   "type": "two_column",
   "title": "Comparison",
   "columns": [
     {"title": "Left", "title_color": "#141414", "bg_color": "#FFFFFF", "content": ["item1", "item2"]},
     {"title": "Right", "title_color": "#F45B5F", "bg_color": "#FFFFFF", "content": ["item1", "item2"]}
   ],
   "style": {"border_color": "#E3DFD9"}
}

4. "paragraph": {
   "type": "paragraph",
   "title": "Section",
   "content": "Paragraph text here",
   "style": {"bg_color": "#FFFFFF", "text_color": "#141414"}
}

5. "table": {
   "type": "table",
   "title": "Data",
   "headers": ["Col1", "Col2", "Col3"],
   "rows": [["A", "B", "C"], ["D", "E", "F"]],
   "style": {
     "header_bg": "#FFFFFF",
     "header_text": "#141414",
     "row_bg_alternate": ["#FFFFFF", "#F8F6F3"],
     "border_color": "#E3DFD9",
     "key_value_color": "#F45B5F"
   }
}

6. "closing": {
   "type": "closing",
   "title": "Thank You",
   "subtitle": "Questions?",
   "contact": "email@example.com",
   "style": {"bg_color": "#FFFFFF", "title_color": "#141414", "subtitle_color": "#555555"}
}

Теперь создай JSON для следующей темы:
[ВСТАВЬ СЮДА ТЕМУ ПРЕЗЕНТАЦИИ]
```


***

## Этап 3: Python Converter (Полная версия)

Вот готовый Python скрипт, который парсит JSON и создает стилизованный PPTX:
Для пресета `salmon_direct_contrast_v1` не полагайся на dark fallback-значения в коде: всегда передавай `palette` из JSON.

```python
import json
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.dml.color import RGBColor
from pathlib import Path


class PresentationBuilder:
    def __init__(self, json_path: str, output_path: str = "output.pptx"):
        self.json_path = json_path
        self.output_path = output_path
        
        # Загружаем JSON
        with open(json_path, 'r', encoding='utf-8') as f:
            self.data = json.load(f)
        
        # Извлекаем метаданные
        self.metadata = self.data.get('metadata', {})
        self.palette = self.metadata.get('palette', {})
        self.fonts = self.metadata.get('fonts', {})
        self.layout_config = self.metadata.get('layout', {})
        
        # Создаем presentation
        self.prs = Presentation()
        self.prs.slide_width = Inches(self.layout_config.get('slide_width', 10))
        self.prs.slide_height = Inches(self.layout_config.get('slide_height', 5.625))
        
    def hex_to_rgb(self, hex_color: str) -> RGBColor:
        """Конвертирует HEX в RGB"""
        hex_color = hex_color.lstrip('#')
        return RGBColor(int(hex_color[0:2], 16), 
                       int(hex_color[2:4], 16), 
                       int(hex_color[4:6], 16))
    
    def _add_background(self, slide, bg_color: str):
        """Добавляет фон слайда"""
        background = slide.background
        fill = background.fill
        fill.solid()
        fill.fore_color.rgb = self.hex_to_rgb(bg_color)
    
    def _add_title_shape(self, slide, text: str, left: float, top: float, 
                        width: float, height: float, color: str, size: int):
        """Добавляет текстбокс с заголовком"""
        textbox = slide.shapes.add_textbox(
            Inches(left), Inches(top), Inches(width), Inches(height)
        )
        text_frame = textbox.text_frame
        text_frame.word_wrap = True
        text_frame.vertical_anchor = MSO_ANCHOR.MIDDLE
        
        p = text_frame.paragraphs[0]
        p.text = text
        p.font.size = Pt(size)
        p.font.bold = True
        p.font.name = self.fonts.get('heading', 'Arial')
        p.font.color.rgb = self.hex_to_rgb(color)
        p.alignment = PP_ALIGN.CENTER
        
        return textbox
    
    def _add_text_shape(self, slide, text: str, left: float, top: float,
                       width: float, height: float, color: str, size: int,
                       align: str = "left"):
        """Добавляет текстбокс"""
        textbox = slide.shapes.add_textbox(
            Inches(left), Inches(top), Inches(width), Inches(height)
        )
        text_frame = textbox.text_frame
        text_frame.word_wrap = True
        
        p = text_frame.paragraphs[0]
        p.text = text
        p.font.size = Pt(size)
        p.font.name = self.fonts.get('body', 'Calibri')
        p.font.color.rgb = self.hex_to_rgb(color)
        
        if align == "left":
            p.alignment = PP_ALIGN.LEFT
        elif align == "center":
            p.alignment = PP_ALIGN.CENTER
        elif align == "right":
            p.alignment = PP_ALIGN.RIGHT
        
        return textbox
    
    def _add_rectangle(self, slide, left: float, top: float, width: float, 
                      height: float, fill_color: str, border_color: str = None):
        """Добавляет прямоугольник"""
        shape = slide.shapes.add_shape(
            1,  # Rectangle
            Inches(left), Inches(top), Inches(width), Inches(height)
        )
        shape.fill.solid()
        shape.fill.fore_color.rgb = self.hex_to_rgb(fill_color)
        
        if border_color:
            shape.line.color.rgb = self.hex_to_rgb(border_color)
        else:
            shape.line.color.rgb = self.hex_to_rgb(fill_color)
        
        return shape
    
    def build_title_slide(self, slide_data: dict):
        """Создает title слайд"""
        slide = self.prs.slides.add_slide(
            self.prs.slide_layouts[6]  # Blank layout
        )
        
        style = slide_data.get('style', {})
        bg_color = style.get('bg_color', self.palette.get('bg_dark'))
        title_color = style.get('title_color', self.palette.get('primary'))
        subtitle_color = style.get('subtitle_color', self.palette.get('text_secondary'))
        
        self._add_background(slide, bg_color)
        
        # Title
        self._add_title_shape(
            slide,
            slide_data.get('title', ''),
            left=0.5, top=1.5, width=9, height=1.5,
            color=title_color,
            size=self.fonts.get('heading_size', 44)
        )
        
        # Subtitle
        self._add_text_shape(
            slide,
            slide_data.get('subtitle', ''),
            left=0.5, top=3.2, width=9, height=1,
            color=subtitle_color,
            size=self.fonts.get('subtitle_size', 24),
            align="center"
        )
    
    def build_content_slide(self, slide_data: dict):
        """Создает слайд с контентом"""
        slide = self.prs.slides.add_slide(
            self.prs.slide_layouts[6]  # Blank
        )
        
        style = slide_data.get('style', {})
        bg_color = style.get('bg_color', self.palette.get('bg_dark'))
        title_color = style.get('title_color', self.palette.get('primary'))
        text_color = style.get('text_color', self.palette.get('text_primary'))
        
        self._add_background(slide, bg_color)
        
        # Title
        self._add_title_shape(
            slide,
            slide_data.get('title', ''),
            left=0.5, top=0.4, width=9, height=0.8,
            color=title_color,
            size=self.fonts.get('heading_size', 44)
        )
        
        # Content bullets
        content = slide_data.get('content', [])
        current_top = 1.4
        line_spacing = 0.4
        
        for item in content:
            text = item.get('text', '')
            level = item.get('level', 0)
            indent = 0.5 + (level * 0.3)
            
            textbox = slide.shapes.add_textbox(
                Inches(indent), Inches(current_top), Inches(9 - indent), Inches(0.4)
            )
            text_frame = textbox.text_frame
            text_frame.word_wrap = True
            
            p = text_frame.paragraphs[0]
            p.text = "• " + text if level == 0 else "  ◦ " + text
            p.font.size = Pt(self.fonts.get('body_size', 18))
            p.font.name = self.fonts.get('body', 'Calibri')
            p.font.color.rgb = self.hex_to_rgb(
                item.get('color', text_color)
            )
            p.alignment = PP_ALIGN.LEFT
            
            current_top += line_spacing
    
    def build_two_column_slide(self, slide_data: dict):
        """Создает двухколончный слайд"""
        slide = self.prs.slides.add_slide(
            self.prs.slide_layouts[6]
        )
        
        style = slide_data.get('style', {})
        bg_color = style.get('bg_color', self.palette.get('bg_dark'))
        title_color = slide_data.get('title_style', {}).get('color', self.palette.get('primary'))
        
        self._add_background(slide, bg_color)
        
        # Title
        self._add_title_shape(
            slide,
            slide_data.get('title', ''),
            left=0.5, top=0.4, width=9, height=0.7,
            color=title_color,
            size=44
        )
        
        # Columns
        columns = slide_data.get('columns', [])
        column_width = 4.2
        gap = 0.3
        
        for idx, column in enumerate(columns):
            left = 0.5 + (idx * (column_width + gap))
            
            # Column background
            col_bg = column.get('bg_color', self.palette.get('bg_light'))
            self._add_rectangle(
                slide, left, 1.3, column_width, 3.8,
                fill_color=col_bg,
                border_color=self.palette.get('primary')
            )
            
            # Column title
            self._add_text_shape(
                slide,
                column.get('title', ''),
                left=left + 0.2, top=1.5, width=column_width - 0.4, height=0.5,
                color=column.get('title_color', self.palette.get('primary')),
                size=24,
                align="center"
            )
            
            # Column content
            content = column.get('content', [])
            current_top = 2.2
            
            for item in content:
                self._add_text_shape(
                    slide,
                    "• " + item,
                    left=left + 0.3, top=current_top, width=column_width - 0.6, height=0.35,
                    color=column.get('text_color', self.palette.get('text_primary')),
                    size=16,
                    align="left"
                )
                current_top += 0.4
    
    def build_paragraph_slide(self, slide_data: dict):
        """Создает слайд с параграфом"""
        slide = self.prs.slides.add_slide(
            self.prs.slide_layouts[6]
        )
        
        style = slide_data.get('style', {})
        bg_color = style.get('bg_color', self.palette.get('bg_dark'))
        title_color = slide_data.get('title_color', self.palette.get('primary'))
        text_color = style.get('text_color', self.palette.get('text_primary'))
        
        self._add_background(slide, bg_color)
        
        # Title
        self._add_title_shape(
            slide,
            slide_data.get('title', ''),
            left=0.5, top=0.4, width=9, height=0.8,
            color=title_color,
            size=44
        )
        
        # Paragraph
        textbox = slide.shapes.add_textbox(
            Inches(0.8), Inches(1.5), Inches(8.4), Inches(3.5)
        )
        text_frame = textbox.text_frame
        text_frame.word_wrap = True
        
        p = text_frame.paragraphs[0]
        p.text = slide_data.get('content', '')
        p.font.size = Pt(style.get('text_size', 20))
        p.font.name = self.fonts.get('body', 'Calibri')
        p.font.color.rgb = self.hex_to_rgb(text_color)
        p.alignment = PP_ALIGN.LEFT
        p.line_spacing = style.get('line_spacing', 1.5)
    
    def build_table_slide(self, slide_data: dict):
        """Создает слайд с таблицей"""
        slide = self.prs.slides.add_slide(
            self.prs.slide_layouts[6]
        )
        
        style = slide_data.get('style', {})
        bg_color = style.get('bg_color', self.palette.get('bg_dark'))
        title_color = slide_data.get('title_color', self.palette.get('primary'))
        
        self._add_background(slide, bg_color)
        
        # Title
        self._add_title_shape(
            slide,
            slide_data.get('title', ''),
            left=0.5, top=0.4, width=9, height=0.7,
            color=title_color,
            size=44
        )
        
        # Table
        headers = slide_data.get('headers', [])
        rows = slide_data.get('rows', [])
        
        total_rows = len(rows) + 1
        total_cols = len(headers)
        
        left = Inches(1)
        top = Inches(1.5)
        width = Inches(8)
        height = Inches(3.5)
        
        table_shape = slide.shapes.add_table(
            total_rows, total_cols, left, top, width, height
        ).table
        
        # Set column widths
        col_width = width / total_cols
        for col_idx in range(total_cols):
            table_shape.columns[col_idx].width = col_width
        
        # Header row
        header_bg = self.hex_to_rgb(style.get('header_bg', self.palette.get('primary')))
        header_text = self.hex_to_rgb(style.get('header_text', self.palette.get('bg_dark')))
        
        for col_idx, header in enumerate(headers):
            cell = table_shape.cell(0, col_idx)
            cell.fill.solid()
            cell.fill.fore_color.rgb = header_bg
            
            text_frame = cell.text_frame
            text_frame.clear()
            p = text_frame.paragraphs[0]
            p.text = header
            p.font.bold = True
            p.font.size = Pt(16)
            p.font.color.rgb = header_text
            p.alignment = PP_ALIGN.CENTER
        
        # Data rows
        text_color = self.hex_to_rgb(style.get('text_color', self.palette.get('text_primary')))
        row_bgs = [
            self.hex_to_rgb(c) for c in style.get('row_bg_alternate', 
                                                   [self.palette.get('bg_light'), 
                                                    self.palette.get('bg_dark')])
        ]
        
        for row_idx, row_data in enumerate(rows):
            bg = row_bgs[row_idx % len(row_bgs)]
            
            for col_idx, cell_data in enumerate(row_data):
                cell = table_shape.cell(row_idx + 1, col_idx)
                cell.fill.solid()
                cell.fill.fore_color.rgb = bg
                
                text_frame = cell.text_frame
                text_frame.clear()
                p = text_frame.paragraphs[0]
                p.text = str(cell_data)
                p.font.size = Pt(14)
                p.font.color.rgb = text_color
                p.alignment = PP_ALIGN.CENTER
    
    def build_closing_slide(self, slide_data: dict):
        """Создает closing слайд"""
        slide = self.prs.slides.add_slide(
            self.prs.slide_layouts[6]
        )
        
        style = slide_data.get('style', {})
        bg_color = style.get('bg_color', self.palette.get('bg_dark'))
        title_color = style.get('title_color', self.palette.get('primary'))
        subtitle_color = style.get('subtitle_color', self.palette.get('text_secondary'))
        
        self._add_background(slide, bg_color)
        
        # Title
        self._add_title_shape(
            slide,
            slide_data.get('title', ''),
            left=0.5, top=1.8, width=9, height=1,
            color=title_color,
            size=54
        )
        
        # Subtitle
        self._add_text_shape(
            slide,
            slide_data.get('subtitle', ''),
            left=0.5, top=3, width=9, height=0.8,
            color=subtitle_color,
            size=self.fonts.get('subtitle_size', 24),
            align="center"
        )
        
        # Contact
        if 'contact' in slide_data:
            self._add_text_shape(
                slide,
                slide_data.get('contact', ''),
                left=0.5, top=4.2, width=9, height=0.5,
                color=self.palette.get('text_muted', '#94a3b8'),
                size=14,
                align="center"
            )
    
    def build(self):
        """Генерирует полную презентацию"""
        slides = self.data.get('slides', [])
        
        for slide_data in slides:
            slide_type = slide_data.get('type')
            
            if slide_type == 'title':
                self.build_title_slide(slide_data)
            elif slide_type == 'content':
                self.build_content_slide(slide_data)
            elif slide_type == 'two_column':
                self.build_two_column_slide(slide_data)
            elif slide_type == 'paragraph':
                self.build_paragraph_slide(slide_data)
            elif slide_type == 'table':
                self.build_table_slide(slide_data)
            elif slide_type == 'closing':
                self.build_closing_slide(slide_data)
        
        self.prs.save(self.output_path)
        print(f"✅ Презентация создана: {self.output_path}")


# Использование:
if __name__ == "__main__":
    builder = PresentationBuilder("presentation.json", "output.pptx")
    builder.build()
```


***

## Этап 4: Полный Pipeline (шаг за шагом)

### 4.1 В Antigravity (Шаг 1)

1. Открываешь Antigravity
2. Создаешь новый chat/prompt
3. Вставляешь промт (см. выше в "Этап 2")
4. Добавляешь тему: `"Создай JSON для презентации на тему: AI-powered development tools"`
5. LLM генерирует JSON

### 4.2 Сохранение JSON (Шаг 2)

```bash
# Копируешь JSON output из Antigravity
# Сохраняешь как presentation.json в папку проекта
```


### 4.3 Запуск Python скрипта (Шаг 3)

```bash
# Установка зависимостей
pip install python-pptx
# или форк с фиксами:
pip install python-pptx-fix

# Запуск скрипта
python builder.py
```


### 4.4 Редактирование в PowerPoint (Шаг 4)

1. Открываешь `output.pptx` в PowerPoint/Google Slides
2. Все элементы — **нативные текстбоксы, фигуры, таблицы**
3. Можешь редактировать, добавлять картинки, анимацию
4. Все остается правильно структурировано

***

## Контрольная Таблица: Где что менять?

| Что менять | На каком этапе | Как |
| :-- | :-- | :-- |
| **Style preset** | JSON (Этап 1) | Фиксируешь `metadata.style_preset_id = salmon_direct_contrast_v1` |
| **Цвета** | JSON (Этап 1) | Меняешь hex в `palette` |
| **Шрифты** | JSON (Этап 1) | Меняешь в `fonts` |
| **Размеры шрифтов** | JSON (Этап 1) | `heading_size`, `body_size` |
| **Компоненты (CTA, card, table, chart)** | JSON (Этап 1) | Правишь `metadata.components` |
| **Размер слайда** | JSON (Этап 1) | `layout.slide_width`, `slide_height` |
| **Отступы/маржины** | JSON (Этап 1) | `layout.margin_*` |
| **Выравнивание текста** | JSON (Этап 1) | `align` в каждом элементе |
| **Структура слайда** | JSON (Этап 1) | Добавляешь/удаляешь слайды |
| **Уникальные стили** | JSON (Этап 1) | `style` объект в каждом слайде |
| **Анимация** | PPTX (Этап 4) | PowerPoint (не возможно в JSON) |
| **Картинки** | PPTX (Этап 4) | PowerPoint (вручную вставляешь) |
| **Гиперссылки** | PPTX (Этап 4) | PowerPoint |


***

## Преимущества этого Pipeline

✅ **Full control over styling** — всё контролируешь через JSON
✅ **No images** — чистые стандартные элементы PowerPoint
✅ **LLM-friendly** — LLM легко генерирует JSON
✅ **Programmable** — можешь автоматизировать
✅ **Editable** — результат полностью редактируется в PowerPoint
✅ **Reproducible** — можешь менять JSON и пересоздавать PPTX
✅ **Scalable** — можешь расширять схему (добавлять новые типы слайдов)

***

## Дополнительные возможности (Advanced)

Если захочешь расширить функционал:

```python
# 1. Градиенты (в некоторых версиях python-pptx)
# 2. Диаграммы (pie charts, bar charts)
# 3. Мастер-слайды для консистентности
# 4. Переходы между слайдами
# 5. Встроенные видео/медиа
# 6. Шейп-элементы (стрелки, звезды, и т.д.)
```

Нужна помощь с какой-то из частей этого pipeline?
