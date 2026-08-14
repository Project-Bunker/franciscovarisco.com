---
title: 'Humans came second'
description: 'What running my first voice eval taught me about synthetic speech, human judgement and the data models still need.'
pubDate: 2026-08-14
image: '/cards/voice-h-waveforms.jpg'
draft: false
---

[Isaac Povey](https://www.linkedin.com/in/isaacpovey/) was the first person to say it aloud: the results were
surprising.

We gathered around to look. Hidden among nine synthetic voices was the
original human recording, and we had expected the human to win. It hadn't. It
had finished second.

Our first reaction wasn't to declare a breakthrough. It was to wonder what
we'd got wrong. We checked the result again because it looked weird. The
result held.

This was my first time helping to run an eval. I hadn't designed it alone; I
worked with the team to review the design and choose some of the models. I
also got to name it. We called it
[VOICE-H](https://www.askablelabs.com/voice-h/) because the H stands for human:
simple, easy to remember, and the point of the whole exercise. Instead of
asking one model to judge another, every judgement in the benchmark came from
a person listening.

I went into the project expecting to learn which synthetic voice was best. I
came out of it less interested in the winner than in what people heard, what
they missed, and why making voices sound more human may now depend on
collecting better human speech.

## The result we checked twice

The basic test was straightforward. We took words from real interviews and
gave the same text to nine voice models. Then we put the generated clips into
blind comparisons alongside the original recording and asked people which
voice sounded more human.

The human came second overall. On emotion and tone, the winning model scored
better than the person who had actually lived the experience being
described.

There is an important catch. The original voices came from real interviews:
real rooms, ordinary microphones and background noise. The generated voices
got the same words without any of that mess. They were effectively allowed
to perform in a studio while the humans had to compete from wherever the
original conversation happened.

That recording difference matters, and we reported it. It is also something
we can strengthen in the next version of the benchmark. But it didn't make
the result uninteresting. If anything, it exposed how quickly people use
clean audio as evidence that a voice is real. The synthetic clips didn't
just survive comparison with a human. Listeners often preferred them and
then explained, with complete confidence, why they had made the human choice.

## The comments were better than the ranking

Every judgement came with a written reason. Once I started reading them, the
leaderboard felt like only half the result.

People are very confident when explaining what makes a voice human. They are
also wrong surprisingly often. They marked real hesitation as a synthesis
artefact. They heard a clean generated recording and treated the lack of
background noise as proof that a real person was speaking.

One person wrote: “A sounds like someone living the experience. B sounds like
someone reading from a script.” It is a perfect description of what a good
voice model should achieve. It was also written about the wrong clip.

The comments showed where models were trying too hard as well. One voice had
learned to add pauses and filler words, presumably because people hesitate
when they speak. Listeners disliked it. The pauses didn't feel spontaneous;
they felt inserted. An “um” may be technically accurate and still sound like
an actor following a stage direction.

That distinction is difficult to capture in a single score. The ranking can
tell you which voice people preferred. Their explanations tell you what to
build next.

## What changed for me

Before VOICE-H, I assumed the remaining problems in synthetic voice were
mostly model problems. Better architectures would make voices more natural,
more emotional and less robotic. Run enough research cycles and eventually
the machines would learn to talk like us.

I am less convinced of that now. In English at least, the models in our test
were already good enough to beat a human recording. What they still
struggled with was not producing speech. It was producing speech that felt
lived rather than performed.

Look at the audio available in bulk and the reason becomes easier to see.
Podcasts, audiobooks, news, video essays and professional narration contain
enormous amounts of speech, but much of it is performance. People know they
are being recorded. They prepare, project and read. A model trained on that
material can become extremely good at sounding like someone speaking into a
microphone without learning how someone sounds when they forget the
microphone is there.

The useful data is scarce in more particular ways. It needs to be collected
with consent. It needs to include spontaneous speech, ordinary rooms and the
awkward rhythms of actual conversation. It needs to represent languages and
accents that do not have decades of professionally recorded material sitting
on the internet.

This is also why I would be careful about turning our result into “voice is
solved.” We ran an English benchmark with a particular group of listeners and
a human baseline we already know how to improve. The result tells me where I
think the bottleneck is moving. It doesn't tell me that every voice problem,
in every language, has disappeared.

## The part you cannot rent by the hour

The statistics behind an eval can be learned, repeated and automated. The
human supply chain cannot.

VOICE-H was possible because Askable already had years of interviews to draw
from and a panel of verified people willing to listen carefully to a
stranger. Those things existed before we chose the models or gave the eval a
name. They took far longer to build than the benchmark itself.

That becomes even more obvious outside English. You can rent more compute
this afternoon. Finding people in another country who understand what they
are consenting to, paying them properly, recording them well and helping
them speak naturally while a microphone is running is fieldwork. It takes
trust, local knowledge and time.

When I named VOICE-H, the H simply meant human. After running it, that word
seems to sit in every difficult part of the problem: the baseline, the
listeners, the consent and the speech the next generation of models still
needs.

The models may be ready, but the corpus is not (yet)