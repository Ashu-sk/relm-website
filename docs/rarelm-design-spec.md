# rarelm.com — Full-Site Design Spec (Cybercity, narrative-aligned)

Pairs with `rarelm-homepage-copy.md`. That doc is the words; this is the look. Same Cybercity language you already liked — extended cleanly across every section so the whole scroll feels like one product, not ten.

> **This is a design-only spec.** It changes styling and the copy strings from the copy doc. It must not touch routing, API routes, Supabase, forms logic, env vars, or data fetching.

---

## 1. Design system (the constants)

**Color tokens**
- `--void: #05060E` (page base)
- `--void-2: #0B0D1A` (gradient floor, raised panels)
- `--orange: #FF5800` (primary accent — CTAs, key words, "rise")
- `--blue: #0070FF` (secondary accent — links, depth glow)
- `--ink: #F4F6FC` (primary text)
- `--muted: #8A90A2` (secondary text)
- `--line: rgba(255,255,255,0.08)` (hairlines, card borders)

**Type**
- Display / headlines → **Syne** 700–800, tight tracking (-0.02 to -0.03em)
- Body / UI → **Space Grotesk** 400–500, line-height 1.55
- Labels / eyebrows / numbers → **JetBrains Mono** 500, uppercase, letter-spacing 0.1–0.34em

**Type scale**
- Hero H1: clamp(2.6rem, 8vw, 5.5rem)
- Section H2: clamp(2rem, 5vw, 3.4rem)
- Card title: 1.15–1.35rem
- Body: 1.05–1.2rem
- Eyebrow / label: 0.78rem mono

**Spacing rhythm**
- Section vertical padding: clamp(5rem, 10vw, 8rem)
- Content max-width: 1080px, centered
- Card padding: 28–32px, radius 16–20px

