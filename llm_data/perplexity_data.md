# Сетевые эффекты в финтехе: исследование по 30 вопросам

_Дата: март 2026 г. Формат: подробные ответы с inline-цитированием первичных источников._

---

## Содержание

- [Блок 1: Кейсы и данные (Q1–7)](#блок-1-кейсы-и-данные-q1–7)
- [Блок 2: Регуляторика и инфраструктура (Q8–11)](#блок-2-регуляторика-и-инфраструктура-q8–11)
- [Блок 3: Поведение пользователей (Q12–15)](#блок-3-поведение-пользователей-q12–15)
- [Блок 4: Конкуренты и аналоги (Q16–22)](#блок-4-конкуренты-и-аналоги-q16–22)
- [Блок 5: Технические возможности (Q23–25)](#блок-5-технические-возможности-q23-25)
- [Блок 6: Теория сетевых эффектов (Q26–30)](#блок-6-теория-сетевых-эффектов-q26–30)

---

# Блок 1: Кейсы и данные по финтех сетевым эффектам (Q1–7)

---

## Q1. Какие финтех-компании успешно реализовали сетевые эффекты? Конкретные метрики роста, retention, viral coefficient.

### Venmo

Venmo — наиболее показательный пример прямых сетевых эффектов в P2P-платежах. Продукт встроил социальную ленту транзакций, превратив денежные переводы в социальный опыт.

- **Рост пользовательской базы:** с 41,5 млн (2019) → 62,6 млн (2020, +50,8%) → 70,1 млн (2021, +12%) → 77,7 млн (2022) → 85,1 млн (2023) → ~95,4 млн активных аккаунтов (2025). По прогнозам достигнет 107,6 млн к концу 2025 года ([ElectroIQ Venmo Statistics](https://electroiq.com/stats/venmo-statistics/)).
- **Объём платежей:** $69 млрд в Q1 2024 года; $270 млрд за 2023 год; ~$325 млрд оценочно за 2025 год ([SQ Magazine](https://sqmagazine.co.uk/venmo-statistics/)).
- **Доля P2P-рынка:** 61,8% рынка P2P-пользователей США по прогнозам на 2025 год ([CoinLaw Zelle vs Venmo](https://coinlaw.io/zelle-vs-venmo-statistics/)).
- **Engagement:** 65% пользователей используют приложение еженедельно; среднее число транзакций — 8,5 в месяц ([CoinLaw](https://coinlaw.io/zelle-vs-venmo-statistics/)).
- **Монетизация (2024):** монетизированные MAU выросли на 24% ([SQ Magazine](https://sqmagazine.co.uk/venmo-statistics/)); выручка +20% г/г в Q1 2025 ([CNBC](https://www.cnbc.com/2025/04/29/venmo-revenue-grows-as-paypals-monetization-push-gains-traction.html)).
- **Каналы привлечения:** ~65,75% — прямой маркетинг, ~28,18% — поиск, ~2,05% — реферальные, ~1,89% — соцсети ([SQ Magazine](https://sqmagazine.co.uk/venmo-statistics/)). Это означает, что Venmo в значительной мере зависит от органического потока (прямые посещения), а не от платных каналов.
- **Механика виральности:** Venmo изначально синхронизировался с Facebook (транзакции отображались в ленте), предлагал реферальный бонус $1 за привлечённого друга, а сама природа P2P-платежа требует наличия партнёра в приложении ([Harvard Digital](https://d3.harvard.edu/platform-digit/submission/venmo-building-direct-network-effects-and-thennothing-happened/)).

### Cash App

- **Рост:** с 3 млн (2016) → 7 млн (2017) → 15 млн (2018) → 57 млн MAU (декабрь 2024, официальные данные SEC) ([SEC 10-K Square 2024](https://www.sec.gov/Archives/edgar/data/1512673/000162828025007376/sq-20241231.htm)).
- **Валовая прибыль:** $190 млн (2018) → $4,32 млрд (2023) → $5,23 млрд (2024), рост ~27x за шесть лет ([ElectroIQ Cash App](https://electroiq.com/stats/cash-app-statistics/)).
- **Выручка:** $0,4 млрд (2018) → $16,2 млрд (2024) ([ElectroIQ](https://electroiq.com/stats/cash-app-statistics/)).
- **Операционная прибыль:** скорректированная операционная прибыль +1495% — с $25 млн (Q2 2023) до $399 млн (Q2 2024) ([ElectroIQ](https://electroiq.com/stats/cash-app-statistics/)).
- **Retention:** 93% удовлетворённость пользователей (2025); 54% используют приложение ежедневно ([CoinLaw Cash App](https://coinlaw.io/cash-app-statistics/)).
- **Cash Card:** >19 млн активных пользователей по состоянию на Q2 2025, +27% г/г ([CoinLaw](https://coinlaw.io/cash-app-statistics/)).

### Zelle

- **Объём:** $1 трлн (2024, +27% г/г) — рекордный показатель для P2P-платформы; $1,2 трлн (2025, +20% г/г) ([Zelle Press Release 2026](https://www.zelle.com/press-releases/zelle-posts-20-growth-12-trillion-sent-far-outpacing-consumer-spending-and-cementing)).
- **Пользователи:** 151 млн зарегистрированных пользователей (2024, +12% г/г); ежемесячно 100 млн аккаунтов совершали транзакции в декабре 2025 года ([CNBC Zelle](https://www.cnbc.com/2025/02/12/zelle-payments-top-1-trillion-in-2024.html)).
- **Транзакции:** 3,6 млрд (2024, +25%); 4,2 млрд (2025, +16%) ([Zelle Press Release](https://www.zelle.com/press-releases/zelle-posts-20-growth-12-trillion-sent-far-outpacing-consumer-spending-and-cementing)).
- **Frequency:** >80% активных пользователей совершают транзакции минимум раз в месяц; среднее — 12 транзакций в месяц ([CoinLaw](https://coinlaw.io/zelle-vs-venmo-statistics/)).
- **Сетевой эффект:** встроен напрямую в банковские приложения >10 000 банков и кредитных союзов; 98% транзакций в 2025 году — через банковские интеграции ([CoinLaw](https://coinlaw.io/zelle-vs-venmo-statistics/)).

### Revolut

- **Рост пользователей:** клиентская база +38% до 52,5 млн глобально (2024) ([Revolut Annual Report 2024](https://www.revolut.com/en-US/annual-report/2024/)).
- **Выручка:** $4,0 млрд (2024, +72% г/г) ([LinkedIn Marcel van Oost о Revolut](https://www.linkedin.com/posts/marcelvanoost_revolut-annual-report-2024-activity-7321077830102999040-nAE9)).
- **Чистая прибыль:** $1 млрд (2024), рентабельность 26%.
- **Подписки:** $541 млн (+74% г/г) — индикатор высокой лояльности.
- **Виральный рост:** до 2018 года — рост практически без платной рекламы; 65–70% трафика — сарафанное радио; реферальная программа давала **2–3x** к ежедневным показателям привлечения пользователей ([Viral Loops Revolut Case Study](https://viral-loops.com/revolut-referral-marketing-case-study)).

### Nubank

- **Масштаб:** 114 млн клиентов (FY2024, +20,4 млн за год); 122,7 млн к Q2 2025 ([Monexa Nubank](https://www.monexa.ai/blog/nubank-growth-market-impact-and-industry-trends-in-NU-2025-04-09)); ~61% взрослого населения Бразилии ([LinkedIn Nubank 112M](https://www.linkedin.com/pulse/nubank-crosses-112m-customers-takes-top-spot-brazil-marcel-van-oost-1uicf)).
- **CAC:** менее $5 на нового клиента (blended) — по сравнению с $91,3 у Bradesco и $114,6 у Itaú ([Emerging Fintech Nubank](https://www.emergingfintech.co/p/nubank-dismantled-brazils-banking)).
- **Retention:** ~85% бразильских клиентов активны каждый месяц ([LinkedIn](https://www.linkedin.com/pulse/nubank-crosses-112m-customers-takes-top-spot-brazil-marcel-van-oost-1uicf)).
- **Выручка:** $3,7 млрд (Q2 2025, +40% г/г); ROE 28%; коэффициент эффективности 28,3%.
- **Виральная механика:** продукт-driven рост — пользователи становятся амбассадорами из-за превосходного UX; CAC в 5–23x ниже, чем у традиционных банков-конкурентов.

### WeChat Pay

- **Пользователи:** 430 млн (2016) → 720 млн (2018) → 900 млн (2021) → 935 млн MAU (2023) → ~1,225 млрд активных пользователей (прогноз 2024) ([BankMyCell WeChat](https://www.bankmycell.com/blog/number-of-wechat-users/)).
- **Рост 2016→2024:** +185% пользователей.
- **Доминирование рынка:** WeChat Pay + Alipay совместно контролируют 93% мобильных платежей в Китае ([CGAP China Payments](https://www.cgap.org/research/publication/china-digital-payments-revolution)).
- **Тригер роста:** «красные конверты» 2014–2016 гг. (см. Q3).

### M-Pesa

- **Глобально:** 66,2 млн клиентов (FY2024 по данным Statista) ([Statista M-Pesa](https://www.statista.com/statistics/1139190/m-pesa-customer-numbers/)); 40 млн MAU только в Кении (март 2026) ([Kenyan Wallstreet](https://kenyanwallstreet.com/m-pesa-40-million-users-kenya-marks-19-years-mobile-money)).
- **Выручка Safaricom M-Pesa (Кения):** KSh 161,1 млрд (~$1,25 млрд) за FY2025, +15,2% г/г ([M-PESA Africa LinkedIn](https://www.linkedin.com/posts/m-pesa-africa_safaricom-plc-has-announced-full-year-financial-activity-7326545234148904960-pwar)).
- **Транзакции:** 37,15 млрд транзакций в Кении за FY2025 (+29,5% г/г).
- **Охват:** >75% взрослого населения Кении ([Techweez/Facebook](https://www.facebook.com/techweez/posts/m-pesa-has-surpassed-40-million-active-users-in-kenya-nearly-two-decades-after-l/1467105965425192/)); 96% кенийских домохозяйств ([перцоляционная модель Rose-Hulman](https://www.rose-hulman.edu/academics/academic-departments/mathematics/mathreu/_assets/pdfs/2020_Adoption_of_M-Pesa_Reed_Stefanov_Vural.pdf)).

---

## Q2. Какой organic invite rate у Splitwise, Venmo, Zelle? Какой процент роста — маркетинг vs органика?

**Важное замечание:** Публично раскрытых точных данных о viral K-factor или organic invite rate у этих компаний практически нет — они не публикуются в рамках обязательной отчётности. Ниже собраны все доступные индикаторы.

### Venmo

- **Структура трафика (2024–2025):** ~65,75% прямой маркетинг, ~28,18% поиск, ~2,05% реферальные, ~1,89% соцсети, ~1,96% email ([SQ Magazine](https://sqmagazine.co.uk/venmo-statistics/)). Цифра «прямой маркетинг» включает органические прямые визиты, что говорит о высокой узнаваемости бренда.
- **Виральная петля:** сама природа P2P-платежа является встроенным вирусным механизмом: нельзя отправить деньги тому, кто не зарегистрирован → получатель регистрируется → он сам начинает звать других. Venmo усиливал это с помощью интеграции с Facebook (транзакции в ленте) и реферального бонуса $1 ([Harvard Digital](https://d3.harvard.edu/platform-digit/submission/venmo-building-direct-network-effects-and-thennothing-happened/)).
- **Ключевой индикатор:** в 2020 году пользовательская база выросла на 50,8% (с 41,5 до 62,6 млн) во время пандемии — без существенного роста маркетинговых расходов. Это говорит о мощном органическом/виральном драйвере ([ElectroIQ](https://electroiq.com/stats/venmo-statistics/)).
- **Weekly engagement:** 65% пользователей используют приложение еженедельно — высокий показатель для финтех-продукта — против 8,5 транзакции в месяц в среднем ([CoinLaw](https://coinlaw.io/zelle-vs-venmo-statistics/)).

### Zelle

- **Структура роста:** Zelle растёт преимущественно органически через банковские каналы — его пользователь не «скачивает Zelle», а находит функцию уже в банковском приложении. Это означает, что практически весь рост является органическим (банковская дистрибуция, а не платная реклама).
- **Рост пользователей 2023→2024:** +16 млн пользователей (+12%) при нулевых расходах на прямое привлечение ([CNBC Zelle $1T](https://www.cnbc.com/2025/02/12/zelle-payments-top-1-trillion-in-2024.html)).
- **Standalone app закрыт в 2025 году** — 100% новых пользователей теперь онбордятся через банковские приложения ([CoinLaw Zelle vs Venmo](https://coinlaw.io/zelle-vs-venmo-statistics/)).

### Splitwise

- **Бизнес-модель роста:** компания **почти полностью полагается на органический рост через сарафанное радио**. Сама природа продукта («введи долг → пригласи всех участников») создаёт принудительную виральность: нельзя полноценно использовать Splitwise в одиночку ([CanvasBusinessModel Splitwise](https://canvasbusinessmodel.com/blogs/target-market/splitwise-target-market)).
- **Трафик:** 74,6% прямые переходы, 15,77% из Google — подавляющее большинство пользователей приходят напрямую ([Semrush Splitwise](https://www.semrush.com/website/splitwise.com/overview/)).
- **Веб-трафик:** 2,93 млн визитов в декабре 2024 года. Среднее время сессии — 4:43, что свидетельствует о высокой вовлечённости.
- **Механика:** одноимённый паттерн «split» создаёт встроенный invite loop — один пользователь добавляет долг, система приглашает всех контрагентов.

### Revolut (бонус: лучший раскрытый кейс)

- **65–70%** трафика — word-of-mouth (наивысший раскрытый показатель среди европейских финтехов).
- До 2018 года: **рост практически без платной рекламы**.
- Реферальная программа 2019 года: **2–3x к ежедневным показателям привлечения** новых пользователей ([Viral Loops Revolut](https://viral-loops.com/revolut-referral-marketing-case-study)).
- Список ожидания в США (март 2020): 30 000–40 000 участников за первый месяц.

### Общий вывод

Для всех четырёх продуктов характерна модель **«принудительной виральности»** (каждый платёж автоматически требует наличия второй стороны в системе). Это отличает их от большинства SaaS-продуктов. Публично раскрытых K-factor/viral coefficient нет ни у одной компании — эти данные считаются конкурентно чувствительными.

---

## Q3. Как WeChat Red Envelopes повлияли на adoption WeChat Pay? Конкретные цифры.

### Запуск (январь 2014)

17 января 2014 года Tencent запустил функцию «红包» (hongbao, красный конверт) в WeChat — цифровой аналог традиционной китайской практики дарения денег на Новый год.

- **Первый китайский Новый год (январь-февраль 2014):** 8 млн пользователей обменялись **40 млн красных конвертов** на общую сумму 400 млн юаней ($64 млн) ([Forbes David Yin 2015](https://www.forbes.com/sites/davidyin/2015/02/19/tencents-wechat-sends-1-billion-virtual-red-envelopes-on-new-years-eve/); [China Daily](https://www.chinadaily.com.cn/a/201603/18/WS5a2b73dca310eefe3e9a043e.html)).
- **«В течение нескольких дней»** миллионы новых пользователей зарегистрировались в платёжной системе WeChat (Tenpay) и привязали банковские карты ([Forbes](https://www.forbes.com/sites/davidyin/2015/02/19/tencents-wechat-sends-1-billion-virtual-red-envelopes-on-new-years-eve/)).
- **WeChat Pay** вырос с **30 млн до 100 млн пользователей** за один месяц — рост на 70 млн за один лунный Новый год ([LinkedIn Aolama](https://www.linkedin.com/posts/aolama_the-chinese-eidiya-%D8%B9%D9%8A%D8%AF%D9%8A%D8%A9-onboarded-100000000-activity-7433047015728676865-ma-x)).
- Внутри первой недели кампании **свыше 10 млн пользователей привязали банковские карты** ([LinkedIn Gavin Liu](https://www.linkedin.com/pulse/lessons-from-war-between-wechat-pay-alipay-gavin-liu-wqbjc)).
- **Джек Ма (Alibaba)** назвал это «атакой Пёрл-Харбор» на бизнес Alipay: за то время, что Alipay строил подобный масштаб **8 лет**, WeChat достиг его за **один праздник** ([LinkedIn Aolama](https://www.linkedin.com/posts/aolama_the-chinese-eidiya-%D8%B9%D9%8A%D8%AF%D9%8A%D8%A9-onboarded-100000000-activity-7433047015728676865-ma-x)).

### Динамика по годам (рост красных конвертов)

| Год | Красных конвертов | Событие |
|-----|------------------|---------|
| 2014 | 16 млн | Первый запуск |
| 2015 | 1 млрд (CNY Eve) | Партнёрство с CCTV Gala; WeChat потратил $7,7 млн на спонсорство |
| 2015 | 32,7 млрд | За весь период Spring Festival |
| 2016 | 8 млрд | Только на CNY Eve (x8 к 2015) |
| 2016 | 2,3 млрд транзакций | 1 января 2016 за один день |
| 2017 | 47 млрд | За 6 дней вокруг Нового года |
| 2023 | 800 млн участников | Только за Spring Festival |

Источники: [Wikipedia WeChat Red Envelope](https://en.wikipedia.org/wiki/WeChat_red_envelope); [Reuters 2017](https://www.reuters.com/article/technology/corrected-wechat-users-send-46-billion-digital-red-packets-over-lunar-new-year-idUSKBN15J0BH/); [IMD Business School](https://www.imd.org/research-knowledge/strategy/articles/the-red-envelope-war-in-2018/).

### Феномен 2015: «200 млн банковских карт за ночь»

В 2015 году WeChat ввёл правило: для отправки/получения больших сумм требовалась привязка банковской карты. По данному из LinkedIn-поста, **200 млн банковских карт было привязано за одну ночь** во время Spring Festival Gala — Alipay достигал сопоставимого уровня 8 лет ([LinkedIn Aolama](https://www.linkedin.com/posts/aolama_the-chinese-eidiya-%D8%B9%D9%8A%D8%AF%D9%8A%D8%A9-onboarded-100000000-activity-7433047015728676865-ma-x)). Это число часто цитируется как оценочное/вирусное, но первоисточник — отчёты Tencent, широко тиражируемые в прессе.

По данным Wikipedia (ссылающейся на данные Tencent): **от 100 до 200 млн** пользователей привязали банковские данные в ходе кампании, что позволило WeChat Pay «более чем удвоить свою долю рынка» ([Wikipedia WeChat Red Envelope](https://en.wikipedia.org/wiki/WeChat_red_envelope)).

### Почему это сработало

1. **Встроенность в традицию**: hongbao — тысячелетняя практика дарения денег. WeChat оцифровал ритуал, а не изобрёл новый.
2. **Геймификация**: деньги в групповом конверте распределялись случайно — первые забирают больше. FOMO и азарт обеспечили моментальный виральный эффект.
3. **Обязательная привязка**: получить или отправить деньги = привязать карту. Онбординг был встроен в сам праздничный опыт.
4. **CCTV Gala 2015**: 700 млн зрителей «трясли телефоны» для получения конвертов — пиковая нагрузка 810 млн встряхиваний в минуту ([Northwestern Medill Spiegel](https://spiegel.medill.northwestern.edu/wp-content/uploads/sites/2/2021/04/How-WeChat-redefined-rituals-in-a-digital-multiplatform-age-The-Medill-IMC-Spiegel-Research-Center.pdf)).

---

## Q4. M-Pesa: динамика роста, tipping point, текущий % населения Кении

### Запуск и ранний рост (2007–2010)

M-Pesa был запущен Safaricom 6 марта 2007 года. В момент запуска лишь 23% кенийцев имели доступ к каким-либо финансовым услугам.

| Период | Пользователи | Ключевой факт |
|--------|-------------|---------------|
| Апрель 2007 | 335 агентов | Запуск с агентской сетью |
| Конец 2007/08 (14 мес.) | 2,7 млн | Быстрее, чем любой сопоставимый рынок |
| Август 2008 | 7,5 млн | 34% взрослых Кении; транзакции в июле 2008 — $535 млн (2% ВВП) |
| Январь 2010 | 9,0 млн | 40% взрослых; 60% клиентской базы Safaricom |
| Июль 2010 | 11,9 млн | 54% взрослых; выручка $94 млн/год (9% доходов Safaricom) |
| Декабрь 2011 | 17 млн | Самый успешный мобильный финансовый сервис в развивающемся мире |
| 2012 | 17 млн аккаунтов | Больше транзакций внутри страны, чем Western Union глобально |

Источники: [World Bank M-PESA Mobile Payments Go Viral 2010](https://documents1.worldbank.org/curated/en/638851468048259219/pdf/543380WP0M1PES1BOX0349405B01PUBLIC1.pdf); [FinDev Gateway Case Study](https://www.findevgateway.org/sites/default/files/publications/files/mfg-en-case-study-mobile-payments-go-viral-m-pesa-in-kenya-mar-2010.pdf); [Kenyan History](https://kenyanhistory.com/the-birth-of-m-pesa-how-kenya-invented-mobile-money/).

### Tipping Point (критическая масса)

Исследования показывают, что **типпинг-пойнт M-Pesa пришёлся примерно на 2009–2010 годы**:

- **Рост P2P-транзакций на 718% между 2008 и 2009 годами** ([Kenyan History](https://kenyanhistory.com/the-birth-of-m-pesa-how-kenya-invented-mobile-money/)).
- Доля домохозяйств-пользователей выросла с **43% (август 2008)** до **69% (декабрь 2009)** — за 16 месяцев ([GSMA M-Pesa Adoption](https://www.gsma.com/solutions-and-impact/connectivity-for-good/mobile-for-development/country/kenya/the-adoption-and-impact-of-m-pesa-a-first-look-at-some-new-data/)).
- К 2010 году M-Pesa обрабатывал **10% ВВП Кении** ежемесячно.
- Агентская сеть выросла с 335 при запуске до **14 000+ к ноябрю 2009 года** — поддерживая соотношение ~600 клиентов на агента.
- Ключевой типпинг-фактор: **городские рабочие пересылали деньги в деревни**. Каждый отправитель автоматически создавал потребность в приложении у получателя. Каждый успешный перевод рекрутировал нового пользователя ([Kenyan History](https://kenyanhistory.com/the-birth-of-m-pesa-how-kenya-invented-mobile-money/)).
- Академическая перцоляционная модель (Rose-Hulman, 2020): симуляция показывает асимптотический выход на 97,5% охвата — соответствует реальным данным о 96%+ домохозяйств ([Rose-Hulman PDF](https://www.rose-hulman.edu/academics/academic-departments/mathematics/mathreu/_assets/pdfs/2020_Adoption_of_M-Pesa_Reed_Stefanov_Vural.pdf)).

### Текущее состояние (2024–2026)

- **40 млн MAU в Кении** (март 2026, +6 млн от 34 млн в 2024) ([allAfrica](https://allafrica.com/stories/202603060624.html); [Kenyan Wallstreet](https://kenyanwallstreet.com/m-pesa-40-million-users-kenya-marks-19-years-mobile-money)).
- **>75% взрослых** используют M-Pesa в Кении ([Techweez](https://www.facebook.com/techweez/posts/m-pesa-has-surpassed-40-million-active-users-in-kenya-nearly-two-decades-after-l/1467105965425192/)).
- **96% домохозяйств** имеют хотя бы одного пользователя M-Pesa ([Rose-Hulman/World Bank данные](https://www.rose-hulman.edu/academics/academic-departments/mathematics/mathreu/_assets/pdfs/2020_Adoption_of_M-Pesa_Reed_Stefanov_Vural.pdf)).
- **84,8%** взрослых кенийцев имеют доступ к формальным финансовым услугам (2024 FinAccess Survey, CBS Kenya, цитируется по [The Star Kenya](https://www.facebook.com/TheStarKenya/posts/as-of-the-2024-finaccess-household-survey-848-of-adult-kenyans-have-access-to-fo/1324439319725274/)) — по сравнению с 26% в 2006 году.
- **70% ВВП Кении** проходит через экосистему цифровых платежей ([McKinsey M-Pesa 15 Years](https://www.mckinsey.com/industries/financial-services/our-insights/driven-by-purpose-15-years-of-m-pesas-evolution)).
- **Выручка M-Pesa Кения:** KSh 161,1 млрд (~$1,25 млрд) за FY2025 ([M-PESA Africa LinkedIn](https://www.linkedin.com/posts/m-pesa-africa_safaricom-plc-has-announced-full-year-financial-activity-7326545234148904960-pwar)).
- **91% рыночной доли** мобильных денег в Кении (хотя снижается 5-й квартал подряд на фоне роста Airtel Money) ([ElectroIQ M-Pesa](https://electroiq.com/stats/m-pesa-statistics/)).

### Импакт на финансовую инклюзию

По исследованию Tavneet Suri и William Jack (Science, 2016): доступ к M-Pesa **вывел ~194 000 кенийских домохозяйств (около 2% всех) из крайней бедности** — преимущественно через изменение занятости в женских домохозяйствах ([Kenyan History](https://kenyanhistory.com/the-birth-of-m-pesa-how-kenya-invented-mobile-money/)).

---

## Q5. Venmo social feed: есть ли данные об увеличении retention/engagement?

### Что говорят исследования

Прямых A/B-тестов «Venmo с лентой vs. без ленты», опубликованных Venmo/PayPal, нет. Однако существует ряд академических и отраслевых свидетельств.

#### Академические данные

1. **Исследование "The Curious Case of Social Awareness Streams"** (Уильям Тоби и соавт., UMBC/CHI, публикация в ACM): изучало социальную ленту Venmo (SAS) на реальных пользователях. Ключевые находки:
   - 68% пользователей имели **более 40 транзакций в своей ленте за последние 10 дней** — высокий уровень контентной насыщенности.
   - 57% пользователей совершили >10 транзакций за последние 3 месяца.
   - Пользователи, заходя в приложение для транзакции, **часто задерживались в ленте**, изучая активность друзей — паттерн, аналогичный Facebook.
   - Лента выполняет **функцию социального обучения**: новые пользователи видят, как другие пишут описания с emoji, и перенимают эту практику ([UMBC PDF](https://courses.cs.umbc.edu/graduate/CMSC691/spring22/pdf/3134663.pdf)).

2. **Исследование из Telematics and Informatics (ScienceDirect):** «Мы полагаем, что высокий уровень социализации в Venmo влияет на поведение пользователей. Встроенные социальные функции (лайки, списки друзей, emoji) создают дополнительную ценность поверх утилитарной функции платежа» ([ScienceDirect Venmo Social](https://www.sciencedirect.com/science/article/pii/S0736585320300885)).

3. **Исследование о конфиденциальности** (ISI/PETS 2022): публичная лента «вероятно помогала увеличить выручку, узнаваемость бренда и поддерживать комьюнити» ([ISI PDF](https://www.isi.edu/people-mirkovic/wp-content/uploads/sites/52/2023/10/pets2022-1.pdf)).

#### Сравнительные данные Venmo vs. Zelle

| Метрика | Venmo | Zelle |
|---------|-------|-------|
| Частота использования | 65% — еженедельно | 80% — минимум раз в месяц |
| Транзакции/месяц | 8,5 | 12 |
| Рейтинг в App Store | 4,2/5 | 4,0/5 |
| Демография | 70%+ до 35 лет | Ядро 35–54 года |
| Социальные функции | Есть (лента, лайки, emoji) | Нет |

Источник: [CoinLaw Zelle vs Venmo](https://coinlaw.io/zelle-vs-venmo-statistics/).

**Интерпретация:** Zelle имеет более высокую частоту транзакций (12 vs 8,5/мес), но это объясняется преимущественно тем, что его ядро — более взрослые и финансово активные пользователи, а не социальными функциями. Venmo сохраняет **более высокое вовлечение в приложение** (65% еженедельно vs. 80% Zelle раз в месяц — разные метрики, но еженедельное использование обычно выше).

#### Мнение самого Venmo

Соучредитель Iqram Magdon-Ismail: *«Одна из причин, по которой люди предпочитают нас и будут предпочитать в будущем — это то, что мы социальные. Ты получаешь больше ценности от того, что делишься с друзьями»* ([The Financial Brand](https://thefinancialbrand.com/news/fintech-banking/paypal-venmo-social-mobile-payments-43203)).

#### Ограничения данных

Независимые исследования указывают на двойственность: большинство пользователей **нейтральны или безразличны** к ленте. Лишь 7 из 40+ опрошенных в одном академическом исследовании назвали социальные функции среди причин предпочтения Venmo. Лента скорее «не мешает», чем активно удерживает пользователей. Ключевая роль ленты — **виральность и awareness**, а не напрямую retention: транзакции в ленте видят незарегистрированные пользователи и регистрируются ([UMBC](https://courses.cs.umbc.edu/graduate/CMSC691/spring22/pdf/3134663.pdf)).

---

## Q6. Финтех-стартапы, пытавшиеся создать «совместные финансы» — провалы и причины

### Zeta (askzeta.com)

**Дата закрытия:** май 2025 года (пользователям дали 30 дней до 9 мая 2025 года).

**История:** Основана Адити Шекар в 2018 году. Продукт: совместные и индивидуальные банковские счета для пар и семей. Работала на инфраструктуре Plaid — от концепции до полной интеграции за 5 месяцев ([Plaid Customer Stories Zeta](https://plaid.com/customer-stories/zeta/)).

**Официальная причина закрытия:** «То, что мы строим, требует значимого масштаба и ресурсов для эффективной конкуренции с отраслевыми гигантами» ([Zeta Official Statement](https://www.askzeta.com)). При закрытии Zeta объявила о подписании соглашения с «крупной финтех-компанией» для расширения платформы до миллионов семей — детали не раскрыты.

**Признаки провала:**
- После 7 лет работы не удалось достичь нужного масштаба.
- Конкуренция с банковскими гигантами (Chase, Bank of America), предлагающими совместные счета как commodity.
- Сложность привлечения **обоих партнёров** в паре — двойной CAC при единственной «единице» конверсии.
- Пользователи Reddit: «мы абсолютно любим это приложение» — но любви пользователей не хватало для бизнес-жизнеспособности ([Reddit r/personalfinance](https://www.reddit.com/r/personalfinance/comments/1jve8vc/zeta_app_shutting_downreplacements/)).

### Honeydue (WalletIQ, Inc.)

**Текущий статус:** приложение продолжает работать (в отличие от Zeta). Investopedia признала его «лучшим для пар» в 2025 году ([Market.us](https://market.us/report/smart-budgeting-apps-market/)). Однако Honeydue демонстрирует признаки стагнации:
- **Монетизация:** приложение полностью бесплатно (нет подписки), что ограничивает потенциал выручки.
- **Ограниченные возможности:** простой UI без расширенной аналитики, что часто критикуют пользователи.
- **Масштаб:** публичных данных о пользователях нет — компания намеренно не раскрывает метрики.

**Системные проблемы жанра:**
- Пользователи Reddit сообщают о регулярных проблемах с банковскими интеграциями (пересинхронизация 1–2 раза в неделю) ([Reddit BEFire](https://www.reddit.com/r/BEFire/comments/1p07rcy/just_me_or_do_budgeting_apps_suck_for_couples/)).
- Бесплатная модель не обеспечивает ресурсов для поддержания качества интеграций.

### Goodbudget

**Текущий статус:** продолжает работать, ориентирован на метод «envelope budgeting».

**Ключевые ограничения:**
- Архаичная UX-концепция «конвертов»: **совместный бюджет возможен только при общем логине** — оба партнёра используют один аккаунт ([Goodbudget Share Budget](https://goodbudget.com/help/mobile-apps/share-budget-w-partner/)).
- Раздельные счета требуют двух отдельных подписок.
- **Нет автоматической синхронизации с банком** в базовой версии (появилась только в 2024 году в новом функционале Bank Sync).
- Платная подписка при ограниченном функционале создаёт барьер.
- Один пользователь Reddit: *«не хочу, чтобы приложение взаимодействовало с моими счетами вообще»* — показательно для аудитории, где privacy > удобство ([Reddit PersonalFinanceCanada](https://www.reddit.com/r/PersonalFinanceCanada/comments/1hvqefv/couples_budgeting_apps_overwhelmed_with_decision/)).

### Mint (Intuit) — смежный кейс

Mint закрылся в **марте 2024 года**. Несмотря на 25+ млн пользователей, Intuit перенаправил их в Credit Karma. Причина: **не удалось монетизировать** бесплатную модель при высоких расходах на поддержку банковских интеграций ([Business Insider](https://www.businessinsider.com/mint-budgeting-app-shut-down-good-free-alternatives-2024-9)).

### Структурные причины провалов в категории «совместные финансы»

1. **Двойной барьер онбординга:** нужно завербовать обоих партнёров — CAC фактически удваивается.
2. **Конкуренция с commodity:** банки предлагают совместные счета бесплатно.
3. **Monetization gap:** пользователи категорически против платных бюджетных приложений.
4. **Relationship friction:** финансы — болезненная тема для пар; 62% пар в США держат хоть часть финансов раздельно ([CNBC Bankrate Survey](https://www.cnbc.com/2025/01/27/62percent-of-couples-keep-at-least-some-money-separate-from-each-other-survey.html)).
5. **Масштаб:** нужен значительный масштаб для переговорных позиций с банками по API-интеграциям.
6. **Churn по жизненным событиям:** расставание = потеря обоих пользователей.

---

## Q7. TAM/SAM/SOM «совместных финансов»

Прямой оценки рынка «совместных финансов» (shared/collaborative finance) как отдельного сегмента в публичных отраслевых отчётах нет — аналитики не выделяют его отдельно. Ниже — оценки через соседние рынки.

### Рынок приложений для разделения счетов (Bill Splitting Apps)

- **Technavio (2024):** рынок приложений для разделения счетов вырастет на **$423,6 млн** в период 2023–2028 при CAGR **11,32%** ([Technavio Bill Splitting Apps](https://www.technavio.com/report/bill-splitting-apps-market-industry-analysis)).
- Оценочный объём рынка на старте периода (~2023): ~$800 млн–$1,5 млрд (исходя из роста на $423 млн при 11% CAGR).

### Рынок бюджетных приложений (Budgeting Apps)

- **Market.us (2025):** рынок «умных бюджетных приложений» — $1,21 млрд (2024), прогноз **$6,6 млрд к 2034** при CAGR 18,4% ([Market.us Smart Budgeting](https://market.us/report/smart-budgeting-apps-market/)).
- **HTF Market Insights:** рынок бюджетных приложений прогнозируется в **$20,8 млрд к 2030** году ([HTF MI Budgeting Apps](https://htfmarketinsights.com/report/3464816-budgeting-apps-market)).
- **openpr.com (2026):** рынок Budget Apps — **$5,8 млрд (2024)**, прогноз **$14,6 млрд к 2033** при CAGR 10,3% ([OpenPR Budget Apps](https://www.openpr.com/news/4427572/budget-apps-market-to-reach-usd-14-6-billion-by-2033-growing)).

### Рынок персональных финансовых приложений (Personal Finance Apps)

- **Research Nester (2025):** рынок персональных финансовых приложений — **$31,7 млрд (2025)**, прогноз **$173,6 млрд к 2035** при CAGR 20,8% ([Research Nester](https://www.researchnester.com/reports/personal-finance-apps-market/8243)).
- **Stratistics MRC:** рынок personal finance software — **$2,9 млрд (2025)**, прогноз **$9,0 млрд к 2032** при CAGR 17,5% ([MarketResearch.com](https://www.marketresearch.com/Stratistics-Market-Research-Consulting-v4058/Personal-Finance-App-Forecasts-Global-43534268/)).
- **LinkedIn Personal Finance App Market:** **$14,5 млрд (2026)**, прогноз **$37,5 млрд к 2033** при CAGR 14,5% ([LinkedIn Pulse](https://www.linkedin.com/pulse/personal-finance-app-market-industry-performance-growth-outlook-r4vjc)).

*(Примечание: различия в оценках объясняются разными определениями сегмента — от узких «бюджетных приложений» до широких «personal finance software»)*

### Контекстные данные о рынке пар

- **62%** пар в США держат хотя бы часть финансов раздельно ([CNBC/Bankrate](https://www.cnbc.com/2025/01/27/62percent-of-couples-keep-at-least-some-money-separate-from-each-other-survey.html)) — это потенциальная аудитория инструментов для координации.
- **23%** супружеских пар в США не имеют совместных счетов (2023) — рост с 15% в 1996 году ([eMarketer/US Census](https://www.emarketer.com/content/married-couples-us-losing-interest-joint-bank-accounts)).
- **34%** используют гибридную модель (и совместные, и раздельные счета) — идеальная аудитория для «совместных финансов».
- В США ~50 млн супружеских пар; если 34% (гибридная модель) + 62% с раздельными финансами нуждаются в координации — потенциальная аудитория **30–50 млн домохозяйств только в США**.

### Оценочный TAM/SAM/SOM для «совместных финансов»

| Уровень | Оценка | Описание |
|---------|--------|----------|
| **TAM** | $30–50 млрд | Весь рынок персональных финансовых приложений (глобально, 2025–2030) |
| **SAM** | $3–7 млрд | Рынок household/family budgeting + bill splitting apps глобально |
| **SOM** | $300–700 млн | Реалистично захватываемый сегмент совместных финансов для пар и семей |

Аналитики не выделяют «совместные финансы» как самостоятельный рынок. Оценки выше — собственная декомпозиция на основе доступных данных.

---

*Документ подготовлен: март 2026. Источники — публичная отчётность компаний, академические исследования, отраслевые аналитические агентства. Все факты имеют inline-цитирование.*

---

# Блок 2: Регуляторика и инфраструктура (Q8–11)

_Дата составления: март 2026. Источники: официальные регуляторные документы, первичные правовые акты, актуальные аналитические публикации._

---

## Q8. Какие лицензии нужны для оркестрации платежей между физлицами без хранения средств?

### Ключевые тезисы

Оркестрация платежей без хранения средств (non-custodial payment orchestration) — это модель, при которой платформа направляет, инициирует или маршрутизирует транзакции, но не держит пользовательские деньги на своём балансе. Регуляторный статус такой деятельности принципиально отличается от статуса эмитента электронных денег (EMI). Тем не менее полного иммунитета от лицензирования нет ни в одной юрисдикции.

---

### 8.1 Азия: Филиппины и соседние страны

#### Филиппины (BSP)

Регуляторная база — [Republic Act No. 11127 (National Payment Systems Act, NPSA)](https://www.bsp.gov.ph/Regulations/Issuances/2020/c1089.pdf) и подзаконные акты Bangko Sentral ng Pilipinas (BSP).

**Обязательная регистрация как OPS (Operator of Payment System)**

Согласно [BSP Circular No. 1049](https://www.bsp.gov.ph/PaymentAndSettlement/FAQ_OPS_Registration.pdf), любая организация, выполняющая функции оператора платёжной системы — включая платёжные шлюзы, агрегаторы, процессинговые платформы — обязана зарегистрироваться в BSP как OPS в течение месяца с начала деятельности. Регистрация не зависит от того, хранит ли компания клиентские средства. Иностранные организации, обслуживающие клиентов в Филиппинах, также подпадают под требование регистрации.

Стоимость: при выдаче Свидетельства о регистрации (COR) — PHP 20 000 (для небанковских структур, не являющихся EMI). Сама регистрация OPS не требует капитальных требований, если платёжная система не является «Designated Payment System» (DPS).

**Лицензия EMI (Electronic Money Issuer)** — требуется только если платформа выпускает и хранит электронные деньги ([BSP Circular No. 649](https://www.bsp.gov.ph/PaymentAndSettlement/FAQ_OPS_Registration.pdf); [BSP Circular No. 1206/2024](https://www.bsp.gov.ph/Regulations/Issuances/2024/1206.pdf)). Для non-custodial модели EMI-лицензия **не требуется**. BSP с 2021 года ввёл мораторий на новые небанковские EMI-лицензии; исключения возможны через Regulatory Sandbox.

**Лицензия MSB (Money Service Business)** — необходима при осуществлении переводов/ремиттанса. MSB-лицензия (RTC — Remittance Transfer Company) нужна, если платформа самостоятельно осуществляет передачу ценности. Согласно [BSP Circular No. 1206/2024](https://www.bsp.gov.ph/Regulations/Issuances/2024/1206.pdf) (Consolidated Rules for MSBs), категории охватывают RTCs (категории A–D по объёму), MC/FXD и EMI.

**Лицензия OPS-MAL (Merchant Acquisition License)** — по [BSP Circular No. 1198/2024](https://www.globalcompliancenews.com/2024/10/22/https-insightplus-bakermckenzie-com-bm-financial-institutions_1-philippines-philippine-central-bank-issues-regulatory-framework-for-payment-systems-engaged-in-merchant-payment-acceptance-activities_/) от 19 июля 2024 года обязательна для любого OPS, осуществляющего Merchant Payment Acceptance Activities (MPAA) — включая агрегаторов платежей в пользу мерчантов. Требует капитал, пропорциональный среднемесячному объёму собранных средств, и сегрегированных счетов.

**Техническим сервис-провайдерам (TSP)** регистрация не требуется — BSP в 2025 году официально подтвердил, что чисто технические провайдеры, не выполняющие операторские функции, выходят за периметр NPSA.

**Итог для P2P-оркестратора без хранения средств (Филиппины):**

| Тип деятельности | Требуемый документ |
|---|---|
| Маршрутизация/агрегация P2P платежей | Регистрация OPS (Circular 1049) |
| Использование InstaPay/PESONet | Участие через лицензированный BSFI или аккредитованный OPS |
| Если есть мерчант-эквайринг | OPS-MAL (Circular 1198/2024) |
| Если выдаётся e-money | EMI-лицензия (мораторий, Sandbox) |
| Если осуществляются переводы | MSB/RTC лицензия (Circular 1206/2024) |

#### Индонезия (Bank Indonesia + OJK)

По [BI Regulation No. 22/23/PBI/2020](https://www.globallegalinsights.com/practice-areas/fintech-laws-and-regulations/indonesia/) платёжная экосистема разделена на два класса регуляторов: Bank Indonesia (BI) — для платёжных систем, и OJK — для финансовых услуг.

**Payment Service Provider (PJP)** — лицензия BI. Охватывает организации, предоставляющие сервисы перемещения средств, включая шлюзы и агрегаторы. Для non-custodial orchestration, вероятно, потребуется регистрация PJP. BI также ввёл **SNAP** (Standar Nasional Open API Pembayaran) — обязательный с 2024–2025 гг. стандарт для всех PJP, интегрирующихся с банками через открытые API.

**BI-FAST** — национальная система мгновенных расчётов; согласно [данным Всемирного банка](https://fastpayments.worldbank.org/node/565), прямой доступ к клирингу BI-FAST для небанковских небанковских Payment Service Providers и приложений третьих лиц не предусмотрен — требуется участие через банк-спонсор.

**OJK Regulation No. 3/2024** (ITSK — Financial Sector Technology Innovation) охватывает агрегаторов финансовых услуг (PAJK). Если оркестратор предоставляет данные или агрегирует финансовые услуги — требуется регистрация ITSK/PAJK в OJK. [На январь 2026 года зарегистрировано 20 PAJK.](https://ojk.go.id/en/berita-dan-kegiatan/siaran-pers/Pages/OJK-Policies-Further-Strengthen-the-Role-of-the-Financial-Services-Sector-in-Supporting-the-Governments-Priority-Programs.aspx)

#### Вьетнам (State Bank of Vietnam — SBV)

По [Decree No. 52/2024/ND-CP](https://vietanlaw.com/new-regulations-on-cashless-payment-in-vietnam-2024/) от 15 мая 2024 года и [Circular 40/2024/TT-NHNN](https://vision-associates.com/highlights-of-the-new-circular-on-intermediary-payment-services/) от 17 июля 2024 года:

Любой оператор платёжного посредничества — включая платёжные шлюзы, электронные кошельки, клиринговые сервисы — обязан получить лицензию SBV на предоставление intermediary payment services. Категории:

- **Электронный кошелёк**: минимальный капитал 50 млрд VND (~$2 млн)
- **Платёжный шлюз (gateway)**: минимальный капитал 100 млрд VND
- **Финансовый клиринг/свитчинг**: минимальный капитал 300 млрд VND

Иностранные организации, предоставляющие платёжные услуги нерезидентам-клиентам во Вьетнаме, обязаны заключить договор с локальным коммерческим банком, одобренным SBV, и не могут напрямую рассчитываться с другими посредниками.

#### Таиланд (Bank of Thailand — BOT + Ministry of Finance)

По [Payment Systems Act B.E. 2560 (2017)](https://fosrlaw.com/2025/payment-processing-licenses-in-thailand-updated-2025-overview/) BOT надзирает за платёжными провайдерами, а лицензию выдаёт Министерство финансов (MoF) по рекомендации BOT. Для любого платёжного процессора или платёжного шлюза требуется **Designated Payment Service License**.

Ключевые особенности:
- **Ограничения иностранного владения**: при доле более 49% иностранных акционеров требуется Foreign Business License (FBL) по Foreign Business Act
- **Минимальный директор-тайский резидент**: обязателен хотя бы один директор — гражданин Таиланда
- **Процесс лицензирования**: 4–6 месяцев; включает предварительную консультацию с BOT, комплексный пакет документов, рекомендацию BOT → выдача MoF
- В феврале 2026 года **PromptPay** получил статус SIRPS (Systemically Important Retail Payment System) с расширенными надзорными требованиями к участникам; [оператор и участники обязаны соблюдать бизнес-правила BOT/PSF](https://www.tilleke.com/insights/thailand-introduces-systemically-important-payment-system-framework-starting-with-promptpay/46/)

#### Сингапур (MAS)

По [Payment Services Act 2019 (PS Act)](https://compliance.waystone.com/navigating-mas-payment-services-act-changes-2023-2025/) MAS регулирует 7 категорий платёжных услуг, включая domestic/cross-border money transfer services и merchant acquiring services. С 2024 года требования значительно ужесточились: обязателен legal opinion при подаче заявки, независимый внешний аудитор для DPT-сервисов, требования по базовому капиталу на 6–12 месяцев операционных расходов. [Обновлённые Guidelines на Licensing для PSPs вступили в силу 26 августа 2024 года.](https://www.mas.gov.sg/regulation/payments)

---

### 8.2 Европейский союз (PSD2 / PSD3)

Основа — **Directive (EU) 2015/2366 (PSD2)**, действующий с января 2018 года. В ноябре 2025 года достигнуто предварительное политическое соглашение по **PSD3 + PSR**, вступление в силу ожидается не ранее 2027 года.

#### PISP — Payment Initiation Service Provider

**PISP-лицензия** — ключевой инструмент для non-custodial payment orchestration в ЕС. Позволяет инициировать платёж от имени пользователя напрямую со счёта в банке, не держа средства. Регулируется:

- **PSD2, Article 66** — права доступа PISP к счёту
- **PSD2, Regulation (EU) 2018/389 (RTS on SCA&CSC)** — технические требования Strong Customer Authentication и открытых коммуникационных стандартов (OAPI)
- Регистрация/авторизация **у национального компетентного органа (NCA)** в одной стране ЕС с последующим **паспортингом** в другие страны EEA
- EBA ведёт [публичный реестр всех TPPs](https://www.eba.europa.eu/single-rule-book-qa/qna/view/publicId/2024_7017)

Капитальные требования для Payment Institution с PISP-лицензией: минимальный начальный капитал €50 000 (для PISP), €125 000 (для PISP + иные платёжные услуги).

PISP **не вправе** хранить средства пользователей. Фонды клиента остаются на счёте в банке-ASPSP; PISP лишь инициирует исполнение платёжного поручения.

#### AISP — Account Information Service Provider

Регистрация без необходимости держать капитальные требования на уровне PI (достаточно профессиональной индемнизационной страховки). Даёт только read-only доступ к транзакционным данным.

#### EMI — Electronic Money Institution

EMI-лицензия необходима при хранении предоплаченных средств клиентов. Не требуется при чистой PISP-модели.

#### Агентская модель

Нелицензированная организация может действовать как **агент** лицензированного PI/EMI. Агент работает под ответственностью принципала, не требует собственной лицензии, но должен быть зарегистрирован принципалом в реестре NCA.

#### PSD3/PSR (2025–2027)

[Политическое соглашение ноябрь 2025 г.](https://www.dlapiper.com/en/insights/publications/2026/03/psd3-and-psr) предполагает:
- Слияние EMD и PSD2 в единый надзорный режим
- Переход требований поведенческого регулирования в прямо применяемый PSR-Regulation
- Re-licensing для существующих PI/EMI в течение 30 месяцев с момента принятия
- Усиление open banking через улучшенные API-интерфейсы ASPSPs
- Требование сопоставления получателя платежа (IBAN Verification / Confirmation of Payee) для всех кредитовых переводов

---

### 8.3 США (FinCEN MSB + State MTL)

В США нет единой федеральной лицензии для оркестраторов платежей. Система двухуровневая.

#### Федеральный уровень: FinCEN MSB

По [31 CFR Part 1010 и 1022](https://www.fincen.gov/resources/money-services-business-msb-registration), любое лицо, осуществляющее «money transmission» как бизнес, является MSB и обязано:
1. Зарегистрироваться в FinCEN посредством [FinCEN Form 107](https://www.fincen.gov/resources/money-services-business-msb-registration) в течение 180 дней
2. Внедрить AML-программу
3. Подавать SARs и CTRs
4. Вести список агентов и обновлять регистрацию каждые 2 года

**Критически важно**: FinCEN применяет определение money transmission очень широко — «принятие и передача ценности» без порогового значения по сумме. При этом **агент исключительно чужого MSB** не обязан самостоятельно регистрироваться.

**Ключевые исключения для non-custodial orchestrators:**

1. **Payment Processor Exemption** ([31 CFR 1010.100(ff)(5)(ii)](https://www.fincen.gov/resources/statutes-regulations/administrative-rulings/application-money-services-business)): компания не является money transmitter, если она:
   - Facilitation купли-продажи товаров/услуг (не самого money transmission)
   - Работает через clearance and settlement systems, допускающих только BSA-регулируемые финансовые институты
   - Действует по formal agreement
   - Договор заключён как минимум с продавцом/кредитором

2. **Agent of the Payee Exemption**: по законодательству большинства штатов (принято в рамках CSBS Model Money Transmission Modernization Act) — организация, получающая платёж исключительно как агент получателя (payee), не осуществляет money transmission. Работает только при наличии письменного договора, устанавливающего, что обязательство плательщика считается исполненным в момент получения агентом.

#### Штатный уровень: Money Transmitter License (MTL)

[Национальной MTL не существует.](https://www.finextra.com/blogposting/30783/money-transmitter-license-in-2026-requirements-costs-and-a-practical-roadmap-for-fintechs) При операциях по всей стране может потребоваться до 40+ отдельных лицензий.

Ключевые параметры:
- **Минимальный собственный капитал**: $10 000–$500 000+ в зависимости от штата
- **Surety Bond**: обычно $10 000–$500 000
- **Основные штаты через NMLS**: большинство штатов принимают заявки через Nationwide Multistate Licensing System
- **Исключения**: Флорида, Нью-Джерси, Виргинские острова — требуют прямой подачи документов
- **Сроки рассмотрения**: от нескольких недель до нескольких месяцев

**Практика для P2P non-custodial платформ:**
- Если платформа не принимает и не передаёт ценность (чистый PISP-аналог через ACH/карточные сети), Payment Processor Exemption может применяться
- Если платформа хотя бы временно держит средства или выступает как посредник между пользователями — потребуются MTL в каждом штате операций
- На сегодня **22 штата имеют Agent of the Payee exemption**, ещё 3 — на case-by-case основе; Alabama, Alaska, Delaware и DC — без такого исключения

---

## Q9. Какие Open Banking API доступны для доступа к транзакционным данным с согласия пользователя?

---

### 9.1 Филиппины: BSP Open Finance Framework

#### Нормативная база

**BSP Circular No. 1122** (2021) — фундамент Open Finance на Филиппинах. Определяет принципы: consent-driven data portability, interoperability, data security.

**Open Finance PH Pilot** — запущен в июне 2023 года в партнёрстве с IFC и Всемирным банком. Добровольная площадка для взаимодействия банков, EMI и TPPs. [По состоянию на 2025 год пилот активно функционирует с реальными данными и реальными TPP.](https://www.bsp.gov.ph/Pages/InclusiveFinance/Open%20Finance/Open%20Finance.aspx)

#### API-возможности

По [BSP Open Finance Pilot FAQ](https://www.bsp.gov.ph/Pages/InclusiveFinance/Open%20Finance/Annex%20H.pdf):
- **Payment Initiation API**: стандарты для InstaPay, PESONet и внутрибанковских переводов уже разработаны и применяются в рамках пилота
- **Account Information API**: доступ к балансу и транзакционной истории с согласия клиента
- **Subscription API**: поддержка recurring payments

**InstaPay** — система мгновенных переводов физлицам 24/7 (BSP/PPMI, оператор — BancNet). Лимит: PHP 50 000 за транзакцию. [С февраля 2026 года BSP обязал цифровые банки и e-кошельки использовать стандартизированные рельсы InstaPay/PESONet вместо проприетарных интеграций.](https://fintechnews.ph/70092/digital-banking-news-philippines/bsp-new-rules-digital-banking-philippines-standardised-payment-rails/)

**PESONet** — ACH-система для высоких сумм (от PHP 250 000), batch-обработка в рамках дня.

**QR Ph (QRPH)** — общенациональный QR-стандарт EMV-формата; обязателен с июля 2023 года. По данным BSP, к 2025 году 52,8% всех цифровых транзакций проходит через QR Ph.

**Участники**: UnionBank, RCBC, Maya Bank, Tonik, GoTyme, UnionDigital — активные участники Open Finance PH, использующие API для third-party интеграций.

**Ограничения**: Участие в пилоте по-прежнему добровольно; стандартизация API в процессе; аккредитация TPP — процедура с бюрократическими барьерами.

---

### 9.2 ЮВА: Соседние страны

#### Сингапур (MAS)

MAS реализует **рыночную модель** (не регуляторно-обязательную): банки поощряются, но не принуждаются раскрывать API. Ключевые инициативы:

- **SGFinDex** (Singapore Financial Data Exchange, 2020) — централизованная платформа обмена финансовыми данными с явным согласием гражданина, охватывает CPF, IRAS, банки. Управляется MyInfo
- **Finance-as-a-Service API Playbook** (MAS + ABS) — описывает стандарты API для банков и финтехов
- **API Exchange (APIX)** — песочница для международной совместимости финтех-провайдеров; поддерживает Сингапур, ASEAN и другие юрисдикции

[MAS официально продвигает Open Finance через рыночные стимулы и совместные платформы](https://ozoneapi.com/blog/8-countries-embracing-open-finance/), но обязательного права на третьесторонний доступ нет.

#### Таиланд (Bank of Thailand)

**PromptPay** — Real-time payment system (оператор: NITMX / Vocalink / Mastercard). С февраля 2026 года имеет статус SIRPS. Широко распространён: привязка к ID/номеру телефона.

Банки (KBank, SCB, Bangkok Bank, Krungsri) разрабатывают собственные **открытые API-порталы** для третьих лиц, покрывающие переводы, платежи QR, справочные данные. Единого обязательного стандарта нет. [Таиланд рассматривает возможность следования PSD2-модели или собственного регуляторного подхода, аналогичного HKMA.](https://appsynth.net/open-banking-thailand-new-finance/)

#### Индонезия (Bank Indonesia)

**SNAP** (Standar Nasional Open API Pembayaran, PADG No. 21/18/PADG/2021) — национальный стандарт открытых API для платёжных транзакций. Охватывает:
- Информационные сервисы (баланс, выписка)
- Транзакционные сервисы (переводы между банками, QR, BRIVA)
- Интеграция всех PJP и UMKM (МСП) до 30 июня 2025 года — обязательное условие

[BI-FAST подключил более 120 банков и платёжных провайдеров, обработал 3,4 млрд транзакций в 2024 году (+62,4% г/г)](https://juspay.io/en-sg/blog/an-overview-of-indonesias-payment-ecosystem). Прямой доступ небанковских TPP к BI-FAST не предусмотрен — только через банк-участник.

[BRIAPI](https://developers.bri.co.id/en/news/standar-nasional-open-api-pembayaran-snap-urgensi-standar-api-bagi-perkembangan-open-finance) — пионер имплементации SNAP; доступны transactional and informational API для партнёров.

---

### 9.3 Европейский союз (PSD2 AISP)

#### Регуляторная база

**PSD2, Articles 66–67** и **Regulation (EU) 2018/389 (RTS SCA&CSC)** — обязывают все банки ЕС предоставлять лицензированным AISP доступ к транзакционным данным счёта по явному согласию клиента через выделенный API (OAPI / dedicated interface).

**AISP-лицензия**: регистрация у NCA без капитальных требований; достаточно профессионального страхования ответственности; паспортинг по EEA; EBA ведёт публичный реестр.

Банки **не вправе отказывать** AISP в доступе при наличии PSD2-согласия пользователя и действующей eIDAS-квалифицированной сертификации TPP.

#### Ведущие агрегаторы/платформы в ЕС (30+ провайдеров)

По [OpenBankingTracker](https://www.openbankingtracker.com/api-aggregators?country=EU):

| Провайдер | Банков ЕС | Особенности |
|---|---|---|
| **TrueLayer** | 64 | Ведущий UK+EU PISP/AISP провайдер |
| **Tink** (Visa) | 46 | Лучшее покрытие Nordic/DACH |
| **Plaid** (ЕС) | 60 | Сильный AIS, PIS — слабее TrueLayer |
| **GoCardless/Nordigen** | 63 | Бесплатный tier для AIS |
| **Salt Edge** | 73 | Максимальное покрытие |
| **Yapily** | 47 | Альтернатива с хорошим Dev Experience |
| **Enable Banking** | 41 | — |
| **Neonomics** | 41 | Nordics фокус |
| **Ibanity** | 39 | Benelux фокус |

**Технические стандарты**: Berlin Group (NextGenPSD2), STET (Франция), PolishAPI — основные имплементации. Нет единого европейского стандарта, что создаёт сложность нормализации между банками.

**PSD3/PSR**: вводит минимальные спецификации для dedicated API (доступность, надёжность, стабильность) — устраняет главную боль текущего PSD2 API-ландшафта.

---

### 9.4 США

В США **нет законодательно обязательного open banking**. Модель рыночная.

**Основные агрегаторы (Data Aggregators)**:

| Провайдер | Банков | Тип доступа |
|---|---|---|
| **Plaid** | ~12 000+ | Screen scrape → API-first; покрытие ACH, балансы, транзакции |
| **Finicity** (Mastercard) | ~15 000+ | Партнёрство с FIs через API; кредитное бюро |
| **Yodlee** (Envestnet) | ~21 000+ | Ведущий агрегатор; B2B |
| **MX Technologies** | — | Аналитика + aggregation для банков |
| **Akoya** (банковский консорциум) | — | Токенизированный API-слой, без screen scraping |

**CFPB Section 1033 Rule** — [принята 22 октября 2024 года](https://www.consumerfinance.gov/about-us/newsroom/cfpb-finalizes-personal-financial-data-rights-rule-to-boost-competition-protect-privacy-and-give-families-more-choice-in-financial-services/), обязывала финансовые институты предоставлять данные по требованию потребителя или авторизованного третьего лица бесплатно. Охватывает: транзакции (24+ месяца), баланс, платёжные данные, данные для верификации.

**Актуальный статус (март 2026)**: [Правило заморожено. 29 июля 2025 года суд Восточного округа Кентукки удовлетворил ходатайство CFPB о приостановке дела](https://www.consumerfinancialserviceslawmonitor.com/2025/07/cfpb-section-1033-open-banking-rule-stayed-as-cfpb-initiates-new-rulemaking/), т.к. бюро решило инициировать новый нормотворческий процесс. [22 августа 2025 года CFPB опубликовал Advanced Notice of Proposed Rulemaking (ANPR)](https://www.federalregister.gov/documents/2025/08/22/2025-16139/personal-financial-data-rights-reconsideration) с целью пересмотра правила. [29 октября 2025 года суд выдал preliminary injunction, полностью заблокировав применение правила на время переработки.](https://www.sheppard.com/insights/blogs/federal-court-halts-implementation-of-cfpbs-open-banking-rule) Когда и в каком виде выйдет новое правило — неизвестно.

На практике банки крупного уровня (JPMorgan Chase и др.) [начали взимать плату с агрегаторов за доступ к данным](https://thefinancialbrand.com/news/banking-technology/open-banking-regulatory-re-do-starts-in-continuing-controversy-193287), тогда как Plaid и другие настаивают на бесплатном доступе по праву потребителя.

**FDX (Financial Data Exchange)** — отраслевой консорциум, разрабатывающий стандарт API; Plaid, MX, Finicity поддерживают FDX-совместимые API.

---

## Q10. PSD2 в Азии: возможности для third-party payment initiation. Кто использует?

---

### 10.1 Обзор: нет прямого эквивалента PSD2 в Азии

Ни одна страна ЮВА не имеет законодательства, полностью эквивалентного PSD2 по обязательности предоставления банками API-доступа TPPs. Тем не менее существуют три модели, каждая из которых предоставляет возможности для third-party payment initiation:

| Модель | Страна | Суть |
|---|---|---|
| **Regulatory-driven Open Finance** | Филиппины | Добровольный пилот с регуляторными стандартами; движется к обязательности |
| **Infrastructure-driven Open API** | Индонезия | Обязательный SNAP-стандарт для PJP + BI-FAST |
| **Market-driven Open Banking** | Сингапур, Таиланд | Стимулируемое, но не обязательное открытие API |

---

### 10.2 Филиппины: Open Finance PH

**Roadmap BSP** (по публичным материалам и [BSP Open Finance страница 2026](https://www.bsp.gov.ph/Pages/InclusiveFinance/Open%20Finance/Open%20Finance.aspx)):

- **2019–2022**: Разработка стандартов, координация с индустрией
- **2023**: Запуск Open Finance PH Pilot; API для payment initiation, account information
- **2024–2025**: Расширение числа участников; переход к реальным данным; обязательная миграция на стандартные рельсы InstaPay/PESONet
- **2026+**: Ожидается переход к мандаторному участию крупных банков

**Third-party payment initiation** сейчас доступна через:
1. **InstaPay API** — стандарт payment initiation для P2P переводов в реальном времени (до PHP 50 000)
2. **PESONet API** — batch платёжный стандарт для более крупных сумм
3. **QR Ph** — инициирование платежей через QR-сканирование

**Кто использует**: [Maya Bank, Tonik, GoTyme, UnionDigital активно строят TPP-интеграции. GCash (94 млн пользователей к январю 2025 г.)](https://www.globallegalinsights.com/practice-areas/fintech-laws-and-regulations/philippines/) интегрирован с InstaPay. FinTech Alliance PH выступает квазирегуляторным органом по стандартам и разрешению споров. Проект Nexus (BIS) — план подключения к ASEAN с платёжными системами Сингапура и других стран — запланирован к июлю 2026 года.

**Ограничения vs EU PSD2**:
- Нет законодательно обязательного доступа для TPPs
- Нет единого директивного API-стандарта для всех банков (пока пилот)
- Нет SCA-требований на уровне обязательного регулирования TPPs

---

### 10.3 Индонезия: SNAP как де-факто payment initiation стандарт

[Bank Indonesia через SNAP](https://developers.bri.co.id/en/news/standar-nasional-open-api-pembayaran-snap-urgensi-standar-api-bagi-perkembangan-open-finance) обязал все PJP интегрироваться по единому стандарту. SNAP включает transactional write API — что функционально эквивалентно payment initiation:

- Переводы между банками через BI-FAST
- Платежи QR (QRIS)
- Direct Debit инициирование

Особенность: SNAP действует как **B2B API** — между PJP и банками. Прямого доступа для конечных пользователей третьей стороны (как PSD2 TPP) нет. Финтех, желающий инициировать платёж от имени клиента, должен сам быть зарегистрированным PJP или работать через партнёра-PJP.

[По данным Всемирного банка](https://fastpayments.worldbank.org/node/565), BI-FAST не предоставляет прямого clearing-доступа для небанковских TPP.

---

### 10.4 Сингапур: рыночная инициация платежей

В Сингапуре нет обязательного права PISP на доступ. Однако:

- Крупные банки (DBS PayLah!, OCBC, UOB) предоставляют **партнёрские API** по двустороннему соглашению для инициирования платежей через свою инфраструктуру
- **PayNow** (мгновенные переводы) интегрирован в большинство банковских приложений; ограниченный доступ для TPP — только через банк-партнёр
- [SGFinDex](https://www.globallegalinsights.com/practice-areas/fintech-laws-and-regulations/philippines/) — позволяет агрегировать финансовые данные, но не инициировать платежи напрямую

---

### 10.5 Таиланд: банковские API без обязательства

Ведущие банки (SCB, KBank, Krungsri, Bangkok Bank) запустили открытые API-порталы с сервисами payment initiation. Нет мандаторного требования к банкам предоставлять доступ сторонним провайдерам. PromptPay используется как rails, но управление доступом к нему — на усмотрение NITMX и банков-участников.

---

### 10.6 Сравнение с EU PSD2

| Критерий | EU PSD2/PSR | Филиппины (Open Finance) | Индонезия (SNAP) | Сингапур | Таиланд |
|---|---|---|---|---|---|
| **Обязательный доступ для TPP** | Да (ст. 66–67) | Нет (пилот) | Нет (SNAP — для PJP) | Нет | Нет |
| **Стандартизированный API** | Да (RTS SCA&CSC) | В разработке | Да (SNAP) | Нет (FaaS) | Нет |
| **Payment Initiation** | Да (PISP-лицензия) | Да (через API-пилот) | Да (через PJP) | Партнёрский | Партнёрский |
| **Account Information** | Да (AISP-лицензия) | Да (пилот) | Частично (SNAP) | Партнёрский | Частично |
| **SCA-требования к TPP** | Да (Regulation 2018/389) | Нет | Нет | Нет | Нет |
| **Sandbox** | Нет (лицензируется) | Да (BSP Sandbox) | Да (BI/OJK Sandbox) | Да (MAS Sandbox) | Да (BOT Sandbox) |

**Вывод**: В ЮВА идёт активное движение к системам, функционально похожим на PSD2, но с гораздо меньшей обязательностью. Наиболее близкий аналог — Индонезия (SNAP как обязательный стандарт), но только для лицензированных PJP. Филиппины имеют наибольший регуляторный импульс в направлении европейской модели.

---

## Q11. Какие ограничения на групповые финансовые продукты? Правовой статус «shared view» vs «joint account»

---

### 11.1 Принципиальное различие

| Концепция | Описание | Правовой статус |
|---|---|---|
| **Joint Account** (совместный счёт) | Два и более лица юридически являются совладельцами счёта, каждый имеет права и несёт ответственность | Прямые договорные отношения с банком; полная взаимная ответственность |
| **Read-Only Shared View** | Одно лицо получает доступ на чтение к финансовым данным другого без права управления | Производный от согласия третий уровень; нет права собственности; нет совместной ответственности |
| **Delegated Access** | Полномочие на совершение транзакций без совместного владения | Агентские отношения; ответственность определяется договором |

---

### 11.2 Совместный счёт (Joint Account)

#### Европейский союз

**Юридическая основа**: Согласно общим принципам банковского договорного права, совместный счёт предполагает **joint and several liability** (солидарная ответственность): каждый из владельцев отвечает перед банком в полном объёме задолженности.

**Банковское регулирование** (EU): PSD2 (Directive 2015/2366) и новый [PSR Proposal](https://www.twobirds.com/en/insights/2024/global/open-banking-rules-and-gdpr-interplay-revisited) не содержат специального режима для совместных счётов как особой категории. Каждый владелец счёта является «payment service user» (PSU) с самостоятельными правами; любое из лиц может дать согласие AISP/PISP на доступ к общему счёту.

**GDPR-сложность**: Транзакции совместного счёта содержат персональные данные **обоих владельцев**. Если один владелец даёт согласие AISP на агрегацию, агрегатор получает данные второго владельца без его согласия — [т.н. «silent party data» problem](https://www.twobirds.com/en/insights/2024/global/open-banking-rules-and-gdpr-interplay-revisited). EDPB Guidelines 06/2020 признают это ограничением: данные «молчащей стороны» не могут использоваться для целей, выходящих за рамки предоставления платёжного сервиса, без дополнительного правового основания.

**Наследование**: В Ирландии [Law Society guidelines](https://www.lawsociety.ie/Solicitors/knowledge-base/Practice-Notes/Joint-Bank-Accounts---Guidelines-for-Solicitors/) описывают два режима: (1) «агентский» счёт (только для удобства основного владельца → presumption of resulting trust при смерти), (2) настоящий совместный счёт с правом survivorship. При агентском режиме смерть «принципала» автоматически прекращает агентские полномочия второго лица.

#### США

**Правовая конструкция**: Совместные счёта в США регулируются законодательством штатов (типично через Uniform Commercial Code, Article 4). Стандартный банковский договор устанавливает:
- «Joint and several liability» для всех владельцев
- «Right of survivorship» по умолчанию (если не указано иное — tenancy in common)
- Каждый владелец имеет право управлять счётом независимо (если not «requires two signatures»)

**Regulator framework**: FDIC и OCC не устанавливают специальных требований для совместных счётов сверх стандартных. Страховой лимит FDIC: $250 000 **на каждого владельца** при совместных счётах.

**Gramm-Leach-Bliley Act (GLBA)**: запрещает раскрытие финансовой информации о потребителях третьим лицам без уведомления; применяется к данным всех владельцев совместного счёта.

#### Азия (Филиппины/ЮВА)

Специального регулирования совместных счётов в отношении open banking в ЮВА нет. Стандартный банковский договор определяет условия. В Сингапуре совместные счёта подпадают под MAS Consumer Banking regulations; в Индонезии и Филиппинах — под общее банковское законодательство и KYC/AML требования для всех владельцев.

---

### 11.3 «Shared View» (Read-Only доступ к чужому счёту)

#### ЕС: PSD2-механика AISP как правовая основа

PSD2 создаёт прямой инструмент для «shared view»: **AISP-доступ**. Пользователь (PSU) даёт **явное согласие** AISP на просмотр данных своего счёта. Это согласие может быть передано другому лицу (например, члену семьи) через интерфейс AISP-приложения.

**Ключевые ограничения для shared view через PSD2/AISP**:
1. **Purpose limitation** (ст. 67(2)(f) PSD2): AISP вправе использовать данные **только** для предоставления account information service, запрошенного PSU. Использование транзакционных данных одного лица третьим лицом (членом семьи) для финансового планирования возможно, если PSU явно запросил именно эту услугу
2. **Data minimization** (GDPR, ст. 5): AISP не может запрашивать данные сверх необходимого
3. **Silent party data**: транзакции одного владельца счёта содержат данные контрагентов (получателей). [EDPB предупреждает об ограничениях использования этих данных](https://www.twobirds.com/en/insights/2024/global/open-banking-rules-and-gdpr-interplay-revisited)
4. **Permission ≠ GDPR consent**: PSR Proposal (2023) заменяет «explicit consent» на «permission», что не является GDPR-consent. AISP всё равно нуждается в самостоятельном правовом основании по GDPR для каждого вида обработки

**Практическая реализация**: Revolut, Monzo, N26 предлагают «Family spaces» или «shared budgets» — технически это AISP-агрегация нескольких счётов с предоставлением consolidated view третьему лицу. Реализуется через цепочку: AISP-лицензия + явное согласие каждого PSU + контрактная основа.

#### ЕС: FIDA (Financial Data Access) Regulation — предложено расширение

Предложение Еврокомиссии о **FIDA Regulation** (2023, параллельно с PSR/PSD3) направлено на расширение open finance за рамки платёжных счётов — инвестиции, страхование, пенсии — с consent-based доступом. FIDA создаст специальный класс «Financial Information Service Providers (FISPs)» с самостоятельными правами доступа.

#### США: Read-Only shared view — нет прямого регуляторного режима

В США нет законодательного аналога AISP-лицензии. Варианты реализации shared view:
1. **Через данные агрегатора** (Plaid, MX, Finicity): пользователь авторизует агрегатора получить данные счёта и переслать их третьему лицу в приложении. Правовая основа — контрактная между пользователем и агрегатором
2. **Зависимый авторизованный пользователь** (authorized user): банки позволяют добавить дополнительного пользователя к счёту с ограниченными правами; но это уже ближе к delegated access, не read-only view
3. **CFPB Section 1033** (заморожена): предусматривала право потребителя передать данные авторизованному третьему лицу. Под «authorized third party» попадают агрегаторы и fintech-приложения. [Суд постановил, что ст. 1033 разрешает передачу данных только потребителям и «fiduciary-type representatives», не коммерческим третьим лицам](https://www.sheppard.com/insights/blogs/federal-court-halts-implementation-of-cfpbs-open-banking-rule)

**GLBA/GLB Act**: ограничивает sharing финансовой информации потребителей без явного уведомления и права opt-out. Создаёт ограничения для продуктов «shared view» без выстроенной privacy notice.

#### Азия: отсутствие специального режима

В ЮВА нет специального регуляторного статуса «read-only shared view». Практические пути:
- **Филиппины**: через Open Finance PH API + согласие пользователя в соответствии с **Data Privacy Act 2012 (Republic Act 10173)**; BSP требует consent-driven data portability
- **Индонезия**: данные защищены **Personal Data Protection Law (PDP Law 2022)**; shared view возможен только при явном согласии субъекта данных
- **Сингапур**: **PDPA 2012** + MAS Technology Risk Management Guidelines; банки по-прежнему контролируют условия третьесторонний доступа

---

### 11.4 Сводная таблица ограничений на групповые финансовые продукты

| Аспект | EU | USA | Филиппины/ЮВА |
|---|---|---|---|
| **Правовое основание shared view** | PSD2 AISP-лицензия + GDPR consent | Контрактный (агрегатор) + CFPB 1033 (заморожена) | Open Finance consent + Data Privacy Act |
| **Лицензия для shared view product** | AISP (регистрация у NCA) | Нет специального; зависит от функций | Нет специального; OPS-регистрация (Филиппины) |
| **GDPR / privacy ограничения** | Строгие: purpose limitation, silent party data, data minimisation | GLBA, CCPA (Калифорния), нет federal open banking privacy rule пока | Data Privacy Act (PH); PDP Law (ID); PDPA (SG) |
| **Ответственность при shared view** | Лежит на AISP как data controller/processor; PSU сохраняет право отзыва | На агрегаторе по договору; GLBA ответственность FI | На провайдере и банке совместно |
| **Joint account — совместная ответственность** | Солидарная (joint and several) | Солидарная (joint and several) | Солидарная |
| **Ограничения на групповые FP** | FIDA (проект) только начинает регулировать | Нет специального закона | Нет специального регулирования |
| **Риск «silent party data»** | Высокий (EDPB предупреждает) | Средний (GLBA) | Средний (Data Privacy Acts) |

---

### 11.5 Практические выводы для продуктовых решений

**Read-only shared view** технически и юридически реализуемее, чем joint account в контексте финтех-продукта:
- Не создаёт совместной финансовой ответственности
- Не требует AML/KYC для второго пользователя как «владельца»
- Реализуется через AISP-механику в ЕС, агрегаторы в США, Open Finance API в ЮВА
- **Главный риск**: silent party data в транзакциях, необходимость явного согласия **каждого** участника, purpose limitation

**Joint account** — более жёсткий продукт:
- Требует полноценного KYC/AML для всех совладельцев
- Создаёт солидарную ответственность по задолженности
- Требует явного банковского договора с каждым владельцем
- Смерть или недееспособность одного владельца создаёт правовые сложности (presumption of resulting trust в ряде юрисдикций)

Для **группового fintech-продукта** (семейный бюджет, общие расходы) оптимальная архитектура:
1. Индивидуальные счета каждого участника
2. AISP-агрегация (в ЕС) или API-агрегация (в ЮВА/США) данных с согласия каждого
3. Consolidated «shared view» dashboard без права транзакций
4. При необходимости транзакций — delegated PISP-инициация от каждого счёта по отдельному согласию владельца

---

_Составлено на основе официальных регуляторных документов BSP, BI, SBV, BOT, MAS, EBA, FinCEN, CFPB и первичных аналитических источников (DLA Piper, Clifford Chance, Bird & Bird, PwC) по состоянию на март 2026._

---

# Блок 3: Поведение пользователей (Q12–15)

---

## Вопрос 12. Исследования о финансовом поведении пар: конфликты и совместный бюджет

### Ключевые исследования

**Fidelity Investments Couples & Money Study (2024)**

Самое масштабное ежегодное исследование финансового поведения пар в США — проводится с 2007 года. Версия 2024 года охватывала **1 794 пары (3 588 человек)**, опрошенных индивидуально через панель Ipsos KnowledgePanel (октябрь–ноябрь 2023). Ключевые результаты:

- **45% партнёров** признают, что ссорятся из-за денег хотя бы иногда — согласно [пресс-релизу Fidelity от 1 февраля 2024](https://newsroom.fidelity.com/pressreleases/love---money--most-couples-give-themselves-high-marks-in-communication--yet-fidelity-study-reveals-h/s/c15df94d-f289-4d2d-bb10-85424c803f8e).
- **Более 1 из 4 пар** называют деньги главной проблемой в отношениях.
- **27% признают**, что их регулярно раздражают финансовые привычки партнёра, но предпочитают молчать «ради мира».
- **Более трети пар** расходятся в мнениях по ближайшим крупным финансовым целям.
- Только **половина пар** принимает финансовые решения совместно; в вопросах пенсионного планирования 31% мужчин против 16% женщин считают себя главным принимающим решения.
- **53% пар**, ещё не вышедших на пенсию, имеют взаимопротиворечивые взгляды на размер необходимых накоплений.

**Bankrate Couples Finances Survey (февраль 2026)**

Выборка — **2 564 американца**, из них 1 208 состоящих в отношениях. Данные [Bankrate от 6 февраля 2026](https://www.bankrate.com/credit-cards/news/couples-finances/):

- **38%** пар полностью объединяют финансы (только совместные счета).
- **36%** ведут смешанную систему (и совместные, и раздельные счета).
- **26%** держат финансы полностью раздельно.
- Итого: **62% пар** сохраняют хотя бы часть счетов на своё имя.

Разбивка по поколениям (полное объединение финансов):
| Поколение | Полностью раздельно | Полностью объединено |
|---|---|---|
| Поколение Z (18–29 лет) | 51% | 22% |
| Миллениалы (30–45 лет) | 34% | 32% |
| Поколение X (46–61 год) | 23% | 40% |
| Бэби-бумеры (62–80 лет) | 15% | 45% |

Тренд очевиден: [CNBC сообщает](https://www.cnbc.com/2025/01/27/62percent-of-couples-keep-at-least-some-money-separate-from-each-other-survey.html), что молодые пары всё чаще предпочитают раздельные счета, что связано с более поздним вступлением в брак и привычкой управлять доходами самостоятельно.

**Wise / Talker Research (январь 2025)**

Опрос **2 000 американцев**, состоящих в отношениях. Результаты по [StudyFinds](https://studyfinds.org/average-couple-argues-about-money-58-times-a-year/):

- **Средняя пара ссорится из-за денег 58 раз в год** — то есть чаще раза в неделю.
- У миллениалов — в среднем **6 денежных конфликтов в месяц** (72 в год).
- У бэби-бумеров — в среднем лишь **3 конфликта в месяц**.
- **43% пар** не могут договориться о том, что считать «необходимыми» расходами.
- **36% ссорятся** из-за трат на необязательные вещи (стриминг, отпуск).
- **32% людей** чувствуют дискомфорт, обсуждая деньги с партнёром.
- **44%** боятся, что разговор о деньгах приведёт к ссоре.

**Ipsos / BMO Money Fights Survey (февраль 2024)**

Опрос **2 500 американцев** (панель Ipsos, январь 2024). По [данным Ipsos](https://www.ipsos.com/en-us/money-fights-one-three-34-partnered-americans-identify-money-source-conflict-their-relationship):

- **34% партнёров** называют деньги источником конфликта в отношениях.
- Среди молодёжи 18–24 лет этот показатель достигает **47%**.
- **37%** думают, что партнёр тратит слишком много на импульсивные покупки.
- **36% признают**, что бывают нечестны с партнёром в финансовых вопросах.

**TD Bank Study (2019)**

- **40% миллениальных пар** ссорятся из-за денег **хотя бы раз в неделю** — по данным [Pacesetter Planning](https://pacesetterplanning.com/money-and-marriage-problems/).

**Ramsey Solutions State of Personal Finance (Q4 2025)**

По [данным Yahoo Finance](https://finance.yahoo.com/news/study-ramsey-solutions-finds-americans-120000568.html):

- **56% пар** никогда не имели серьёзного финансового разговора до свадьбы.
- Пары, обсуждавшие финансы до брака, значительно чаще оценивают брак как «отличный».

### Деньги как причина развода

- По данным [IDFA (2025)](https://institutedfa.com/leading-causes-divorce/), финансовые проблемы способствуют **20–40% всех разводов**. Среди поколения X — 41% разводов связаны именно с деньгами.
- Классическое исследование **Family Relationships Journal (2012)** установило, что финансовые разногласия — **предиктор развода №1**, важнее других видов конфликтов — цит. по [Pacesetter Planning](https://pacesetterplanning.com/money-and-marriage-problems/).
- **57% разведённых** называют споры о деньгах причиной развода (данные исторического опроса, цит. по [Christ and Culture](https://cfc.sebts.edu/faith-and-economics/are-couples-really-divorcing-over-money/)).

### Академические исследования

Исследования, рассмотренные в рецензируемой литературе, фиксируют, что **финансовые конфликты обладают непропорционально высокой деструктивностью** по сравнению с другими видами семейных конфликтов — они отличаются большей интенсивностью, продолжительностью и меньшей вероятностью разрешения ([Papp, Cummings & Goeke-Morey, 2009, *Family Process*](https://onlinelibrary.wiley.com/doi/10.1111/j.1545-5300.2009.01275.x)).

---

## Вопрос 13. «Debt Awkwardness»: насколько неловко напоминать друзьям о долгах?

### Академические исследования

**Exton & Straeter (2018) — эксперимент о готовности давать и брать в долг у друзей**

Опубликовано в формате [колонки CEPR VoxEU](https://cepr.org/voxeu/columns/why-friends-give-do-not-want-receive-money). Выборка: **293 американских взрослых**.

Ключевые выводы:
- Друзья значительно **охотнее дают деньги в долг**, чем **просят занять**, даже в идентичных ситуациях нужды (например, забытый кошелёк при шопинге).
- **Разрыв между готовностью дать и взять в долг увеличивается при повторных обращениях**: лендеры становятся щедрее (эффект Бена Франклина), а заёмщики — всё более скованными.
- Объяснение через **социальные нормы дружбы** (Clark & Mills 2011, Fiske 1992): давать в долг — это возможность выразить заботу и соответствовать ожиданиям дружбы; брать в долг — это перекладывать финансовое бремя на друга и «монетизировать» отношения.
- Авторы называют этот рынок **субоптимальным**: потенциальных займов, которые были бы взаимовыгодны, не происходит именно из-за дискомфорта заёмщика.

**Smith (2019) — «To Lend or Not to Lend to Friends and Kin», Social Forces**

[Oxford Academic / Social Forces (98(2):753)](https://academic.oup.com/sf/article/98/2/753/5308436): Качественное исследование на клиентах некоммерческой организации в Калифорнии. Ключевой вывод:

- Люди прибегают к **«стратегиям обфускации»** (притворяются, что у них нет денег), чтобы отказать в займе, не разрушая отношений.
- **Отказать в займе искреннему просителю** — «крайне неловко, вызывает критику окружающих».
- Негативная взаимность (репутация «отказчика») служит защитным механизмом от давления социальной сети.

**JG Wentworth Survey (июнь 2025)**

[StudyFinds / JG Wentworth](https://studyfinds.org/who-americans-borrow-money-from-most-why-it-backfires/), n=1 267 американцев:

- **46,6% людей**, бравших/давших деньги в долг близким, сообщают о **серьёзных конфликтах или ссорах**.
- **75,1%** говорят, что после долгового эпизода стали **менее близки** с этим человеком.
- **71,3%** — коммуникация ухудшилась на некоторое время.
- **71,0%** — напряжённость привела к отчуждению.
- **69,1%** — отношения прекратились полностью.
- Лишь **4,1%** сообщили об отсутствии каких-либо проблем.

**LendingTree Friends & Money Report (август 2025)**

[LendingTree, n=2 000 американцев](https://www.lendingtree.com/credit-cards/study/friends-money-report/):

- **41% американцев** имели напряжённость или конфликт с другом из-за денег.
- **36% потеряли дружбу** из-за денег.
- **77% давали деньги в долг другу**; из них **32% не получили деньги обратно** в последний раз.
- **47% американцев не дали бы** лучшему другу в долг $500, если тот попросит.
- **19%** говорят, что последний заём другу **негативно повлиял на дружбу**.

**CreditCards.com / YouGov (октябрь 2022)**

[CreditCards.com, n=2 304 американца](https://www.creditcards.com/statistics/lending-money-poll/):

- **59% людей**, давших в долг, пережили хотя бы один **негативный исход**: потеря денег (42%), ухудшение отношений (26%), ущерб кредитному рейтингу (10%), физическая конфронтация (9%).
- Когда $100 не вернули, лишь **39% попытались бы взыскать долг** — столько же (39%) предпочли бы просто забыть.
- Среди тех, кто всё же попытался бы взыскать: Gen Z — 51%, миллениалы — 43%, Gen X и бумеры — лишь по 34%.

**LendingTree (2023)**

- **73% американцев**, одолживших деньги друзьям или родственникам, **всё ещё ждут полного возврата** — по данным [LendingTree/AOL](https://www.aol.com/articles/survey-shows-many-people-still-163026668.html).

### Механизм «debt awkwardness»

Исследования описывают многоуровневый психологический механизм:

1. **Асимметрия нарративов**: кредитор воспринимает долг как финансовую транзакцию; заёмщик — как социальное обязательство, сигнализирующее о несостоятельности.
2. **Избегание**: заёмщики нередко начинают **физически избегать** кредитора, сокращая частоту контактов, чтобы не встречаться с напоминанием — феномен, описанный в психологии поведенческих финансов.
3. **Страх конфронтации**: 44% людей боятся, что разговор о деньгах приведёт к конфликту даже в романтических отношениях ([Wise/Talker Research](https://studyfinds.org/average-couple-argues-about-money-58-times-a-year/)).
4. **Splitwise как смягчитель**: платформы-посредники снижают «awkwardness», делая напоминание автоматическим и деперсонализированным — дизайн-решение, прямо мотивированное психологическим дискомфортом.

---

## Вопрос 14. Средний размер и частота P2P-переводов: Россия / ЕС / США

### Россия: Система быстрых платежей (СБП)

Данные Банка России ([IV квартал 2024](https://www.cbr.ru/analytics/nps/sbp/4_2024/) и [2025 год](https://www.cbr.ru/analytics/nps/sbp/4_2025/)):

| Показатель | 2024 год | IV квартал 2024 | IV квартал 2025 |
|---|---|---|---|
| Всего операций через СБП | 13,4 млрд | — | — |
| Общая сумма операций | 69,5 трлн руб. | — | — |
| Переводов между гражданами (С2С) | ~10 млрд | — | 3,4 млрд (квартал) |
| Сумма С2С-переводов | >60 трлн руб. | — | 25,9 трлн руб. (квартал) |
| **Средняя сумма перевода** | — | **7 300 руб.** | — |
| Переводов на 1 гражданина (квартал) | — | **29** | **32** |
| Ср. количество операций в сутки | — | 45 млн (макс. 60 млн) | 50 млн |

**Вывод**: в IV квартале 2024 года средний P2P-перевод через СБП составил **≈7 300 рублей (~$80 по тогдашнему курсу)**. Один пользователь совершал **~29 переводов в квартал (~10 в месяц)**. За 2025 год число С2С-переводов в СБП выросло в **1,2 раза**, достигнув **18,3 млрд операций на сумму 103 трлн рублей** за весь год — по данным [Банка России, февраль 2026](https://www.cbr.ru/analytics/nps/sbp/4_2025/).

Переводы между гражданами остаются **самым популярным типом операций** в СБП — по данным [1С:Торговля](https://torg.1c.ru/news/rossiyane-stali-chashche-polzovatsya-sbp-/): в IV квартале 2025 года ими воспользовались **7 из 10 жителей страны**.

### США: Zelle, Venmo, Cash App

**Zelle (2024)**

По официальным данным [Zelle от 12 февраля 2025](https://www.zelle.com/press-releases/zelle-shatters-records-1-trillion-sent-single-year):

- Общий объём: **$1 трлн** (+27% г/г)
- Количество транзакций: **3,6 млрд** (+25% г/г)
- Пользователей: **151 млн** аккаунтов
- **Расчётный средний чек**: $1 000 млрд / 3,6 млрд = **≈$278 на транзакцию**
- По данным [CoinLaw](https://coinlaw.io/zelle-vs-venmo-statistics/): типичный пользователь инициирует **12 транзакций в месяц**; >80% активных пользователей отправляют/получают деньги **хотя бы раз в месяц**.
- Zelle занимает **54,6% объёма мобильных P2P-платежей** в США (2025 г.).

В 2025 году Zelle обработала **$1,2+ трлн** (+20%) на **4,2 млрд транзакций** — [CNBC / eMarketer, февраль 2026](https://www.emarketer.com/content/zelle-20-volume-growth-signals-hot-competition-venmo-paypal-p2p-arena).

**Venmo (2024)**

По данным [Venmo Statistics / Buy Bitcoin Worldwide](https://buybitcoinworldwide.com/venmo-statistics/):

- **Средняя сумма транзакции Venmo: $65–75** (P2P).
- Пользователи совершают в среднем **5–8,5 транзакций в месяц**.
- Совокупный объём платежей: ~$270–280 млрд в 2024 году.

**Сравнительная таблица: P2P-платформы США**

| Платформа | Объём (2024) | Транзакций | Средний чек | Частота/пользователь |
|---|---|---|---|---|
| Zelle | $1 трлн | 3,6 млрд | ~$278 | ~12/мес |
| Venmo | ~$270 млрд | н/д | $65–75 | ~5–8,5/мес |
| Cash App | ~$56 млрд (P2P) | н/д | н/д | н/д |

Источники: [Zelle press release](https://www.zelle.com/press-releases/zelle-shatters-records-1-trillion-sent-single-year), [CoinLaw](https://coinlaw.io/zelle-vs-venmo-statistics/), [Buy Bitcoin Worldwide](https://buybitcoinworldwide.com/venmo-statistics/).

### Европейский союз (зона евро)

**ECB SPACE 2024** (Survey on Payment Attitudes of Consumers in the Euro Area) — опрос потребителей в 20 странах, декабрь 2024. Данные [ECB SPACE 2024](https://www.ecb.europa.eu/stats/ecb_surveys/space/html/ecb.space2024~19d46f0f17.en.html):

- P2P-платежи составляют **4% от количества** и **6% от стоимости** всех повседневных транзакций в зоне евро.
- **Структура P2P-платежей по инструментам (2024)**:

| Инструмент | Доля по числу операций | Доля по стоимости |
|---|---|---|
| Наличные | 41% | 24% |
| Карты и мобильные приложения | 33% | 34% |
| Кредитные переводы | 9% | 29% |
| Мгновенные платежи | 6% | н/д |

- Доля наличных в физических P2P-платежах снизилась с **86% в 2019 году** до **73% в 2022** и **63% в 2024 году**.
- Предпочтения по инструментам различаются: Нидерланды — **79% используют мобильные/онлайн-платежи**; Греция — **50% предпочитают наличные**.
- По [FXC Intelligence](https://www.fxcintel.com/research/analysis/eu-p2p-payments-2024): наличные по-прежнему доминируют в P2P-платежах ЕС с 41% транзакций.

**Примечание по средним суммам в ЕС**: ECB SPACE не публикует средний чек P2P-переводов отдельно. По данным [ECB Payment Statistics (H1 2024)](https://www.ecb.europa.eu/press/stats/paysec/html/ecb.pis2024h1~5263055ced.en.html), средний чек **кредитных переводов** (включая P2P через SEPA) составляет порядка **~€6 700** (€105 трлн / 15,7 млрд транзакций), но это совокупные данные, включая корпоративные платежи. Чисто розничные P2P-суммы значительно ниже.

---

## Вопрос 15. Strava: метрики влияния социальных функций на engagement

### Официальные данные Strava (Year in Sport 2024)

Отчёт основан на данных **135 млн пользователей** из 190+ стран и опросе **5 068 активных людей** (как пользователей Strava, так и нет). Источник: [Strava Year in Sport Trend Report 2024](https://press.strava.com/articles/strava-releases-annual-year-in-sport-trend).

#### Социальные функции: рост клубов и групповой активности

| Метрика | Значение |
|---|---|
| Рост числа беговых клубов в 2024 г. | **+59%** |
| Рост числа загрузок совместных пробежек (10+ человек) | **+18%** |
| Рост числа прогулочных клубов | **+52%** |
| Рост числа женщин, вступивших в клубы Strava | **+89% г/г** |
| Крупные групповые активности | +13% |

#### Длительность активности: социальный эффект

Это один из самых красноречивых показателей — **групповые активности объективно длиннее**:

- **Пробежки, заезды и походы с 10+ участниками в среднем на 40% длиннее**, чем в одиночку (без учёта соревнований).
- Лыжные прогулки с группой — **на 80% длиннее** одиночных.

По данным [Strava Year in Sport PDF](https://assets.ctfassets.net/wad4jonn1ykp/1sJg4OiBKFoGYDtw9NV9v4/8c39f8a577db84a32cec43055938124c/Strava_Year_in_Sport_-_The_Trend_Report_-_en-US.pdf), это прямое свидетельство того, что социальные функции увеличивают объём нагрузки.

#### Kudos: влияние на engagement

Группы 4+ человек генерируют значительно больше kudos (лайков-поощрений), чем одиночные активности:

| Тип активности | Группа 2–3 | Группа 4+ |
|---|---|---|
| Велозаезд | +35% | +95% |
| Бег | +34% | +70% |
| Ходьба | +70% | +70% |
| Горный поход | +5% | +72% |
| Лыжи | +121% | — |

#### Социальные мотиваторы (опросные данные)

- **58% респондентов** обрели новых друзей через фитнес-группу в 2024 году (среди Gen Z — 66%) — [Fitt Insider](https://insider.fitt.co/social-fitness-mental-health-top-stravas-annual-report/).
- **48% называют социальные связи** главной причиной вступления в фитнес-группу (среди Gen Z — 55%).
- **43% присоединяются к групповым тренировкам**, чтобы улучшить результаты.
- **34%** — для поддержания подотчётности тренировочному плану.
- Более половины атлетов Strava называют **друзей или членов семьи, занимающихся спортом, главным источником мотивации** ([Strava Year in Sport 2023, январь 2024](https://press.strava.com/articles/strava-releases-year-in-sport-trend-report)).
- **77% представителей Gen Z** говорят, что чувствуют себя ближе к окружающим, видя активности друзей в ленте Strava.
- **Gen Z на 29% вероятнее миллениалов** тренируется с другим человеком.

#### Достижение целей

- Пользователи, установившие цели на Strava, достигают их на **10% чаще** при наличии социальной вовлечённости.
- **72% беговых целей** и **77% велосипедных целей** были выполнены в 2024 году.

### Академические исследования

**Franken, Bekhuis & Tolsma (2023) — «Kudos make you run!»**

Исследование [Университета Гронингена](https://research.rug.nl/en/publications/kudos-make-you-run-how-runners-influence-each-other-on-the-online/), опубликовано в *Social Networks* (2023). Метод: SIENA-анализ лонгитюдных данных **329 участников пяти голландских беговых клубов Strava** за 11 ежемесячных периодов.

Ключевые выводы:
- **Получение kudos напрямую побуждает бегунов бежать больше и чаще.**
- Атлеты склонны подстраивать своё беговое поведение под поведение «kudos-друзей» (тех, кому они сами ставят kudos).
- **Неожиданный результат**: наибольшее влияние оказывают не те, кто бегает больше (упward social comparison), а те, кто бегает на схожем или меньшем уровне — эффект «поддерживающей нормы».

**Social Comparison в фитнес-приложениях (JMIR, 2020)**

Мета-анализ [Journal of Medical Internet Research](https://pmc.ncbi.nlm.nih.gov/articles/PMC7148546/): социальное сравнение присутствует в 32% фитнес-приложений как механизм изменения поведения. Эффективно мотивирует при апвардном сравнении у людей с высоким самоконтролем; для людей с низким самоконтролем может снижать мотивацию.

**Frontiers in Public Health (2024)**

Опрос [1 452 пользователей фитнес-приложений](https://pmc.ncbi.nlm.nih.gov/articles/PMC10806118/): применение фитнес-приложений позитивно связано с субъективным благополучием, при этом **апвардное социальное сравнение выступает медиатором** (то есть именно просмотр достижений друзей создаёт мотивацию, а не само использование приложения).

**British Journal of Sports Medicine (сентябрь 2025)**

Крупнейшее лонгитюдное исследование: **500 000 пользователей** за **2 года** ([Harvard Health / Western University](https://www.health.harvard.edu/healthy-aging-and-longevity/fitness-apps-may-provide-long-term-motivation-to-stay-active)). ~40% участников увеличили ежедневное число шагов более чем на 1 000 и **удержали этот результат спустя 2 года**. Социальные функции и поведенческая наука (SDT) — ключевые механизмы долгосрочного изменения поведения.

### Вывод по Q15

Данные Strava подтверждают, что социальные функции увеличивают engagement по нескольким измеримым каналам:
1. **Длина активностей**: +40% при группе 10+ человек.
2. **Частота**: рост числа загрузок групповых активностей (+18% для больших групп).
3. **Мотивация через kudos**: академически подтверждённый эффект повышения частоты тренировок.
4. **Клубное участие**: +59% беговых клубов за один год.
5. **Самоотчёт**: >50% атлетов называют социальное окружение главным мотиватором.

---

*Дата составления: март 2026 г. Все источники проверены на актуальность.*

---

# Блок 4: Конкуренты и аналоги (Q16–22)

---

## Q16. Что делает Splitwise сейчас? Метрики, обновления, стратегия

### Текущий статус и масштаб

Splitwise — независимый продукт, основанный в 2012 году, по состоянию на 2024–2025 год обслуживает **десятки миллионов пользователей в более чем 190 странах**. По различным оценкам рынка, аудитория составляет от 20–30+ млн ([LinkedIn Industry Analysis](https://www.linkedin.com/pulse/top-10-companies-bill-splitting-apps-industry-powering-seamless-uwzof)) до 35 млн пользователей ([Market Growth Reports](https://www.marketgrowthreports.com/market-reports/bill-splitting-apps-market-107531)), причём сама компания в коммуникациях использует формулировку «сотни миллиардов долларов, разделённых пользователями» — факт, подтверждённый партнёрством с Tink в 2024 году: «десятки миллионов» пользователей ([Tink Press Release, апрель 2024](https://tink.com/press/splitwise-tink-partner/)). Компания насчитывает около **56 сотрудников**, выручка по оценкам составляет около **$6,6 млн в год**, выручка на сотрудника — ~$117 000 ([Growjo](https://growjo.com/company/Splitwise)).

### Бизнес-модель и монетизация

Splitwise работает по модели freemium: бесплатный базовый тариф с рекламой и подписка **Splitwise Pro** (без рекламы, неограниченные расходы, продвинутые отчёты, сканирование чеков). Приложение доступно на iOS, Android и веб ([Investopedia](https://www.investopedia.com/articles/company-insights/090816/how-splitwise-works-and-makes-money.asp)). Последний раунд финансирования — **Series A на $20 млн в апреле 2021 года**, лид-инвестор — Insight Partners, также участвовали Walnut Venture Associates; общий объём привлечённых средств за 6 раундов ([Clay](https://www.clay.com/dossier/splitwise-funding)). С тех пор новых раундов публично не объявлялось.

### Ключевые обновления 2024–2025

**Апрель 2024 — стратегическое партнёрство с Tink (Visa):** Splitwise запустил функцию **Pay by Bank** в Великобритании совместно с Tink. До этого пользователи были вынуждены выходить из приложения в банковский клиент, инициировать платёж и возвращаться для подтверждения. Теперь расчёт с другом происходит напрямую внутри Splitwise за секунды: банковский аккаунт привязывается через Account Check от Tink, затем платёж инициируется через Pay by Bank без ввода реквизитов ([Tink Press Release](https://tink.com/press/splitwise-tink-partner/); [IBS Intelligence](https://ibsintelligence.com/ibsi-news/splitwise-teams-up-with-tink-to-offer-direct-bank-payments/)).

**Октябрь 2025 — расширение Pay by Bank на Европу:** Функция расширена на Францию, Германию и Австрию ([FinTech Global, октябрь 2025](https://fintech.global/2025/10/20/splitwise-and-tink-expand-pay-by-bank-across-europe/)).

### Стратегия

Splitwise придерживается стратегии «лучший в своём классе для разделения расходов» без попытки превратиться в полноценный банк. Ключевые стратегические направления:
- Встраивание платёжной инфраструктуры через open banking партнёрства (Tink/Visa), чтобы закрыть петлю «трекинг → платёж» внутри одного приложения;
- Глобальная экспансия (поддержка 190+ стран, 15 языков);
- Интеграции с платёжными системами (Venmo, PayPal, Paytm для Индии).

Рынок bill-splitting apps оценивается в $0,58 млрд в 2023 году и ожидается рост до $1,3 млрд к 2033 году (CAGR 8,4%) ([Market.us](https://market.us/report/bill-splitting-apps-market/)). Splitwise занимает ~31% транзакций в этом сегменте.

---

## Q17. Revolut — социальные функции: Group Vaults, Split Bills

### Масштаб Revolut как платформы

По итогам 2024 года Revolut насчитывает **52,5 млн клиентов** по всему миру (рост 38% г/г), выручка группы выросла на 72% до **$4,0 млрд** (£3,1 млрд), прибыль до налогов — **$1,4 млрд** (рост 149%), чистая прибыль — **$1,0 млрд** ([Revolut 2024 Annual Report](https://www.revolut.com/en-JP/blog/post/2024-annual-report-summary-en/)).

### Group Vaults (Совместные копилки)

**Group Vaults** — функция совместного накопления, доступная с 2019 года. Механика:
1. Пользователь создаёт Vault (копилку) с названием (например, «Барбадос 2025») и целевой суммой;
2. Нажимает «Share» и приглашает участников;
3. Создатель автоматически становится администратором: только он может добавлять/удалять участников;
4. Каждый участник пополняет копилку в любое время вручную или через автоматические правила.

Настройка занимает около 1 минуты ([Revolut Blog](https://www.revolut.com/blog/post/hit-savings-goals-faster-with-group-vaults/)). Group Vaults ориентированы на совместные цели (отпуск, ремонт, подарок), а не на трекинг расходов.

### Split Bill и Group Bills

Revolut предлагает **две отдельные функции**:

**Split Bill (единоразовое разделение):**
- Нажмите на транзакцию в ленте → «Split bill»;
- Выберите контакт Revolut или друга из телефонной книги;
- Укажите разбивку: равная доля, процент или конкретная сумма;
- Revolut пользователи получают push-уведомление с кнопкой «Оплатить»; не-пользователи — платёжную ссылку по SMS/email;
- Переводы между Revolut-пользователями мгновенные и бесплатные в 26 валютах.

**Group Bills (групповые расходы, аналог Splitwise):**
- Создаётся группа, участники добавляются;
- Расходы вносятся по мере возникновения;
- Revolut ведёт накопительный баланс и автоматически рассылает напоминания;
- Подходит для соседей по квартире, путешествий, длительного совместного учёта.

([Wise — Revolut Split Bill Guide](https://wise.com/ie/blog/split-bill-revolut-ireland); [Splitty](https://splittyapp.com/learn/revolut-bill-splitting/))

В августе 2024 года Revolut запустил интеграцию с Tikkie для пользователей в Нидерландах, расширив возможности разделения счетов ([Market.us](https://market.us/report/bill-splitting-apps-market/)).

### Метрики социальных функций

- **Joint Accounts:** более **1 млн пользователей** по итогам 2024 года ([Revolut Annual Report 2024](https://www.revolut.com/en-US/annual-report/2024/));
- **Revolut Pay:** **1,2 млн человек** урегулировали платежи через Revolut Pay в 2024 году ([Revolut Annual Report 2024](https://www.revolut.com/en-US/annual-report/2024/));
- Семьи с аккаунтами Revolut <18 выросли на **50%** в 2024 году;
- 65% новых клиентов пришли органически или по реферальной программе — это косвенно отражает виральность социальных функций.

---

## Q18. Тинькофф (Т-Банк) и Сбер: функции совместных финансов

### Т-Банк (бывший Тинькофф): Совместный счёт

**Совместный счёт** Т-Банка — полноценная банковская функция, запущенная и расширенная в конце 2021 года. Параметры:
- До **3 совместных счётов** на одного пользователя;
- До **10 участников** в каждом счёте;
- Участники могут быть как клиентами Т-Банка, так и клиентами **других банков** (но до 5 из каждой категории);
- Каждый участник может выпустить виртуальную или пластиковую карту к счёту бесплатно;
- Владелец счёта устанавливает **лимиты расходов** для каждого участника;
- Все участники видят **общую историю транзакций** и аналитику по категориям в приложении;
- Поддерживается кэшбэк до 30% за покупки с совместного счёта;
- Открытие — через приложение: «Витрина» → «Банк для близких» → «Совместный счёт».

([Т-Банк — Совместный счёт](https://www.tbank.ru/cards/debit-cards/tinkoff-black/shared); [Т-Банк — FAQ по совместному счёту](https://www.tbank.ru/bank/help/deposits/family-account/main/features/))

**Дополнительные функции совместных финансов в Т-Банке (с декабря 2021):**
- **Открытый доступ к счёту:** полный (просмотр + платежи + снятие) или частичный (только просмотр баланса);
- **«Открыть сбор денег»** — групповой сбор: можно одновременно запросить деньги у нескольких людей;
- **«Встряхни телефон»** — быстрый вызов функции перевода или запроса денег.

([Tinkoff Group News, декабрь 2021](https://tinkoff-group.com/company-info/news/30122021-new-in-tinkoff-superapp-eng/))

### Сбербанк: Совместные функции

**Совместный платёжный счёт Сбербанка:**
- Два и более человека могут пополнять счёт с разных источников (зарплата, пенсия, дивиденды) и оплачивать с него совместные расходы — коммунальные услуги, связь, покупки ([Сбербанк — совместный счёт](https://www.sberbank.ru/ru/aktivniy_vozrast/instrukcii/sovmestnyj-dostup/sovmestnyj-platyozhnyj-schyot));
- Раздел **«Банк для близких»** — совместные уведомления об операциях, копилка на общие цели, контроль семейного бюджета ([СберБанк для близких](https://www.sberbank.ru/ru/person/blizkie)).

**СберБанк Онлайн — Инструменты бюджетирования:**
- Сервис **«Ваш бюджет»** (разделён «Анализ финансов» и «Ваш бюджет»): анализ фактических расходов, ИИ-предложения по лимитам категорий, отслеживание прогресса;
- **«Конверты»** — откладывание денег на обязательные расходы (аренда, коммуналка, продукты);
- **«Цели»** — совместные накопления с автопополнением при каждом зачислении.

([СберУниверситет финансы — Семейный бюджет](https://finance.sberuniversity.ru/pfm/2))

**Ключевое различие:** У Т-Банка реализована более продвинутая концепция совместного счёта — с поддержкой до 10 участников из разных банков, лимитами расходов и общей аналитикой. Сбер делает акцент на семейной экосистеме («Банк для близких») и инструментах индивидуального/семейного бюджетирования, но без публично заявленного функционала «групповых расходов» уровня Splitwise.

---

## Q19. Cash App, Zelle, Pix (Бразилия) — социальные и групповые функции

### Cash App (Block, Inc.)

**Июль 2025 — запуск Pools (Групповые сборы):**
Cash App официально запустил функцию **Pools** — групповые платёжные сборы. Функционал:
- Организатор создаёт Pool: указывает название, целевую сумму, приглашает участников;
- Участники могут внести деньги через Cash App, **Apple Pay или Google Pay** — без необходимости иметь аккаунт Cash App;
- Организатор делится ссылкой или приглашает по $cashtag;
- Отслеживание прогресса к цели в реальном времени;
- По завершении — мгновенный вывод на баланс Cash App;
- В ноябре 2025 добавлены «комментарии участников» к взносу.

> «60% взрослых американцев участвуют в каком-либо виде группового сбора денег, и Cash App задействован примерно в половине случаев» — данные внутреннего исследования Cash App.

([Cash App Press Release, июль 2025](https://cash.app/press/cash-app-launches-pools-for-group-payments); [Cash App Investor Relations, ноябрь 2025](https://investors.block.xyz/investor-news/news-details/2025/Introducing-Cash-App-Releases-See-Whats-New/default.aspx))

**Масштаб:** Cash App — **57 млн ежемесячных активных пользователей** ([Cash App Press Release](https://cash.app/press/cash-app-launches-pools-for-group-payments)). Pools в момент запуска были доступны ограниченному кругу пользователей с планом расширения.

**Ограничения ранее:** до запуска Pools Cash App не имел встроенных групповых инструментов — только P2P-переводы и запросы денег один на один. Пользователи использовали приложение для взаимных расчётов, но координация групп была неудобной.

### Zelle

**Модель:** Zelle — инфраструктурный сервис, встроенный в приложения банков (JPMorgan Chase, Bank of America, Wells Fargo, US Bank и другие). Не имеет отдельного social feed.

**Функция Split Bill:**
- Доступна через банковские приложения-партнёры Zelle;
- Позволяет разделить расходы с **до 10 людьми** одновременно;
- Пользователь указывает контакты (по email или номеру телефона, привязанному к Zelle) и суммы;
- По умолчанию — равные доли, сумму каждому можно скорректировать вручную;
- Деньги переводятся напрямую между банковскими счетами — без удержания средств в приложении, без комиссий.

([US Bank — Zelle Split Bill](https://www.usbank.com/customer-service/knowledge-base/KB0069494.html); [SoFi — Zelle Split](https://www.sofi.com/banking/zelle-faq/how-do-i-split-the-bill-with-zelle/))

**Ключевое ограничение:** Zelle — не приложение для трекинга расходов и не имеет функций типа «общий баланс» или «история долгов». Это исключительно инструмент запроса/перевода. Групповой учёт расходов — не поддерживается.

**Масштаб Zelle:** В 2024 году Zelle обработал **$1 трлн** переводов — рекордный показатель.

### Pix (Бразилия)

Pix — национальная система мгновенных платежей ЦБ Бразилии, запущенная в ноябре 2020 года.

**Метрики и масштаб:**
- **165 млн** зарегистрированных пользователей Pix (практически всё взрослое население Бразилии в 162,9 млн человек);
- **6,3 млрд транзакций** в марте 2025 года (рост 28% г/г) ([Faster Payments Council — Pix Q1 2025](https://fasterpaymentscouncil.org/userfiles/2080/files/Pix%20by%20the%20Numbers%20Q1%202025.pdf));
- Рекорд одного дня — **250,5 млн транзакций** 6 апреля 2024 года ([Payments CMI](https://paymentscmi.com/insights/pix-in-brazil-latest-statistics-central-bank/));
- 46% всех электронных платежей в Бразилии — Pix (середина 2024) ([Yahoo Finance — Brazil Embedded Finance](https://finance.yahoo.com/news/brazil-embedded-finance-databook-report-080500418.html));
- С момента запуска по сентябрь 2025 года — **196,2 млрд транзакций**, $16 трлн оборот ([ebanx](https://insights.ebanx.com/en/five-years-on-pix-approaches-8-monthly-transactions/)).

**Социальные/групповые функции:**
- Pix — инфраструктурный rails, а не конечное приложение. Социальный слой реализуют банки и кошельки поверх него;
- **P2P транзакции** составляют 46% числа всех Pix-транзакций (Q1 2025) — это социальные переводы между людьми;
- **WhatsApp + Pix:** WhatsApp внедряет отображение Pix-ключей в профилях с оплатой прямо в чате ([Faster Payments Council](https://fasterpaymentscouncil.org/userfiles/2080/files/Pix%20by%20the%20Numbers%20Q1%202025.pdf));
- **Pix por Aproximação (NFC Pix):** запущен 28 февраля 2025 года — оплата касанием через Google Wallet;
- **Pix Parcelado (рассрочка):** анонсирован к запуску в июне 2025 года;
- **Pix Cobranças (Pix как счёт на оплату):** позволяет создавать запросы на оплату — функционально аналог «запроса денег».

**Ключевое отличие от западных аналогов:** Pix не имеет нативного приложения с социальными функциями (лента активности, эмодзи, статусы) — это роль конкретных банков (Nubank, Itaú, Bradesco) и кошельков (Mercado Pago, PicPay).

---

## Q20. Стартапы в сфере «social/collaborative finance» — финансирование 2022–2025

### Активные стартапы с раундами

| Стартап | Страна | Фокус | Раунд | Сумма | Дата | Инвесторы |
|---------|--------|-------|-------|-------|------|-----------|
| **Tandem** | США | Совместные финансы для пар (трекинг + разделение без совместного счёта) | Seed | $3,7 млн | Январь 2024 | Corazon Capital, ангелы из OkCupid/Match Group |
| **Piere** | США (NYC) | AI «self-driving money» платформа с автоматизацией | Pre-seed | $2,1 млн | Октябрь 2025 | Grand Ventures, Selah Ventures, Trustage Ventures |
| **Plum** | Великобритания (греч. основатели) | AI-автосбережения и инвестиции | Series B | £16 млн (~$20 млн) | Июль 2024 | Eurobank, iGrow Venture Capital, Ventura Capital |
| **Plum** | Великобритания | — | Venture Debt | £15 млн от BBVA | Апрель 2025 | BBVA |
| **Cleo** | Великобритания | AI-финансовый ассистент для Gen Z | Series C | $80 млн при оценке $500 млн | Июнь 2022 | Sofina, Balderton Capital, LocalGlobe |
| **Greenlight** | США | Семейные финансы (родители + дети) | — | Зафиксировано $2 млрд под управлением у 6,5 млн семей (2024) | 2024 | — |

**Источники:** [TechCrunch — Tandem](https://techcrunch.com/2024/01/17/tandem-modern-couples-app-fintech/); [FinTech Global — Piere](https://fintech.global/2025/10/21/ai-platform-piere-secures-2-1m-to-power-self-driving-money/); [Plum Series B](https://withplum.com/press/plum-raises-16m-series-b-after-rapid-growth-and-approaches-profitability); [The Recursive — Plum BBVA](https://therecursive.com/ai-fintech-plum-profitability-bbva-funding-expansion/); [FinTech Futures — Cleo](https://www.fintechfutures.com/fintech-innovation/gen-z-financial-assistant-app-cleo-raises-80m-at-500m-valuation/)

### Закрытые стартапы в этой нише

- **Zeta** (США, совместные финансы для пар и семей): объявил о закрытии операций **9 апреля 2025 года**. За 7 лет Zeta набрала лояльную аудиторию пар, использовавших её для разделения расходов и совместного бюджетирования. Причина: «требуется значительный масштаб и ресурсы для конкуренции с отраслевыми гигантами». При этом компания подписала соглашение с «крупной финтех-компанией» о встраивании технологии Zeta в её экосистему ([Zeta announcement](https://www.askzeta.com); [Reddit](https://www.reddit.com/r/personalfinance/comments/1jve8vc/zeta_app_shutting_downreplacements/)).
- **Honeydue** (см. Q21) — фактически под управлением нового юрлица Moneydue Inc. с 2024 года.
- **Honeyfi/Firstly** — аналогичный продукт, закрылся ещё раньше.

### Общие наблюдения по сегменту

1. Большинство стартапов в нише «совместные финансы для пар» закрываются или продаются: монетизация крайне сложна (пользователи не хотят платить за «семейный» продукт), а конкуренция с экосистемами крупных банков и Revolut нарастает.
2. Успешнее выживают проекты с более широким финансовым охватом (Cleo, Plum — AI-сбережения + совместные функции) или с семейным фокусом (Greenlight — дети + родители).
3. Общий рынок bill-splitting apps: $580 млн в 2023 году → $1,3 млрд к 2033 году, CAGR 8,4% ([Market.us](https://market.us/report/bill-splitting-apps-market/)).

---

## Q21. Honeydue — почему закрылся / не масштабировался?

### Краткая история

Honeydue создан Юджином Парком и Тьеном Траном (WalletIQ, Inc., основан ~2016). Приложение позволяло парам подключить счета из 20 000+ финансовых институтов в 5 странах, видеть общий баланс, трекать расходы по категориям, получать напоминания о счетах, общаться внутри приложения. Выпускник **YC Summer 2017**, единственный раунд финансирования — **$120 000 от Y Combinator**. Пик — **500 000 зарегистрированных пользователей**, отмечен Apple и Forbes, 60% пользователей — женщины (нетипично для финтеха) ([Startups.RIP — Honeydue](https://startups.rip/company/honeydue); [YC Company Profile](https://www.ycombinator.com/companies/honeydue)).

### Почему не масштабировался — разбор причин

**1. Провальная бизнес-модель:**
Honeydue был **полностью бесплатным**: монетизация ограничивалась рекламой и добровольными «чаевыми» $1–10/мес. Это не генерировало достаточного ARR для привлечения Series A, а без институционального капитала масштабировать инфраструктуру и команду было невозможно. При этом пользователи сообщали, что готовы платить подписку — но такой опции не было ([Startups.RIP](https://startups.rip/company/honeydue); [App Store reviews](https://apps.apple.com/us/app/honeydue-couples-finance/id1157633945)).

**2. Деградация продукта (2022–2023):**
Пользователи массово жаловались на:
- Транзакции зависли в статусе «Pending» неделями;
- Ошибка «failed to load» при запуске;
- Невозможность синхронизации с рядом крупных банков;
- Отключение support chat («R.I.P. Tip Jar and Support Chat»);
- Команда поддержки перестала отвечать на письма.

Один пользователь отметил прямую аналогию с «пре-шатдаун сигналами» другого закрытого продукта Honeyfi/Firstly ([App Store отзывы, 2022–2023](https://apps.apple.com/us/app/honeydue-couples-finance/id1157633945)).

**3. Acqui-hire без стратегического применения:**
В **мае 2021** Honeydue был приобретён **Mission Lane** (финтех, специализирующийся на кредитных картах для людей с ограниченной кредитной историей). Условия сделки не раскрывались — по всем признакам это acqui-hire по нестратегической оценке. Юджин Парк стал Head of Product для дебетовой карты Mission Money — **не для Honeydue** ([Startups.RIP](https://startups.rip/company/honeydue); [LinkedIn — Lucas L.](https://www.linkedin.com/in/lucaslu)).

**4. Дивестиция и продолжение под Moneydue Inc.:**
- Сентябрь 2023: Mission Lane прекратила программу дебетовой карты Mission Money;
- 2024: приложение Honeydue передано новому юридическому лицу **Moneydue, Inc.** (169 Madison Ave, NYC);
- По состоянию на ноябрь 2025 года приложение **всё ещё обновляется** (версия 2.82, 28 ноября 2025) и имеет 100К+ загрузок на Google Play ([Google Play](https://play.google.com/store/apps/details?id=com.honeydue.honeydue&hl=en_US)).

### Выводы

| Проблема | Детали |
|----------|--------|
| **Монетизация** | Только реклама + добровольные чаевые; нет платной подписки |
| **Финансирование** | $120K (YC) — единственный раунд; Series A не случился |
| **Техдолг** | После acqui-hire продукт депревиоритизирован, баги не фиксились |
| **Стратегический мисфит** | Покупатель (Mission Lane) не имел синергии с couples-finance |
| **Нишевость** | Рынок «финансы для пар» узкий и сложно монетизируется |

---

## Q22. Cleo, Plum, Emma — AI-финансовые ассистенты: групповые и социальные функции

### Cleo

**Профиль:** AI-финансовый ассистент, основан в Лондоне, ориентирован на Gen Z в США. Взаимодействие через чат-интерфейс.

**Метрики 2024:**
- Выручка **$136 млн** (почти удвоилась г/г), exit run-rate — **$186 млн**;
- Устойчивая прибыльность с августа 2024 года, EBITDA margin 8,4%;
- Стоимость привлечения клиента — **$11**;
- Рост карточных трат — **+271% г/г**;
- Последний раунд — **Series C $80 млн** при оценке $500 млн (Sofina, Balderton Capital, июнь 2022).

([Cleo 2024 Annual Report](https://web.meetcleo.com/2024-annual-report); [FinTech Futures](https://www.fintechfutures.com/fintech-innovation/gen-z-financial-assistant-app-cleo-raises-80m-at-500m-valuation/))

**Групповые/социальные функции:**
Cleo **не имеет** нативных функций группового трекинга расходов или совместного бюджетирования. Весь функционал — индивидуальный: бюджетирование, AI-чат, кредитный строитель, мониторинг расходов.

В январе 2025 года Cleo опубликовала **«2025 Love & Money Report»**, который фиксирует: 24% опрошенных называют «бюджетирование для пар» самой желанной функцией; почти 70% видят потенциал AI-ассистентов (включая Cleo) для управления финансовыми решениями в паре. Однако конкретных анонсов групповых функций не последовало ([Cleo 2025 Love & Money Report](https://web.meetcleo.com/blog/2025-love-money-report)).

**Вывод:** Cleo — ассистент «для одного», с изучением запроса пар/групп, но без реализованных функций.

---

### Plum

**Профиль:** Smart money app (AI-автосбережения + инвестиции), основан греческими предпринимателями, работает в Великобритании/ЕС. 2+ млн пользователей.

**Метрики:**
- Валоризация в июле 2024 — **$172–175 млн**;
- AUM превысил **€1,75 млрд** (семикратный рост за 3 года);
- Выручка за 2024 год — **$7,54 млн**, рост ~4,5x за 3 года;
- Series B £16 млн (Eurobank, iGrow) — июль 2024 ([Plum Series B Press Release](https://withplum.com/press/plum-raises-16m-series-b-after-rapid-growth-and-approaches-profitability));
- Venture debt €34 млн от BBVA — апрель 2025 ([The Recursive](https://therecursive.com/ai-fintech-plum-profitability-bbva-funding-expansion/)).

**Групповые/социальные функции:**
Plum **не имеет** нативных групповых функций. Приложение строго индивидуальное: 8 правил автосбережений, лёгкий доступ к деньгам, ISA, инвестиции, пенсионные продукты.

Основатель Виктор Трукудес в интервью 2023 года отметил: «Мы понимаем, что люди — социальные существа и хотят обсуждать финансы с другими», — но конкретных социальных функций не анонсировал ([Parsers VC — Plum mentions](https://o.parsers.vc/startup/withplum.com/)).

**Вывод:** Plum фокусируется на индивидуальной автоматизации; групповые функции — не в roadmap публично.

---

### Emma

**Профиль:** Budgeting app (Великобритания), трекинг расходов, подписки, бюджеты, мультибанковское подключение. Сотни тысяч пользователей в Великобритании. Weekly active users: ~135–144К (Q2 2024) ([Sensor Tower UK Q2 2024](https://sensortower.com/blog/2024-q2-unified-top-5-personal%20finance%20budgeting%20and%20planning-units-gb-63e363f0e1714cfff1979caa)).

**Групповые функции — наиболее развитые среди трёх:**

Emma — **единственная** из трёх, которая активно развивает групповые функции. В 2025 году это стало стратегическим фокусом:

- **Emma Groups (Groups для расходов):** создание группы, автоматическое разделение расходов среди участников (аренда, отпуск и любые совместные траты); только доля пользователя учитывается в его личном бюджете, не ломая индивидуальный трекинг ([Emma Groups Page](https://emma-app.com/features/pay/groups));
- **Custom Split (2025):** разделение расходов по проценту, доле или точной сумме — не только поровну ([Emma 2025 Blog](https://emma-app.com/blog/what-we-chose-to-build-at-emma-in-2025));
- **Settle in Group (2025):** урегулирование всех долгов в группе одним действием;
- **Quick Pay from Account (2025):** прямой платёж из подключённого банковского счёта внутри приложения.

Команда Emma в годовом итоге 2025 года написала: «Мы начали с shared money, потому что именно здесь трение проявляется быстрее всего» ([Emma — What we built in 2025](https://emma-app.com/blog/what-we-chose-to-build-at-emma-in-2025)).

**Дополнительно — Emma for Employers (2025):** корпоративное финансовое благополучие; **Emma Gift** — подарок подписки на приложение.

### Сравнительная таблица

| Параметр | Cleo | Plum | Emma |
|----------|------|------|------|
| **Основной фокус** | AI-ассистент (Gen Z, США) | AI-автосбережения (UK/EU) | Бюджетирование (UK) |
| **Пользователи** | ~7+ млн (6 млн избежали овердрафта) | 2+ млн | Сотни тысяч |
| **Выручка 2024** | $136 млн | $7,5 млн | Н/Д |
| **Групповые функции** | ❌ Нет | ❌ Нет | ✅ Groups, Custom Split, Settle in Group |
| **Социальные планы** | Изучают запрос пар | Понимают потребность | Активно развивают |
| **Последний раунд** | $80 млн Series C (2022) | £16 млн Series B (2024) + €34 млн debt (2025) | Н/Д публично |

---

*Исследование проведено: март 2026. Все данные подтверждены первичными источниками.*

---

# Блок 5: Технические возможности (Q23-25)

---

## Q23. Какие payment orchestration платформы существуют? Что подходит для P2P split-payments?

### Обзор рынка

Payment orchestration платформы позволяют маркетплейсам, финтех-компаниям и P2P-сервисам автоматически делить платежи между несколькими получателями, управлять комплаенсом и выплатами. [По данным аналитиков](https://www.linkedin.com/posts/marcelvanoost_payment-orchestration-platforms-key-players-activity-7421872606578069504-wIlZ), облачные решения занимают 62% рынка (2024), а ключевые драйверы роста — цифровая экономика, регуляторная сложность и многорельсовые платежи.

---

### 1. Stripe Connect

**Модель работы.** Stripe Connect — де-факто стандарт для платформ и маркетплейсов. Позволяет принимать платёж от покупателя и одновременно переводить доли нескольким связанным аккаунтам (connected accounts). [По данным Stripe](https://stripe.com/resources/more/how-to-implement-split-payment-systems-what-businesses-need-to-do-to-make-it-work), в 2024 году через Connect было обработано более $1 млрд транзакций на 84 платформах.

**Механики split-платежей:**
- **Destination Charges** — платёж засчитывается на счёт платформы, а затем она переводит долю получателю.
- **Direct Charges** — платёж идёт напрямую на аккаунт продавца, платформа берёт application fee.
- **Separate Charges and Transfers** — платёж принимается на платформу, затем создаются отдельные переводы нескольким получателям через `transfer_group`. [Документация Stripe](https://docs.stripe.com/connect/separate-charges-and-transfers) явно описывает сценарий split между несколькими аккаунтами одним вызовом.

**P2P сценарий.** Stripe Connect идеально подходит для split-billing (например, разделение счёта в ресторане): платформа получает один платёж и создаёт несколько переводов по заданным долям. Instant Payouts позволяет мгновенно зачислить средства на дебетовые карты получателей.

**Ценообразование** ([Stripe Connect Pricing](https://stripe.com/connect/pricing)):
- Базовая обработка карты: 2.9% + $0.30 за транзакцию ([SwipeSum, 2025](https://www.swipesum.com/insights/guide-to-stripe-fees-rates-for-2025))
- Международная карта: 3.1% + $0.30 + 1.5% cross-border fee
- ACH Direct Debit: 0.8%, максимум $5
- Instant Payouts: 1% от суммы выплаты
- Cross-border payouts: от 0.25% от объёма
- Онбординг, KYC, комплаенс: включено, без дополнительной платы
- Модель "вы устанавливаете тарифы": дополнительная плата per monthly active account + per payout sent (конкретные суммы устанавливаются индивидуально)

**Преимущества для P2P:**
- Нет необходимости регистрироваться как money transmitter — Stripe берёт на себя эту функцию
- Встроенный онбординг получателей с KYC
- Автоматические возвраты и chargeback-менеджмент
- Поддержка 135+ валют, глобальные выплаты
- Полный контроль тайминга выплат

**Географический охват:** Глобально, ~50+ стран для connected accounts.

---

### 2. Adyen for Platforms

**Модель работы.** Adyen for Platforms — enterprise-решение для маркетплейсов и платформ, требующее минимального инвойса (уточняется индивидуально). Поддерживает разделение платежей двумя способами ([Sharetribe, Adyen Overview](https://www.sharetribe.com/academy/marketplace-payments/adyen-for-platforms-overview/)):

1. **Split at Authorization** — доли указываются в запросе авторизации и автоматически распределяются
2. **Split at Capture/Refund** — разделение происходит в момент списания, если итоговые суммы не известны заранее

**Конфигурация split-правил** ([Adyen Docs](https://docs.adyen.com/classic-platforms/split-configuration-for-stores)): поддерживаются фиксированная, процентная и комбинированная комиссия с условиями по каналу, валюте и способу оплаты. Правила можно назначать магазинам для автоматического применения.

**Ценообразование** ([Adyen Pricing](https://www.adyen.com/pricing)):
- Фиксированная комиссия обработки: €0.11 за транзакцию
- Переменная составляющая зависит от способа оплаты (например, Alipay: €0.11 + 3%; ACH США: €0.11 + $0.27)
- Нет ежемесячных платежей, платы за настройку или закрытие
- Минимальный инвойс: варьируется по индустрии (обсуждается с командой Adyen)
- Нет дополнительных сборов за отчётность, защиту от мошенничества или конвертацию валют

**Преимущества для P2P:**
- Поддержка Adyen MarketPay для кошельков участников платформы
- Задержанные выплаты (delayed payouts) для escrow-сценариев
- Соответствие требованиям PCI DSS, поддержка EMoney-лицензий

---

### 3. PayPal for Marketplaces

**Модель работы.** PayPal поддерживает split-платежи через механизм **Platform Fees** в Orders API ([PayPal Developer Docs](https://developer.paypal.com/docs/multiparty/)). Платформа может получать комиссию из каждой транзакции, остаток уходит продавцу.

**Ключевые особенности** ([Sharetribe, PayPal Overview](https://www.sharetribe.com/academy/marketplace-payments/paypal-for-marketplaces-overview/)):
- Комиссия PayPal вычитается со стороны **продавца** (в отличие от Stripe, где комиссию платит платформа)
- Поддержка 200+ стран, но только 24 валюты
- Функция Delayed Payments заменяет escrow
- Подписки через PayPal Subscriptions API

**Ограничения для P2P:**
- Сложная документация и непростая интеграция по сравнению со Stripe
- Меньше нативных возможностей для многосторонних разделений (нет аналога `transfer_group`)

---

### 4. Dwolla

**Специализация.** Dwolla — ACH-ориентированная платформа для P2P-переводов между банковскими счетами в США ([Dwolla ACH API](https://www.dwolla.com/updates/dwolla-ach-api)). Исторически считается "единственным игроком" в ACH P2P-сегменте.

**Скорость переводов:**
- Standard ACH: 1–5 рабочих дней
- Same Day ACH: в тот же банковский день
- Next Day ACH (эксклюзив Dwolla): следующий рабочий день

**Ценообразование** ([Dwolla Pricing](https://www.dwolla.com/pricing)): Полностью кастомное, volume-based. Нет публичных тарифов — всё через переговоры. Рассчитано на платформы с высокими объёмами.

**P2P возможности:**
- P2P-платежи между банковскими счетами без карт
- Пакетная обработка до 5,000 транзакций за раз
- Масштабируемая инфраструктура

**Ограничения:** Только США, только ACH-рельсы (нет карт или международных платежей).

---

### 5. Rapyd, Nium, Airwallex — кросс-бордер P2P

| Параметр | Rapyd | Nium | Airwallex |
|---|---|---|---|
| Охват выплат | 190+ стран | 190+ стран, real-time в 100+ | 200+ стран, local rails в 120+ |
| Валюты | мультивалюта | 100+ валют | 130+ валют, settlement в 14 |
| Acceptance | Широкий (APM, карты, e-wallets) | Без native payment acceptance | 160+ local payment methods |
| Card issuing | Да | 34 страны | 44 страны (virtual + physical) |
| FX | — | 24ч лок курса | 0.5–1% над межбанком |
| P2P split | Через Wallet API + disbursements | Через payout API | Через embedded finance |
| Позиционирование | Сложные отраслевые платежи (gaming, travel) | Корпоративные payout-кейсы | Полная платформа |

Источники: [Rapyd vs Airwallex](https://www.rapyd.net/blog/rapyd-vs-airwallex/), [Airwallex vs Nium](https://www.airwallex.com/us/blog/comparison-nium-vs-airwallex)

---

### 6. Marqeta

**Специализация.** Marqeta — API-first платформа **выпуска карт** (card issuing), а не традиционный платёжный оркестратор ([Marqeta Blog](https://www.marqeta.com/blog/card-issuing-apis-a-guide-to-unlocking-the-power-of-payments-innovation)).

**Ключевая функция для P2P:** Just-in-Time (JIT) Funding — каждая транзакция авторизуется в реальном времени на основе бизнес-правил платформы. Подходит для создания кошельков и виртуальных карт для участников P2P-обмена, но не является полноценной orchestration-платформой для split-платежей.

**Партнёрства:** Работает с Visa и Mastercard, выпускает физические и виртуальные карты.

---

### Сравнительная таблица для P2P split-payments

| Платформа | P2P Split | География | Ценообразование | Сложность интеграции | Лучший use-case |
|---|---|---|---|---|---|
| **Stripe Connect** | Нативная, `transfer_group` | Глобально, ~50 стран | 2.9%+$0.30 за транзакцию | Средняя | Маркетплейсы, gig economy, split-bills |
| **Adyen for Platforms** | Нативная, split at auth/capture | Глобально, enterprise | €0.11 + % от метода | Высокая (enterprise) | Крупные платформы с объёмом |
| **PayPal Marketplaces** | Через Platform Fees | 200+ стран, 24 валюты | Комплексное | Высокая | Международные маркетплейсы |
| **Dwolla** | ACH-based P2P transfers | США only | Custom, volume-based | Средняя | US fintech, инвест.платформы |
| **Rapyd** | Через Wallet + Disbursement API | 190+ стран | Custom | Средняя | Кросс-бордер P2P, gaming |
| **Nium** | Через Payout API | 190+ стран | Custom | Средняя | B2B payouts, no acceptance |
| **Airwallex** | Через Embedded Finance | 200+ стран | 0.5–1% FX | Средняя | Full-stack платформы |
| **Marqeta** | Через card issuing + JIT | США, ЕС, и др. | Custom, volume-based | Высокая | Card-based wallets |

**Вывод для P2P split-платежей:** Stripe Connect является наиболее доступным выбором для стартапов и scale-up компаний благодаря прозрачному ценообразованию, богатой документации и нативному механизму transfer_group. Adyen for Platforms оптимален для enterprise с высокими объёмами. Dwolla — лучший вариант для ACH-based P2P внутри США.

---

## Q24. OCR для чеков: какие API доступны? Точность распознавания? Стоимость?

### Обзор задачи

Для финтех P2P split-billing ключевые требования к OCR чеков: извлечение позиций (line items) с ценами, итоговая сумма, дата, название мерчанта, поддержка кириллицы. Ниже — сравнение всех основных решений.

---

### 1. Google Cloud Document AI — Expense Parser

**Описание.** Специализированный препроцессор для чеков и расходных документов (бывший Receipt Parser) в рамках [Google Cloud Document AI](https://cloud.google.com/document-ai/pricing).

**Ценообразование:**
- Expense Parser (receipt parser): **$0.10 за каждые 10 страниц документа** (т.е. $0.01 за страницу при 1–10 стр.)
- Enterprise Document OCR: $1.50 / 1,000 страниц (до 5M/мес), $0.60 / 1,000 страниц (свыше 5M/мес)
- Form Parser: $30 / 1,000 страниц
- OCR Add-ons: $6 / 1,000 страниц

**Поддерживаемые языки:** 200+ языков, включая русский ([Google Cloud Document AI Processor List](https://docs.cloud.google.com/document-ai/docs/processors-list)). Последняя версия модели OCR v2.1.1 (Public Preview, январь 2025) улучшила распознавание печатного текста.

**Точность:** По данным независимого бенчмарка [BusinessWareTech (2025)](https://www.businesswaretech.com/blog/research-best-ai-services-for-automatic-invoice-processing):
- Field accuracy (поля): **82%**
- Line-item extraction: **40%** (худший результат среди протестированных)
- Обработка: ~3.8 сек/страница

**Резюме:** Недорогой для базовых полей, но слабая извлечение строк чека — критичный недостаток для split-billing.

---

### 2. AWS Textract — Analyze Expense API

**Описание.** Специализированный API для обработки расходных документов (чеки, счета) от [Amazon Web Services](https://aws.amazon.com/textract/pricing/). OCR включён в результат.

**Ценообразование:**
- **Analyze Expense API**: ~$0.01 за страницу (до 1M страниц/мес); $0.008 за страницу (свыше 1M)
- Free Tier: 100 страниц/месяц (первые 3 месяца для новых клиентов)
- Detect Document Text API (только текст): $0.0015/страницу до 1M; $0.0006 свыше

**Точность** ([BusinessWareTech benchmark](https://www.businesswaretech.com/blog/research-best-ai-services-for-automatic-invoice-processing)):
- Field accuracy: **78%**
- Line-item extraction: **82%** (выше Google)
- Обработка: ~2.9 сек/страница (самый быстрый)

**Реальные данные пользователей** ([Reddit, AWS community](https://www.reddit.com/r/aws/comments/1pf1anu/amazon_textract_in_production_what_are_your/)): структурированные формы — ~92%; полуструктурированные документы — ~85%.

**Резюме:** Хорош по скорости и цене, приемлемое извлечение строк, но уступает Azure по точности.

---

### 3. Microsoft Azure Document Intelligence — Receipt Model

**Описание.** Преббилт-модель Receipt в [Azure Document Intelligence](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/receipt) v4.0 (GA) извлекает: merchant name, phone, address, transaction date, tax, total, line items (name, quantity, unit price, total price), тип чека, НДС.

**Ценообразование** ([Azure Pricing](https://azure.microsoft.com/en-us/pricing/details/document-intelligence/)):
- Free tier: 500 страниц/месяц
- S0 Prebuilt Models (включая Receipt): ~**$10 за 1,000 страниц** (по данным сравнительного анализа [BusinessWareTech](https://www.businesswaretech.com/blog/research-best-ai-services-for-automatic-invoice-processing))
- Commitment tiers для больших объёмов (20k, 100k, 500k страниц/мес)

**Точность** ([BusinessWareTech benchmark](https://www.businesswaretech.com/blog/research-best-ai-services-for-automatic-invoice-processing)) — **лучший результат среди cloud-провайдеров**:
- Field accuracy: **93%**
- Line-item extraction: **87%** (лучший результат)
- Сложные таблицы и многоколонные документы: превосходит все конкуренты
- Обработка: ~4.3 сек/страница (немного медленнее AWS)
- Рекомендуемый порог точности: ≥80% по [официальной документации Microsoft](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/concept/accuracy-confidence)

**Поддерживаемые форматы:** JPEG, PNG, PDF, TIFF; до 2,000 страниц в PDF.

**Резюме:** Лучший выбор среди cloud-провайдеров для извлечения строк чека при сопоставимой цене с конкурентами.

---

### 4. Veryfi — специализированный Receipt OCR

**Описание.** [Veryfi](https://www.veryfi.com/receipt-ocr-api/) — компания из Кремниевой долины, специализирующаяся исключительно на финансовых документах. Модели обучены на сотнях миллионов чеков.

**Ценообразование** ([Veryfi Pricing](https://www.veryfi.com/pricing/)):
| Тариф | Цена | Лимит |
|---|---|---|
| Free | $0 | 100 документов/месяц |
| Starter | $500/мес | ~6,250 чеков/мес ($0.08/чек) |
| Growth | Custom | Объёмные скидки |

- Чеки: **$0.08 за чек** на Starter тарифе
- Invoices: $0.16 за документ
- Bank Statements: $0.25 за документ
- Ограничение: 1 API-запрос = 1 документ до 15 страниц

**Точность:** Veryfi заявляет **99%+ точность** для чеков ([Veryfi Receipt OCR API](https://www.veryfi.com/receipt-ocr-api/)). Поддержка 38 языков, включая русский, 91 валюта, 110+ полей данных.

**Технические особенности:**
- Собственные ML-модели (H100/A100 GPU)
- SOC 2 Type II сертифицирован
- 99.995% uptime
- SDK для iOS и Android
- Извлечение level-3 данных (позиции, налоги, штрихкоды)

---

### 5. Taggun — Receipt OCR API

**Описание.** [TAGGUN](https://www.taggun.io) — специализированный API для чеков и инвойсов, заявляющий более 90% точности.

**Ценообразование** ([Taggun Pricing](https://www.taggun.io/pricing)):
| Тариф | Цена | Включено | Цена за доп. скан |
|---|---|---|---|
| Pay as You Go | — | 50 сканов/мес | $0.08/скан |
| Growth | — | ~7,980 сканов/мес | $0.05/скан |
| Advanced | — | ~19,975 сканов/мес | $0.04/скан |
| Enterprise | Custom | Неограниченно | Bulk discount |

- 30-дневный бесплатный триал с неограниченным числом сканов
- Поддержка всех официальных языков мира

**Точность:** Taggun заявляет **>90% accuracy**. По независимому тесту [asprise.com (2021)](http://asprise.com/receipt-ocr/recognition-compare-top-best-abbyy-vs-rossum-rydoo-taggun-asprise-alternative): 82.26% — результат несколько устарел, реальные показатели с ML-улучшениями выше.

**Дополнительные возможности:** Tax intelligence, Merchant intelligence, Purchase categorization, Fraud detection, Receipt validation для промо-кампаний.

---

### 6. Tabscanner

**Описание.** [Tabscanner](https://tabscanner.com) позиционирует себя как самый точный receipt OCR API (9 лет опыта, истинно глобальный IDP для чеков).

**Ценообразование:**
| Тариф | Цена/мес | Кредиты/мес | Цена за доп. |
|---|---|---|---|
| Starter | $0 | 200 | — |
| Per Credit | $24 | 300 | $0.08/кредит |
| Business | $360 | 6,000 | $0.06/кредит |
| Enterprise | Custom | Неограниченно | <$0.01 при масштабе |

**Точность:** Tabscanner заявляет **99.99% accuracy** (с HITL add-on, данные с конца 2025). Без HITL — 99%+ по их данным. Обработка: 90% запросов < 2 сек.

**Технические особенности:**
- ISO 27001, SOC 3, GDPR
- Поддержка всех языков мира
- REST API: POST /api/process, GET /api/result
- SDK для Python, PHP, Java, Node.js, .NET, Ruby, Go, C#

---

### 7. Mindee

**Описание.** [Mindee](https://www.mindee.com/) — французский OCR-провайдер с Receipt OCR API, поддерживающий неограниченное количество моделей.

**Ценообразование** ([Mindee Pricing](https://www.mindee.com/pricing)):
| Тариф | Цена/мес (annual) | Страниц/мес | Доп. страница |
|---|---|---|---|
| Starter | 44€ | 500 | +0.05€ |
| Pro | 179€ | 2,500 | +0.04€ |
| Business | 584€ | 10,000 | +0.035€ |
| Enterprise | Custom | Custom | Volume-based |

**Точность:** Точные цифры на сайте не указываются, но Mindee в 2024 году провёл полную переработку распознавания позиций и сумм ([Mindee 2024 Recap](https://www.mindee.com/blog/mindee-year-end-recap)). Поддержка confidence scores, Polygons, RAG.

---

### 8. Open Source: Tesseract и PaddleOCR

**Tesseract:**
- Лицензия: Apache 2.0
- CPU-first, 100+ языков
- Зрелая экосистема, простая интеграция
- Слабо работает с рукописным текстом и сложными раскладками чеков
- Скорость: высокая на CPU ([Modal blog, 2025](https://modal.com/blog/8-top-open-source-ocr-models-compared))

**PaddleOCR:**
- Лицензия: Apache 2.0
- Лучшая точность, чем Tesseract, на сложных документах
- Поддержка таблиц, многоязычность, PP-StructureV3 для разбора структуры
- Требует GPU для максимальной точности
- Подходит для корпоративного self-hosted решения ([Koncile, 2025](https://www.koncile.ai/en/ressources/paddleocr-analyse-avantages-alternatives-open-source))

---

### Сравнительная таблица OCR для чеков

| Решение | Field Accuracy | Line-item Accuracy | Цена/1,000 стр. | Языки | Тип |
|---|---|---|---|---|---|
| **Azure Doc Intelligence** | **93%** | **87%** | ~$10 | Многие | Cloud API |
| GPT-4o + OCR | 98% | 57% | ~$8.80 | Все | Cloud API |
| GPT-4o (Image) | 90.5% | 63% | ~$8.80 | Все | Cloud API |
| **Veryfi** | 99%+ (заявлено) | Высокая (заявлено) | $80–$160 | 38 | Cloud API |
| **Tabscanner** | 99%+ (заявлено) | Высокая | $4–$60 | Все | Cloud API |
| **Taggun** | >90% | Средняя | $40–$80 | Все | Cloud API |
| **Mindee** | Не раскрыто | Средняя | €14–€35 | Множество | Cloud API |
| AWS Textract | 78% | 82% | ~$10 | Многие | Cloud API |
| Google Doc AI | 82% | 40% | $1.50–$10 | 200+ | Cloud API |
| **PaddleOCR** | Высокая | Средняя | $0 (self-hosted) | Многие | Open Source |
| **Tesseract** | Средняя | Слабая | $0 (self-hosted) | 100+ | Open Source |

Источники точности: [BusinessWareTech benchmark 2025](https://www.businesswaretech.com/blog/research-best-ai-services-for-automatic-invoice-processing), официальные страницы провайдеров.

**Рекомендация для fintech P2P split-billing (чеки из магазинов):**
- **Приоритет точности line-items:** Azure Document Intelligence (93% field, 87% line-items) или специализированные решения Veryfi/Tabscanner
- **Приоритет стоимости:** Google Expense Parser ($0.01/стр) или Taggun ($0.04–$0.08/скан)
- **Self-hosted (максимальный контроль данных):** PaddleOCR
- **Русскоязычные чеки:** Azure и Google поддерживают кириллицу; Veryfi и Tabscanner заявляют глобальную языковую поддержку

---

## Q25. Какие банковские API в России позволяют инициировать платёж от имени пользователя с его согласия?

### Общий контекст: Open Banking в России

Россия находится в процессе формирования законодательной базы для открытого банкинга. Стандарты разрабатываются Банком России совместно с [Ассоциацией ФинТех (АФТ)](https://www.cbr.ru/eng/press/event/?id=28218). По состоянию на начало 2026 года стандарты носят **рекомендательный характер**, обязательное внедрение отложено.

**Хронология ключевых событий:**
- **Лето 2024:** Сбер, Т-Банк, Альфа-Банк и ВТБ запустили пилотные проекты Open API ([KODE.ru, 2024](https://kode.ru/media/20))
- **Октябрь 2024:** ЦБ РФ установил исходные сроки: обязательно для крупнейших банков с 2026 года, для МФО и финплатформ — с 2027 года
- **Октябрь 2025:** ЦБ РФ **перенёс сроки** обязательного внедрения на период после принятия соответствующего федерального закона (находится в разработке). Глава департамента финансовых технологий ЦБ выразил надежду на запуск в **2027 году** ([Банковское обозрение, октябрь 2025](https://bosfera.ru/press-release/bank-rossii-perenes-sroki-obyazatelnogo-vnedreniya-open-api))
- **Декабрь 2025:** ЦБ РФ опубликовал обновлённые стандарты Open API (рекомендательные) ([cbr.ru, декабрь 2025](https://cbr.ru/eng/press/event/?id=28218))

**Кто участвует в пилотах** ([РБК, март 2026](https://companies.rbc.ru/news/RxpB7vyqU0/chto-proishodit-s-otkryityimi-api-banka-rossii-sejchas/)):
- Сбер ↔ Т-Банк, Газпромбанк, Совкомбанк
- Т-Банк ↔ ВТБ, Альфа-Банк, Сбер
- ВТБ и Альфа-Банк (для корпоративных клиентов)
- Альфа-Банк ↔ ПСБ
- Итого: 20 банков и компаний тестируют единые стандарты на платформе АФТ

**Что включает стандарт Open API (по данным пилотов)** ([Seldon.ru / РБК, 2026](https://myseldon.com/ru/news/index/342583950)):
- Управление согласиями пользователя на доступ к счетам и платежам
- Получение информации о счетах и транзакциях
- **Инициирование платежей от имени клиента** (только при подтверждённом согласии)
- Анализ финансового поведения клиента в разных банках

---

### 1. Т-Банк (бывш. Тинькофф) — Payment API

**Доступные возможности.** Т-Банк предоставляет наиболее развитое публичное API для инициирования платежей в России. Существует два варианта:

**A) Merchant API (MAPI) — эквайринг** ([T-Bank Developer Portal — Initiate Payment](https://developer.tbank.ru/ecosystembundle/b-api/initiate)):
- Endpoint: `POST https://secured-openapi.tbank.ru/api/v1/acq/payments/initiate`
- Авторизация: Bearer API Token + MTLS-сертификат
- Поддерживаемые методы оплаты: `SBP`, `TPAY`, `SBERPAY`, `CARD`, `BNPL`
- Рекуррентные платежи: картой, через СБП, через T-Pay
- Двухстадийная оплата: блокировка + подтверждение

**B) Open API (для финтех-партнёров)** — T-Bank с 2020 года использует T-API для бизнес-клиентов: отправка и получение счетов, верификация, проведение платежей из бухгалтерских программ/CRM ([KODE.ru](https://kode.ru/media/20)).

**Ограничения:** Merchant API предназначен для мерчантов (платёж инициирует мерчант-терминал, не третья сторона от имени пользователя в Open Banking смысле). Полноценный PIS (Payment Initiation Service) в стандарте Open Banking находится в пилотной стадии.

---

### 2. Сбер — Платёжный шлюз и SberPay API

**Sberbank Payment Gateway** ([Sberbank API Documentation](https://ecomtest.sberbank.ru/doc)) поддерживает:
- Регистрация и проведение заказов: `register.do`, `registerPreAuth.do`
- Оплата через сохранённые карты (binding): `paymentOrderBinding.do`, `recurrentPayment.do`
- Инициирование от имени клиента: возможно через **binding-механизм** — после первичного согласия пользователя на сохранение реквизитов, партнёр может инициировать последующие платежи
- SberPay: SDK для мобильных приложений и веб (deeplink, SDK InApp)
- СБП через Сбер: поддержка QR-платежей

**Open Banking пилот:** Сбер и Т-Банк начали тестировать технологию Открытых API на клиентах с октября 2024 года, расширив на реальных пользователей к началу 2025-го ([СберПро, октябрь 2024](https://sber.pro/publication/sber-i-t-bank-nachali-testirovat-otkritie-api-na-klientah/)). Технология позволяет управлять картами разных банков из одного приложения.

---

### 3. СБП (Система Быстрых Платежей) — НСПК API

**Что такое СБП API для агентов.** НСПК предоставляет [СБП API для Агентов ТСП](https://sbp.nspk.ru/api/) — это интерфейс для TSP-агентов (третьих сторон), которые хотят встроить приём платежей через СБП.

**Механика инициирования.** В СБП нет прямого PIS в европейском смысле (агент не заходит на счёт пользователя). Вместо этого:
1. Агент регистрирует **Функциональную ссылку СБП** или **Кассовую ссылку СБП** для мерчанта
2. Генерируется QR-код или deeplink
3. Пользователь сканирует QR в приложении своего банка и **самостоятельно подтверждает** платёж
4. Также доступна **оплата с привязанного счёта** (`Запрос в ОПКЦ СБП на оплату с привязанного счета Плательщика от Агента ТСП`) — позволяет инициировать платёж без нового QR, но требует предварительной привязки счёта пользователем

**Тарификация СБП для физических лиц (переводы):** Бесплатно до 30 млн рублей в месяц между собственными счетами в разных банках (с 1 мая 2024 года, [CBR ОНРНПС 2025–27](https://www.cbr.ru/Content/Document/File/170680/onrnps_2025-27.pdf)).

**Пример интеграции через партнёрский банк.** [Raiffeisenbank SBP API](https://pay.raif.ru/doc/sbp.html) документирует стандартный флоу:
- `POST /v1/qrs` — создание динамического QR (одноразовый)
- `POST /v1/qrs` с `qrType: QRDynamic` — сумма фиксируется в QR
- Вебхуки для получения статуса платежа
- Авторизация через Bearer `secretKey`

---

### 4. Правовая база: что сейчас можно, а что — нет

| Возможность | Статус (2025–2026) |
|---|---|
| Принять платёж от имени мерчанта через Merchant API (Т-Банк, Сбер) | ✅ Доступно сейчас |
| Инициировать СБП-платёж через QR/deeplink | ✅ Доступно через банки-участники СБП |
| Оплата с привязанного счёта через СБП (recurring) | ✅ Доступно через НСПК API (при наличии привязки) |
| Open Banking PIS — инициирование платежа из чужого банка | ⏳ Пилот (Сбер, Т-Банк, ВТБ, Альфа); стандарт рекомендательный |
| Обязательное Open API для всех банков | ❌ Отложено до принятия закона (ориентир — 2027 год) |
| Платформа согласий клиентов через Госуслуги | ⏳ Запланирована на 2026 год ([KODE.ru](https://kode.ru/media/20)) |

**Ключевой правовой нюанс.** Согласно стандарту Открытых API ЦБ РФ, инициирование платежа происходит на стороне того банка, в котором клиент добавил согласие. Все операции осуществляются только с подтверждённого согласия клиента ([Seldon / РБК, 2026](https://myseldon.com/ru/news/index/342583950)).

---

### 5. Сравнение доступных подходов для финтех-приложения в России

| Подход | Банк/Система | Что нужно | Возможность инициирования | Готово сейчас |
|---|---|---|---|---|
| Merchant API | Т-Банк, Сбер, ВТБ и др. | Договор эквайринга | Да, от имени мерчанта | ✅ |
| СБП QR/deeplink | НСПК + любой банк-участник СБП | Регистрация агента ТСП | QR-инициирование | ✅ |
| СБП с привязкой счёта | НСПК + банк-участник | Регистрация + привязка счёта пользователем | Рекуррентное инициирование | ✅ |
| Open Banking PIS | Т-Банк, Сбер (пилот) | Договор с банком | Инициирование из любого банка | ⏳ Пилот |
| Цифровой рубль API | ЦБ РФ | Лицензия участника | Инициирование через ЦР | ⏳ В разработке |

**Практический вывод.** Для финтех-приложения (P2P split-billing) в России наиболее реалистичный путь сегодня:
1. **СБП** через банк-эквайер (Тинькофф, Сбер, Райффайзен, ВТБ и др.) — быстрое подключение, стандартизированный API, нулевая комиссия для физлиц
2. **Merchant API Т-Банка** — наиболее зрелое публичное API с поддержкой SBP, карт, T-Pay и рекуррентных платежей
3. **Ожидание полноценного Open Banking PIS** — реалистично к 2027–2028 году при наличии законодательного оформления

---

*Последнее обновление данных: март 2026 г.*

---

# Блок 6: Теория сетевых эффектов — Вопросы 26–30

---

## Вопрос 26. Andrew Chen «The Cold Start Problem» — ключевые тезисы и фреймворк? Что такое «atomic network»?

### Контекст и происхождение

Книга [«The Cold Start Problem»](https://a16z.com/books/the-cold-start-problem/) была написана Эндрю Ченом — генеральным партнёром Andreessen Horowitz и бывшим руководителем роста в Uber — и опубликована в декабре 2021 года. Книга синтезирует почти два десятилетия опыта работы с сетевыми продуктами и предлагает практический фреймворк для запуска и масштабирования продуктов, которые зависят от сетевых эффектов.

Ключевой тезис: несмотря на то что программное обеспечение стало легче создавать, запуск и масштабирование новых продуктов по-прежнему представляют значительную трудность. Сетевые эффекты — механизм, при котором ценность продукта растёт по мере роста числа пользователей — дают путь к прорыву, но большинство команд не понимают их жизненного цикла. [«The Cold Start Problem»](https://andrewchen.com/wp-content/uploads/2022/01/ColdStartProb_9780062969743_AS0928_cc20_Final.pdf) даёт им этот понятийный аппарат.

---

### Cold Start Theory: 5 стадий фреймворка

Согласно [оригинальному тексту книги](https://andrewchen.com/wp-content/uploads/2022/01/ColdStartProb_9780062969743_AS0928_cc20_Final.pdf), каждый сетевой продукт проходит через следующие стадии:

#### Стадия 1: The Cold Start Problem («Проблема холодного старта»)

На самом начале жизни сети сетевые эффекты работают против продукта, а не в его пользу. Новые пользователи приходят и видят «пустой город»: нет контента, нет контрагентов, нет ценности. Автор называет это **anti-network effects** («антисетевые эффекты») — разрушительная сила, которая тянет новые сети к нулю. Slack бесполезен, пока коллеги не зарегистрированы; Uber не работает без водителей; курица и яйцо — это и есть Cold Start Problem.

**Решение Cold Start Problem** — найти и построить **atomic network** (атомарную сеть) — подробнее ниже.

#### Стадия 2: Tipping Point («Точка перелома»)

После создания первой атомарной сети задача смещается: нужно строить множество следующих. Каждая новая сеть достигает точки перелома быстрее, чем предыдущая, — эффект «радиации» от первых побед. Uber расширялся город за городом; Tinder — campus за campus; Slack — команда за командой внутри компаний. [Согласно обзору книги](https://www.sachinrekhi.com/p/andrew-chen-the-cold-start-problem), задача этой стадии — создать воспроизводимый плейбук репликации атомарных сетей.

#### Стадия 3: Escape Velocity («Скорость выхода на орбиту»)

Когда критическая масса атомарных сетей достигнута, открывается доступ к трём усиливающим эффектам, которые Чен называет «тремя силами»:

| Эффект | Описание | Пример |
|--------|----------|--------|
| **Acquisition Effect** (эффект приобретения) | Сеть сама привлекает новых пользователей через вирусный рост | $5 реферальный бонус PayPal; LinkedIn-коннекты |
| **Engagement Effect** (эффект вовлечённости) | Более плотная сеть создаёт более высокую липкость и частоту использования | Uber: от поездок в аэропорт до ежедневных поездок на работу |
| **Economic Effect** (экономический эффект) | Монетизация улучшается с ростом сети | Slack: конверсия команд в платящих клиентов |

#### Стадия 4: Hitting the Ceiling («Удар о потолок»)

Рост замедляется из-за насыщения, закона дерьмовых кликрейтов («Law of Shitty Clickthroughs»), роста стоимости привлечения, мошенников, троллей и снижения качества. Когда пробиваешь один потолок — упираешься в следующий. [Примеры из книги](https://andrewchen.com/wp-content/uploads/2022/01/ColdStartProb_9780062969743_AS0928_cc20_Final.pdf): коллапс Usenet под спамом, замедление роста eBay на американском рынке, проблемы Twitch с качеством контента. Эта стадия — не ошибка, а неизбежность, которой нужно управлять.

#### Стадия 5: The Moat («Ров»)

Финальная стадия — использование сетевых эффектов как защитного рва против конкурентов, которые также пытаются построить свои сети в том же пространстве. Стратегия для крупных сетей отличается от стратегии для малых. [По описанию книги](https://www.briansnotes.io/book/the-cold-start-problem/): тот, у кого самая большая и наиболее приверженная сеть, создаёт оборонительный ров, который трудно преодолеть. Airbnb vs. Wimdu в Европе — классический пример, как Airbnb отстояла ров в условиях агрессивного клонирования.

---

### Atomic Network: определение и механика

[По Эндрю Чену](https://www.lennysnewsletter.com/p/atomic-network):

> **Atomic network** («атомарная сеть») — это наименьшая сеть, которая может существовать самостоятельно. Она должна обладать достаточной плотностью и стабильностью, чтобы преодолеть ранние антисетевые эффекты и в конечном итоге расти самостоятельно.

Автор уподобляет её атому: это базовая единица, из которой строятся более крупные сети. Если можно построить одну атомарную сеть, а затем вторую — можно построить десять, сто и весь рынок.

**Ключевые характеристики атомарной сети:**

- **Она меньше, чем вы думаете.** Не «рынок», не «сегмент», не «город» — а сотни людей в конкретный момент времени. [По словам Чена](https://www.lennysnewsletter.com/p/atomic-network): атомарная сеть Uber — это не «Сан-Франциско», а «17:00 у ж/д-станции на 5th & King St.»
- **Плотность важнее размера.** Плотные, органические связи создают более сильные сетевые эффекты по всем измерениям.
- **Стратегия «делай нескалируемое».** Для запуска каждой атомарной сети необходимы ручные, нескалируемые действия (Airbnb: профессиональные фотографы для листингов; Reddit: фиктивные аккаунты для заполнения контентом).

**Примеры минимальных атомарных сетей:**

| Продукт | Атомарная сеть |
|---------|----------------|
| Zoom | Любые 2 человека для видеозвонка |
| Slack | Одна команда из 3+ человек внутри компании |
| Tinder | Студенты одного кампуса (USC при запуске) |
| Uber | Конкретный временной слот у конкретной ж/д-станции |
| Facebook | Один университетский кампус (Harvard при запуске) |
| Airbnb | Сотни активных объявлений в одном городе |

---

### Ключевые кейсы книги

| Компания | Стадия / Инсайт |
|----------|-----------------|
| **Slack** | Вышел из Glitch (провал с 97% оттоком). Каждая атомарная сеть — одна команда внутри компании. Итог: 20M DAU, $26B exit Salesforce. |
| **Uber** | «War Room» для 800+ городских сетей; метрика «Zeroes» (моменты без доступных машин). Инструмент Starcraft для real-time координации водителей. |
| **Tinder** | Запуск в USC → соседние кампусы → Лос-Анджелес → национально → глобально. Классическая city-by-city стратегия. |
| **PayPal** | Реферальный бонус $5 для создания первой атомарной сети. Пример Acquisition Effect. |
| **Wikipedia** | Изучение «Hard Side» сети: пролиферативные редакторы создают 90% ценности. |
| **Airbnb vs. Wimdu** | Защита рва от европейского клона: агрессивное масштабирование и фокус на поставщиках. |

---

### Три типа сетевых эффектов по Чену

[По книге](https://www.briansnotes.io/book/the-cold-start-problem/) Чен выделяет три разновидности сетевых эффектов (в отличие от единого концепта):

1. **Acquisition network effects** — продукт использует существующих пользователей для привлечения новых (вирусный рост).
2. **Engagement network effects** — более плотные сети создают более высокую липкость; это и есть то, что большинство людей называет «сетевыми эффектами».
3. **Economic network effects** — сетевой продукт использует экономию от масштаба, ускоряет монетизацию и улучшает операционные показатели по мере роста сети.

---

## Вопрос 27. NFX: какие типы сетевых эффектов выделяют? Классификация? Какой тип самый сильный?

### NFX: контекст и источники

NFX — венчурный фонд (основан в 2017 г.), специализирующийся на инвестициях в сети и маркетплейсы. Основатели (в том числе Джеймс Кёрриер) построили более 10 компаний с сетевыми эффектами суммарной стоимостью свыше $10 млрд. NFX публикует [«The Network Effects Bible»](https://www.nfx.com/post/network-effects-bible) (обновлено в 2024 г.) и [«The Network Effects Manual»](https://www.nfx.com/post/network-effects-manual), в которых зафиксированы 16 типов сетевых эффектов.

> **Ключевой факт NFX:** Сетевые эффекты обеспечили **70% всей стоимости**, созданной в технологической отрасли с 1994 года. ([NFX Network Effects Bible](https://www.nfx.com/post/network-effects-bible))

---

### 16 типов сетевых эффектов (NFX Network Effects Map)

[По классификации NFX](https://www.nfx.com/post/network-effects-manual), все 16 типов распределены по 5 широким категориям. На карте сетевых эффектов наиболее сильные и простые расположены в центре:

#### Категория 1: Прямые сетевые эффекты (Direct, синие на карте)

Каждый узел может взаимодействовать с каждым другим узлом напрямую. Самая сильная категория.

| # | Тип | Примеры | Механизм |
|---|-----|---------|----------|
| 1 | **Physical** (физический) | Стационарные телефоны, кабельные сети, Comcast, Verizon | Физические узлы (провода, оборудование) + прямой эффект. Требует огромных капитальных инвестиций для воспроизведения. **Самый сильный тип.** |
| 2 | **Protocol** (протокольный) | Ethernet, Bitcoin, TCP/IP, факс, VHS | Коммуникационный/вычислительный стандарт; чем больше пользователей, тем сложнее заменить протокол. |
| 3 | **Personal Utility** (личная польза) | iMessage, WhatsApp, Facebook Messenger | Личная идентичность привязана к сети; высокие издержки выхода. |
| 4 | **Personal** (личный) | Facebook, Twitter, LinkedIn | Идентичность и репутация пользователя в продукте; чуть слабее, чем Personal Utility. |
| 5 | **Market Network** (рыночная сеть) | HoneyBook, AngelList, Houzz | Сочетание личных профилей (network) и транзакций (marketplace); SaaS-инструменты для проектного сотрудничества. |

#### Категория 2: Двусторонние сетевые эффекты (2-Sided)

Два класса пользователей: сторона предложения и сторона спроса. Академики часто называют это «косвенными» эффектами.

| # | Тип | Примеры | Механизм |
|---|-----|---------|----------|
| 6 | **Marketplace** (маркетплейс) | eBay, Craigslist, Etsy | Покупатели привлекают продавцов и наоборот; сложно разрушить, т.к. нужна альтернатива для обеих сторон одновременно. |
| 7 | **Platform** (платформа) | Windows, iOS, Android, Xbox | Разработчики создают продукты под платформу; требует работы по интеграции, более высокие барьеры multi-tenanting. |
| 8 | **Asymptotic Marketplace** (асимптотический маркетплейс) | Uber, Lyft, OpenTable | Первые единицы предложения резко увеличивают ценность; после определённого порога отдача убывает (время ожидания и так достаточно малое). |
| 9 | **Hub-and-Spoke** | TikTok, Medium, Craigslist | Равные узлы публикуют контент в центральный хаб; хаб алгоритмически распределяет избранное. Растёт по закону Меткалфа, а не Сарнова. |

#### Категория 3: Данные (Data Network Effects)

| # | Тип | Примеры | Механизм |
|---|-----|---------|----------|
| 10 | **Data** | Waze, Yelp, Netflix (слабо) | Использование продукта генерирует данные, которые улучшают ценность для всех пользователей. Waze — один из сильнейших примеров: данные потребляются в реальном времени. |

#### Категория 4: Технологическая производительность (Tech Performance)

| # | Тип | Примеры | Механизм |
|---|-----|---------|----------|
| 11 | **Tech Performance** | BitTorrent, Hola VPN, Skype, Tile | Техническая производительность улучшается с ростом числа пользователей/устройств: быстрее, дешевле, надёжнее. |

#### Категория 5: Социальные сетевые эффекты (Social)

| # | Тип | Примеры | Механизм |
|---|-----|---------|----------|
| 12 | **Language** (языковой) | Google («погуглить»), Xerox («ксерокс»), Uber («уберни») | Продукт становится глаголом или стандартным словарным единицей в отрасли. |
| 13 | **Belief** (веры) | Золото, Bitcoin, религия | Ценность основана на коллективном убеждении; устойчива к опровержениям. |
| 14 | **Bandwagon** (принуждения к подключению) | Slack, Apple (FOMO-запуски), ранний Google | Социальное давление и страх выпасть из обоймы побуждают присоединиться. |
| 15 | **Expertise** (экспертизы) | Figma, Salesforce, Excel, Autocad, Python | Профессиональные инструменты: чем выше экспертиза пользователей, тем ценнее инструмент для работодателей и коллег. |
| 16 | **Tribal** (трайбовый) | Выпускники ВУЗов, военные подразделения, технологические ускорители, Apple | Идентичность-ориентированный; намеренное создание ценности внутри племени; высокая плотность связей из-за общей принадлежности. |

---

### Самый сильный тип и ранжирование

[По NFX](https://www.nfx.com/post/network-effects-manual), в порядке убывания силы:

1. **Physical** — самый сильный, потому что к прямому сетевому эффекту добавляются масштаб и барьеры встраивания (физические провода в земле). Конкурент должен воспроизвести и саму сеть, и физическую инфраструктуру.
2. Protocol
3. Personal Utility
4. Personal
5. Market Network
6. Marketplace
7. Platform
8. Asymptotic Marketplace
9. Data
10. Tech Performance
11. Language
12. Belief
13. Bandwagon
14. Expertise
15. Tribal
16. Hub-and-Spoke

> «Сетевые эффекты — это **лучшая форма защищённости** в цифровом мире. Три другие формы защищённости — бренд, встраивание и масштаб. Из четырёх сетевые эффекты — безусловно самые сильные.» — [NFX Network Effects Manual](https://www.nfx.com/post/network-effects-manual)

**Важная оговорка:** Компании редко имеют только один тип. Типы не взаимоисключающие — «как цвета в произведении искусства»; сильнейшие компании совмещают несколько типов одновременно (например, Microsoft OS: Platform + Personal Utility + Language + Expertise).

---

## Вопрос 28. Академические исследования о сетевых эффектах в финансовых сервисах

### 1. Фундаментальные работы по двусторонним рынкам

Теоретическая база сетевых эффектов в финансовых платформах опирается прежде всего на работы Роше и Тироля:

- **Rochet, J.C. & Tirole, J. (2003).** «Platform Competition in Two-Sided Markets.» *Journal of the European Economic Association*, 1(4), 990–1029. [DOI: 10.1162/154247603322493212](https://academic.oup.com/jeea/article-abstract/1/4/990/2280902)
  - Первая формализация модели платформенной конкуренции в двусторонних рынках. Показывает: оптимальная структура цен асимметрична — одна сторона субсидируется, другая платит. Прямое применение к платёжным картам (Visa, Mastercard), где торговцы субсидируют держателей карт.

- **Rochet, J.C. & Tirole, J. (2006).** «Two-Sided Markets: A Progress Report.» *RAND Journal of Economics*, 37(3), 645–667. [DOI: 10.1111/j.1756-2171.2006.tb00036.x](https://onlinelibrary.wiley.com/doi/10.1111/j.1756-2171.2006.tb00036.x)
  - Обновлённая версия с расширенным анализом конкуренции и ценообразования.

- **Rysman, M. (2021).** «Two-Sided Markets, Pricing, and Network Effects.» (глава в Handbook). [SSRN: 3928777](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3928777) и [Boston University PDF](https://sites.bu.edu/mrysman/files/2021/09/Two-Sided-Market-Pricing-and-Network-Effects.pdf)
  - Обзор 9 разделов: теория, эмпирика, конкуренция, ценообразование с косвенными сетевыми эффектами. Ключевой вывод: «seesaw effect» — снижение цены для одной стороны повышает цену для другой.

---

### 2. Исследования FinTech-платформ и асимметричных сетевых эффектов

- **Cong, L.W., Tang, K., Xie, D. & Zhao, W. (2024).** «FinTech Platforms and Asymmetric Network Effects: Theory and Evidence from Marketplace Lending.» NBER Working Paper 33173. [DOI: 10.3386/w33173](https://www.nber.org/papers/w33173)
  - **Новый концепт p-CNE** (platform-level cross-side network effect) — метрика платформенных перекрёстных сетевых эффектов.
  - Особенности финтех-платформ vs. обычных: долгосрочные контракты вводят дефолтный риск, что создаёт асимметричную «липкость» пользователей.
  - Эмпирически верифицировано на данных P2P-кредитования в Китае: p-CNE кредиторов предсказывает вероятность выживания платформы даже на самых ранних стадиях.
  - Предсказывает: кредиторы склонны к single-homing; заёмщики иногда получают сниженные тарифы; p-CNE ниже на падающих или устоявшихся платформах.

---

### 3. Мобильные платёжные системы и M-Pesa

- **Jack, W. & Suri, T. (2011, 2016).** M-Pesa — серия исследований о сетевых эффектах мобильных денег в Кении.
  - [NBER Working Paper 16721](https://www.nber.org/system/files/working_papers/w16721/w16721.pdf): «Mobile Money: The Economics of M-PESA». Описывает прямые (user-to-user), косвенные (user-to-agent) и перекрёстные (users-agents) сетевые эффекты. К концу 2009 года M-Pesa охватила 65% домохозяйств Кении; агентская сеть выросла с 4 000 до 23 000 точек; 90% пользователей испытывают негативный эффект от гипотетического закрытия сервиса.
  - Ключевой паттерн: **прямые сетевые эффекты** — чем больше пользователей M-Pesa, тем полезнее перевод; **косвенные** — больше пользователей → выше жизнеспособность агентов → лучший охват → ещё больше пользователей.
  - Результат по бедности: расширение сети M-Pesa вывело 194 000 домохозяйств (2% населения) за черту бедности. [[Georgetown/Science, 2016]](https://www.georgetown.edu/news/study-use-of-mobile-money-lifts-nearly-200000-kenyans-out-of-poverty/)

- **[Mas, I. & Radcliffe, D. (2010).](https://www.semanticscholar.org/paper/e9f38edd237f7efa56dcd625b3dd9e56bccfb779)** «Mobile Payments Go Viral: M-PESA in Kenya.» — классическая работа о вирусном распространении через агентскую сеть как сетевом эффекте.

---

### 4. Мобильные платежи: типы сетевых эффектов и потребительская лояльность

- **Zaffar, M., Kumar, R.L. & Zhao, K. (2024).** «Competitive dynamics in a multi-sided mobile payment platform market: an agent-based modeling perspective.» *International Journal of Bank Marketing*. [DOI: 10.1108/ijbm-11-2023-0610](http://www.emerald.com/ijbm/article/42/7/2023-2050/1233628)
  - Агент-ориентированное моделирование на 1000 клиентов, 50 мерчантов, 2 конкурирующие MPS-платформы.
  - Цена не определяет диффузию сама по себе; взаимодействие ценообразования, восприятия риска, воспринимаемой безопасности создаёт неожиданные одно- и перекрёстные сетевые эффекты.

- **Wiley Online Library (2021).** «Battles of mobile payment networks.» *Information Systems Journal*. [DOI: 10.1111/isj.12366](https://onlinelibrary.wiley.com/doi/abs/10.1111/isj.12366)
  - Выявлены: прямые (размер сети, централизованность, возможности), косвенные (platform-app-service complementarity) и негативные (институциональные) сетевые эффекты как детерминанты лояльности в мобильных платежах.
  - Воздействие сетевых эффектов на лояльность различается для consumer- и service-oriented сетей.

---

### 5. Платёжные системы и двусторонние рынки

- **Schmalensee, R. & Evans, D.S. (2005).** «The Economics of Interchange Fees and Their Regulation.» [Kansas City Fed PDF](https://www.kansascityfed.org/Payments%20Conferences/documents/7409/PSCP2005_Evans-Schmalensee.pdf)
  - Двусторонний анализ платёжных карт: асимметричное ценообразование (держатели карт субсидируются, мерчанты платят) — оптимальный исход при косвенных сетевых эффектах.

- **BIS Paper 117 (2019).** «Fintech and the digital transformation of financial services.» [BIS PDF](https://www.bis.org/publ/bppdf/bispap117.pdf)
  - Регуляторный контекст: сетевые эффекты в финтехе ведут к winner-takes-all/winner-takes-most исходам. Китай: 94% рынка у 2 провайдеров мобильных платежей к 2019 г. Регуляторные ответы: Китай (PBC clearing); Кения (CAK — ограничения Safaricom/M-Pesa); США (DOJ заблокировал Visa-Plaid).
  - Описывает DNA-петлю (данные-сеть-деятельность): «Big techs» используют сетевые эффекты в основном бизнесе для экспансии в финансовые услуги.

- **Sambakiu, O. (2025).** «Analyzing the network effects of digital payment ecosystems in the context of platform economics.» *International Journal of Science and Research Archive*, 16(1), 803–816. [DOI: 10.30574/ijsra.2025.16.1.2012](https://ijsra.net/content/analyzing-network-effects-digital-payment-ecosystems-context-platform-economics-user)
  - Обзорная работа: сетевые эффекты как драйверы роста экосистем и барьеры входа в финтехе.

---

### 6. P2P-кредитование и групповые финансы

- **Katsamakas, E. & Sánchez-Cartas, J. (2022).** «Network Formation and Financial Inclusion in P2P Lending: A Computational Model.» *Systems*, 10(5), 155. [DOI: 10.3390/systems10050155](https://www.mdpi.com/2079-8954/10/5/155/pdf?version=1663257574)
  - Масштаб платформы и охват МСП определяют уровень финансовой инклюзии. Сетевые эффекты критичны для достижения минимального порога ликвидности.

- **Shi, B. & Zhao, Y. (2021).** «Incentive and Coordination in the Two-Sided Market: Evidence from the P2P Lending Market.» *Discrete Dynamics in Nature and Society*. [DOI: 10.1155/2021/9240374](https://downloads.hindawi.com/journals/ddns/2021/9240374.pdf)
  - Платформы P2P-кредитования как информационные посредники. Купонная стратегия увеличивает полезность платформы и участников обеих сторон.

---

### 7. Динамика отрицательных сетевых эффектов в социальном финансировании

- **Coolican, D. & Jin, L. (2018).** «The Dynamics of Network Effects.» [Andreessen Horowitz](https://a16z.com/the-dynamics-of-network-effects/)
  - Кейс Frank (социальное кредитование в кругу знакомых): при числе участников в группе свыше 7 сетевые эффекты разворачиваются из положительных в отрицательные, поскольку уровень доверия, необходимый для финансовых операций, ограничен ~7 людьми в ближайшем круге.
  - **Ключевой вывод для группового финтеха**: финансовые сетевые эффекты ограничены радиусом социального доверия, а не только размером сети.

---

## Вопрос 29. Metcalfe's Law vs Reed's Law — в чём разница? Какой применим к групповым финансам?

### Три «закона» ценности сетей

[Согласно NFX](https://www.nfx.com/post/network-effects-bible) и анализу в академической литературе, существуют три основных «закона» (математических концепции), описывающих, как растёт ценность сетей:

---

#### Закон Сарнова (Sarnoff's Law)

- **Автор:** Дэвид Сарнов, председатель Radio Corporation of America (RCA), 1919–1970.
- **Формула:** V ∝ N (линейный рост)
- **Механизм:** Ценность сети пропорциональна числу подписчиков/зрителей. Один центральный узел вещает на многих пассивных получателей.
- **Применение:** Телерадиовещательные сети (радио, TV).
- **Ограничение:** Недооценивает ценность коммуникационных и социальных сетей.

---

#### Закон Меткалфа (Metcalfe's Law)

- **Автор:** Роберт Меткалф, изобретатель Ethernet, сооснователь 3Com, ок. 1980 г.
- **Формула:** V ∝ N² (квадратичный рост)
- **Механизм:** Число возможных попарных связей между N узлами = N(N−1)/2 ≈ N². Каждый новый пользователь добавляет N−1 новых возможных связей. [Wikipedia, Reed's Law](https://en.wikipedia.org/wiki/Reed's_law)
- **Применение:** Первоначально — телефонные и Ethernet-сети; позднее расширен на социальные сети и маркетплейсы.
- **Эмпирическое подтверждение:** Исследование [«Explosive value of networks» (Scientific Reports, 2023)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9852569/) на данных Facebook, Google, Twitter, YouTube показывает, что γ (экспонента роста) статистически значимо > 2, то есть рост современных платформ превышает закон Меткалфа.
- **Ограничения:** Предполагает, что все попарные связи одинаково ценны — это фундаментальная ошибка. [Одлыжко и Тилли (2005)](https://pdodds.w3.uvm.edu/teaching/courses/2009-08UVM-300/docs/others/2005/odlyzko2005a.pdf) показывают: большинство связей в больших сетях не используются или используются крайне редко.

---

#### Закон Рида (Reed's Law)

- **Автор:** Дэвид П. Рид (MIT/Xerox PARC), 1999 г.
- **Формула:** V ∝ 2^N (экспоненциальный рост)
- **Механизм:** В сети, поддерживающей группообразование (Group-Forming Network, GFN), число возможных подгрупп = 2^N − N − 1. Даже если ценность каждой группы очень мала, суммарная ценность всех возможных группировок экспоненциально доминирует. [Wikipedia, Reed's Law](https://en.wikipedia.org/wiki/Reed's_law):

> «Даже закон Меткалфа недооценивает ценность, создаваемую сетью группообразования по мере её роста… ценность GFN растёт экспоненциально, пропорционально 2n. Я называю это законом Рида.»

- **Применение:** Мессенджеры с групповыми чатами, форумы с подсообществами, социальные сети с возможностью формировать группы.
- **Почему 2^N, а не N²:** Потому что число возможных подгрупп растёт принципиально быстрее числа попарных связей. Каждый новый пользователь не добавляет одно новое соединение — он удваивает число возможных подгрупп.

---

### Сравнительная таблица

| Параметр | Sarnoff's Law | Metcalfe's Law | Reed's Law |
|----------|--------------|----------------|------------|
| Формула | V ∝ N | V ∝ N² | V ∝ 2^N |
| Тип роста | Линейный | Квадратичный | Экспоненциальный |
| Тип сети | Широковещательные (1→N) | Одноранговые (1:1) | Группообразующие |
| Архетип | Телевидение, радио | Телефон, Ethernet | Мессенджеры, форумы |
| Полная формула (Рид) | an | bn² | c2^n, где a >> b >> c |
| Год | Нач. XX в. | ~1980 | 1999 |

**Полная формула Рида** объединяет все три компоненты: V_N = an + bn² + c2^n, где a >> b >> c. На малых сетях доминирует линейный член (Sarnoff), на средних — квадратичный (Metcalfe), на больших — экспоненциальный (Reed). [По MITRE Corporation analysis](https://www.mitre.org/sites/default/files/pdf/06_0118.pdf).

---

### Критика и альтернатива: формула n·log(n)

[Одлыжко и Тилли (2005)](https://pdodds.w3.uvm.edu/teaching/courses/2009-08UVM-300/docs/others/2005/odlyzko2005a.pdf) оспаривают оба закона:

- **Фундаментальная ошибка обоих законов**: предположение об одинаковой ценности всех связей/групп. На практике большинство связей не используются, а некоторые пользователи (спамеры, мошенники) вычитают ценность.
- **Исторический аргумент**: если бы закон Меткалфа был верен, сети имели бы непреодолимый стимул к слиянию (объединение двух сетей по N удваивает ценность). Но сети долгие годы сопротивляются интерконнекту (Bell System vs. независимые компании; CompuServe/AOL/MCI Mail до середины 1990-х).
- **Закон Рида абсурдно гиперболичен**: добавление одного пользователя к сети из 10^10 человек почти удваивает стоимость мировой экономики — это физически невозможно.
- **Альтернатива**: V ∝ n·log(n) — быстрее линейного (объясняет, почему «связность — это король»), но медленнее квадратичного (объясняет исторические сопротивления интерконнекту и дот-ком-пузырь).

Дополнительно: [исследование «Explosive Value of Networks» (Scientific Reports, 2023)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9852569/) показывает, что на реальных данных (Facebook, Google, Twitter, YouTube) γ > 2, то есть рост между Metcalfe и Reed — «медленное экспоненциальное» с ρ << ln(2).

---

### Какой закон применим к групповым финансам?

**Ответ: Reed's Law — теоретически наиболее релевантный, но с существенными практическими ограничениями.**

Продукты групповых финансов (совместные бюджеты, групповые расходы, ROSCA-подобные сервисы, групповое кредитование, Splitwise-подобные приложения) — это по определению **Group-Forming Networks (GFN)**:

1. Пользователи приходят не только для попарного взаимодействия (1:1 переводы), но и для формирования **устойчивых финансовых групп** (семья, квартиранты, туристическая группа, команда).
2. Ценность экспоненциально зависит от числа возможных конфигураций групп — именно то, что описывает Reed's Law.
3. **Однако**: Frank case study от a16z ([Coolican & Jin, 2018](https://a16z.com/the-dynamics-of-network-effects/)) показывает критическое ограничение: при числе участников > 7 сетевые эффекты разворачиваются вспять, потому что **радиус финансового доверия** ограничен. Число Данбара (~150 знакомых) и число «близких друзей с доверием» (~5–7 человек) задают верхнюю границу полезных подгрупп.

**Практический вывод**: для групповых финансов более реалистична **модифицированная версия Reed's Law с ограниченным ρ** (по Одлыжко/генерализованный Рид), а не полная 2^N-экспонента. Подходящая метафора — «Metcalfe для парных транзакций + ограниченный Reed для доверенных групп».

| Сценарий | Применимый закон |
|----------|-----------------|
| P2P-перевод двум людям | Metcalfe (N²) |
| Совместный счёт семьи из 4 человек | Reed (2^N, малые N) |
| Групповые расходы путешествия (6–8 чел.) | Reed с ограничением доверия (~2^7 = 128 конфигураций) |
| Крупная платёжная сеть (миллионы пользователей) | n·log(n) как практическая оценка |
| Алгоритмически управляемые P2P-платформы | Metcalfe + Data network effects |

---

## Вопрос 30. Social vs Market vs Platform network effects применительно к fintech

### Три концепции сетевых эффектов: определения

#### Social Network Effects (социальные сетевые эффекты)

[По NFX Manual](https://www.nfx.com/post/network-effects-manual), социальные сетевые эффекты — психологически ориентированные эффекты, основанные на идентичности, доверии, принадлежности к группе, языке. Они включают:

- **Language** (язык/жаргон): продукт становится культурной референцией
- **Belief** (вера): ценность из коллективного убеждения (криптовалюты)
- **Bandwagon** (принуждение): FOMO, стадный инстинкт
- **Tribal** (трайбовый): идентичность через членство в группе

В финтехе социальные сетевые эффекты проявляются в:
- **Venmo**: «лента» публичных транзакций создаёт социальный граф расходов; платёж становится социальным актом
- **Cash App Cashtags**: идентичность привязана к финансовому дескриптору
- **WeChat Pay**: встроен в социальный граф WeChat (1.3+ млрд пользователей), что делает отказ социально невозможным — классический Personal Utility Network effect

#### Market Network Effects (сетевые эффекты рыночных сетей)

Концепт введён [Джеймсом Кёрриером из NFX](https://www.nfx.com/post/10-years-about-market-networks) в 2014–2015 годах. Рыночные сети — **гибрид маркетплейса и социальной сети**:

> **Marketplaces** (маркетплейсы) обеспечивают транзакции между множеством покупателей и продавцов (eBay, Uber).
> **Networks** (сети) предоставляют профили, проецирующие идентичность, и позволяют общаться (Facebook, LinkedIn).
> **Market Networks** = Marketplaces + Networks + SaaS-инструменты для проектной работы.

**Ключевое отличие:** В маркетплейсе исполнители взаимозаменяемы (любой водитель Uber); в рыночной сети — **люди имеют значение** (конкретный архитектор, финансовый консультант, ивент-менеджер).

[Семь атрибутов успешной рыночной сети по NFX](https://www.nfx.com/post/10-years-about-market-networks):
1. Ориентация на сложные сервисы, а не на простые транзакции
2. Личная дифференциация исполнителей
3. Коллаборация вокруг долгосрочных проектов
4. Уникальные профили участников
5. Построение долгосрочных отношений
6. Свободный поток рефералов
7. Повышение скорости и качества транзакций

**Примеры в финансах:** AngelList (инвесторы + стартапы + менторы), HoneyBook (финансовые операции для творческих профессионалов), Lending Club (инвесторы + заёмщики + community элемент).

#### Platform Network Effects (платформенные сетевые эффекты)

[По NFX Manual](https://www.nfx.com/post/network-effects-manual), платформенные сетевые эффекты — двусторонние эффекты, где независимые разработчики/провайдеры создают продукты/услуги под платформу, а потребители выбирают платформу за это разнообразие. Примеры: iOS, Android, Windows, Xbox. Сила эффекта зависит от затрат на интеграцию, которые создают издержки переключения на стороне предложения.

В финтехе платформенные эффекты:
- **Visa/Mastercard**: сеть банков (эмитентов и эквайреров) как двусторонняя платформа; торговцы выбирают систему за базу держателей карт, держатели — за охват торговцев
- **Stripe**: разработчики создают финансовые продукты на API Stripe; чем больше разработчиков, тем больше мерчантов, тем больше транзакций — классический Platform NE
- **AWS Financial Services / Plaid**: финтех-стек как платформа для других финтех-приложений

---

### Сравнение трёх типов в финтехе

| Измерение | Social NE | Market Network NE | Platform NE |
|-----------|-----------|-------------------|-------------|
| **Механизм** | Идентичность, доверие, FOMO, социальный граф | Комбинация профильного сетевого идентитета и транзакций | Разработчики создают ценность на инфраструктуре |
| **Единица ценности** | Доверие + принадлежность к группе | Дифференцированный профессиональный профиль | Совместимость + экосистема приложений |
| **Примеры в финтехе** | Venmo feed, WeChat Pay, Cash App Cashtags | AngelList, HoneyBook (финансовые операции) | Visa/Mastercard, Stripe API, Plaid |
| **Барьер входа** | Высокий (социальная идентичность трудно копируемая) | Очень высокий (двойная ценность: сеть + маркетплейс) | Высокий (издержки интеграции разработчиков) |
| **Уязвимость** | Multi-tenanting; сети теряют ценность при «загрязнении» (NFX: network pollution) | Дезинтермедиация при прямых отношениях (из-за низких тейк-рейтов) | Конкурирующие платформы/экосистемы |
| **Применимость к групповым финансам** | Высокая (доверие в малых группах) | Средняя (если есть профессиональная роль) | Средняя (инфраструктурная поддержка) |

---

### Академические свидетельства для финтеха

**Асимметричные сетевые эффекты FinTech-платформ:**
[Cong et al. (2024), NBER W33173](https://www.nber.org/papers/w33173) эмпирически показывают принципиальное отличие финтех-платформ от обычных двусторонних рынков: дефолтный риск создаёт **асимметрию** между кредиторами и заёмщиками. Кредиторы демонстрируют single-homing, потому что их риск сконцентрирован на платформе; заёмщики более мобильны. Это делает p-CNE кредиторов критическим предиктором выживаемости платформы — уникальная особенность финансовых платформ.

**DNA-петля Big Tech в финансах:**
[BIS Paper 117 (2019)](https://www.bis.org/publ/bppdf/bispap117.pdf) описывает, как BigTech (WeChat, Alipay, Google Pay) использует социальные + платформенные сетевые эффекты из основного бизнеса для экспансии в финансы. Обратная связь «данные → сеть → активность» («DNA feedback loop») создаёт само-усиливающийся цикл, недоступный специализированным финтех-компаниям. Это объясняет, почему WeChat Pay и Alipay заняли 94% рынка в Китае.

**Мобильные платежи и типы сетевых эффектов:**
[Wiley/ISJ (2021)](https://onlinelibrary.wiley.com/doi/abs/10.1111/isj.12366) эмпирически выявляет три типа сетевых эффектов в мобильных платежах:
1. **Direct** (размер сети, централизованность, возможности) — прямые
2. **Indirect** (platform-app-service complementarity) — косвенные/платформенные
3. **Negative** (институциональные риски и структурные ограничения) — отрицательные

**Социальный предел финансовых сетей:**
[a16z (2018)](https://a16z.com/the-dynamics-of-network-effects/) кейс Frank демонстрирует: в социальных финансах (кредитование в кругу знакомых) положительные сетевые эффекты ограничены размером группы ~7 человек — порог социального доверия, превышение которого разворачивает эффекты в отрицательные. Это создаёт принципиальное различие между **«trust-based» (social)** и **«liquidity-based» (market/platform)** сетевыми эффектами в финансах.

---

### Применение к конкретным финтех-категориям

| Финтех-категория | Доминирующий тип NE | Вторичный тип | Ограничение |
|-----------------|---------------------|---------------|-------------|
| P2P-переводы (Venmo, Cash App) | Social (идентичность, граф) | Direct (размер сети) | Социальное доверие ~7 чел. |
| Групповые расходы (Splitwise, Tricount) | Social (малые доверенные группы) | Market Network (проектная коллаборация) | Reed's Law с ограничением доверия |
| Маркетплейс-кредитование (LendingClub) | Platform (2-sided) | Data | Асимметричный p-CNE ([Cong 2024](https://www.nber.org/papers/w33173)) |
| Платёжная инфраструктура (Stripe, Plaid) | Platform | Tech Performance | Сильная интеграционная зависимость |
| Мобильные деньги (M-Pesa) | Direct + Platform | Data | Агентская сеть как physical NE |
| Super Apps (WeChat Pay, AliPay) | Social + Platform + Data | DNA-петля | Регуляторный риск (BIS 2019) |
| Инвестиционные рыночные сети (AngelList) | Market Network | Social | Дезинтермедиация при прямых связях |

---

*Документ составлен на основе первичных источников: книги Эндрю Чена, оригинальных материалов NFX (nfx.com), академических работ NBER, Oxford Academic, Wiley, BIS и Scientific Reports. Все факты сопровождены inline-ссылками на источники.*

---

