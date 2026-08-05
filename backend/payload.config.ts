import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { Users } from './collections/Users.ts'
import { Media } from './collections/Media.ts'
import { Pages } from './collections/Pages.ts'
import { SiteSettings } from './globals/SiteSettings.ts'
const dirname = path.dirname(fileURLToPath(import.meta.url))
export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: dirname,
      importMapFile: path.resolve(dirname, 'app/(payload)/admin/importMap.ts'),
    },
  },
  collections: [Users, Pages, Media],
  globals: [SiteSettings],
  secret: process.env.PAYLOAD_SECRET || '', typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  db: postgresAdapter({ pool: { connectionString: process.env.DATABASE_URL || '' } }), sharp,
})
