import { getCollection } from 'astro:content'

// Drafts (frontmatter `draft: true`) are visible while running `astro dev`
// so they can be reviewed in place, but never make it into a production
// build — not as pages, not in the feeds.
export async function getPublishedPosts() {
  const posts = await getCollection('blog', ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  )
  return posts.sort((a, b) => b.data.pubDate - a.data.pubDate)
}
