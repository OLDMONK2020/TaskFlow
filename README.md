# TaskFlow
TaskFlow is a small REST API-only app, where users register, log in, and manage tasks. Authentication uses a server-side session stored in Redis and an opaque session ID held in an HttpOnly cookie. PostgreSQL stores durable application data, accessed through Drizzle ORM. Role-based authorization (RBAC) controls which actions a user may perform
