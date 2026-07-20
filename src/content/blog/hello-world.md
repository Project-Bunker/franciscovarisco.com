---
title: 'Hello, world (again)'
description: 'This site now has a writing section: markdown in, static HTML out, no algorithm in between.'
pubDate: 2026-07-20
---

For years this site was a single page. Now it can hold words too.

Every post here is a markdown file in the site's repository. I write it in my
editor, push it, and it's live — pre-rendered to plain HTML with no tracking of
what you read and no feed deciding whether you see it.

## How a post is written

A post is just a file with a small header:

```md
---
title: 'A title'
description: 'One sentence for search engines and link previews.'
pubDate: 2026-07-20
---

The words go here.
```

A few things I care about with this setup:

- **Ownership** — the words live in my repo, not a platform.
- **Longevity** — plain markdown will outlive whatever stack renders it.
- **Speed** — every post ships as static HTML with almost no JavaScript.

> The best time to start writing was ten years ago. The second best time is a
> commit away.

More soon. If you want to know when, there's an [RSS feed](/rss.xml).
