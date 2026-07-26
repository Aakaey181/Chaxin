# Spring Module Skill

Use this skill for Spring Boot API and persistence work.

## Workflow

1. Read `AGENTS.md`.
2. Read the relevant PRD and ADR.
3. Identify the module boundary.
4. Add or update entities, repositories, services, controllers, migrations, and tests.
5. Update OpenAPI for public API changes.
6. Regenerate or update the TypeScript client.
7. Run API tests and migration checks.

## Guardrails

- Every schema change needs Flyway.
- Do not log tokens or secrets.
- Do not overwrite original content with AI output.

