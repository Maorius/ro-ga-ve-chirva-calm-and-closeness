import { ChevronDown, Play } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";

export const HeroSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-5xl">
        {/* Title */}
        <div className="text-center animate-fade-in mb-4">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-foreground">
            את יכולה ליצור את הזוגיות
            <span className="block mt-2 text-gradient-gold">שאת חולמת עליה</span>
          </h1>
          <h2 className="text-lg md:text-xl text-charcoal-light mb-8">בלי ויכוחים, בלי מלחמות ומבלי לוותר על עצמך</h2>
        </div>

        {/* "Let's get to know each other" + chevron */}
        <div className="text-center mb-6 animate-fade-in-delay-1">
          <p className="text-base text-muted-foreground mb-2">בואי נכיר יותר</p>
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
            אם את מרגישה שמשהו בזוגיות שלך חוזר על עצמו
            <br />
            אני כאן כדי לעזור לך להבין למה, לשחרר את מה שמעכב אותך, וליצור זוגיות שמרגישה בטוחה, יציבה ואוהבת באמת.
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
