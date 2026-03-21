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

Подзаголовок:
`Побеждает не “социальная фича”, а сценарий, где другой человек, существующий ритуал или инфраструктурная плотность делают продукт объективно полезнее.`

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

Акцентный блок:

`Два ложных пути`
- `Splitwise`: сильный utility, но слабый NE. Продукт полезен уже для 2 человек, и сотый пользователь почти не усиливает ценность существующей группы.
- `Honeydue / Zeta`: high-trust ниша для пар слишком узкая, а на уровне shared accounts банки имеют структурное преимущество в дистрибуции, доверии и лицензии.

Практические принципы:

1. `Сначала атомарная сеть.` Ценность должна возникать уже внутри небольшой trust-group.
2. `NE-петля должна включать нового пользователя.` NE начинается там, где подключение нового участника повышает ценность сценария для уже активного.
3. `Опираемся на уже существующую группу или связывающий людей контекст.`
4. `Социальный слой - усилитель, а не ядро.` Social mechanics работают только поверх уже нужного сценария.
5. `Moat строится через общую историю.` Повторные события, статусы, правила и память группы создают switching cost сильнее, чем разовый split.

Что это значит для нашего кейса:
`Для нашего кейса это значит: мы строим coordination layer для совместных финансовых сценариев доверенной группы. Первая ценность появляется сразу в конкретном сценарии, а затем усиливается общей историей, статусами и повторяемыми ритуалами.`

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
- [Tink x Splitwise Pay by Bank](https://tink.com/press/splitwise-tink-partner/)
- [Zeta official shutdown statement](https://www.askzeta.com)
- [Startups.RIP, Honeydue](https://startups.rip/company/honeydue)
- [Y Combinator, Honeydue](https://www.ycombinator.com/companies/honeydue)

Указания для верстки:

- Основная композиция: `4 карточки кейсов` сверху или слева; `5 принципов` отдельным компактным списком справа или снизу.
- `Два ложных пути` оформить как один акцентный warning block, не как еще две полноценные карточки.
- На карточках оставить только: `ключевое взаимодействие`, `механизм NE`, `1 метрику`.
- Источники вынести в нижнюю строку мелким кеглем; все ссылки должны остаться кликабельными.
- Не добавлять таблицу `marketing vs NE` на этот слайд: она дублирует логику 2.1 и перегружает страницу.

---

## Слайд 2.3. Где network effects в финансах уже работают

Основа: `solution_structure_final.md` + `llm_data/perplexity_data.md` + `llm_data/ordinary_llm_answers.md`.

Цель:
Показать, что network effects в финансах уже доказаны, но в основном на уровне инфраструктуры, государства или super-app экосистем. Значит окно для нового consumer play все еще открыто.

Заголовок:
`Где NE в финансах уже работает, а где нет`

Подзаголовок:
`Финтех уже знает сильные network effects - но почти все они живут либо в rails, либо в super-apps, а не в доверенных группах пользователей.`

Контент:

Левая колонка:

`Где NE реально работает`

- `Zelle`
  - `Bank-embedded P2P rail в США.`
  - `2024: $1 трлн, 151 млн аккаунтов.`
  - Настоящий NE есть, но он встроен в банковскую дистрибуцию: пользователь не выбирает сеть, ее уже выбрал банк.

- `Pix`
  - `Национальная система мгновенных платежей ЦБ Бразилии.`
  - `165 млн пользователей; 46% всех электронных платежей в Бразилии.`
  - Это настоящий NE национального стандарта, но он создан регулятором и rails-логикой, а не consumer product loop.

- `WeChat Pay`
  - `Платежный слой внутри WeChat super-app.`
  - `WeChat Pay + Alipay = 93-94% мобильных платежей Китая.`
  - Самый сильный consumer-finance NE: платежи опираются на уже существующий social graph и усиливаются platform + data loop.

- `M-Pesa`
  - `Mobile money + агентская сеть в Кении.`
  - `К концу 2009 года: 65% домохозяйств и рост агентской сети с 4 тыс. до 23 тыс. точек.`
  - Сильный physical NE: плотность агентской сети и число пользователей усиливают друг друга.

Правая колонка:

`Где эффект локален или не масштабируется`

- `Revolut Joint Accounts`
  - `Совместный счет для двух Revolut-пользователей.`
  - `1+ млн пользователей в 2024.`
  - Это credible local NE внутри конкретной пары или домохозяйства, но он не масштабируется в network-wide moat.

- `Splitwise`
  - `Приложение для учета долгов и разделения расходов.`
  - `Десятки миллионов пользователей, но ценность остается внутри одной группы.`
  - Это сильный utility и хороший sticky tool, но не network effect на уровне всей сети.

- `Split Bill / bank features`
  - `Встроенные в банк сценарии split / request-to-pay.`
  - Банковские split- и request-to-pay сценарии решают settlement, но не создают social graph, data moat или межгрупповую ценность.

- `Cash App Pools`
  - `Групповой сбор денег внутри Cash App.`
  - `Запуск: июль 2025; 57 млн MAU у платформы.`
  - Пока это выглядит как полезный group utility layer; для вывода о настоящем межгрупповом NE еще слишком рано.

Нижняя плашка:

`Что мешает новому игроку`

1. `KYC и ownership friction.` Shared view проще, чем joint account; полный совместный доступ резко утяжеляет onboarding и комплаенс.
2. `Деньги = приватность.` 44% боятся, что разговор о деньгах приведет к ссоре; 36% признают нечестность с партнером в финансовых вопросах.
3. `Банки мыслят счетом, а не отношением.` Большинство решений строится вокруг account object, а не вокруг группы, роли и совместного сценария.

Что это значит для нашего кейса:
`Окно находится между двумя крайностями: rails уже победили, а consumer coordination layer для доверенных групп еще не создан. Мы не конкурируем с Zelle, Pix или M-Pesa на инфраструктуре; мы ищем слой, который делает совместные финансовые решения внутри группы прозрачными, справедливыми и низкофрикционными.`

Источники:

- [Zelle press release: $1T in 2024](https://www.zelle.com/press-releases/zelle-shatters-records-1-trillion-sent-single-year)
- [CNBC: 151M users and Zelle growth](https://www.cnbc.com/2025/02/12/zelle-payments-top-1-trillion-in-2024.html)
- [Faster Payments Council: Pix by the Numbers Q1 2025](https://fasterpaymentscouncil.org/userfiles/2080/files/Pix%20by%20the%20Numbers%20Q1%202025.pdf)
- [Yahoo Finance: Pix share of electronic payments in Brazil](https://finance.yahoo.com/news/brazil-embedded-finance-databook-report-080500418.html)
- [CGAP: China Digital Payments Revolution](https://www.cgap.org/research/publication/china-digital-payments-revolution)
- [BIS Paper 117: DNA feedback loop and fintech concentration](https://www.bis.org/publ/bppdf/bispap117.pdf)
- [NBER: Mobile Money - The Economics of M-PESA](https://www.nber.org/system/files/working_papers/w16721/w16721.pdf)
- [Georgetown / Science 2016 summary on M-Pesa poverty impact](https://www.georgetown.edu/news/study-use-of-mobile-money-lifts-nearly-200000-kenyans-out-of-poverty/)
- [Revolut Annual Report 2024](https://www.revolut.com/en-US/annual-report/2024/)
- [Tink x Splitwise Pay by Bank](https://tink.com/press/splitwise-tink-partner/)
- [Cash App launches Pools](https://cash.app/press/cash-app-launches-pools-for-group-payments)
- [Wise / Talker Research via StudyFinds](https://studyfinds.org/average-couple-argues-about-money-58-times-a-year/)
- [Ipsos / BMO Money Fights Survey](https://www.ipsos.com/en-us/money-fights-one-three-34-partnered-americans-identify-money-source-conflict-their-relationship)

Указания для верстки:

- Основная композиция: `две контрастные колонки` - слева `работает`, справа `не работает`.
- В каждой колонке использовать `по 4 компактные карточки` с коротким verdict line.
- Внизу одна `горизонтальная плашка` на всю ширину с тремя ограничениями; это не footer, а отдельный смысловой блок.
- Цветовой код: левая колонка `зеленый`, правая `красный`, нижняя плашка `нейтральный янтарный`.
- На карточках не делать длинные таблицы; сначала `метрика`, потом `тип NE / честный вывод`.
- Источники вынести в нижнюю строку мелким кеглем; все ссылки должны остаться кликабельными.
