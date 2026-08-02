import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: { read: () => true },
  admin: { group: 'Configuración' },
  fields: [
    { name: 'siteName', type: 'text', required: true, defaultValue: 'Viriato Terra' },
    { name: 'tagline', type: 'text', required: true, defaultValue: 'Deporte, naturaleza y territorio' },
    { name: 'logo', type: 'upload', relationTo: 'media' },
    {
      name: 'navigation', type: 'array', fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
      ],
    },
    { name: 'footerText', type: 'textarea', defaultValue: 'Viriato Terra · Deporte y naturaleza' },
    {
      name: 'socialLinks', type: 'array', fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
      ],
    },
    {
      name: 'contact', type: 'group', fields: [
        { name: 'email', type: 'email' },
        { name: 'phone', type: 'text' },
        { name: 'address', type: 'textarea' },
      ],
    },
  ],
}
