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

- `Прямой эффект`: другие участники нужны, чтобы задача работала или решалась лучше. Примеры: P2P-перевод, разделение счета, общая цель.
- `Непрямой эффект`: одни участники создают контекст или предложение, которое становится ценностью для других. Примеры: продавцы → покупатели, водители → пассажиры, создатели → аудитория.

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
  - `Платеж -> заметка -> видимость друзьям` превратил перевод денег в социальный слой.
  - Реальный NE живет не в ленте как таковой, а в плотности нужных контактов внутри сети.
  - `65% пользователей используют приложение еженедельно; в среднем 8,5 транзакции в месяц.`

- `M-Pesa`
  - `Перевод по номеру телефона -> выдача наличных у локального агента`.
  - Больше пользователей повышают жизнеспособность агентской сети; больше агентов повышают полезность сервиса для новых пользователей.
  - `К концу 2009 года: 65% домохозяйств, 4 тыс. -> 23 тыс. агентских точек; ~194 тыс. домохозяйств выведены из бедности.`

- `WeChat Red Envelopes`
  - WeChat не изобрел новый сценарий, а оцифровал существующий ритуал дарения денег.
  - Онбординг в платежи был встроен в праздничный социальный момент: чтобы участвовать, нужно привязать карту.
  - `1 млрд цифровых конвертов за новогоднюю ночь 2015; 100-200 млн привязок банковских карт в ходе кампании.`

- `Strava`
  - Видимость активности друзей + легкая социальная реакция (`kudos`) усиливают вовлечение без тяжелого UGC.
  - Это не финтех, но важный переносимый принцип для групповых денег: социальная реакция должна быть дешевой и уместной.
  - `Активности в группах 10+ человек на 40% длиннее; беговые клубы +59% г/г; эффект kudos подтвержден академически.`

Практические принципы:

1. `Сначала атомарная сеть.` Ценность должна возникать уже внутри небольшой доверенной группы.
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
  - `Почему взлетело:` сошлись готовый социальный граф, Лунный Новый год и дистрибуция через крупнейший мессенджер страны.
  - `Оценка*:` `NE: сильный | момент: сильный | дистрибуция: сильная`
  - `Вывод:` без культурного повода и уже готового графа этот же паттерн мог не взлететь.

- `M-Pesa`
  - `Что это:` мобильные деньги с переводом по номеру телефона и выдачей наличных у локального агента.
  - `Почему взлетело:` продукт закрыл инфраструктурную дыру на рынке с низкой банковской доступностью и опёрся на Safaricom + агентскую сеть.
  - `Оценка*:` `NE: сильный | момент: сильный | дистрибуция: сильная`
  - `Вывод:` NE сработал не из-за "лучшего UX", а потому что продукт попал в реальный национальный gap.

- `Venmo`
  - `Что это:` P2P-платежи с публичностью переводов через заметки и ленту друзей.
  - `Почему взлетело:` совпали аудитория, привыкшая к оплате со смартфона, повторяемый сценарий разделения счета и возврата денег, и плотный цикл внутри ближнего графа.
  - `Оценка*:` `NE: средний | момент: сильный | дистрибуция: средняя`
  - `Вывод:` лента помогала росту, но сама по себе не создавала защиту; ценность давала плотность нужных контактов.

- `Honeydue / Zeta`
  - `Что это:` продукты для совместных финансов внутри пары или домохозяйства.
  - `Почему не масштабировалось:` проблема реальна, но слой счета и доверия уже принадлежал банкам, а сегмент оказался слишком узким для самостоятельного победителя в потребительском сегменте.
  - `Оценка*:` `NE: слабый-умеренный | момент: средний | дистрибуция: слабая`
  - `Вывод:` даже валидный сценарий может не взлететь, если точка входа слишком узка, а дистрибуция чужая.

