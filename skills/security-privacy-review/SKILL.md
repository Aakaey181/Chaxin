# Security and Privacy Review Skill

Use this skill when a change touches authentication, OAuth, tokens, logs, personal data, source imports, deletion, retention, or AI processing of user content.

## Workflow

1. Read `AGENTS.md`.
2. Identify secrets, tokens, PII, imported content, and AI inputs or outputs.
3. Check logs for accidental sensitive data exposure.
4. Check authorization boundaries.
5. Check data retention and deletion paths.
6. Check Source Register completeness for source-related work.
7. Report required fixes before release.

## Required Report

- Scope reviewed
- Sensitive data involved
- Authorization checks
- Logging risks
- Retention and deletion behavior
- Required fixes
- Residual risk

## Guardrails

- Do not approve unclear OAuth scopes.
- Do not approve logging tokens or unnecessary raw payloads.
- Do not allow AI outputs to replace original content.

