import config from '../payload.config'
import { getPayload } from 'payload'

const payload = await getPayload({ config })
const existing = await payload.find({ collection: 'pages', where: { slug: { equals: 'diagnostico' } }, limit: 1, draft: true })
if (!existing.docs[0]) {
  await payload.create({ collection: 'pages', data: { title: 'Diagnóstico de integración', slug: 'diagnostico', _status: 'published' } })
  console.log('Página de prueba creada: diagnostico')
} else {
  console.log('Página de prueba ya existente: diagnostico')
}
await payload.db.destroy()
