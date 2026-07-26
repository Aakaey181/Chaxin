# ADR-001: Use Spring Boot Modular Monolith for V0.1

## Status

Accepted

## Context

Zhuixun V0.1 needs to validate the product experience quickly while keeping source collection, AI processing, privacy, and auditability maintainable. The system needs clear module boundaries, but the team should avoid operational complexity before product-market evidence exists.

## Decision

Use a Java 21 Spring Boot modular monolith for the core API in V0.1.

The API owns:

- Identity and subscription
- People, accounts, and follows
- Content query
- AI orchestration
- Admin and compliance records

Collectors remain behind an adapter layer. V0.1 collectors may be implemented in Java first. Go workers are deferred until collector concurrency, deployment independence, or resource cost justifies the migration.

PostgreSQL is the primary database. Async jobs use PostgreSQL job tables with `FOR UPDATE SKIP LOCKED`.

## Consequences

Positive:

- Faster first version.
- Clear business ownership in one deployable API.
- Fewer moving parts for beta operations.
- Easier transaction and migration management.

Tradeoffs:

- Collector failures need strong isolation inside the process or separate worker runtime.
- Module boundaries must be enforced by code review and tests.
- Later service extraction may be needed when scale or team size grows.

## Guardrails

- No direct database access from Next.js.
- All schema changes use Flyway.
- Source-specific platform logic does not live in controllers.
- AI outputs are stored separately from immutable original content.
- No Kafka, Kubernetes, Elasticsearch, or microservices in V0.1.

## Revisit Triggers

- A single collector process regularly exceeds 100-300 concurrent I/O tasks.
- Collector deployment must happen independently from core API.
- Collector resource cost becomes a meaningful infrastructure driver.
- Collector failures start affecting core API stability.
- The team has tests, monitoring, and Go ownership ready.

