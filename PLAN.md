# PLAN — Renovación gradual de Viriato Terra

## Estado

- Paso actual: 02
- Estado: `awaiting_manual_validation`
- Último paso aprobado: 01
- Próxima acción: esperar validación manual del Paso 02; no iniciar el Paso 03
- Rama: `main` (commit `2cafaa0`); remoto GitHub pendiente
- Última actualización: 2026-08-05
- Bloqueos: instalación puede tardar en equipos con red lenta; remoto GitHub pendiente
- PC de validación: desarrollo local

## Regla de ejecución

Cada paso debe entregar configuración en Payload, contenido real o representativo, una página Astro, migración correspondiente, pruebas e instrucciones manuales. Al terminar, el estado pasa a `awaiting_manual_validation` y el agente se detiene. No se inicia el siguiente paso hasta recibir `Aprobado`.

## Pasos

- [x] 01 — Repositorio e integración mínima (`approved`)
- [ ] 02 — Sistema visual y estructura global (`awaiting_manual_validation`)
- [ ] 03 — Portada (`pending`)
- [ ] 04 — Páginas estáticas y contenido corporativo (`pending`)
- [ ] 05 — Formulario de contacto (`pending`)
- [ ] 06 — Eventos próximos (`pending`)
- [ ] 07 — Archivo histórico de eventos (`pending`)
- [ ] 08 — Resultados (`pending`)
- [ ] 09 — Galerías Flickr (`pending`)
- [ ] 10 — Blog y páginas especiales (`pending`)
- [ ] 11 — Reconciliación y centro de archivo (`pending`)

## Paso 01 — Repositorio e integración mínima

Estado: `approved` (validado por el usuario el 2026-08-02).

Implementado: monorepo pnpm con `web/` Astro + Tailwind y `backend/` Payload preparado para PostgreSQL; Docker Compose con PostgreSQL y pgAdmin; colecciones `Users`, `Pages` (borradores/publicación) y `Media` con Sharp y almacenamiento local; API REST Payload; `/diagnostico/` con estados de CMS no disponible y vacío; seed idempotente; CI y documentación para trabajo desde varios equipos.

Validación manual:

1. En el servidor, copiar `infra/postgres/.env.example` a `infra/postgres/.env` y ejecutar `pnpm db:up`; en el PC de desarrollo, copiar `backend/.env.example` a `backend/.env.local` y `web/.env.example` a `web/.env`.
2. Ejecutar `pnpm --filter backend dev` y abrir `http://localhost:3000/admin`; crear el primer usuario.
3. Crear/verificar `diagnostico`, guardar borrador y comprobar que `http://localhost:4321/diagnostico/` no muestra borradores; publicar y comprobar el título.
4. Subir una imagen en Media y confirmar que queda en `backend/uploads/images/` y la API la sirve.
5. Reiniciar Docker y verificar persistencia en pgAdmin (`http://localhost:5050`).
6. Ejecutar `pnpm test`, `pnpm typecheck` y `pnpm --filter web build`.

Tests automáticos: tests unitarios de `web` y `backend` pasan (1/1 cada uno; `fail 0`).

Problema conocido: falta configurar el remoto de GitHub porque no se ha proporcionado URL ni credenciales.

### Entrega

- Monorepo raíz con `web/`, `backend/`, `migration/`, `design/` e `infra/postgres/`.
- Docker Compose separado en `infra/postgres/` con PostgreSQL y pgAdmin.
- Ejemplos de entorno para `backend/` y `web/`, más guía multiplataforma en `docs/DEVELOPMENT.md`.
- Payload conectado a PostgreSQL.
- Colección `Pages` mínima y colección `Media`.
- Astro con Tailwind CSS y página `/diagnostico/`.
- Lectura de una página publicada desde Payload.
- Referencia de imagen almacenada en `backend/uploads/images/`.

## Paso 02 — Sistema visual y estructura global

Estado: `awaiting_manual_validation`.

Implementado: global `SiteSettings` editable desde Payload con identidad, navegación, pie, redes y contacto; seed representativo; tokens Tailwind ampliados; componentes Astro `SiteHeader`, `SiteFooter` y `SiteLayout`; página temporal `/guia-estilos/` con `noindex`, componentes, estados y fallback cuando el CMS no está disponible; lectura de settings y contenido publicado desde Astro; generación automática del import map de Payload antes de `dev`/`build` para evitar el error `CollectionCards`.

Validación manual:

1. Ejecutar el seed o editar `SiteSettings` en Payload y abrir `http://localhost:4321/guia-estilos/`.
2. Cambiar nombre, tagline, navegación, pie, redes y contacto en Payload; confirmar que cabecera y pie se actualizan al recargar Astro.
3. Revisar `/guia-estilos/` en móvil, tablet y escritorio.
4. Comprobar contraste, foco visible, navegación por teclado y apertura del menú móvil.
5. Confirmar que la página incluye `noindex, nofollow` y no contiene contenido ficticio fuera de los ejemplos visuales.
6. Detener Payload y comprobar que la página muestra el fallback y el estado informativo de CMS no disponible.

Tests ejecutados: `pnpm --filter backend payload generate:importmap`, `pnpm --filter backend typecheck`, `pnpm --filter backend build`.

Problemas conocidos: el logo se puede asociar desde Payload, pero su renderizado visual queda pendiente de contenido Media real; la página de guía es temporal y no forma parte de la navegación pública.
- Seed y prueba de integración.

### Validación manual pendiente

1. Abrir http://localhost:3000/admin y crear el primer usuario.
2. Crear una página de prueba y dejarla como borrador.
3. Confirmar que el borrador no aparece en http://localhost:4321/diagnostico/.
4. Publicarla y comprobar que aparece en Astro.
5. Subir una imagen y confirmar que se sirve desde Payload.
6. Reiniciar PostgreSQL y Payload y comprobar persistencia.
7. Abrir http://localhost:5050 y consultar las tablas desde pgAdmin.
8. Confirmar que `pnpm install`, `pnpm db:up` y el seed permiten repetir el entorno desde otro PC; comprobar que PostgreSQL solo es accesible desde la LAN.

### Tests ejecutados

- Pendientes hasta completar la instalación de dependencias y la primera ejecución.

## Protocolo entre equipos

Antes de trabajar: `git pull --ff-only`, leer este archivo y `AGENTS.md`, levantar Docker y comprobar el paso activo.

Al terminar: ejecutar validaciones, actualizar este archivo, crear commit, subir la rama y detenerse.

## Decisiones de arquitectura

- Payload y PostgreSQL.
- Astro separado del backend.
- Tailwind CSS como base visual.
- shadcn/ui solo para islas interactivas justificadas.
- Archivos locales en `backend/uploads/` durante esta fase.
- Sin Cloudflare, R2, S3, CDN ni imgproxy.
- Hosting y despliegue se analizarán después del último paso.
