# Traxyn Codex Operating Guide

## Project Mission

Traxyn V0.1 validates the experience of following people instead of platforms. The product aggregates user-authorized sources into a clean timeline, keeps original content traceable, and adds Chinese translation, one-line summaries, topic tags, and daily briefings.

## Fixed V0.1 Stack

- Web: Next.js App Router, TypeScript strict, Tailwind, shadcn/ui
- API: Java 21, Spring Boot, Spring Security, Spring Data JPA, Flyway, OpenAPI
- Data: PostgreSQL
- Async V0.1: PostgreSQL job tables with `FOR UPDATE SKIP LOCKED`
- Deployment: Docker; web and API independently deployable
- Go: not in the V0.1 main path. Keep a Collector Adapter interface and migration ADR only.

## Non-Negotiable Rules

1. Next.js must not connect directly to the production database.
2. Every database change must include a Flyway migration.
3. Every public API change must update OpenAPI and the TypeScript API client.
4. AI outputs must never overwrite original text.
5. Every source must have a Source Register entry: authorization, interface, rate limits, fields, deletion, retention, risk, and kill switch.
6. Do not bypass login, CAPTCHA, access control, rate limits, robots rules, or platform restrictions.
7. Data sources with unclear legality must not enter implementation; create a risk record and alternatives instead.
8. Every task must include tests, documentation, acceptance evidence, and rollback notes.
9. Do not introduce Kafka, Kubernetes, Elasticsearch, or microservices in V0.1 unless an ADR explicitly approves it later.
10. Do not claim completion unless build, tests, and the relevant smoke test pass.

## Repository Layout

```text
traxyn/
├── AGENTS.md
├── apps/
│   ├── web/
│   └── api/
├── workers/
│   └── collectors/
├── packages/
│   ├── ui/
│   └── api-client/
├── skills/
├── agents/
├── docs/
│   ├── product/
│   ├── research/
│   ├── architecture/adr/
│   ├── sources/
│   └── releases/
└── infrastructure/
```

## Working Sequence

1. Read this file first.
2. Read the relevant `agents/*.md` role file.
3. Read the relevant `skills/*/SKILL.md` workflow.
4. Check existing files before editing.
5. Make the smallest coherent change.
6. Run the relevant tests and smoke checks.
7. Report: changed files, commands, results, risks, rollback.

## V0.1 Initial Scope

The first implementation phase only creates the project foundation:

- Team rules and role files
- Reusable skills
- PRD, backlog, and first ADR
- Monorepo skeleton
- Docker Compose and CI skeleton

Business implementation starts only after this foundation is reviewed.

## Available Agents

- Product Lead: `agents/product-lead.md`
- Market Research: `agents/market-researcher.md`
- Solution Architect: `agents/architect.md`
- Frontend Engineer: `agents/frontend-engineer.md`
- Backend Engineer: `agents/backend-engineer.md`
- Collector Engineer: `agents/collector-engineer.md`
- AI Engineer: `agents/ai-engineer.md`
- QA / Release: `agents/qa-release.md`
- Compliance Reviewer: `agents/compliance-reviewer.md`

## Available Skills

- Product discovery: `skills/product-discovery/SKILL.md`
- Market research: `skills/market-research/SKILL.md`
- Source onboarding: `skills/source-onboarding/SKILL.md`
- Collector adapter: `skills/collector-adapter/SKILL.md`
- Spring module: `skills/spring-module/SKILL.md`
- Next.js feature: `skills/nextjs-feature/SKILL.md`
- AI pipeline: `skills/ai-pipeline/SKILL.md`
- Security and privacy review: `skills/security-privacy-review/SKILL.md`
- Release gate: `skills/release-gate/SKILL.md`
- Incident review: `skills/incident-review/SKILL.md`
