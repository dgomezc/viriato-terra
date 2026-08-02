# PostgreSQL local/LAN

Esta carpeta contiene exclusivamente la infraestructura local de PostgreSQL y pgAdmin.
La base de datos se ejecuta en el equipo servidor, no dentro de `web/` ni `backend/`.

## Arranque en el servidor

```powershell
Copy-Item .env.example .env
docker compose up -d
docker compose ps
```

Desde otro equipo de la red, Payload debe usar la IP privada del servidor:

```env
DATABASE_URL=postgres://viriato:contraseña@192.168.1.50:5432/viriato
```

Configura el firewall para permitir `5432` y `5050` únicamente desde la red local. No publiques estos puertos en Internet. Para mayor seguridad, sustituye `0.0.0.0` por la IP LAN concreta del servidor.

Los volúmenes `postgres-data` y `pgadmin-data` son persistentes y no se versionan.
