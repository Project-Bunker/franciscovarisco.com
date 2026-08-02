---
title: 'Build the factory first'
description: 'A Mac Studio, an open-source agent and a month of commits. What a coding lab at home actually gives you, and what it still costs to set one up.'
pubDate: 2026-08-02
image: '/cards/coding-lab-commits.png'
draft: true
---

Six months of my GitHub look like nothing much. Then July.

That wall of green isn’t me working harder. I didn’t change jobs, start
sleeping less, or discover a productivity system. I built a coding lab at
home, and the commits are what fell out of it.

Let me be careful with that chart, because a contribution graph is a vanity
metric the moment you let it be. Squares aren’t outcomes. Nobody was helped
by a commit. But the *shape* of it is real, and it matches something I can
feel: things I’d been meaning to build for two years shipped in a few weeks,
and the gap between “I wonder if” and “it’s running” collapsed to about an
afternoon.

So this is the build log.

## What’s in the room

A Mac Studio. That’s the lab. There is no rack, no second machine, no
blinking cabinet in a cupboard.

On it runs [Hermes Agent](https://hermes-agent.nousresearch.com/), the
open-source agent Nous Research shipped in February. That’s the piece that
turns a fast computer into something that does work rather than something
that waits to be told. It holds the skills, keeps the memory between
sessions, and drives the models.

The shape of it is a brain and a set of workers. The brain is a cloud model,
because deciding what should happen is the part still worth paying for. It
carries a library of skills whose whole job is to break a demand down and
hand the pieces out. The workers are the local models on the Mac Studio, and
they do the volume: the reading, the drafting, the code, the long
unglamorous passes that would otherwise eat a morning.

Linear is the control board. Every demand goes in there, whether I opened
the ticket or the brain did, and nothing gets worked on that isn’t a ticket.
That single decision is what turned a pile of clever scripts into something
I can actually run.

And it works to a timetable. Research models and coding models get scheduled
windows instead of fighting over the machine, so the deep reading happens
while I’m not asking for code, and the code happens when I am.

I’m not writing the setup guide here, though. All of it gets open-sourced
when it’s done, and it’s not 100% ready yet.

## Why it has to be mine

The first advantage is the hardest to explain and the most valuable to have.
It’s mine.

It runs on hardware sitting in my house. The memory, the skills and the
record of everything I’ve built live there. Nobody can deprecate it,
reprice it, rate-limit it, quietly change the terms, or decide that the one
feature I built everything on top of isn’t strategic anymore. I’ve spent
enough of my career building on other people’s platforms to know exactly
what that paragraph is worth.

That isn’t an argument against cloud models. The brain is one, and for the
hardest thinking they’re still the best tools that exist. It’s an argument
for having a floor. The workers, the memory and the accumulated skills sit
on hardware I own, so if the brain gets worse, or pricier, or disappears, I
swap it out and the lab keeps running.

## It gets better the more you use it

The second advantage took longer to notice, and it’s the one that changed
how I think about all of this.

Hermes builds skills out of experience. When I work something out with it,
whether that’s a workflow, a recurring chore I resent, or a particular way I
like a thing done, it doesn’t evaporate when the session ends. It gets
written down as a skill, and it’s there next time. The system I’m running
today is measurably better than the one I was running three weeks ago, and I
upgraded nothing. I just used it.

That’s the part I’d underline. Most assistants reset. Mine accumulates. One
of those compounds and the other doesn’t, and a month is long enough to see
the difference.

Which is how it stopped being a coding tool, which I hadn’t planned for.
Once a system knows enough about how you actually work, it gets useful in
places that have nothing to do with code. Mine organises my week now. It
knows what I said I’d do, and it notices when I don’t. It’s the closest
thing to a performance coach I’ve had, and the only one that has read
everything.

I didn’t build that. It’s what you get when the context stops being thrown
away.

## The part that’s still hard

Honesty section, because I’d rather you hear this from me than discover it
yourself on a Sunday afternoon.

Setting this up is not easy. Getting agents running properly and unattended
on your own hardware still takes real technical knowledge: networking,
permissions, model wrangling, and the deeply unglamorous business of making
something restart itself when it falls over at 3am. I’ve been writing
software for twenty years and I still lost evenings to it. If you’re not
technical, today, this is genuinely hard.

Today. That’s the load-bearing word. Two years ago none of this was
available at any price. Hermes Agent is open source and free. The models are
open. The tooling gets one layer friendlier every month, and every layer
somebody open-sources is a layer nobody has to build again. I don’t think
“you need to be an engineer to run agents at home” survives much longer. I’d
be surprised if it survives next year.

## Four things I’d tell you

If you’re thinking about doing this, here’s what I’d hand you before you
start.

1. **Build the factory first.** The temptation is to start with a use case,
   because use cases are the fun part. Resist it. Build the boring thing
   that makes use cases cheap: the setup, the plumbing, the way work gets
   handed to an agent and comes back finished. Then use cases stop being
   projects and start being requests. Every week I spent on the factory
   bought back a month of building things in it.

2. **Don’t build the dashboard.** I built one. A proper control panel for
   the whole lab, and I was pleased with it right up until I noticed I never
   opened it. Everything already flowed through Linear, and Linear was
   already the control board. The dashboard was a second place to look at
   the same information, which is a polite way of saying it was work I did
   to avoid doing work. Use the tool you’re already living in.

3. **The learning curve is real, and it’s fun.** I’d forgotten what it felt
   like to be a beginner at something adjacent to what I already know. It’s
   the most fun I’ve had with a computer in years, and it’s the part I most
   wish more people were exposed to, because from the outside it looks like
   homework and from the inside it’s a workshop.

4. **Generating your own tokens pays off.** This one sneaks up on you. It
   matters least when you’re dabbling and most when you’re pushing, and I’ve
   been pushing hard enough to hit the ceiling on every cloud plan I’m on. A
   machine that makes its own tokens changes what you’re willing to attempt,
   because the marginal experiment costs electricity instead of quota.

## What’s next

When the last pieces are in place, all of it goes public: the stack, the
skills, the config, the mistakes still sitting in the commit history. The
whole point of the argument I just made is that this gets easier when people
stop rebuilding the same scaffolding, and that only works if I hold up my
end.

A month ago I had a fast computer. Now I have a factory. Same hardware.

And the usual disclosure: this post was drafted by an AI working from my
notes and my commit history, then argued with, rearranged and rewritten by
the human whose name is on it.
