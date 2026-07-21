import rss from '@astrojs/rss'
import { siteTitle, siteDescription } from '../data/site.js'
import { getPublishedPosts } from '../data/posts.js'

export async function GET(context) {
  const posts = await getPublishedPosts()

  return rss({
    title: siteTitle,
    description: siteDescription,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
    })),
  })
}
