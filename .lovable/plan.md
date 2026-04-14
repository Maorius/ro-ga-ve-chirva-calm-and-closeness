

## Plan: Optimize Hero Video for Instant Loading

### What I'll do (all automated, no manual work needed from you)

**Step 1: Compress the full video**
- Re-encode `HeroVideo.mp4` from ~14MB → ~5-7MB using ffmpeg
- Lower bitrate, strip audio (starts muted anyway), use Baseline profile for max compatibility
- Keep fast-start enabled for instant streaming

**Step 2: Create a tiny 3-second preview clip**
- Extract first 3 seconds at low resolution (~100-200KB)
- This loads almost instantly on any connection

**Step 3: Update HeroSection.tsx**
- Start playing the tiny preview immediately
- Swap to full video seamlessly once it's buffered
- Remove the 7-second timeout fallback (no longer needed)
- Simplify loading states

### Result
- Video appears within 1-2 seconds on any device/connection
- No spinner, no manual play button in normal conditions
- Total download reduced by ~60%

### Files changed
- `public/HeroVideoOpt.mp4` — compressed full video (generated via ffmpeg)
- `public/HeroVideoPreview.mp4` — tiny preview clip (generated via ffmpeg)
- `src/components/sections/HeroSection.tsx` — preview-to-full swap logic