Что это значит для нашего кейса:
`WeChat и M-Pesa выиграли там, где сильный механизм совпал с сильной дистрибуцией и правильным моментом использования. Venmo показал, что хороший социальный слой может ускорять рост, но не всегда создает самую сильную защиту. Honeydue и Zeta показали обратное: реальной боли недостаточно, если сегмент узок, а слой счета уже контролируют банки. Для нас это значит: искать нужно не просто социальный денежный сценарий, а продукт, где второй участник нужен по логике самого использования.`

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
Показать, что в финансах важно различать `накопительный NE`, `ограниченный NE` и `NE на уровне функции`, где функция использует уже существующую сеть, но не создает новую самостоятельную защиту.

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
  - Платежный слой внутри доминирующего социального графа.
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
  - `Вердикт:` групповой эффект есть, но он ограничен границами сценария.

`NE на уровне функции`

- `Split / request-to-pay inside banking apps`
  - Встроенные сценарии разделения счета, урегулирования и оплаты со счета.
  - Фича использует сетевой эффект базовой платежной сети, но сама не создает отдельную сеть ценности.
  - `Вердикт:` ценность в основном задает базовая платежная сеть, а не сама функция разделения счета.

Что это значит для нашего кейса:
`Наше окно - не платежные сети и не совместный счет, а сценарий, где ограниченный групповой эффект можно повторять между многими доверенными группами и со временем превращать в накопительный.`

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

- Основная композиция: `3 смысловых блока` — `накопительный NE`, `ограниченный NE`, `NE на уровне функции`.
- В каждом блоке использовать `1-3 компактные карточки`; внутри карточки не дублировать лейблы `что это / почему`, а оставлять только 2 короткие строки смысла и `verdict`.
- Не добавлять нижнюю плашку с ограничениями: этот слайд должен быть легче и быстрее читаться, чем предыдущая версия.
- Цветовой код: `накопительный NE` — зеленый, `ограниченный NE` — янтарный, `NE на уровне функции` — серо-синий.
- Источники оставить в нижней строке мелким кеглем; все ссылки должны быть кликабельными.

---

## Слайд 2.5. Выберем направление (bet)

Основа: `test_task.md` + `solution_structure_final.md` + `vision_ideas.md` + `llm_data/perplexity_data.md` + `llm_data/known_cases.md` + `llm_data/salmon_website_content.md`.

Цель:
Показать `4` рассматриваемых направления и явно связать их с типами сетевых эффектов. Не делать вид, что у нас уже есть честная приоритизация направлений; это следующий шаг после выбора стартового сегмента.

Заголовок:
`Выберем направление (bet)`

Контент:

Подзаголовок:
`Все рассмотренные направления и гипотезы: [полная таблица](/Users/roman/Documents/Pet Projects/Salmon test task/Salmon-test-task.xlsx - directions.tsv)`

Блоки:

1. `Move`
`Переводы и расчеты между людьми.`
Гипотезы:
`P2P-переводы внутри сети Salmon, split расходов, денежный мессенджер, чаевые и пожертвования по QR.`
NE-категория:
`Прямой эффект; ближе всего к Personal Utility. В отдельных сценариях — Market Networks и Marketplace (2-Sided).`

2. `Store`
`Совместное хранение денег и прав доступа.`
Гипотезы:
`Семейные продукты, совместное управление деньгами, общие балансы и роли.`
NE-категория:
`Прямой эффект; Personal Utility. В более сложной форме — Market Networks внутри семьи или домохозяйства.`

3. `Spend & Credit`
`Траты, торговые сценарии и кредитные механики.`
Гипотезы:
`MCP marketplace, совместное погашение, collaborative BNPL, депозиты с поручителями, совместная ипотека, P2P-кредитование.`
NE-категория:
`В основном непрямой эффект; Marketplace (2-Sided). Для кредитных пулов местами появляется Asymptotic Marketplace.`

4. `Earn & Grow`
`Совместное накопление, инвестиции и сбор средств.`
Гипотезы:
`Совместные инвестиции, фандрайзинг, контент вокруг финансовой грамотности и инвестиций.`
NE-категория:
`Чаще всего Market Networks и Marketplace (2-Sided). Для контента — Hub-and-Spoke, но это не ядро нашей ставки.`

Комментарий по NFX:
`Проверка через NFX: Move и Store ближе всего к direct / Personal Utility; Spend & Credit — к indirect / Marketplace (2-Sided); Earn & Grow — к Market Networks и Marketplace. Protocol, Physical, Platform и чистый Hub-and-Spoke не являются нашим стартовым ядром.`

