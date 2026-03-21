## Слайд 2.1. Что делает продукт сетевым

Основа: `solution_structure_final.md` + `llm_data/ordinary_llm_answers.md` + `llm_data/perplexity_data.md`.

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

---

## Слайд 2.2. Лучшие кейсы и практические принципы

Основа: `solution_structure_final.md` + `llm_data/perplexity_data.md` + `llm_data/ordinary_llm_answers.md`.

Цель:
Показать C-level, какие механики network effects реально создают рост и защищенность, а какие дают только утилитарную пользу без настоящего сетевого преимущества.

Заголовок:
`Какие NE-механики реально работают`

Контент:

Кейсы:

- `Venmo`
  - `Платеж -> заметка -> видимость друзьям` превратил перевод денег в social surface.
  - Реальный NE живет не в feed как таковом, а в плотности нужных контактов внутри сети.
  - `65% пользователей используют приложение еженедельно; в среднем 8,5 транзакции в месяц.`

- `M-Pesa`
  - `Перевод по номеру телефона -> cash-out у локального агента`.
  - Больше пользователей повышают жизнеспособность агентской сети; больше агентов повышают полезность сервиса для новых пользователей.
  - `К концу 2009 года: 65% домохозяйств, 4 тыс. -> 23 тыс. агентских точек; ~194 тыс. домохозяйств выведены из бедности.`

- `WeChat Red Envelopes`
  - WeChat не изобрел новый use case, а оцифровал существующий ритуал дарения денег.
  - Онбординг в платежи был встроен в праздничный social moment: чтобы участвовать, нужно привязать карту.
  - `1 млрд цифровых конвертов за новогоднюю ночь 2015; 100-200 млн привязок банковских карт в ходе кампании.`

- `Strava`
  - Видимость активности друзей + легкое социальное действие (`kudos`) усиливают вовлечение без тяжелого UGC.
  - Это не финтех, но важный переносимый принцип для групповых денег: social feedback должен быть дешевым и уместным.
  - `Активности в группах 10+ человек на 40% длиннее; беговые клубы +59% г/г; эффект kudos подтвержден академически.`

Практические принципы:

1. `Сначала атомарная сеть.` Ценность должна возникать уже внутри небольшой trust-group.
2. `NE-петля должна включать нового пользователя.` NE начинается там, где подключение нового участника повышает ценность сценария для уже активного.
3. `Опираемся на уже существующую группу (граф) или контекст.`
4. `Видимость и социальная реакция усиливают уже ценный сценарий.`

Источники:

