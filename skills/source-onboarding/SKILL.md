# Source Onboarding Skill

Use this skill before implementing any new content source.

## Workflow

1. Read `AGENTS.md`.
2. Create or update a Source Register entry in `docs/sources/`.
3. Document authorization method, API or import path, rate limits, fields, deletion behavior, retention, risks, and kill switch.
4. If authorization or terms are unclear, stop implementation and document alternatives.
5. Ask Compliance Reviewer to review before coding.

## Required Source Register Fields

- Source name
- Authorization method
- User consent path
- API/import mechanism
- Rate limits
- Data fields
- Deletion behavior
- Retention policy
- Risk level
- Kill switch
- Owner

## Guardrails

- Do not bypass login, access controls, CAPTCHA, or platform limits.
- Prefer RSS, user uploads, OAuth, official APIs, and explicitly permitted data.

