<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# I am evaluating product directions for Salmon, a fintech in the Philippines that wants to build collaborative finance and network effects.

Please compare these directions as potential network-effect wedges:

1. Shared expense and settlement spaces for groups of friends
2. Family shared-money tools (couples, parents and children, delegated access)
3. Social / public finance layer (social sharing, gamification, visibility)
4. Merchant / spend-side group commerce
5. Credit collaboration (shared BNPL, guarantors, P2P lending)

For each direction, provide:

- whether there is real evidence of user pain / demand
- whether the market is already crowded or still has whitespace
- what existing competitors solve well
- where existing products stop short
- whether the opportunity is more direct network effect or indirect / two-sided
- relevance for the Philippines when possible

Use credible sources with links. Prefer company product pages, central bank / World Bank / official data, and reputable industry research. Avoid generic blogspam.

Output as a concise table:
Direction | Evidence of pain/demand | Market occupancy / whitespace | Key competitors | Where they stop short | NE type | Implication for Salmon

The strongest Salmon wedges are **group expense/settlement**, **family shared money**, and **merchant-linked group commerce**; those map to frequent real-world payment behavior and can compound through either direct payment graph effects or user↔merchant liquidity effects in the Philippines.[^1][^2][^3][^4][^5]
The weakest are **public/social finance** and especially **credit collaboration**, because they rely more on engagement or social pressure than on durable utility, and the latter also runs into trust, privacy, and consumer-protection risk.[^6][^7][^8][^9][^10]


| Direction | Evidence of pain/demand | Market occupancy / whitespace | Key competitors | Where they stop short | NE type | Implication for Salmon |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Shared expense and settlement spaces for groups of friends | **Strong.** Group-expense tracking is a real, persistent use case: Splitwise is built specifically for “friends, trips, housemates, friends, and family,” and supports balances, settle-up flows, and receipt/expense handling. In the Philippines, P2P transfers are already one of the biggest digital-payment use cases, and personal payments are heavily digitizing, which makes “track + settle” locally relevant. [^3][^11][^12][^1] | **Moderately occupied, still good whitespace.** Tracking is crowded globally, but integrated “track + settle inside one local wallet/bank graph” is less mature, especially in the Philippines where rails are growing fast but many flows are still fragmented across bank, wallet, and cash. [^3][^12][^1][^2] | Splitwise solves shared accounting well; local wallets solve transfers well. [^3][^12][^1] | Splitwise is excellent at ledgering, simplifying debts, and group balances, but it is not a native Philippine bank/wallet network with built-in low-friction in-network settlement, merchant tie-ins, or broader financial graph use. [^12][^1] | Mostly **direct NE**: each additional friend in-network makes the group’s expense and reimbursement graph more useful. [^13][^14] | One of the best wedges for Salmon: start with friend-group settlement, then extend into gifting, merchant split-pay, and recurring group collections. [^3][^1] |
| Family shared-money tools (couples, parents and children, delegated access) | **Strong.** There is broad demand for account-linked family finance: Revolut offers Joint Accounts plus Kids \& Teens accounts with parent setup, and Philippine account ownership/e-money adoption is now mainstream enough to support shared-money workflows. Digital remittances are also highly relevant to family support patterns in the Philippines. [^4][^15][^2][^16] | **Less crowded than payments; meaningful whitespace.** Family-money products exist globally, but the retrieved Philippine evidence is still much more about individual account adoption and rails than about robust family primitives like delegated access, co-management, or shared controls. [^2][^1] | Revolut Joint Account; Revolut Kids \& Teens. [^4][^15] | Existing products usually stop at “two adults share an account” or “parent supervises a child account”; they rarely unify couples, children, delegated spending, household rules, and family transfers in one coherent operating system. [^4][^15] | Primarily **direct NE** inside a household graph, with some **indirect** pull from family remittances and shared spending. [^13][^14][^16] | Very strong for Salmon in the Philippines: family money is repetitive, trust-based, and sticky, which is exactly where collaborative finance can defend. [^2][^16] |
| Social / public finance layer (social sharing, gamification, visibility) | **Mixed.** There is evidence that social payment visibility can drive engagement: Venmo’s feed historically increased app opens, and Venmo still supports public/friends/private payment visibility controls. But the same category has also triggered privacy backlash, and Venmo removed its global public feed. [^6][^17][^18][^7] | **Crowded conceptually, weak whitespace.** Social-payment patterns are well explored already, and the harder problem is no longer “can this attract attention?” but “can it do so without harming trust or privacy?” [^6][^7] | Venmo is the clearest benchmark. [^6][^17][^18] | Social layers create engagement, but they do not necessarily create durable utility; they also become fragile when users want more privacy, and the Philippines has a strict Data Privacy Act plus socially sensitive money norms. [^10][^6][^7] | Usually a **viral/referral loop** or engagement layer more than a pure NE. [^13][^19][^20] | Weak wedge for Salmon unless it is narrowly scoped to opt-in, private-by-default social proofs around existing payment behavior rather than public financial visibility. [^10][^7] |
| Merchant / spend-side group commerce | **Strong.** Merchant payments are one of the biggest contributors to Philippine digital-payment growth, QR merchant acceptance is expanding, and GCash has deep merchant tooling for in-store QR while also waiving some QR fees for micro-merchants. [^1][^5][^21] | **Crowded on merchant acceptance, open on group-commerce layer.** QR acceptance and wallet checkout are getting built out, but “group intent” products such as shared baskets, group ordering, split-at-checkout, and offer discovery around real social groups still look less fully occupied. [^5][^21][^1] | GCash for Business; QR-based wallet ecosystems; BSP-backed merchant digitization programs. [^5][^21][^22] | Existing products are good at accepting payment, but they are not primarily designed around the social coordination of spending: who is joining, who owes what, who redeemed the offer, who should pay now, and how a group converts together. [^5][^1] | Mostly **indirect / two-sided NE**: more users make Salmon more attractive to merchants, and more merchants/offers make Salmon more useful to users. [^14][^23][^24] | High-potential wedge if Salmon ties group spend to merchant-side offers, QR, and settlement; this is likely better than a purely social feed because the loop ends in transaction liquidity. [^1][^5][^21] |
| Credit collaboration (shared BNPL, guarantors, P2P lending) | **Weak-to-mixed.** Consumer credit demand is real, and BNPL is established as a solo payment option, but there is much less evidence that consumers want collaborative credit as a mainstream behavior. At the same time, Philippine regulators have had to crack down on abusive online lending and collection practices. [^9][^25][^8] | **Whitespace exists, but for bad reasons.** The category is less built out not because it is undiscovered, but because trust, collections, compliance, and borrower-protection issues make collaborative credit much harder than collaborative payments. [^8][^10] | Klarna for mainstream individual BNPL; online lenders in the Philippines for digital credit more broadly. [^9][^25][^8] | Existing products solve **individual** credit well enough, but collaboration introduces new failure modes: disputes, coercion, guarantor pressure, privacy risk, and blame when someone misses payments. [^9][^8][^10] | At best a fragile **two-sided liquidity effect**; often not a healthy NE at all. [^13][^14][^8] | Poor wedge for Salmon. Credit collaboration is better treated as a later extension, if ever, after Salmon has strong trust, underwriting, and payment-graph depth. [^8][^9] |