- [Andrew Chen, The Cold Start Problem](https://andrewchen.com/wp-content/uploads/2022/01/ColdStartProb_9780062969743_AS0928_cc20_Final.pdf)
- [NFX, The Network Effects Manual](https://www.nfx.com/post/network-effects-manual)
- [Backstrom et al., Group Formation in Large Social Networks](https://snap.stanford.edu/class/cs224w-readings/backstrom06groupformation.pdf)
- [Zhang & Marbach, "Two is a Crowd"](https://www.cs.toronto.edu/~marbach/PUBL/gamenets_11.pdf)
- [Ugander et al., Structural Diversity in Social Contagion](https://pmc.ncbi.nlm.nih.gov/articles/PMC3341012/)
- [Lerman et al., The Majority Illusion in Social Networks](https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0147617)
- [a16z, The Dynamics of Network Effects](https://a16z.com/the-dynamics-of-network-effects/)
- [UMBC/CHI, The Curious Case of Social Awareness Streams](https://courses.cs.umbc.edu/graduate/CMSC691/spring22/pdf/3134663.pdf)
- [CoinLaw, Zelle vs Venmo statistics](https://coinlaw.io/zelle-vs-venmo-statistics/)
- [NBER, Mobile Money: The Economics of M-PESA](https://www.nber.org/system/files/working_papers/w16721/w16721.pdf)
- [Georgetown / Science 2016 summary on M-Pesa poverty impact](https://www.georgetown.edu/news/study-use-of-mobile-money-lifts-nearly-200000-kenyans-out-of-poverty/)
- [Wikipedia, WeChat red envelope](https://en.wikipedia.org/wiki/WeChat_red_envelope)
- [Reuters, WeChat users send 46 billion digital red packets over Lunar New Year](https://www.reuters.com/article/technology/corrected-wechat-users-send-46-billion-digital-red-packets-over-lunar-new-year-idUSKBN15J0BH/)
- [Strava Year in Sport Trend Report 2024](https://assets.ctfassets.net/wad4jonn1ykp/1sJg4OiBKFoGYDtw9NV9v4/8c39f8a577db84a32cec43055938124c/Strava_Year_in_Sport_-_The_Trend_Report_-_en-US.pdf)
- [Franken et al., Kudos make you run! (2023)](https://research.rug.nl/en/publications/kudos-make-you-run-how-runners-influence-each-other-on-the-online/)

Указания для верстки:

- Основная композиция: `4 карточки кейсов` сверху или слева; `4 принципа` отдельным компактным списком справа или снизу.
- На карточках оставить только: `ключевое взаимодействие`, `механизм NE`, `1 метрику`.
- Источники вынести в нижнюю строку мелким кеглем; все ссылки должны остаться кликабельными.
- Не добавлять таблицу `marketing vs NE` на этот слайд: она дублирует логику 2.1 и перегружает страницу.

---

## Слайд 2.3. Сильный NE не гарантирует успех

Основа: `test_task.md` + `solution_structure_final.md` + `llm_data/perplexity_data.md` + `llm_data/ordinary_llm_answers.md` + `llm_data/WeChat.md`.

Цель:
Ответить на вопросы `3` и частично `4` из задания: даже сильный network effect не взлетает сам по себе. Побеждают кейсы, где совпали архитектура продукта, момент рынка и встроенная дистрибуция.

Заголовок:
`Сильный NE не гарантирует успех`

Подзаголовок:
`Побеждают не просто "вирусные" продукты, а те, где механизм роста совпал с моментом рынка и каналом дистрибуции.`

Контент:

Кейсы:

- `WeChat Red Envelopes`
  - `Что это:` цифровой слой на существующем ритуале дарения денег внутри WeChat.
  - `Почему взлетело:` сошлись готовый social graph, Лунный Новый год и дистрибуция через крупнейший мессенджер страны.
  - `Оценка*:` `NE: сильный | момент: сильный | дистрибуция: сильная`
  - `Вывод:` без культурного повода и уже готового графа этот же паттерн мог не взлететь.

- `M-Pesa`
  - `Что это:` mobile money с переводом по номеру телефона и cash-out у локального агента.
  - `Почему взлетело:` продукт закрыл инфраструктурную дыру на рынке с низкой банковской доступностью и опёрся на Safaricom + агентскую сеть.
  - `Оценка*:` `NE: сильный | момент: сильный | дистрибуция: сильная`
  - `Вывод:` NE сработал не из-за "лучшего UX", а потому что продукт попал в реальный национальный gap.

- `Venmo`
  - `Что это:` P2P-платежи с social visibility через заметки и friends feed.
  - `Почему взлетело:` совпали mobile-native аудитория, повторяемый сценарий split/payback и peer loop внутри ближнего графа.
  - `Оценка*:` `NE: средний | момент: сильный | дистрибуция: средняя`
  - `Вывод:` лента помогала росту, но сама по себе не была moat; ценность давала плотность нужных контактов.

- `Honeydue / Zeta`
  - `Что это:` продукты для shared finance внутри пары или домохозяйства.
  - `Почему не масштабировалось:` проблема реальна, но account/trust layer уже принадлежал банкам, а сегмент оказался слишком узким для самостоятельного consumer winner.
  - `Оценка*:` `NE: слабый-умеренный | момент: средний | дистрибуция: слабая`
  - `Вывод:` даже валидный use case может не взлететь, если wedge слишком узок, а distribution чужой.

Что это значит для нашего кейса:
`WeChat и M-Pesa выиграли там, где сильный механизм совпал с сильной дистрибуцией и правильным моментом использования. Venmo показал, что хороший social layer может ускорять рост, но не всегда создает самый сильный moat. Honeydue и Zeta показали обратное: реальной боли недостаточно, если сегмент узок, а account layer уже контролируют банки. Для нас это значит: искать нужно не просто social finance, а сценарий, где второй участник нужен по логике продукта, а не по логике привлечения.`

Источники:

- [Andrew Chen, The Cold Start Problem](https://andrewchen.com/wp-content/uploads/2022/01/ColdStartProb_9780062969743_AS0928_cc20_Final.pdf)
- [Wikipedia, WeChat red envelope](https://en.wikipedia.org/wiki/WeChat_red_envelope)
- [Northwestern Medill, How WeChat redefined rituals in a digital age](https://spiegel.medill.northwestern.edu/wp-content/uploads/sites/2/2021/04/How-WeChat-redefined-rituals-in-a-digital-multiplatform-age-The-Medill-IMC-Spiegel-Research-Center.pdf)
- [NBER, Mobile Money: The Economics of M-PESA](https://www.nber.org/system/files/working_papers/w16721/w16721.pdf)
- [GSMA, The Adoption and Impact of M-Pesa](https://www.gsma.com/solutions-and-impact/connectivity-for-good/mobile-for-development/country/kenya/the-adoption-and-impact-of-m-pesa-a-first-look-at-some-new-data/)
- [UMBC/CHI, The Curious Case of Social Awareness Streams](https://courses.cs.umbc.edu/graduate/CMSC691/spring22/pdf/3134663.pdf)
- [CoinLaw, Zelle vs Venmo statistics](https://coinlaw.io/zelle-vs-venmo-statistics/)
- [Zeta official shutdown statement](https://www.askzeta.com)
- [Startups.RIP, Honeydue](https://startups.rip/company/honeydue)
- [Y Combinator, Honeydue](https://www.ycombinator.com/companies/honeydue)

Примечание:

`* Оценка — экспертная, собрана на основе данных и источников выше; это не готовая метрика из одного источника.`

Указания для верстки:

- Ниже заголовка сразу `4 кейс-карточки` в сетке `2x2`; в каждой карточке оставить только `что это`, `почему взлетело / не взлетело`, `аналитическую оценку`, `вывод`.
- Метрики можно не выносить в карточки; смысл слайда в сравнении причин успеха, а не в объеме цифр.
- Внизу отдельная takeaway line на всю ширину и затем мелкий source row.
- Слайд должен отвечать на вопрос `можно ли было не взлететь с тем же продуктом?` без ощущения теоретического эссе.

---

## Слайд 2.4. NE в финтехе

Основа: `solution_structure_final.md` + `llm_data/perplexity_data.md` + `llm_data/ordinary_llm_answers.md` + `llm_data/Revolut.md`.

Цель:
Показать, что в финансах важно различать `накопительный NE`, `ограниченный NE` и `feature-driven NE`, где фича использует уже существующую сеть, но не создает новый самостоятельный moat.

Заголовок:
`NE в финтехе`

Подзаголовок:
`Важно различать эффект, который накапливается на уровне всей сети, остается внутри группы или живет только на уровне фичи.`

Контент:

`Накопительный NE`

- `Zelle + Pix`
  - Встроенная в банки и национальная инфраструктура мгновенных переводов.
  - Каждый новый участник делает сеть полезнее для всей системы.
  - `Метрика:` `Zelle: $1 трлн и 151 млн аккаунтов в 2024; Pix: 165 млн пользователей и 46% всех электронных платежей в Бразилии.`

- `WeChat Pay`
  - Платежный слой внутри доминирующего social graph.
  - Ценность накапливается по мере роста сети контактов, чатов и ритуалов внутри super-app.
  - `Метрика:` `WeChat Pay + Alipay контролируют 93-94% мобильных платежей Китая.`

- `M-Pesa`
  - Mobile money + агентская сеть.
  - Больше пользователей поддерживают больше агентов; больше агентов делают сеть полезнее для новых пользователей.
  - `Метрика:` `4 тыс. -> 23 тыс. агентских точек; 65% домохозяйств к концу 2009 года.`

`Ограниченный NE`

- `Revolut Joint Accounts`
  - Совместный счет для двух пользователей Revolut.
  - Ценность резко растет внутри пары или домохозяйства, но почти не переносится между группами.
  - `Вердикт:` сильный парный эффект, но слабое накопление на уровне всей сети.

- `Splitwise`
  - Приложение для учета долгов и разделения расходов.
  - Каждый новый участник помогает внутри конкретной группы, но рост всей сети слабо усиливает ценность для уже существующих групп.
  - `Вердикт:` group-level effect есть, но он ограничен границами сценария.

`Feature-driven NE`

- `Split / request-to-pay inside banking apps`
  - Встроенные сценарии split, settlement и pay-by-bank.
  - Фича использует сетевой эффект базовой платежной сети, но сама не создает отдельную сеть ценности.
  - `Вердикт:` ценность в основном задает underlying rail, а не сама split-feature.

Что это значит для нашего кейса:
`Наше окно - не rails и не joint account, а сценарий, где ограниченный групповой эффект можно повторять между многими trust-groups и со временем превращать в накопительный.`

Источники:

- [Zelle press release: $1T in 2024](https://www.zelle.com/press-releases/zelle-shatters-records-1-trillion-sent-single-year)
- [CNBC: 151M users and Zelle growth](https://www.cnbc.com/2025/02/12/zelle-payments-top-1-trillion-in-2024.html)
- [Faster Payments Council: Pix by the Numbers Q1 2025](https://fasterpaymentscouncil.org/userfiles/2080/files/Pix%20by%20the%20Numbers%20Q1%202025.pdf)
- [Salmon website content synthesis](llm_data/salmon_website_content.md)
- [Yahoo Finance: Pix share of electronic payments in Brazil](https://finance.yahoo.com/news/brazil-embedded-finance-databook-report-080500418.html)
- [CGAP: China Digital Payments Revolution](https://www.cgap.org/research/publication/china-digital-payments-revolution)
- [BIS Paper 117: DNA feedback loop and fintech concentration](https://www.bis.org/publ/bppdf/bispap117.pdf)
- [NBER: Mobile Money - The Economics of M-PESA](https://www.nber.org/system/files/working_papers/w16721/w16721.pdf)
- [Georgetown / Science 2016 summary on M-Pesa poverty impact](https://www.georgetown.edu/news/study-use-of-mobile-money-lifts-nearly-200000-kenyans-out-of-poverty/)
- [Revolut Annual Report 2024](https://www.revolut.com/en-US/annual-report/2024/)
- [Revolut Help: Joint Accounts](https://help.revolut.com/en-MT/help/profile-and-plan/joint-accounts/how-to-set-up-a-joint-account-with-revolut/)
- [Tink x Splitwise Pay by Bank](https://tink.com/press/splitwise-tink-partner/)

Указания для верстки:

- Основная композиция: `3 смысловых блока` — `накопительный NE`, `ограниченный NE`, `feature-driven NE`.
- В каждом блоке использовать `1-3 компактные карточки`; внутри карточки не дублировать лейблы `что это / почему`, а оставлять только 2 короткие строки смысла и `verdict`.
- Не добавлять нижнюю плашку с ограничениями: этот слайд должен быть легче и быстрее читаться, чем предыдущая версия.
- Цветовой код: `накопительный NE` — зеленый, `ограниченный NE` — янтарный, `feature-driven NE` — серо-синий.
- Источники оставить в нижней строке мелким кеглем; все ссылки должны быть кликабельными.

---

## Слайд 2.5. На какой тип NE мы ставим

Основа: `test_task.md` + `solution_structure_final.md` + `vision_ideas.md` + `llm_data/perplexity_data.md` + `llm_data/known_cases.md` + `llm_data/salmon_website_content.md`.

Цель:
Показать полный список направлений в одной чистой рамке: `прямые / direct / same-side` и `непрямые / indirect / cross-side` network effects. NFX использовать только как `cross-check`, а не как основную классификацию.

Заголовок:
`На какой тип NE мы ставим`

Подзаголовок:
`Один классификатор: direct vs indirect. NFX используем только как cross-check.`

Контент:

Definition block:

`Прямой / direct / same-side effect` — ценность растет, когда увеличивается число участников на той же стороне сети.

`Непрямой / indirect / cross-side effect` — одна сторона сети повышает ценность для другой стороны.

Таблица:

| Академический тип | Направление | Что это значит | Гипотезы из `vision_ideas.md` | Решение |
|---|---|---|---|---|
| `Прямой / direct` | `Small-group shared-money coordination` | `Одна доверенная группа координирует общий расход, settlement, reminders, права и легкую коммуникацию. Friends, household и shared workspace — это один класс сценариев, а не три разных рынка.` | `split P2P`; `продукты для супругов и детей`; `права просмотра и действия по счету`; `travel / restaurants`; `кейс с мессенджером, как у Revolut` | `Да — основная ставка` |
| `Прямой / direct` | `Group goals / savings / gifting` | `Группа копит, дарит или собирает деньги вокруг повторяемой цели или ритуала.` | `совместное инвестирование`; `совместная кубышка`; `фандрайзинг`; `подарить карту с деньгами`; `соревновательность как team streaks / challenges` | `Фаза 2` |
| `Прямой / direct` | `Social money layer` | `Публичная или полупубличная идентичность, UGC и социальное сравнение вокруг денег.` | `Rewarded UGC`; `UGC визуал карты`; `можно посмотреть сколько денег у других людей или их зарплаты` | `Низкий приоритет / высокий риск` |
| `Прямой / direct` | `Default rail / bill-pay / payment convenience` | `Продукт пытается стать привычным слоем для routine payments и инициации оплаты.` | `QR-коды на счетах за utilities`; `отправить деньги до востребования пользователю без карты` | `Нет на первом этапе` |
| `Непрямой / indirect` | `Users ↔ merchants / group commerce` | `Чем больше merchants и group offers, тем полезнее продукт для пользователей; чем больше группового спроса, тем выше ценность Salmon для merchants.` | `значимые скидки у мерчантов для компаний`; `спец продукт для маркетплейсов`; `спец fee offer для ИП`; `travel / restaurants / кешбек у партнеров` | `Adjacent path` |
| `Непрямой / indirect` | `Users ↔ institutions / remittance ecosystem` | `Ценность растет через связку с cross-border flows, employers, payout rails и assisted distribution.` | `cross-border payments спец офер`; `зарплатный проект`; плюс существующий asset Salmon: `partner stores + Salmon Ambassador + in-app chat для store discovery` | `Учитывать как сильную adjacency` |
| `Непрямой / indirect` | `Users ↔ capital / guarantors` | `Больше поручителей, капитала или shared risk pool улучшают доступ к деньгам или pricing для других.` | `лучшие условия по кредиту при поручителях`; `долевая ипотека`; `оплата долями + доли можно расшарить`; `одни пользователи выдают кредит другим` | `Не сейчас` |
| `Непрямой / indirect` | `Platform / complements ecosystem` | `Сторонние партнеры или разработчики создают value поверх Salmon.` | `Сильной гипотезы в файле пока нет; ближе всего — спец продукт для маркетплейсов, но это еще не platform play.` | `Не сейчас` |

Акцентный блок:

`Что именно мы выбираем`

`Главная ставка — direct wedge: small-group shared-money coordination. Это один класс сценариев с разными входами — друзья, пары, семья, поездки, события — а не набор разрозненных продуктов.`

Что это значит для нашего кейса:
`Phase 2 — group goals / savings и merchant-side adjacencies. Social money layer, capital marketplace и platform-ecosystem не берем как стартовый wedge.`

Data layer:

`Scoring / antifraud / personalization from usage data` — это не отдельное направление в этой карте. Это later moat: чем больше групп используют Salmon, тем лучше работают trust-signals, antifraud и умные сценарии повторного использования.

NFX cross-check:

`Core bet мапится на Personal Utility; shared rights / workspace — на Market Networks; merchant path — на Marketplace; social money layer — на Personal. Data остается later moat, а не отдельным направлением.`

Источники:

- [Rochet & Tirole, Platform Competition in Two-Sided Markets](https://academic.oup.com/jeea/article/1/4/990/2280902)
- [Rochet & Tirole, Two-Sided Markets: A Progress Report](https://onlinelibrary.wiley.com/doi/10.1111/j.1756-2171.2006.tb00036.x)
- [Andrew Chen, The Cold Start Problem](https://andrewchen.com/wp-content/uploads/2022/01/ColdStartProb_9780062969743_AS0928_cc20_Final.pdf)
- [NFX, The Network Effects Manual](https://www.nfx.com/post/network-effects-manual)
- [vision_ideas.md](/Users/roman/Documents/Pet Projects/Salmon test task/vision_ideas.md)
- [llm_data/known_cases.md](/Users/roman/Documents/Pet Projects/Salmon test task/llm_data/known_cases.md)
- [llm_data/salmon_website_content.md](/Users/roman/Documents/Pet Projects/Salmon test task/llm_data/salmon_website_content.md)
- [LendingTree, Friends & Money Report](https://www.lendingtree.com/credit-cards/study/friends-money-report/)
- [Tink x Splitwise Pay by Bank](https://tink.com/press/splitwise-tink-partner/)
- [Revolut Blog, Group Vaults](https://www.revolut.com/blog/post/hit-savings-goals-faster-with-group-vaults/)
- [llm_data/WeChat.md](/Users/roman/Documents/Pet Projects/Salmon test task/llm_data/WeChat.md)

Примечание:

`Если хочешь сослаться на самый ранний академический источник для direct / indirect terminology или на официальный PH remittance study, эти ссылки нужно отдельно добавить в llm_data.`

Указания для верстки:

- Основная композиция: сверху `2 коротких definition blocks`, ниже `одна таблица` на 8 строк, затем `2 коротких акцентных блока`: `что выбираем` и `data layer`.
- В таблице визуально выделить строку `Да — основная ставка`; `Adjacent path` и `Учитывать как сильную adjacency` оформить как второй приоритет.
- `Small-group shared-money coordination` должен читаться как единое направление; friends / household / workspace не раскладывать на отдельные карточки.
- `Мессенджер`, `соревновательность`, `shared rights` и `group memory` не подавать как отдельные NE-направления: это product forms внутри выбранных строк.
- Не перегружать слайд типами из NFX: на этом слайде NFX нужен только как short cross-check.
- Источники оставить в нижней строке мелким кеглем; все ссылки должны быть кликабельными.
