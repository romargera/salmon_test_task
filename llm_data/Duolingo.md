<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# "Network effect отвечает на вопрос: растет ли ценность продукта для пользователя по мере роста числа других участников сети или другой группы пользователей.

* Прямой эффект: чем больше пользователей в той же группе, тем выше ценность продукта для каждого из них, например мессенджер или социальная сеть.
* Непрямой эффект: одна группа пользователей делает продукт ценнее для другой группы пользователей, например sellers для buyers, drivers для riders, creators для consumers." найди описание основных паттернов и эффектов у Duolingo со ссылками на первоисточники информации

По первоисточникам у Duolingo главный network effect — это **data** network effect: чем больше учеников проходят упражнения, тем больше данных получает система, а значит лучше становятся персонализация, A/B-тесты и итоговая эффективность продукта для всех пользователей.[^1]
Прямые социальные эффекты у Duolingo тоже есть, но они выступают скорее как слой удержания и мотивации — leaderboards, Friends Quests и Friend Streak — а не как единственный источник ценности продукта, как у мессенджера.[^2][^3][^4]

## Паттерны

| Паттерн | Как проявляется у Duolingo | Оценка силы эффекта |
| :-- | :-- | :-- |
| Data network effect | В S-1 Duolingo пишет, что пользователи выполняют более 500 млн упражнений в день, и этот массив данных питает A/B-тесты, AI и персонализацию через модель BirdBrain. [^1] | Это самый сильный эффект в ядре продукта: ценность растет для каждого пользователя через улучшение качества обучения, а не через прямое общение между учениками. [^1] |
| Прямой same-side social effect | Leaderboards сводят учеников в еженедельные соревнования, причем конкуренция идет между learners по всему миру и по всем курсам, а сама механика была запущена потому, что “a little competition worked for a lot of learners”. [^2] | Это реальный прямой эффект: наличие других учеников повышает мотивацию и вовлеченность, но это не обязательная часть core value, потому что от leaderboards можно отказаться. [^2] |
| Social accountability effect | В Friends Quests Duolingo пишет, что learners who follow friends are 5.6x more likely to finish their course, а в Friend Streak — что пользователи хотя бы с одним shared streak на 22% чаще делают ежедневный урок. [^3][^4] | Это тоже прямой network effect, но локальный: ценность растет не от всей сети сразу, а от небольшого графа друзей и совместной ответственности. [^3][^4] |
| Word-of-mouth flywheel | В S-1 компания прямо пишет, что affinity and loyalty helped cultivate millions of brand advocates, а рост шел primarily through word-of-mouth virality rather than paid acquisition. [^1] | Это не network effect в строгом смысле, а self-reinforcing growth loop: больше довольных пользователей приводит к органическому росту, который затем усиливает data effect. [^1] |
| Непрямой cross-side effect | В Duolingo English Test S-1 фиксирует две стороны сети: более 3,000 higher education programs accept the test, а в 2020 было куплено около 344,000 individual tests. [^1] | Здесь классический непрямой network effect: чем больше вузов принимают тест, тем выше ценность для сдающих; чем больше сдающих, тем заметнее продукт для вузов. [^1] |

## Что это значит

Если раскладывать Duolingo по твоей формулировке, то его основной эффект — не “чем больше других учеников, тем нужнее мне приложение”, а “чем больше учеников в системе, тем умнее и эффективнее становится сам продукт”.[^1]
Прямые эффекты у Duolingo есть, но они в основном работают как engagement-механики поверх основного value proposition, а не как единственный фундамент продукта.[^3][^4][^2]

## Первоисточники

- SEC: [Duolingo S-1](https://www.sec.gov/Archives/edgar/data/1562088/000162828021013065/duolingos-1.htm) — ключевой документ про learning flywheel, data moat, word-of-mouth и Duolingo English Test.[^1]
- Duolingo Blog: [How Duolingo Leaderboards and Leagues Work](https://blog.duolingo.com/duolingo-leagues-leaderboards/) — официальный источник про leaderboards как social/competitive mechanic.[^2]
- Duolingo Blog: [Introducing Friends Quests](https://blog.duolingo.com/friends-quests/) — официальный источник с метрикой 5.6x по завершению курса у пользователей, которые follow friends.[^3]
- Duolingo Blog: [Duolingo’s Best Social Features](https://blog.duolingo.com/friends-social-features/) — официальный источник с метрикой +22% к daily lesson completion у пользователей с Friend Streak.[^4]

Хочешь, я следующим сообщением соберу это в формат “паттерн → evidence → implication for PM”, чтобы можно было сразу вставить в продуктовый разбор?
<span style="display:none">[^10][^11][^12][^13][^14][^15][^16][^17][^18][^19][^20][^21][^22][^23][^24][^25][^5][^6][^7][^8][^9]</span>

<div align="center">⁂</div>

[^1]: https://blog.duolingo.com/duolingo-leagues-leaderboards/

[^2]: https://www.duolingo.com/help/leaderboards-and-league

[^3]: https://blog.duolingo.com/friends-quests/

[^4]: https://blog.duolingo.com/friends-social-features/

[^5]: https://schools.duolingo.com

[^6]: https://schools-cdn.duolingo.com/documents/214566024b2e7c04285dd733ab8eab2d.pdf

[^7]: https://schools-cdn.duolingo.com/documents/95f3ce1478edf1d15836b826d56e585a.pdf

[^8]: https://blog.duolingo.com/duolingo-101-how-to-learn-a-language-on-duolingo/

[^9]: https://www.duolingo.com/help/find-follow-and-block-users

[^10]: https://www.duolingo.com/log-in

[^11]: https://www.duolingo.com/help

[^12]: https://www.sec.gov/Archives/edgar/data/1562088/000162828026012494/0001628280-26-012494-index.htm

[^13]: https://duolingo.gcs-web.com/financials/

[^14]: https://www.sec.gov/Archives/edgar/data/1562088/000162828025049514/q3fy25duolingo9-30x25share.htm

[^15]: https://www.sec.gov/Archives/edgar/data/1562088/000162828021013065/duolingos-1.htm

[^16]: https://duolingo.gcs-web.com/static-files/fc4cca8f-7c03-4410-9e57-13bc7cba2569

[^17]: https://20062171.fs1.hubspotusercontent-na1.net/hubfs/20062171/HeadlinerCapital_Finals_Submission.pdf

[^18]: https://blog.duolingo.com/friend-streak/

[^19]: https://duolingo.fandom.com/wiki/Streak

[^20]: https://blog.duolingo.com/product-lessons-friend-streak/

[^21]: https://www.youtube.com/watch?v=qEr47PFw88M

[^22]: https://www.reddit.com/r/duolingo/comments/1dg11fy/what_is_a_friends_streak/

[^23]: https://blog.duolingo.com/streak-milestone-design-animation/

[^24]: https://blog.duolingo.com/streak-celebration-parties/

[^25]: https://www.orizon.co/blog/duolingos-gamification-secrets

