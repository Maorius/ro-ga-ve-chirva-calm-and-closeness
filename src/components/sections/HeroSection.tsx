import { ChevronDown, Play } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import heroBg from "@/assets/hero-bg.jpg";
import type { PathType } from "./HeroChoiceSection";

interface Props {
  path: PathType;
}

export const HeroSection = ({ path }: Props) => {
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
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-foreground">
            <span className="text-gradient-pink text-[42px]">את יכולה ליצור את הזוגיות שאת חולמת עליה</span>
          </h1>
          <h2 className="text-lg md:text-xl text-charcoal-light mb-8">בלי ויכוחים, בלי מלחמות ומבלי לוותר על עצמך</h2>
        </div>

        {/* "Let's get to know each other" + chevron */}
        <div className="text-center mb-6 animate-fade-in-delay-1">
          <p className="text-base text-muted-foreground mb-2 text-[22px]">בואי נכיר יותר</p>
          <ChevronDown className="w-5 h-5 mx-auto text-gold animate-bounce" />
        </div>

        {/* Video placeholder */}
        <div className="max-w-3xl mx-auto mb-10 animate-fade-in-delay-1">
          <div className="aspect-video rounded-2xl shadow-soft border border-border/30 bg-card flex items-center justify-center relative overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-background/90 shadow-soft flex items-center justify-center">
              <Play className="w-7 h-7 text-gold mr-[-2px]" />
            </div>
          </div>
        </div>

        {/* Body text */}
        <div className="text-center max-w-2xl mx-auto mb-10 animate-fade-in-delay-2">
          <p className="text-lg leading-relaxed text-foreground mb-4">
            {path === "single" ? (
              "את רוצה להיכנס לזוגיות שנכונה לך אחת ולתמיד? <br /> אני כאן כדי לעזור לך לשחרר את מה שמעכב אותך וליצור את הזוגיות שאת רוצה, אחת כזו שמרגישה בטוחה, יציבה ואוהבת באמת"
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
        <div className="max-w-lg mx-auto animate-fade-in-delay-3">
          <LeadForm buttonText="זה בדיוק מה שאני צריכה" />
        </div>
      </div>
    </section>
  );
};
