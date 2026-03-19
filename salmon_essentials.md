# Salmon essentials

## Что такое Salmon

- Philippine consumer fintech + bank stack вокруг кредитов, платежей и депозитов.
- Основной consumer hub: `Salmon app`.
- Юрструктура, которая явно встречается в выгрузке:
  - `Sunprime Finance Inc.` - online lending platform.
  - `FHL Financing Company, Inc.` - service app only.
  - `Salmon Bank (Rural Bank) Inc.` - лицензированный rural bank, бывший `Rural Bank of Sta. Rosa (Laguna), Inc.`.
- История банка:
  - работает с 1963 года;
  - Salmon Group acquired bank in 2024;
  - в 2025 BSP approved business name `Salmon Bank` and issued Basic EPFS License.
- Trust markers:
  - BSP-licensed / regulated;
  - PDIC insurance up to `PHP 1,000,000` per depositor;
  - backed by IFC and ADQ/Lunate;
  - DTI Trustmark is mentioned.

## Core product stack

### 1. Salmon Product Loan

- POS/installment loan for in-store purchases.
- Обещание: buy now, pay monthly.
- Параметры:
  - loan amount `PHP 1,000` to `PHP 60,000`;
  - down payment `0%` to `70%`;
  - terms `4, 6, 9, 12, 18, 24` months;
  - interest rates and fees vary by customer/profile.
- Eligibility:
  - Filipino citizen;
  - `18+`;
  - steady income / employed / self-employed / business / remittances;
  - active Philippine mobile number + email;
  - at least one valid government ID.
- Distribution:
  - apply in partner store via Salmon Ambassador;
  - store locator and in-app chat are used to find stores;
  - public pages claim coverage across `3,000+` to `5,000+` partner stores nationwide.
- UX promises:
  - one valid ID;
  - approval in about `1 minute`;
  - merchant FAQ says approval can be as fast as `10 seconds`;
  - can be `0%` down.

### 2. Salmon Credit Line

- Revolving credit line; reusable without reapplying as long as minimum due is paid.
- Main credit page advertises a limit up to `PHP 250,000`.
- Usage:
  - QR Ph payments;
  - virtual card and some physical/Access card flows;
  - transfer to bank accounts / e-wallets.
- Pricing logic:
  - purchases via QR Ph or linked Salmon Card can get up to `62 days` grace period if the full statement balance is paid on time;
  - bank/e-wallet transfers are treated as cash transactions and accrue interest from transaction date;
  - monthly billing cycle with required minimum payment.
- Access model:
  - some pages position Credit Line as an offer for good Product Loan customers;
  - other pages say new customers can apply directly in app.

### 3. Salmon Personal Loan

- Unrestricted personal loan.
- Selectively offered by the system.
- Terms: `4, 6, 9, 12` months.

### 4. Deposits / Salmon Bank

- Time Deposit:
  - deposit range `PHP 5,000` to `PHP 50,000,000`;
  - terms `6 months` to `5 years`;
  - advertised rate up to `8% p.a.`;
  - `PHP 1,000,000+` is needed to access the max rate under current terms.
- Other deposit products:
  - regular savings: `3% p.a.`;
  - business savings: `3% p.a.`;
  - demand deposit: non-interest-bearing.
- Opening flow:
  - online form;
  - telesales follow-up;
  - relationship manager assigned;
  - account opening can be completed at home or office.
- Funding/top-up:
  - QR Ph;
  - PESONet;
  - branch over the counter.
- Key fees / rules:
  - maintenance fee: free;
  - dormancy fee: `PHP 30` after 5 years of inactivity;
  - stop payment order: `PHP 2,200`;
  - checkbook: free for `PHP 500,000+`, else `PHP 500`;
  - matured time deposits are subject to `20%` withholding tax;
  - early withdrawal: reduced interest `1.00%` plus pre-termination fee `0.75%` of initial deposit.
- Insurance:
  - PDIC up to `PHP 1,000,000` per depositor;
  - joint accounts are insured separately from individual accounts.

## App, payments, servicing

- `Salmon app` is the central control surface for:
  - due dates;
  - repayments;
  - product/account details;
  - referrals;
  - support via in-app chat.
