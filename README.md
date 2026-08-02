# Viriato Terra

Renovación gradual de Viriato Terra con Astro y Payload CMS.

## Paso actual

El proyecto está ejecutando el Paso 01. Consulta [PLAN.md](./PLAN.md) antes de trabajar y [AGENTS.md](./AGENTS.md) si vas a usar un asistente de IA.

## Requisitos

- Node.js 20.9+
- pnpm 11+
- Docker Desktop
- Un servidor de la red local para PostgreSQL y pgAdmin

## Puesta en marcha

```powershell
Copy-Item .env.example .env
Copy-Item infra/postgres/.env.example infra/postgres/.env
pnpm install
pnpm db:up
pnpm dev:backend
pnpm dev:web
```

Servicios locales:

- Payload: http://localhost:3000/admin
- API Payload: http://localhost:3000/api
- Astro: http://localhost:4321/diagnostico/
- PostgreSQL y pgAdmin se ejecutan en el servidor definido en `infra/postgres/README.md`.

No se deben guardar secretos, bases de datos, volúmenes Docker ni archivos de `backend/uploads/` en Git. Consulta [infra/postgres/README.md](./infra/postgres/README.md) para la configuración LAN.
