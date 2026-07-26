# AI Pipeline Skill

Use this skill for translation, summary, tagging, classification, and evaluation.

## Workflow

1. Read `AGENTS.md`.
2. Read the content and AI output schemas.
3. Define structured output.
4. Record model, prompt version, input hash, and output.
5. Add retry and fallback behavior.
6. Build or update eval cases.
7. Report quality and cost evidence.

## Guardrails

- Original content is immutable.
- AI output must be traceable to source content.
- Ambiguous content must not be summarized as certain fact.