- App availability:
  - iOS App Store;
  - Google Play;
  - Huawei AppGallery.
- In-app repayment methods:
  - auto-debit;
  - QR Ph;
  - e-wallets;
  - banks;
  - over-the-counter barcode/reference flow.
- Named repayment partners inside the app:
  - GCash, Maya;
  - BPI, UnionBank, RCBC;
  - 7-Eleven, Cebuana Lhuillier, SM, Robinsons.
- Extra repayment channels outside the app:
  - GCash, Maya, Globe, BDO, PalawanPay;
  - Cebuana Lhuillier, TrueMoney, Puregold;
  - ECPay, eTap.
- External repayment fee:
  - `PHP 18` service fee when paying outside the Salmon app.
- Early payment:
  - selected Product Loan / Personal Loan users can fully repay early in-app;
  - Credit Line users can always pay more than minimum to reduce outstanding balance.

## Merchant / B2B side

- `Salmon Installments` is the merchant offering.
- Merchant promise:
  - in-store installment payments;
  - zero risk to merchant;
  - full purchase amount reimbursed next day.
- Merchant-side metrics/claims:
  - `+55%` order value increase;
  - up to `90%` approval rate;
  - `100%` reimbursement next day.
- Merchant enablement:
  - merchant portal with real-time analytics;
  - trained salesforce, either merchant's own or deployed by Salmon;
  - free in-store marketing materials.
- Consumer proposition at merchant level:
  - as low as `0%` down;
  - only one valid ID;
  - no hidden charges;
  - approval in about `1 minute`.

## Growth loops / referral mechanics

- Consumer bring-a-friend for Product Loan:
  - `PHP 100` per successful referral;
  - max `5` rewards / `PHP 500`;
  - requires friend to be a new customer and product to be issued;
  - payout is claimed to GCash.
- Consumer bring-a-friend for Credit Line:
  - `PHP 100` per successful referral;
  - max `15` rewards / `PHP 1,500`;
  - friend must be a new customer; some promos may require issued plus used credit line;
  - payout is claimed to GCash.
- Public affiliate program:
  - promotes Credit Line;
  - pays up to `PHP 500` per approved referral;
  - public sign-up, referral link, and real-time tracking dashboard.
- Deposit referral:
  - `0.5%` cash bonus for each successful referral;
  - referred friend must open a `12-month` time deposit with at least `PHP 50,000`.

## Security / trust / compliance

- Security controls repeatedly mentioned:
  - two-step verification;
  - biometrics and encryption;
  - 24/7 fraud monitoring;
  - AI-based fraud detection;
  - ISO `27001:2022` with `30+` security controls.
- User education topics:
  - phishing / smishing / call scams / fake app warnings;
  - guidance to download only from official stores;
  - strong reliance on in-app chat as the secure support channel.

## High-signal takeaways

- Salmon is not just a loan app; it is building a full stack around:
  - POS lending;
  - revolving credit and payments;
  - deposit banking;
  - merchant distribution;
  - referral and affiliate growth.
- Core acquisition wedge appears to be offline retail financing.
- Core retention wedge appears to be app-based servicing and migration from Product Loan to Credit Line and other products.
- Core expansion wedge is the combination of QR Ph payments, cards, transfers, deposits, and merchant tools.
- There are several built-in network-like loops:
  - merchant network expansion;
  - consumer referral rewards;
  - public affiliate acquisition;
  - deposit bring-a-friend;
  - QR Ph acceptance piggybacking on national merchant infrastructure.

## Inconsistencies worth remembering

- Partner store footprint is described as both `3,000+` and `5,000+` stores.
- Credit Line limit is described as both `PHP 100,000` and `PHP 250,000`.
- QR Pay reach is described as both `60,000+` and `600,000+` businesses.
- Grace period messaging is inconsistent:
  - main credit page says `pay in full on time` for `0%` interest;
  - affiliate page wording suggests continued use with monthly minimum payments, which conflicts with the detailed explanation.

## Excluded from this compact file

- All images and image URLs.
- Navigation, footer, cookie, social, and repeated legal boilerplate.
- News, promos, blog posts, job board, and long step-by-step support flows unless they added product signal.