If you want, I can turn this into a **ranked recommendation** with `best wedge / second wedge / avoid` plus 2–3 product concepts under each.
<span style="display:none">[^26][^27][^28][^29][^30][^31][^32][^33][^34][^35][^36][^37][^38][^39][^40][^41][^42][^43][^44][^45][^46][^47][^48][^49][^50][^51][^52][^53][^54]</span>

<div align="center">⁂</div>

[^1]: https://www.bsp.gov.ph/PaymentAndSettlement/2024_Report_on_E-payments_Measurement.pdf

[^2]: https://www.bsp.gov.ph/Inclusive Finance/Financial Inclusion Reports and Publications/2021/2021FISToplineReport.pdf

[^3]: https://www.splitwise.com

[^4]: https://help.revolut.com/help/profile-and-plan/joint-accounts/how-to-set-up-a-joint-account-with-revolut/

[^5]: https://help.gcash.com/hc/en-us/articles/900006198423-GCash-for-Business-Scan-to-Pay-with-In-store-QR

[^6]: https://help.venmo.com/cs/articles/changing-payment-privacy-hiding-past-payments-vhel191

[^7]: https://www.cnet.com/tech/services-and-software/venmo-drops-global-social-feed-that-let-you-see-strangers-payments/

[^8]: https://business.inquirer.net/406561/sec-npc-step-up-fight-vs-abusive-online-loan-collection-practices

[^9]: https://www.klarna.com/us/payments/

[^10]: https://privacy.gov.ph/data-privacy-act/

[^11]: https://www.splitwise.com/l/c/su/uQxFiYrFH27

[^12]: https://apps.apple.com/us/app/splitwise/id458023433

[^13]: https://online.hbs.edu/blog/post/what-are-network-effects

[^14]: https://www.investopedia.com/terms/n/network-effect.asp

[^15]: https://help.revolut.com/help/profile-and-plan/revolut-junior/open-an-18-account/

[^16]: https://www.bworldonline.com/research/2025/12/15/718488/from-cash-counters-to-clicks-the-digital-shift-in-philippine-remittances/

