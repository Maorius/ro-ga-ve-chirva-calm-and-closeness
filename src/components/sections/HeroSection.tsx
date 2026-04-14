import { useRef, useState, useCallback, useEffect } from "react";
import { ChevronDown, Play, Pause, Volume2, VolumeX, Loader2, RefreshCw } from "lucide-react";
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
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showManualPlay, setShowManualPlay] = useState(false);
  const isReadyRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const markReady = useCallback(() => {
    if (isReadyRef.current) return;
    isReadyRef.current = true;
    setIsLoading(false);
    setHasError(false);
    setShowManualPlay(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    const video = videoRef.current;
    if (video) {
      video.play().then(() => setIsPlaying(true)).catch(() => {
        setShowManualPlay(true);
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => {
        setIsPlaying(true);
        setIsLoading(false);
        setShowManualPlay(false);
      }).catch(() => {
        setIsPlaying(false);
        setShowManualPlay(true);
      });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  }, []);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
    setIsPlaying(false);
    isReadyRef.current = false;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  const handleRetry = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    setHasError(false);
    setIsLoading(true);
    setShowManualPlay(false);
    isReadyRef.current = false;
    video.load();
  }, []);

  // Timeout fallback
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      if (!isReadyRef.current && !hasError) {
        setIsLoading(false);
        setShowManualPlay(true);
      }
    }, 7000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [hasError]);

  // IntersectionObserver
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          video.pause();
          setIsPlaying(false);
        } else if (isReadyRef.current && !hasError) {
          video.play().then(() => setIsPlaying(true)).catch(() => {
            setIsPlaying(false);
          });
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [hasError]);

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
        <div className="text-center animate-fade-in mb-4">
          <h1 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-foreground">
            <span className="block mt-2 whitespace-nowrap">את יכולה ליצור את </span>
            <span className="text-gradient-pink text-[28px] sm:text-[38px] md:text-[52px] lg:text-[58px] block whitespace-nowrap">
              {" "}
              הזוגיות שאת חולמת עליה{" "}
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
          <div className="aspect-video rounded-2xl shadow-soft border border-border/30 bg-card relative overflow-hidden group cursor-pointer" onClick={togglePlay}>
            <video
              ref={videoRef}
              src="/HeroVideo.mp4"
              poster={heroBg}
              className="absolute inset-0 w-full h-full object-cover"
              onCanPlay={markReady}
              onLoadedData={markReady}
              onPlaying={() => { setIsPlaying(true); setIsLoading(false); }}
              onWaiting={() => { if (isReadyRef.current) setIsLoading(true); }}
              onStalled={() => { if (!isReadyRef.current) setIsLoading(true); }}
              onError={handleError}
              preload="auto"
              loop
              muted
              playsInline
            />
            {/* Loading spinner overlay */}
            {isLoading && !hasError && (
              <div className="absolute inset-0 flex items-center justify-center bg-card/60 backdrop-blur-sm z-10">
                <Loader2 className="w-10 h-10 text-primary animate-spin" />
              </div>
            )}
            {/* Error state */}
            {hasError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-card/80 backdrop-blur-sm z-10 gap-3">
                <p className="text-sm text-muted-foreground">לא הצלחנו לטעון את הסרטון</p>
                <button
                  onClick={(e) => { e.stopPropagation(); handleRetry(); }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <RefreshCw className="w-4 h-4" />
                  נסי שוב
                </button>
              </div>
            )}
            {/* Manual play prompt (timeout fallback) */}
            {showManualPlay && !isLoading && !hasError && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-14 h-14 rounded-full bg-background/80 backdrop-blur-sm shadow-soft flex items-center justify-center transition-transform duration-200 hover:scale-110">
                  <Play className="w-6 h-6 text-foreground ml-0.5" />
                </div>
              </div>
            )}
            {/* Play/Pause center overlay (normal state) */}
            {!isLoading && !hasError && !showManualPlay && (
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
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