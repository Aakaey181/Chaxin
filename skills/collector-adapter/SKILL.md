# Collector Adapter Skill

Use this skill to implement a Zhuixun source adapter.

## Workflow

1. Read `AGENTS.md`.
2. Read the relevant Source Register in `docs/sources/`.
3. Confirm compliance review is complete.
4. Implement adapter behind the shared collector interface.
5. Add idempotency using external ID and content hash.
6. Add rate limiting, retry, timeout, and kill switch behavior.
7. Add contract tests and failure tests.
8. Document rollback and disable instructions.

## Guardrails

- Do not put source-specific collector logic in API controllers.
- Collector failure must not take down core API.
- Original source URL and original content must remain traceable.