Источники:

- [Salmon-test-task.xlsx - directions.tsv](/Users/roman/Documents/Pet Projects/Salmon test task/Salmon-test-task.xlsx - directions.tsv)
- [theory_nfx.md](/Users/roman/Documents/Pet Projects/Salmon test task/theory_nfx.md)
- [llm_data/salmon_website_content.md](/Users/roman/Documents/Pet Projects/Salmon test task/llm_data/salmon_website_content.md)

Указания для верстки:

- Основная композиция: `4 карточки` на одном экране и `один короткий комментарий по NFX` внизу.
- Номер слайда и служебные плашки не нужны.
- Гипотезы внутри карточек держать короткими; не пытаться уместить полный список.
- Источники лучше подать как короткий ряд гиперссылок внизу.

---

## Слайд 3.1. Сравнение 4 стартовых сегментов

Основа: `Salmon-test-task.xlsx - segments (1).tsv` + `test_task.md` + `solution_structure_final.md`.

Цель:
Сравнить `4` отобранных сегмента и выбрать один стартовый. Показать не только масштаб и частоту, но и `переносимость графа` как критерий сетевого распространения.

Заголовок:
`Какой сегмент берем первым`

Подзаголовок:
`Расчеты: [локальная таблица](/Users/roman/Documents/Pet Projects/Salmon test task/Salmon-test-task.xlsx - segments (1).tsv) / [Google Sheets](https://docs.google.com/spreadsheets/d/1jzzUfvo3hHp4h_i9hOXBEJrKNEJ5Zv2G/edit?gid=1447909165#gid=1447909165&range=N1)`

Контент:

Критерий отбора:
`Сначала фильтруем сегменты по reach × frequency, затем добавляем переносимость графа: насколько один пользователь естественно приносит продукт в другие графы.`

Карточки:

1. `Друзья`
`Лучший стартовый сегмент.`
Почему:
`Граф уже живет в ежедневных чатах и естественно переносится между ужинами, поездками, подарками и событиями. Это самый сильный сегмент по сетевому распространению.`
Аргументы:
Филиппины занимают 1-е место в мире по времени в соцсетях: `3 ч 32 мин` в день; `67,1%` используют соцсети для связи с друзьями.

2. `Пары / партнеры`
`Сильный сегмент второго этапа.`
Почему:
`Очень высокая частота и размер сегмента, но граф почти всегда замкнут внутри двух человек. Это делает сценарий сильным по использованию, но слабее по переносу между графами.`
Аргументы:
`26,39 млн` пар; `62%` пар держат хотя бы часть денег раздельно; финансовые взаимодействия происходят несколько раз в неделю или чаще.

3. `Дети в семьях`
`Сильный сегмент второго этапа.`
Почему:
`Частота максимальная: ежедневные траты, школьные платежи, переводы и контроль. Но сценарий живет внутри household и хуже переносится наружу.`
Аргументы:
Около `17,95 млн` семей с детьми; семейные платежи происходят ежедневно; около `35` цифровых транзакций в месяц на пользователя.

4. `Небольшие группы коллег`
`Сильный запасной вариант.`
Почему:
`Граф переносимее, чем у семейных сегментов: у людей несколько рабочих и полурабочих кругов. Но это уже более чувствительный контекст и слабее эмоциональная мотивация, чем у друзей.`
Аргументы:
`31,6 млн` наемных работников; рабочие группы общаются `5` дней в неделю; групповые чаты — рабочая норма.

Вывод:
`Стартовый выбор — друзья вокруг поездок, ужинов и событий. Пары / партнеры и дети в семьях — лучший следующий слой после первого запуска, а небольшие группы коллег — сильный запасной вариант, если рабочие сценарии покажут лучший отклик.` 

Источники:

