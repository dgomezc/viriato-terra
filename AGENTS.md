# Instrucciones para agentes de IA

## Antes de actuar

1. Lee `PLAN.md` y confirma el paso activo.
2. Ejecuta únicamente ese paso; no adelantes funcionalidades futuras.
3. Comprueba el estado de Git y no sobrescribas cambios del usuario.
4. Lee la configuración y el código existente antes de editar.

## Arquitectura

- `web/` es Astro y presenta contenido.
- `backend/` es Payload y la fuente editorial.
- PostgreSQL es la fuente de datos.
- La infraestructura de PostgreSQL y pgAdmin está en `infra/postgres/`; no crear un Compose alternativo en la raíz.
- En entornos separados, `DATABASE_URL` debe apuntar a la IP privada del servidor y los puertos deben limitarse a la LAN.
- `backend/uploads/images/` y `backend/uploads/documents/` contienen archivos locales ignorados por Git.
- Astro no debe leer rutas físicas del disco.
- WordPress solo se consulta como fuente de migración y nunca se modifica.

## Desarrollo

- Usa TypeScript estricto.
- Usa Tailwind CSS con tokens; no Tailwind por CDN.
- Astro es la opción por defecto para componentes.
- Usa React/shadcn/ui solo cuando una interacción compleja lo justifique.
- Mantén HTML semántico, responsive, accesible y con estados de error/vacío.
- Valida variables de entorno al arrancar.
- No codifiques secretos, URLs o puertos.

## Payload y datos

- Los cambios de colecciones requieren migración y regeneración de tipos.
- No edites tipos generados manualmente.
- No copies archivos a `uploads` sin crear registros en Payload.
- Los importadores deben ser idempotentes.
- No almacenes mensajes de contacto salvo que el plan lo autorice explícitamente.

## Git y varios equipos

- Antes: `git pull --ff-only`.
- Después: tests, actualización de `PLAN.md`, commit y push.
- No guardes `.env`, bases de datos, uploads o secretos en Git.
- Usa commits pequeños y descriptivos.

## Validación obligatoria

Al terminar un paso:

1. Ejecuta las pruebas disponibles.
2. Actualiza `PLAN.md` con cambios, URLs, comandos y checklist manual.
3. Cambia el estado a `awaiting_manual_validation`.
4. Detente. Los tests no equivalen a aprobación humana.

Solo continúa cuando el usuario indique `Aprobado`. Si solicita cambios, modifica exclusivamente el paso actual.