**Components**
- *Eyebrow:* mono uppercase + 7px orange dot with soft glow. Every section opens with one.
- *Primary button:* solid `--orange`, near-black text (#1A0A00), radius 12px, lift + orange shadow on hover.
- *Ghost button:* transparent, 1px `--line` border, brightens on hover.
- *Card:* `rgba(255,255,255,0.025)` fill, 1px `--line` border, radius 18px. Accent bar (3px, orange→blue gradient) on the left of feature cards.
- *Section number:* JetBrains Mono, orange, e.g. `01 / 19`, top-left of major sections.
- *Divider:* 1px `--line`, never heavy borders.

**Background atmosphere (key sections only — hero, backing, waitlist):**
- Radial orange glow ~16% opacity top-right
- Radial blue glow ~12% opacity bottom-left
- Faint 64px grid overlay, radially masked, ~0.5 opacity
- Calmer sections in between use flat `--void` so the page breathes — don't glow everything.

**Motion budget (important — over-animation reads cheap and broke things before):**
- One fade-up-on-scroll per section (translateY 18px → 0, 0.7s ease). Stagger children 0.05–0.15s.
- Hover transitions on buttons/cards only.
- Marquee: continuous, seamless loop (see §3).
- Always honor `prefers-reduced-motion: reduce` → no transforms.
- That's it. No parallax, no scroll-jacking, no per-letter animations.

---

## 2. Hero — *shipped*
Dark, glows, grid. "Stop following." struck through and dimmed; "backing." in orange. Eyebrow + sub + two buttons + 3-step "how it works." Already live.

## 3. Marquee
- Full-bleed strip, `--void-2`, hairline top+bottom.
- Mono, uppercase, `--muted`, with every "NO ___" in `--ink` and the dots in `--orange`.
- **Seamless loop:** put the text twice inside a flex track, animate `transform: translateX(-50%)` over ~40s linear infinite. (This fixes the old "static ticker" bug — duplicate-track + translateX is the technique.)
- `prefers-reduced-motion` → freeze and let it overflow-scroll.

## 4. What's Broken — "The internet is mostly fake now. Sorry."
- 2×2 card grid (4 items), each card with left orange→blue accent bar.
- Card title Syne, body Space Grotesk muted.
- Flat `--void` background — this is a "calm" section between glows.

## 5. Solutions — "So we built the opposite."
- Same 2×2 grid, but flip accent: these are the *answers*, so give each card a subtle orange top-glow on hover.
- Mirrors §4 visually so problem→solution reads as a pair.

## 6. What Makes Rarelm Different — "Built for trust. Designed for actual humans."
- 3×2 card grid (6 features).
- The REM card gets a distinct treatment: thin orange border instead of accent bar, signaling "this one's about money — pay attention." Keeps it sober.
- Fix the header text RELM → RARELM here.

## 7. "Fake identities broke the internet."
- Big-stat layout: oversized "50%+" in Syne 800 with orange, headline beside it.
- The serious facial-auth line in a bordered callout (1px orange, faint orange bg) so it reads as the platform's hard promise, not a joke.

## 8. "Engagement is broken."
- Split layout: left = headline + dry sub; right = a simple visual of one node multiplying into twelve fake nodes (SVG, muted), one of them orange and labeled "real." Communicates the joke visually.

## 9. Being Early Should Count *(the backing payoff — hero's twin)*
- This is the second "lean-forward" beat — bring the glows back. Orange + blue atmosphere like the hero.
- Center the line "you back the real ones early — and when they rise, you rise with them," with "rise" in orange both times.
- A subtle ascending accent line/spark (NOT a literal stock chart — keep it abstract; finance imagery triggers the wrong read). Three small "backed → rose" chips climbing left-to-right.
- REM line in a sober mono-labeled strip below.

## 10. "Search people, not usernames."
- Mock search bar component (styled, non-functional) showing a domain identity result (`yourname.rarelm`) vs a struck-through `@xx_shadow_99`. Visual gag + product clarity.

## 11. Expression Without Fear (QAC) — "Say it. For real — or anonymously."
- Warmer, softer section. Reduce contrast, slightly larger line-height. Two side-by-side panels: "Verified" (orange) and "Anonymous" (blue, blurred avatar). No snark in the visuals here.
- "Learn about QAC →" as a ghost link.

## 12. "Trust before transaction."
- Horizontal 3-step flow: Unverified noise → Verified signal → Value. Mono step labels, hairline connectors, orange on the final node.

## 13. Good Advice, Buried — "Good advice is buried under bad advice."
- Visual: a faded stack of "expert" cards with one verified card lifted and orange-bordered on top. Says it without words.

## 14. Our Stand
- Editorial, not cards. Left-aligned manifesto column, generous spacing, each stand separated by hairlines.
- "We don't do fake people." set large in Syne — let it be a moment.
- Keep the closing line "Rarelm exists because the internet forgot what real looks like. So we built it back." full-width, centered, large.

## 15. Vision
- Most cinematic section: deep `--void-2`, strongest blue glow, minimal text.
- "This isn't the final form." in large Syne. Two clean feature rows (avatars, spatial presence).
- Stat strip "0 bots · 0 fake reach · 0 scams · 100% real" in mono, evenly spaced, hairline-boxed.

## 16. Waitlist — "Be early. Be real."
- Third glow beat (hero / backing / waitlist are the three lit sections).
- Form: dark inputs, `--void-2` fill, 1px `--line`, orange focus ring. Field hint text in `--muted` mono below each field (hints from copy doc).
- Primary button "Enter Rarelm →". Sub-line "The bots are furious." in muted italic.
- Keep `#join-waitlist` anchor.

## 17. Professionals Only
- Sober, credible. No glow. Cleaner, more "B2B." Slightly more formal spacing.
- Single-column form, clear labels. "Apply →" primary button.

## 18. Our Story — "Why rarelm exists."
- Narrow reading column (max 640px), larger body text, calm. No jokes, no glow. This is the sincere center of gravity — design should feel like a letter, not a landing section.

## 19. Contact — "Questions? Ideas? Skepticism?"
- Minimal. One line, one orange "Email →" link. Lots of negative space. Email → ashutosh@rarelm.com.

## 20. Footer
- `--void-2`, hairline top.
- Wordmark "rarelm" with orange "m". Tagline "real is rare." Muted line "The bots didn't make it this far."
- Link columns (PageStock, Original Tag, QAC, FAQ, Join). Social: @rarelm, LinkedIn.

---

## Global "do not touch" guardrails (for whoever implements this)
- Do not edit anything under `app/api/`, `lib/`, any `route.ts`, Supabase clients, `middleware.ts`, `next.config`, or `.env*`.
- Do not change component props, state, data fetching, or form submission logic.
- Every new class name must have its CSS rule written in the same pass — no orphan classNames.
- Match the project's existing styling system (CSS Modules vs Tailwind) — detect it first, don't introduce a second system.
- Work section by section. Build after each. Never leave half-applied edits.
