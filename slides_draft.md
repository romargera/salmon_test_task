# Черновик слайда 2.1

Основа: `solution_structure_final.md` + `llm_data/ordinary_llm_answers.md` + `llm_data/perplexity_data.md`.

## Слайд 2.1. Что делает продукт сетевым

Цель:
Зафиксировать для C-level жесткий фильтр: network effect - это механизм роста ценности, а не роста дистрибуции.

Заголовок:
`Что делает продукт сетевым`

Подзаголовок:
`Network effect ≠ виральность ≠ масштаб ≠ привычка.`

Контент:

Definition block:

`Network effect (NE) отвечает на вопрос: растет ли ценность продукта для пользователя из-за активности, наличия или вклада других пользователей?`

Два типа эффекта:

- `Прямой эффект`: другие участники нужны, чтобы задача работала или решалась лучше. Примеры: P2P-перевод, split bill, shared goal.
- `Непрямой эффект`: одни участники создают контекст или supply, который становится ценностью для других. Примеры: sellers → buyers, drivers → riders, creators → consumers.

Тест на NE:

- `Если убрать часть пользователей, продукт становится слабее.`
- `Если рост держится только на маркетинге, это не NE.`

Источники:

- [NFX, The Network Effects Manual](https://www.nfx.com/post/network-effects-manual/) - ссылка уже есть в `llm_data/ordinary_llm_answers.md` (`[R2]`) и в `llm_data/perplexity_data.md`.
- [Andrew Chen, The Cold Start Problem](https://andrewchen.com/chapter-one-cold-start/) - ссылка уже есть в `llm_data/ordinary_llm_answers.md` (`[R3]`) и в `llm_data/perplexity_data.md`.
- [Rochet & Tirole, Platform Competition in Two-Sided Markets](https://academic.oup.com/jeea/article/1/4/990/2280902) - ссылка уже есть в `llm_data/ordinary_llm_answers.md` (`[R1]`) и в `llm_data/perplexity_data.md`.

Визуал:

- сверху короткий подзаголовок-рамка `Network effect ≠ виральность ≠ масштаб ≠ привычка`;
- ниже один definition block с ключевой формулировкой;
- затем 2 равновесные карточки: `Прямой эффект` и `Непрямой эффект`;
- ниже компактный блок `Тест на NE` на 2 пункта;
- внизу мелкий source row с 3 гиперссылками;
- takeaway на этом слайде не нужен.

Указания для верстки:

- Слайд должен читатьcя как board-level filter, а не как учебник по теории.
- Definition block - главный смысловой якорь после заголовка.
- В карточках сначала короткая формула, потом одна строка с примерами.
- Источники визуально вторичны, но обязаны быть кликабельными в `pptx`.
- Не использовать таблицу `NE / Not NE`; различие с виральностью и маркетингом уже зафиксировано в подзаголовке и тесте.
