# Zhuixun PRD V0.1

## Goal

Validate the core experience of following people instead of platforms.

Users should be able to connect, import, or subscribe to explicitly allowed sources, view a unified clean timeline, and receive Chinese translation, one-line summaries, topic tags, and daily briefings. Every AI result must remain traceable to original content and the original link.

## Target User

Early beta users who follow specific people across multiple platforms and want a cleaner, person-centered way to review updates without ads, comments, likes, or platform noise.

## Core User Stories

1. As a user, I can sign in and manage my account.
2. As a user, I can create a Person and bind multiple Platform Accounts to that Person.
3. As a user, I can import or connect an authorized source.
4. As a user, I can view a unified timeline without likes, comments, or ads.
5. As a user, I can filter by person, platform, circle, keyword, and time.
6. As a user, I can see original text, source link, platform, author, and publish time.
7. As a user, I can see Chinese translation, one-line summary, and topic tags.
8. As a user, I can receive a daily briefing with links back to original content.

## V0.1 Data Source Priority

| Priority | Source | Method | Risk |
| --- | --- | --- | --- |
| P0 | RSS / Atom / public blogs | Standard protocol | Low |
| P0 | User-uploaded platform export files | User-provided import | Low |
| P0 | User-owned account OAuth / official API | Authorized API | Medium-low |
| P1 | YouTube channels and captions | Official API / RSS | Medium |
| P1 | Public web pages | Only when terms and robots allow | Medium-high |
| Deferred | Bulk public scraping of high-risk platforms | Wait for verifiable authorization or partnership | High |

## Non-Goals

- No bulk scraping of unclear public platforms in V0.1.
- No native mobile app in V0.1.
- No Kafka, Kubernetes, Elasticsearch, or microservices in V0.1.
- No Go collector in the main path for V0.1.
- No algorithmic recommendation feed in V0.1.

## Success Metrics

| Area | Metric | Early Target |
| --- | --- | --- |
| Product | Beta users active at least 3 days in 7 days | >= 35% |
| Value | Daily briefing open rate | >= 45% |
| Content | Original source click-through | >= 15% |
| Quality | Duplicate content rate | < 2% |
| Quality | Severe AI summary error rate by human review | < 1% |
| Stability | P0 source 24-hour success rate | >= 99% |
| Cost | Monthly AI + collection marginal cost per active user | Measure first |

## Stop Condition

If retention and daily briefing usage do not improve for 3 consecutive weeks, pause platform expansion and return to user interviews.

