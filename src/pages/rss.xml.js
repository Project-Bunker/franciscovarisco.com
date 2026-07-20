import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { siteTitle, siteDescription } from '../data/site.js'

export async function GET(context) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate - a.data.pubDate,
  )

  return rss({
    title: siteTitle,
    description: siteDescription,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/writing/${post.id}/`,
    })),
  })
}
