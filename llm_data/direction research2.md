<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# I chose "shared expense and settlement spaces for groups of friends" as the leading wedge for Salmon in the Philippines.

Please analyze the competitive landscape for this use case.

Focus on products such as:

- Splitwise
- Revolut group bills / shared money flows
- GCash KKB or similar Philippines wallet features
- Venmo social payments
- WeChat group payments / social money behaviors
- any other relevant competitors in expense splitting, group settlement, or social payments

For each competitor, explain:

- what exact user problem it solves
- whether it solves coordination, settlement, or both
- whether it is private group-first or public/social-first
- what network effect it has, if any
- where the product experience breaks or stops short
- what whitespace remains for Salmon

Use credible sources with links and cite primary sources whenever possible.

Output as a concise comparison table:
Company | Solves what | Coordination depth | Settlement depth | NE type | Key limitation | What this means for Salmon

For Salmon’s chosen wedge, the competitive set splits into three patterns: **ledger-first** tools that coordinate who owes whom, **wallet-first** products that make repayment easy, and **social-money** products that turn payment behavior into distribution. The best whitespace is not “another Splitwise” or “another wallet,” but a Philippines-native product that combines group coordination, instant settlement, and merchant-side spend flows in one closed loop.[^1][^2][^3][^4]


| Company | Solves what | Coordination depth | Settlement depth | NE type | Key limitation | What this means for Salmon |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Splitwise | Tracks shared expenses, balances, IOUs, and settle-up records for friends, trips, roommates, and families. It is strongest at answering “who owes whom?” rather than being the payment rail itself. [^1][^5][^6] | **High.** Persistent groups, flexible splitting, expense history, and balance simplification are core strengths. [^5][^6] | **Low-Medium.** It supports recording settle-ups and some payment integrations, but the core product is still a ledger, not a primary in-network bank/wallet. [^7][^6] | Weak **direct NE** at best: more group members increase utility, but mostly through shared bookkeeping rather than a compounding payment network. [^8][^1] | Breaks when users must leave the product to actually move money, especially in markets where cash, wallets, and bank rails are fragmented. [^7][^6][^3] | Salmon should not copy Splitwise’s ledger alone; it should fuse coordination and settlement so the group can compute and pay in the same place. [^1][^3] |
| Revolut Group Bills / shared money | Solves post-purchase splitting and shared money flows among existing Revolut users, including one-off split bills and ongoing group bills; Joint Accounts solve shared household spending for two people. [^2][^9][^10] | **Medium-High.** Good for ongoing group balances and reminders, but less flexible than dedicated expense apps for complex itemized coordination. [^9][^11] | **High.** If everyone is already in Revolut, requests and repayments are fast and native. [^2][^10] | Real **direct NE** inside the user graph: each additional Revolut user makes in-network shared money flows more convenient. [^8][^2] | Stops short on granular coordination; external people and real-world mixed cash/wallet contexts are weaker, and some flows require separate cards/accounts. [^11][^12] | This is the closest model for Salmon: build “Splitwise-level enough” coordination, then win on native settlement and local rails. [^9][^3] |
| GCash KKB / Philippines wallet split flows | Solves lightweight bill-splitting inside a wallet people already use for everyday payments in the Philippines; documented guides show equal split or split-by-item requests sent to GCash numbers. [^13][^14] | **Low-Medium.** Good for a single event or bill request, but not clearly positioned as a persistent group operating system for repeated shared expenses. [^13][^14] | **High** for users already on GCash, because settlement happens inside a large local wallet ecosystem that also supports merchant QR payments. [^4][^15] | Stronger **direct NE** than Splitwise, because the value rises when more friends are already on the same wallet; there is also some **indirect** merchant-side effect through acceptance. [^16][^4][^15] | Stops short on deep group memory, recurring balances, richer group governance, and cross-context use beyond simple request/pay flows. [^13][^14] | Salmon’s whitespace is “KKB plus”: persistent group spaces, better debt compression, reminders, merchant-linked group spend, and family/friend graph reuse. [^13][^4][^3] |
| Venmo | Solves easy social P2P payments with optional public, friends-only, or private visibility; historically it made small reimbursements feel lightweight and social. [^17][^18] | **Low-Medium.** Coordination exists, but it is not the main product; users still often manage the logic of the split outside the app. [^17][^18] | **High** for basic P2P among Venmo users. [^17][^18] | Mix of **direct NE** in payments and a **viral/social loop** from the feed and visible activity. [^8][^17][^19] | Public/social-first positioning created privacy friction, and Venmo later dropped its global public feed. [^18][^20] | Salmon should copy the low-friction payment feel, not the public-feed mentality; in the Philippines, visible-money design is riskier than useful as a core wedge. [^21][^20] |
| WeChat Pay / group red packets | Solves social money behavior inside chats, especially gifting and group participation; group red packets let money be distributed inside group chats, turning payment into a social event. [^22][^23] | **Medium** for social coordination because the coordination happens in the chat/group context rather than in a dedicated expense ledger. [^22][^23] | **High** inside the super-app ecosystem because money movement is native to the communication layer. [^22][^23] | Strong **direct/social NE**: each extra participant in a chat/group increases the usefulness and virality of the money mechanic. [^22] | It is strongest for gifting and social activation, not for robust debt tracking, recurring group accounting, or formal shared-expense management. [^22][^23] | Important inspiration for Salmon: embed payment behaviors inside social groups, but adapt to Filipino rituals around barkada, ambag, and reimbursements rather than copying red packets literally. [^24] |
| PayPal Bill Split / Pool Money | Solves both bill splitting after a purchase and, in newer pooled-money flows, collecting money upfront for trips, gifts, or shared purchases, including via shareable links. [^25][^26] | **Medium.** Better than simple request-money because it supports group collection and split scenarios, but it is still not a full persistent group-finance workspace. [^25][^26] | **Medium-High.** Stronger than ledger-only tools, but not as closed-loop or social-native as wallet ecosystems. [^25][^26] | Mostly a **viral/acquisition loop** plus some **direct NE** if the group stays active. [^27][^26] | Experience can be episodic: create a pool, collect, finish, leave. It does not automatically become the group’s ongoing financial home. [^25][^26] | Salmon can learn from “collect first, spend later” for trips, gifts, and barkada funds, then retain the group with recurring settlement and merchant spend. [^26][^3] |
| Settle Up / similar ledger competitors | Solves group expense tracking, debt minimization, recurring expenses, and multi-currency cases for travel, flatmates, and friends. [^28][^29][^30] | **High.** Strong bookkeeping for groups with more complexity than a one-tap wallet request. [^28][^30] | **Low-Medium.** Like Splitwise, it improves clarity more than native payment settlement. [^28][^30] | Limited **direct NE** through collaborative bookkeeping only. [^8][^30] | Same structural ceiling as Splitwise: great organizer, weak native settlement moat. [^30] | Confirms the category gap: there is room for a local product that blends good coordination UX with real payment rails in the Philippines. [^30][^3] |

