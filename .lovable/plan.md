

## Plan: Fix video loading and autoplay race condition

### Changes

**1. Move video to `public/` folder**
- Move `src/assets/HeroVideo.mp4` → `public/HeroVideo.mp4`
- This enables HTTP streaming (range requests) instead of Vite bundling the entire file

**2. Update `src/components/sections/HeroSection.tsx`**
- Remove `import heroVideo from "@/assets/HeroVideo.mp4"`
- Change video `src` to `"/HeroVideo.mp4"`
- Add `isLoading` state (starts `true`), set to `false` on `onCanPlay`
- Add `poster={heroBg}` so the background image shows immediately while video buffers
- Add `preload="auto"`
- Remove `autoPlay` — instead call `video.play()` inside `onCanPlay` handler
- Update IntersectionObserver to only call `.play()` when video is ready (`!isLoading`)
- Show a subtle loading spinner overlay while `isLoading` is true

No other files change.

