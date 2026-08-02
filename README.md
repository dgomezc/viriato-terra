# Viriato Terra

Consulta la [guía completa de desarrollo](./docs/DEVELOPMENT.md) para instalar Node.js, npm, pnpm, Git y Docker en Windows, Linux y WSL2.

Renovación gradual de Viriato Terra con Astro y Payload CMS.

## Paso actual

El proyecto está ejecutando el Paso 01. Consulta [PLAN.md](./PLAN.md) antes de trabajar y [AGENTS.md](./AGENTS.md) si vas a usar un asistente de IA.

## Requisitos

- Node.js 20.9+
- pnpm 11+
- Docker Desktop
- Un servidor de la red local para PostgreSQL y pgAdmin

## Puesta en marcha

### 1. PostgreSQL en el servidor de la red local

En el servidor que aloja la base de datos:

```powershell
Copy-Item infra/postgres/.env.example infra/postgres/.env
docker compose --env-file infra/postgres/.env -f infra/postgres/docker-compose.yml up -d
```

Consulta [infra/postgres/README.md](./infra/postgres/README.md) para el firewall y la configuración LAN.

### 2. Variables en el PC de desarrollo

Cada aplicación carga su propio archivo de entorno. Crea estos archivos ignorados por Git:

`backend/.env.local`:

```env
DATABASE_URL=postgres://viriato:contraseña@192.168.1.50:5432/viriato
PAYLOAD_SECRET=cambia-esta-clave-por-una-larga
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
WEB_ORIGIN=http://localhost:4321
```

`web/.env`:

```env
PUBLIC_PAYLOAD_URL=http://localhost:3000
```

Sustituye la IP, usuario, contraseña y secreto por los valores reales.

### 3. Aplicaciones Astro y Payload

```powershell
pnpm install
pnpm dev:backend
pnpm dev:web
```

También puedes lanzar ambas aplicaciones a la vez con `pnpm dev`.

Servicios locales:

- Payload: http://localhost:3000/admin
- API Payload: http://localhost:3000/api
- Astro: http://localhost:4321/diagnostico/
- PostgreSQL y pgAdmin se ejecutan en el servidor definido en `infra/postgres/README.md`.

No se deben guardar secretos, bases de datos, volúmenes Docker ni archivos de `backend/uploads/` en Git. Consulta [infra/postgres/README.md](./infra/postgres/README.md) para la configuración LAN.
