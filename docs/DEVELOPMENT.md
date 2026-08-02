# Guía de desarrollo

Esta guía prepara Windows, Linux o WSL2 para ejecutar el monorepo. PostgreSQL y pgAdmin se ejecutan en un servidor independiente de la red local; Astro y Payload en el equipo de desarrollo.

## Requisitos

- Git.
- Node.js 22 LTS o superior.
- npm, incluido con Node.js.
- pnpm 11.9.0.
- Docker Engine con Docker Compose v2 en el servidor de base de datos.
- Acceso al servidor PostgreSQL por el puerto 5432.

El proyecto fija pnpm en `packageManager` dentro de `package.json`. No se debe usar npm para instalar dependencias del workspace.

## Windows nativo

```powershell
git --version
node --version
npm --version
```

Si faltan, instalar desde PowerShell:

```powershell
winget install --id Git.Git -e
winget install --id OpenJS.NodeJS.LTS -e
```

Cerrar y abrir PowerShell e instalar pnpm:

```powershell
npm install --global pnpm@11.9.0
pnpm --version
```

## Linux

```bash
sudo apt update
sudo apt install -y git curl ca-certificates build-essential
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
source ~/.bashrc
nvm install 22
nvm alias default 22
node --version
npm --version
npm install --global pnpm@11.9.0
pnpm --version
```

## WSL2

Desde PowerShell como administrador:

```powershell
wsl --install -d Ubuntu
```

Dentro de Ubuntu, ejecutar los pasos de Linux. Clonar el repositorio dentro de `~/src/Viriato`, no bajo `/mnt/c/...`, para evitar problemas de rendimiento, permisos y symlinks.

Si Docker se ejecuta con Docker Desktop, activar `Settings > Resources > WSL Integration` para Ubuntu y comprobar:

```bash
docker version
docker compose version
```

No instalar un segundo Docker Engine dentro de WSL si se usa Docker Desktop.

## Clonar y preparar

```bash
git clone <URL_DEL_REPOSITORIO>
cd Viriato
pnpm install
```

Antes de trabajar, leer `PLAN.md` y trabajar solo en el paso activo.

## Variables de entorno

Los archivos reales no se versionan. Crear `backend/.env.local` desde `backend/.env.example` y `web/.env` desde `web/.env.example`. Editar el primero con la IP, contraseña y `PAYLOAD_SECRET` reales. `PUBLIC_PAYLOAD_URL=http://localhost:3000` es correcto cuando Payload corre en el mismo equipo.

PostgreSQL solo se configura en el servidor:

```bash
cp infra/postgres/.env.example infra/postgres/.env
docker compose --env-file infra/postgres/.env -f infra/postgres/docker-compose.yml up -d
```

No copiar el `.env` del servidor al repositorio ni al PC de desarrollo.

## Arranque diario

Desde la raíz, en dos terminales:

```bash
pnpm dev:backend
pnpm dev:web
```

También se pueden iniciar ambos con `pnpm dev`.

URLs: Payload `http://localhost:3000/admin`, API `http://localhost:3000/api`, Astro `http://localhost:4321/diagnostico/` y pgAdmin `http://IP_DEL_SERVIDOR:5050`.

## Comprobaciones

```bash
pnpm test
pnpm typecheck
pnpm build
```

Windows: `Test-NetConnection 192.168.1.50 -Port 5432`.

Linux/WSL: `nc -vz 192.168.1.50 5432`.

## Solución de problemas

- `pnpm no se reconoce`: cerrar y abrir la terminal; usar `where.exe pnpm.*` en Windows o `which pnpm` en Linux.
- `Cannot connect to database`: comprobar `DATABASE_URL`, puerto 5432 y credenciales.
- Payload devuelve 404 en `/admin`: detener el proceso, borrar la carpeta generada `backend/.next` y volver a ejecutar `pnpm dev:backend`.
- Astro muestra CMS no disponible: arrancar Payload y verificar `PUBLIC_PAYLOAD_URL`.
- Errores de symlinks en WSL: trabajar dentro de `~/src`, no bajo `/mnt/c`.
- No borrar volúmenes PostgreSQL sin confirmar antes una copia de seguridad.
