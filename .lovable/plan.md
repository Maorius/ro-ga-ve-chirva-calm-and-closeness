

# Google Analytics GA4 Integration Plan

## Overview
Add GA4 tracking to the site with automatic page view tracking and custom events for path selection and form submission.

## Implementation

### 1. Add GA4 script to `index.html`
Insert the standard `gtag.js` snippet in the `<head>` with the user's Measurement ID (public key — safe to store in code).

### 2. Create analytics utility (`src/lib/analytics.ts`)
A small helper module exposing:
- `trackEvent(eventName, params?)` — wrapper around `gtag('event', ...)`
- Used for custom events throughout the app

### 3. Track page views in `App.tsx`
Add a `useEffect` with `useLocation()` from react-router to fire `gtag('config', GA_ID, { page_path })` on every route change (home, thank-you, etc.).

### 4. Track path selection (ChoiceGate)
In `HeroChoiceSection.tsx` → `setPathAndPersist()`, call `trackEvent('segment_selected', { path })` to log which path the user chose.

### 5. Track form submission (LeadForm)
In `LeadForm.tsx` → `handleSubmit()`, after successful Formspree response, call `trackEvent('lead_form_submitted')`.

## Events Summary
| Event Name | Trigger | Parameters |
|---|---|---|
| `page_view` | Route change | `page_path` |
| `segment_selected` | Path chosen in ChoiceGate | `path: "relationship" \| "single"` |
| `lead_form_submitted` | Successful form submit | none |

## Files to create/edit
- `index.html` — add gtag script
- `src/lib/analytics.ts` — new utility
- `src/App.tsx` — route change tracking
- `src/components/sections/HeroChoiceSection.tsx` — path selection event
- `src/components/LeadForm.tsx` — form submission event

