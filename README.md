# Viriato Terra

Renovación gradual de Viriato Terra con Astro y Payload CMS.

## Paso actual

El proyecto está ejecutando el Paso 01. Consulta [PLAN.md](./PLAN.md) antes de trabajar y [AGENTS.md](./AGENTS.md) si vas a usar un asistente de IA.

## Requisitos

- Node.js 20.9+
- pnpm 11+
- Docker Desktop

## Puesta en marcha

```powershell
Copy-Item .env.example .env
pnpm install
pnpm db:up
pnpm dev:backend
pnpm dev:web
```

Servicios locales:

- Payload: http://localhost:3000/admin
- API Payload: http://localhost:3000/api
- Astro: http://localhost:4321/diagnostico/
- pgAdmin: http://localhost:5050

No se deben guardar secretos, bases de datos ni archivos de `backend/uploads/` en Git.
