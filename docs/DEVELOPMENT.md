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