The practical read is that **Splitwise owns coordination, GCash owns local settlement, Venmo/WeChat show how social layers can drive usage, and nobody clearly owns the Philippines-native combination of persistent group coordination + instant local settlement + merchant-linked shared spend**.[^17][^22][^3][^4][^1]
<span style="display:none">[^31][^32][^33][^34][^35][^36][^37][^38][^39][^40][^41]</span>

<div align="center">⁂</div>

[^1]: https://www.splitwise.com

[^2]: https://help.revolut.com/help/adding-money/with-money-from-friends-or-relatives/splitting-bill/

[^3]: https://www.bsp.gov.ph/PaymentAndSettlement/2024_Report_on_E-payments_Measurement.pdf

[^4]: https://help.gcash.com/hc/en-us/articles/900006198423-GCash-for-Business-Scan-to-Pay-with-In-store-QR

[^5]: https://splitwise.uservoice.com/knowledgebase/articles/1088920-how-do-i-use-splitwise

[^6]: https://play.google.com/store/apps/details?id=com.Splitwise.SplitwiseMobile

[^7]: https://www.splitwise.com/l/sa/8GnGDAeEPnL

[^8]: https://online.hbs.edu/blog/post/what-are-network-effects

[^9]: https://help.revolut.com/help/transfers/internal-transfers/groups/

[^10]: https://help.revolut.com/help/profile-and-plan/joint-accounts/how-to-set-up-a-joint-account-with-revolut/

[^11]: https://splittyapp.com/learn/revolut-bill-splitting/

[^12]: https://www.reddit.com/r/Revolut/comments/1g2kwer/split_bill_with_a_joint_account/

[^13]: https://www.youtube.com/watch?v=_aQ-1_77iaM

[^14]: https://thesmartlocal.ph/gcash-features/

[^15]: https://technology.inquirer.net/127285/gcash-waives-qr-transaction-fees-for-micro-merchants

[^16]: https://www.investopedia.com/terms/n/network-effect.asp

[^17]: https://help.venmo.com/cs/articles/changing-payment-privacy-hiding-past-payments-vhel191

[^18]: https://help.venmo.com/cs/articles/manage-your-venmo-privacy-settings-vhel351

[^19]: https://www.businessinsider.com/venmo-social-feed-is-its-secret-sauce-2015-12

[^20]: https://www.cnet.com/tech/services-and-software/venmo-drops-global-social-feed-that-let-you-see-strangers-payments/

[^21]: https://privacy.gov.ph/data-privacy-act/

[^22]: https://en.wikipedia.org/wiki/WeChat_red_envelope

[^23]: https://www.nuvei.com/posts/a-guide-to-wechat-pay

[^24]: https://radar.ph/the-uniquely-filipino-money-practices-that-influence-how-households-spend/

[^25]: https://www.paypal.com/us/cshelp/article/how-do-i-split-a-bill-using-paypal-help279

[^26]: https://techcrunch.com/2024/11/14/paypals-new-feature-will-let-you-easily-split-expenses-with-family-and-friends/

[^27]: https://blog.hubspot.com/marketing/network-effects

[^28]: https://play.google.com/store/apps/details?id=cz.destil.settleup

[^29]: https://apps.apple.com/ca/app/settle-up-group-expenses/id737534985

[^30]: https://sourceforge.net/software/compare/Settle-Up-vs-Splitwise/

[^31]: https://www.lemon8-app.com/gwendalynyap/7217855505665491457?region=sg

[^32]: https://www.facebook.com/gcashofficial/posts/split-the-cost-of-any-bill-with-kkb-on-gcash-hassle-free-na-ang-hatian-without-h/3851115608311182/

[^33]: https://venmo.com/legal/us-privacy-policy/

[^34]: https://www.reddit.com/r/YouShouldKnow/comments/12kvzcq/ysk_you_can_change_your_venmo_settings_to_private/

[^35]: https://www.xtransfer.com/wiki/tools/understanding-venmo’s-privacy-controls-and-data-exposure

[^36]: https://help.venmo.com/cs/articles/general-account-settings-vhel186

[^37]: https://news.futunn.com/en/post/68229390/red-packet-rains-have-returned-to-wechat-groups-and-moments

[^38]: https://www.betweenthehacks.com/blog/venmo-lockdown

[^39]: https://luxurysociety.com/en/10-things-you-need-know-about-wechat-pay-today/

[^40]: https://finance.yahoo.com/news/paypal-once-again-lets-pool-100000253.html

[^41]: https://www.youtube.com/watch?v=dClR8fhStsk

