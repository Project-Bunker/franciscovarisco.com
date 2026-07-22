---
title: 'Don’t code yourself a website'
description: 'An afternoon from empty repo to the page you’re reading, built by describing what I wanted and letting AI do the typing.'
pubDate: 2026-07-23
image: '/og.jpg'
draft: true
---

This website exists, and I didn’t type the code.

An afternoon. That’s what it took to go from an empty repository to the page
you’re reading: homepage, dark mode, share cards, analytics, and a blog.
My hands were on the keyboard the whole time, but almost never in the code.
I was typing sentences, not syntax.

I get asked a lot what it’s actually like to build with AI right now. Not the
demos, not the hype threads, but the real thing, on a real project, with real
opinions about how it should turn out. This site is the most honest answer I
have. So let me tell you how it went.

## Why a personal site in 2026

Because everything else I publish lives on someone else’s land. LinkedIn
decides who sees my posts. X decides what surfaces. This is my corner of the
internet: work, opinions and the things I care about, with no algorithm
deciding what you see.

And there was a second reason. My day job is one of the hardest problems in
AI: capturing what real experts actually do so models train on genuine human
signal. If I spend my days thinking about agents doing real work, the least I
can do is let one build my website. Not as a gimmick. As a live experiment I
could feel with my own hands.

## Where it started

I opened Claude Code and described a homepage the way I’d describe
it to a friend over coffee: who I am, where I’ve worked, make it fast, nothing
fancy. No wireframes. No spec. A conversation.

A couple of hours in there was a React site deployed on Vercel. Was it good?
It was *fine*. It was also live, which beats good.

Then taste took over, and this is where it got interesting. I
showed the AI a personal site I loved and said, in so many words, “more like
this.” Light and dark themes appeared, a yellow accent, a proper hero.

Partway through, I paused the build to do something more deliberate: I created
a proper style guide. Colours, type, spacing, the design tokens that decide how
everything looks, all captured in one place. That is what shaped the branding
into what I actually wanted rather than leaving it to chance, and it is what
will keep the site consistent as it grows, because every new section now
inherits the same rules instead of me redeciding them each time.

From there I had the AI build against that guide, the Paradise Bunker tokens I
now reuse across my projects, along with self-hosted fonts and real copy in
every section. Share cards and analytics followed, each one arriving as a pull
request for me to review.

Notice what I was doing in that list: choosing. The inspiration, the accent
colour, which design tokens, what the hero should say. The AI did all of the
typing. I did all of the deciding.

## The rhythm

Before long a loop emerged, and it’s the part I’d bottle and sell if I
could:

1. I describe an outcome. Not code, but an outcome. “I want to write content on
   my site. Advise me.”
2. The AI explores what exists, asks questions I hadn’t thought to ask myself,
   and comes back with options and honest trade-offs.
3. I pick. This is the whole job now. Direction and taste.

   My favourite version of step 2: before the big blog decision, it stopped
   and interviewed *me*. What kind of content: articles, notes, case studies?
   How should writing feel, files in the repo, or a fancy editor? Multiple
   choice, four options each, like a doctor ruling things out before
   operating. I’ve worked with senior engineers who don’t do that.


4. It builds, checks its own work, and opens a pull request.
5. I review like an editor, not a compiler. Sometimes I merge. Sometimes I say
   “that’s not what I meant,” and one sentence of redirection is enough.

If there’s one habit behind most of what went right, it’s this: plan mode
first, build mode second. Before the AI writes a single line, I have it work in
plan mode, thinking through the approach with me, weighing the trade-offs,
surfacing the edge cases I’d have missed on my own. Only once the plan is right
do I let it switch to build mode. The handful of times I skipped straight to
building are the same handful of times I had to walk things back. Getting the
plan right is what makes the building cheap.

The craft didn’t disappear. It moved. Twenty years of writing software didn’t
stop being useful; they’re what let me smell a wrong turn in a plan before
it’s built. But the hours themselves went from typing to judging, and I have
yet to miss the typing.

## The rebuild

Here’s my favourite part of the story.

When I decided the site needed a blog, I didn’t ask for a blog. I asked for
advice. The AI read the codebase and came back with a trade-off I only half
expected: the site was a single-page app rendered in the browser, which meant
blog posts would be invisible to search engines and would all share one
generic link preview. If I was serious about writing, the foundation had to
change.

Then it told me something better. It had read every line of the site and
found that the whole thing contained exactly **one** interactive element, the
little theme toggle in the corner. Everything else was just content wearing a
framework.

So we didn’t port the framework. We deleted it. The site moved to Astro, the
toggle became a few lines of plain JavaScript, and every page now ships as
plain, fast HTML. The site *gained* a blog and got lighter at the same time.

And the blog it gained isn’t a toy. Writing a post is now: create a text
file, add four lines at the top (title, one-sentence description, date,
cover image), write in markdown, push. It publishes itself with its own link
preview, lands in an RSS feed and a sitemap, and shows up as a card on the
homepage next to my life moments. The whole publishing pipeline I used to
put off building for years arrived in under an hour, with the AI checking its
own share cards and validating its own feeds before showing me the pull
request.

That’s the moment that stuck with me. The machine found a simplification I
couldn’t see, or maybe one I wouldn’t have admitted, because I’d chosen that
framework myself an hour earlier.

## Not everything was smooth

Honesty section, because AI-built anything invites suspicion of a highlight
reel.

The AI built exactly what I asked for and it wasn’t what I meant, more than
once. The first version of the blog was a neat separate page, when what I
wanted was posts living as cards next to my life moments on the homepage. One
message fixed it, but the lesson stands: vague in, vague out. AI amplifies
direction; it doesn’t supply it.

There are example posts that lived for a few minutes and got deleted. There’s
a folder in the repository full of abandoned share-image designs that never
shipped. The process looks clean in a blog post; the history is full of small
experiments and reversals, which is to say, it looks like building things
always has. Just faster, and by making mistakes cheaper, it made me braver
about trying them.

## Take what’s useful

The code for this site is MIT licensed and public. Fork it, point an AI at
it, and build your own corner of the internet with it, but bring your own
words and pictures.

And in the spirit of full disclosure: this post was drafted by the same AI
that built the site, working from the git history of us building it together,
then argued with, rearranged and edited by the human it pretends to be.

That’s the real division of labour now. It types. I mean it.
