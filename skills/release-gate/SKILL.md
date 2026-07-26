# Release Gate Skill

Use this skill before merging or shipping a change.

## Workflow

1. Read `AGENTS.md`.
2. List changed files.
3. Run relevant builds, tests, migrations, and smoke checks.
4. Check OpenAPI/client consistency when API changed.
5. Check source and privacy risks when data access changed.
6. Write release evidence and rollback notes.

## Required Report

- Changed files
- Commands run
- Test results
- Smoke test results
- Known risks
- Rollback plan

## Guardrails

- Do not mark complete without evidence.
- Say explicitly when a test was skipped or could not run.