[^17]: https://help.venmo.com/cs/articles/manage-your-venmo-privacy-settings-vhel351

[^18]: https://www.businessinsider.com/venmo-social-feed-is-its-secret-sauce-2015-12

[^19]: https://blog.hubspot.com/marketing/network-effects

[^20]: https://growsurf.com/glossary/network-effects

[^21]: https://technology.inquirer.net/127285/gcash-waives-qr-transaction-fees-for-micro-merchants

[^22]: https://www.bsp.gov.ph/Pages/InclusiveFinance/PalengQR/PalengQRProgram.aspx

[^23]: https://www.cs-cart.com/blog/marketplace-network-effects/

[^24]: https://www.everythingmarketplaces.com/post/marketplace-network-effects

[^25]: https://www.klarna.com/us/klarna-card/

[^26]: https://www.bsp.gov.ph/PaymentAndSettlement/ReportsE-PaymentsMeasurement/2024_EP_English.pdf

[^27]: https://coingeek.com/philippines-digital-payments-surpass-2024-targets-bsp-says/

[^28]: https://www.bsp.gov.ph/SitePages/PaymentsAndSettlements/PaymentsAndSettlements.aspx/{{GetWebAbsoluteURL()+ '/SitePages/Statistics/{{GetWebAbsoluteURL()+ '/PaymentAndSettlement/2024_Report_on_E-payments_Measurement.pdf'%7D%7D

[^29]: https://english.news.cn/20250707/e3cf4d500b7944c6a744fc405111dcc8/c.html

[^30]: https://www.worldbank.org/en/news/press-release/2024/11/12/world-bank-helps-boost-digital-transformation-in-ph

[^31]: https://wealthinsights.metrobank.com.ph/bworldonline/phl-might-miss-digital-payments-targets-says-bsp/

[^32]: https://www.bsp.gov.ph/Media_And_Research/Financial%20Inclusion%20Dashboard/2021/FIDashboard_4Q2021.pdf

[^33]: https://www.worldbank.org/en/results/2025/07/02/unlocking-the-philippines-digital-transformation-by-increasing-internet-connectivity

[^34]: https://www.philstar.com/business/2025/07/08/2456246/over-half-retail-transactions-now-digital-says-bsp

[^35]: https://business.inquirer.net/536001/50-4-of-pinoys-ride-financial-inclusion

[^36]: https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099120003032234458

[^37]: https://fintechnews.ph/70092/digital-banking-news-philippines/bsp-new-rules-digital-banking-philippines-standardised-payment-rails/

[^38]: https://www.bsp.gov.ph/Media_And_Research/Financial%20Inclusion%20Dashboard/2021/FIDashboard_2Q2021.pdf

[^39]: https://www.reddit.com/r/ProductManagement/comments/191pr62/lets_discuss_monetization_strategies_a_case_study/

[^40]: https://uxdesign.cc/splitwise-a-ux-case-study-dc2581971226

[^41]: https://www.investopedia.com/articles/company-insights/090816/how-splitwise-works-and-makes-money.asp

[^42]: https://fintechcompass.net/personal-bank-accounts/revolut/revolut-under-18/

[^43]: https://play.google.com/store/apps/details/Splitwise?id=com.Splitwise.SplitwiseMobile\&hl=bs

[^44]: https://www.gcashqrcode.com

[^45]: https://www.producthunt.com/products/splitwise

[^46]: https://www.reddit.com/r/Revolut/comments/wrntxk/junior_account_for_joint_account_purposes/

[^47]: https://www.reddit.com/r/unpopularopinion/comments/kho440/venmos_social_media_aspect_is_so_unnecessary_i/

[^48]: https://www.youtube.com/shorts/tas-nW72Ta0

[^49]: https://www.paymentsdive.com/news/klarna-to-offer-after-purchase-bnpl/810099/

[^50]: https://www.respicio.ph/commentaries/legal-regulations-and-complaints-for-online-lending-in-the-philippines

[^51]: https://docs.klarna.com/acquirer/klarna/web-payments/integrate-with-klarna-payments/tokenized-payments/mixed-payments/

[^52]: https://investors.klarna.com/News--Events/news/news-details/2026/Klarna-Expands-Further-Into-Agentic-Commerce-Offering-Flexible-Payments-to-Merchants-via-Stripes-Shared-Payment-Tokens/default.aspx

[^53]: https://www.lawyer-philippines.com/articles/enforcement-of-borrower-protection-for-consumer-loans-in-the-philippines

[^54]: https://www.facebook.com/pnscpas/posts/sec-advisory-on-unrecorded-online-lending-platforms-and-websites/1330206389127540/

