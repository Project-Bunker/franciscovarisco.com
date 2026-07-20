---
title: 'Six months of always-on agents'
description: 'What I learned running a Mac Studio with local agents 24/7: the setup, the surprises, and why proactive beats reactive.'
pubDate: 2026-07-15
image: '/cards/paradise-bunker-start.jpg'
---

Six months ago I put a Mac Studio in the corner of my office, called it
Paradise Bunker, and gave it one job: keep working while I'm not.

Today it runs a small crew of agents around the clock — a research assistant
that surfaces insights before I ask, an investment agent that watches the
things I care about, and a coding agent that ships while I sleep. This post is
an honest look at what that's actually like.

## The setup

The stack is deliberately boring:

- **One machine.** A Mac Studio running local models 24/7. No cloud bill
  surprises, no data leaving the house for the sensitive stuff.
- **A scheduler.** Every agent is a cron job with a prompt and a set of tools.
  If it can't be described as "every morning at 6, do X", it's not automated
  yet.
- **One inbox.** Everything the agents produce lands in a single place I
  review over coffee. If an agent can't summarise its night in three
  paragraphs, that agent gets simplified.

## What surprised me

The biggest shift wasn't capability, it was **direction**. A chat assistant
answers; an always-on agent *proposes*. Waking up to "here are three things
that changed overnight and one of them needs a decision" is a fundamentally
different relationship with the tools.

The second surprise: most failures were plumbing, not intelligence. Models
were rarely the bottleneck —

```text
agent fails → check the model      (5% of the time)
agent fails → check the tooling    (95% of the time)
```

> Reliability is a systems problem wearing an AI costume.

## Where this is going

The people building this infrastructure now will shape how work gets done.
Not because the agents are smarter than anyone else's, but because six months
of small, compounding automations is a moat that's very hard to shortcut.

If you're thinking about starting: start smaller than feels impressive. One
agent, one schedule, one inbox. Let it earn its teammates.
