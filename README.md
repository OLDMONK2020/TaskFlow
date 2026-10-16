# TaskFlow
TaskFlow is a small REST API-only app, where users register, log in, and manage tasks. Authentication uses a server-side session stored in Redis and an opaque session ID held in an HttpOnly cookie. PostgreSQL stores durable application data, accessed through Drizzle ORM. Role-based authorization (RBAC) controls which actions a user may perform

# Steps
1) npm init
2) npm i express
3) npm i @types/express @types/node -D
4) add "type": "module" in package.json to enable ES6
5) create project folder structure & include index.js file (entry point)
6) 
