

## Plan: Simplify video autoplay in HeroSection

### Change: `src/components/sections/HeroSection.tsx`

- Add `autoPlay` attribute to the `<video>` element (alongside existing `muted`, `playsInline`, `loop`)
- Remove the `video.play()` call from `markReady` — let native `autoPlay` handle playback initiation
- Keep `markReady` to update `isLoading`/`isReadyRef` states
- Keep the 7-second timeout fallback and manual play button for browsers that block autoplay
- Keep `onPlaying` handler to capture autoplay success automatically

This reduces the number of intermediate checks mobile devices must pass before playback starts.

### No changes to HeroChoiceSection

