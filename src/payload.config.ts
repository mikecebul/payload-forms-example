import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Forms } from './collections/Forms'
import { Pages } from './collections/Pages'
import { FormSubmissions } from './collections/FormSubmissions'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Pages, Users, Media, Forms, FormSubmissions],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  email: nodemailerAdapter({
    defaultFromAddress: process.env.EMAIL_SMTP_USER ?? 'dev@payload.com',
    defaultFromName: 'Payload Form Example',
    transportOptions: {
      host: process.env.EMAIL_SMTP_HOST ?? 'localhost',
      port: process.env.EMAIL_SMTP_PORT ?? '1025',
      auth: {
        user: process.env.EMAIL_SMTP_USER ?? 'dev',
        pass: process.env.EMAIL_SMTP_PASS ?? 'password',
      },
    },
  }),
  sharp,
  plugins: [],
})
