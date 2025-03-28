import config from '@payload-config'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import { RenderBlocks } from '@/blocks/render-blocks'

interface PageParams {
  params: Promise<{
    slug?: string
  }>
}

export default async function Page({ params: paramsPromise }: PageParams) {
  const { slug = 'home' } = await paramsPromise
  const payload = await getPayload({ config })

  const {
    docs: [page],
  } = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1,
    overrideAccess: true,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  if (!page) {
    return notFound()
  }

  return <RenderBlocks blocks={page.layout} />
}

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const { docs: pages } = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 100,
    overrideAccess: false,
  })

  return pages.map(({ slug }) =>
    slug !== 'home'
      ? {
          slug,
        }
      : {},
  )
}
