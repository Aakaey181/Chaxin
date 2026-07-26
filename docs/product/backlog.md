# Zhuixun V0.1 Backlog

## P0

| Epic | Acceptance Criteria |
| --- | --- |
| Identity and login | User can sign in, sign out, and delete account. Tokens are not logged. |
| People and platform accounts | One Person can bind multiple Platform Accounts. |
| Unified content model | Original text, source link, publish time, external ID, and content hash are stored. |
| RSS collection | Supports ETag, Last-Modified, rate limiting, retry, and deduplication. |
| User import | File validation, preview, confirmation import, and undo are supported. |
| Unified timeline | Timeline hides likes and comments, and supports person, platform, and time filters. |
| AI translation and summary | Async, structured, retryable, and never mutates original content. |

## P1

| Epic | Acceptance Criteria |
| --- | --- |
| Daily briefing | Briefing is generated from followed people and links to original sources. |
| Source admin | Admin can enable or disable sources and inspect failure rate and last success time. |
| Subscription limits | Server enforces follow count and AI quota limits. |
| Compliance records | Every source records authorization, terms link, retention, and deletion policy. |

## Week 0 Foundation Tasks

- Create `AGENTS.md`.
- Create role files in `agents/`.
- Create reusable skills in `skills/`.
- Create PRD and backlog.
- Create ADR-001 for modular monolith.
- Create monorepo skeleton.
- Add Docker Compose skeleton.
- Add CI skeleton.

## Week 1 Product Skeleton Tasks

- Auth placeholder.
- Person model and API.
- PlatformAccount model and API.
- Follow model and API.
- Mock feed timeline.
- Basic web navigation and empty states.