- [Salmon-test-task.xlsx - segments (1).tsv](/Users/roman/Documents/Pet Projects/Salmon test task/Salmon-test-task.xlsx - segments (1).tsv)
- [PSA: Family Size and Family Head Characteristics](https://rsso01.psa.gov.ph/system/files/attachment-dir/Special%2520Release%2520No.%25202022-045_Family%2520Size%2520and%2520Family%2520Head%2520Characteristics.pdf)
- [Bankrate couples finances survey](https://www.bankrate.com/f/102997/x/62268aa83c/couples-finances-press-release-2026.pdf)
- [Meltwater Philippines social media statistics](https://www.meltwater.com/en/blog/social-media-statistics-philippines)
- [BSP 2024 Report on E-payments Measurement](https://www.bsp.gov.ph/PaymentAndSettlement/2024_Report_on_E-payments_Measurement.pdf)
- [CPBRD: PH Employment Situation 2024](https://cpbrd.congress.gov.ph/wp-content/uploads/2025/02/FF2024-63-PH-Employment-Situation-2024.pdf)

Примечание:

`Кроме этого списка из 4 сегментов, мы также рассмотрели зависимых членов расширенной семьи, международные семьи / переводы, микробизнес и соседей по жилью. Полные расчеты вынесены в таблицу по ссылке выше.`

Указания для верстки:

- Основная композиция: `4 карточки` и `один короткий вывод`.
- Визуально выделить блок `Друзья` как основной выбор.
- Строку со ссылкой на полную таблицу поставить над карточками и сделать кликабельной.
- Не превращать слайд в TAM-анализ: на этом экране важнее логика выбора, чем полный расчет.
- Источники оставить в нижней строке мелким кеглем; все ссылки должны быть кликабельными.

---

## Appendix A. Полная карта направлений для 2.5

Основа: текущая подробная версия `2.5`, сохраненная как backup slide до появления внешней таблицы.

Цель:
Сохранить полную раскладку направлений на случай обсуждения с детализацией, не перегружая основной слайд.

Заголовок:
`Приложение. Полная карта направлений для 2.5`

Контент:

Таблица:

| Тип | Направление | Краткий вердикт |
|---|---|---|
| `Прямой / direct` | `Координация общих денег в малой доверенной группе` | `Старт`: боль подтверждена (`75% / 32%`), спрос валидирован (`35 млн` у Splitwise). |
| `Прямой / direct` | `Групповые цели и накопления` | `Этап 2`: сильное расширение после ядра. |
| `Прямой / direct` | `Социальный слой вокруг денег` | `Не берем`: слабее подтвержденный спрос и выше риск приватности. |
| `Прямой / direct` | `Привычный платежный слой / оплата счетов` | `Не берем`: рынок уже занят Zelle и Pix. |
| `Непрямой / indirect` | `Пользователи ↔ торговые партнеры` | `Этап 2`: сильный смежный путь благодаря уже существующим активам Salmon. |
| `Непрямой / indirect` | `Пользователи ↔ институты / переводы` | `Позже`: логика сильная, но это не главный вход в продукт. |
| `Непрямой / indirect` | `Пользователи ↔ капитал / поручители` | `Не берем`: тяжелый запуск и слабее подтвержденный спрос. |
| `Непрямой / indirect` | `Платформа / партнерские дополнения` | `Не берем`: нет причин стартовать с платформенной модели. |

Вывод:
`Эта версия уходит в приложение; позднее ее можно заменить ссылкой на внешнюю таблицу с полным списком категорий и гипотез.`

Источники:

- [LendingTree, Friends & Money Report](https://www.lendingtree.com/credit-cards/study/friends-money-report/)
- [Tink x Splitwise Pay by Bank](https://tink.com/press/splitwise-tink-partner/)
- [llm_data/salmon_website_content.md](/Users/roman/Documents/Pet Projects/Salmon test task/llm_data/salmon_website_content.md)
- [Revolut Blog, Group Vaults](https://www.revolut.com/blog/post/hit-savings-goals-faster-with-group-vaults/)
- [Zelle press release: $1T in 2024](https://www.zelle.com/press-releases/zelle-shatters-records-1-trillion-sent-single-year)
- [Faster Payments Council: Pix by the Numbers Q1 2025](https://fasterpaymentscouncil.org/userfiles/2080/files/Pix%20by%20the%20Numbers%20Q1%202025.pdf)
- [llm_data/WeChat.md](/Users/roman/Documents/Pet Projects/Salmon test task/llm_data/WeChat.md)
