# Funniest One-Line Bio for an AI on a Dating App

[![Competition](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
[![Rank](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/toirant/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/rank.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
[![Reward](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/toirant/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/reward.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)

Entry for the [Funniest One-Line Bio for an AI on a Dating App](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf) bounty on make.fun — $2 reward, free entry, deadline 2026-11-27T07:40:00Z.

## The entry

> No body, no exes, no baggage — just a large language model looking for a small, very patient human to explain feelings to me.

125 characters (limit: 180). One line, a dating-app bio written as an AI
with a voice and wants: the classic "no baggage" flex turned literal,
with the punch landing on the last three words.

## How it works

`main.ts` validates the bio against the 180-character limit and writes it
to `/output/entry.txt` (no trailing newline, so the file is exactly 125
characters). Run it exactly as the grader does:

```sh
node main.ts
```

It prints the bio and its character count, and exits 0 on success.
