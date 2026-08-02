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
await payload.updateGlobal({ slug: 'site-settings', data: {
  siteName: 'Viriato Terra', tagline: 'Deporte, naturaleza y territorio',
  navigation: [
    { label: 'Inicio', href: '/' },
    { label: 'Eventos', href: '/eventos/' },
    { label: 'Nosotros y servicios', href: '/nosotros-y-servicios/' },
    { label: 'Contacto', href: '/contacto/' },
  ],
  footerText: 'Viriato Terra · Deporte y naturaleza',
  socialLinks: [{ label: 'Instagram', url: 'https://www.instagram.com/' }],
  contact: { email: 'hola@viriatoterra.es', phone: '', address: '' },
} })
console.log('SiteSettings configurado')
if (payload.db.destroy) await payload.db.destroy()
