

## Analysis

The problem is that the second span "הזוגיות שאת חולמת עליה" has `clamp(1.82rem, 7.5vw, 3.625rem)` — the **minimum of 1.82rem (≈29px)** is too large for Galaxy screens (360px wide). With container padding of 1.5rem per side (48px total), only ~312px of horizontal space is available. The Hebrew text at 29px simply doesn't fit, causing it to overflow and get clipped by the section's `overflow-hidden`.

The same issue applies to span 1 at `clamp(1.8rem, 6vw, 3rem)` — the 1.8rem minimum (≈28.8px) is borderline on 360px.

## Fix

Lower the `clamp()` minimums to safe values for 360px screens, while keeping the `vw` multiplier high enough so iPhones (390px+) still get the larger sizes:

**Span 1 ("את יכולה ליצור את")**:
- Change from `clamp(1.8rem, 6vw, 3rem)` → `clamp(1.6rem, 6vw, 3rem)`
- At 360px: renders at ~21.6px (6vw = 21.6px, above the 1.6rem/25.6px min → actually 25.6px). Safe.
- At 390px: 6vw = 23.4px → still 25.6px min. Comparable to current.

**Span 2 ("הזוגיות שאת חולמת עליה")**:
- Change from `clamp(1.82rem, 7.5vw, 3.625rem)` → `clamp(1.55rem, 7.5vw, 3.625rem)`
- At 360px: 7.5vw = 27px, min = 24.8px → renders at 27px. Should fit ~312px.
- At 390px: 7.5vw = 29.25px → renders at 29.25px. Same great size as current.

After the change, I'll verify at 360px viewport width using the browser tool to confirm nothing is clipped.

## Files to edit
- `src/components/sections/HeroSection.tsx` — lines 96 and 99 (two clamp values)

