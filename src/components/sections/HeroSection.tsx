import { useRef, useState, useCallback, useEffect } from "react";
import { ChevronDown, Play, Pause, Volume2, VolumeX, Loader2 } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import heroBg from "@/assets/hero-bg.jpg";
import type { PathType } from "./HeroChoiceSection";

interface Props {
  path: PathType;
}

export const HeroSection = ({ path }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isReady, setIsReady] = useState(false);

  // Guard against premature play calls before video is ready
  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video || !isReady) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isReady]);

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  }, []);

  // Single source of truth: IntersectionObserver controls play/pause.
  // autoPlay removed from <video> to avoid racing with this observer,
  // especially on mobile/Safari where autoplay policies are strict.
  useEffect(() => {
    const target = videoRef.current;
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;
        if (!entry.isIntersecting) {
          video.pause();
        } else {
          video.play().catch(() => {});
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background image layer with vertical fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,0.08) 70%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,0.08) 70%, rgba(0,0,0,0) 100%)",
        }}
      />
      {/* Soft light overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, hsla(30,60%,98%,0.35) 0%, hsla(30,60%,98%,0.55) 40%, hsla(30,60%,98%,0.85) 75%, hsla(30,60%,98%,1) 100%)",
        }}
      />
      <div className="container max-w-5xl relative z-10">
        {/* Title */}
        <div className="text-center animate-fade-in mb-4 overflow-x-auto overflow-y-visible">
          <h1 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-foreground min-w-max">
            <span className="block mt-2 whitespace-nowrap text-[26px] md:text-[44px] lg:text-[54px]">
              את יכולה ליצור את{" "}
            </span>
            <span className="text-gradient-pink text-[30px] sm:text-[40px] md:text-[54px] lg:text-[62px] block whitespace-nowrap">
              הזוגיות שאת חולמת עליה
            </span>
          </h1>
          <h2 className="text-lg md:text-xl text-charcoal-light mb-8">בלי ויכוחים, בלי מלחמות ומבלי לוותר על עצמך</h2>
        </div>

        {/* "Let's get to know each other" + chevron */}
        <div className="text-center mb-6 animate-fade-in-delay-1">
          <p className="text-base text-muted-foreground mb-2 text-[24px]">בואי נכיר יותר</p>
          <ChevronDown className="w-5 h-5 mx-auto text-gold animate-bounce" />
        </div>

        {/* Video */}
        <div className="max-w-3xl mx-auto mb-10 animate-fade-in-delay-1">
          <div
            className="aspect-video rounded-2xl shadow-soft border border-border/30 bg-card relative overflow-hidden group cursor-pointer"
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              src="/HeroVideo.mp4"
              poster={heroBg}
              className="absolute inset-0 w-full h-full object-cover"
              // isPlaying driven solely by native video events — no manual setState in togglePlay
              onPlaying={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onCanPlay={() => setIsReady(true)}
              // preload="metadata" is cross-device safe; "auto" is ignored on iOS anyway
              preload="metadata"
              // autoPlay removed — IntersectionObserver is the single authority
              loop
              muted
              playsInline
            />

            {/* Loading spinner — shown until canPlay fires */}
            {!isReady && (
              <div className="absolute inset-0 flex items-center justify-center bg-card/60 backdrop-blur-sm z-10">
                <Loader2 className="w-10 h-10 text-primary animate-spin" />
              </div>
            )}

            {/* Play/Pause overlay
                - Always visible when paused
                - Hidden while playing, revealed on hover (desktop) or tap (mobile triggers togglePlay directly)
            */}
            {isReady && (
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                }`}
              >
                <div className="w-14 h-14 rounded-full bg-background/80 backdrop-blur-sm shadow-soft flex items-center justify-center transition-transform duration-200 hover:scale-110">
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-foreground" />
                  ) : (
                    <Play className="w-6 h-6 text-foreground ml-0.5" />
                  )}
                </div>
              </div>
            )}

            {/* Mute/Unmute button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-3 right-3 z-10 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm shadow-soft flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-background/95"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-foreground" />
              ) : (
                <Volume2 className="w-4 h-4 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Body text */}
        <div className="text-center max-w-2xl mx-auto mb-10 animate-fade-in-delay-2">
          <p className="text-lg leading-relaxed text-foreground mb-4">
            {path === "single" ? (
              <>
                את רוצה להיכנס לזוגיות שנכונה לך אחת ולתמיד?
                <br />
                אני כאן כדי לעזור לך לשחרר את מה שמעכב אותך וליצור את הזוגיות שאת רוצה, אחת כזו שמרגישה בטוחה, יציבה
                ואוהבת באמת
              </>
            ) : (
              <>
                אם את מרגישה שמשהו בזוגיות שלך חוזר על עצמו
                <br />
                אני כאן כדי לעזור לך להבין למה, לשחרר את מה שמעכב אותך, וליצור זוגיות שמרגישה בטוחה, יציבה ואוהבת באמת.
              </>
            )}
          </p>
        </div>

        {/* LeadForm */}
        <div className="max-w-md mx-auto animate-fade-in-delay-3">
          <LeadForm buttonText="זה בדיוק מה שאני צריכה" />
        </div>
      </div>
    </section>
  );
};
