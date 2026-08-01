import path from 'node:path'
import type { CollectionConfig } from 'payload'
export const Media: CollectionConfig = {
  slug: 'media', access: { read: () => true }, admin: { useAsTitle: 'alt' },
  upload: { staticDir: path.resolve(process.cwd(), 'uploads/images'), mimeTypes: ['image/*'], imageSizes: [
    { name: 'thumbnail', width: 400, height: 300, position: 'centre' },
    { name: 'card', width: 800, height: 600, position: 'centre' },
    { name: 'hero', width: 1600, height: 1000, position: 'centre' },
  ] },
  fields: [{ name: 'alt', type: 'text', required: true }],
}
