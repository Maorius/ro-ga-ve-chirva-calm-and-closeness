import lielPortrait from "@/assets/liel-portrait.png";
import { CTAButton } from "@/components/CTAButton";
import { Check, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = ["עצירת הסלמה", "גבולות רכים", "תיקון אחרי ריב", "רוגע פנימי", "קרבה אמיתית", "שיחות שמחברות"];

const scrollToForm = () => {
  const formSection = document.getElementById("contact-form");
  if (formSection) {
    formSection.scrollIntoView({ behavior: "smooth" });
  }
};

export const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center py-16 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content - Right side in RTL */}
          <div className="animate-fade-in">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-foreground">
              את יכולה ליצור את הזוגיות
              <span className="block mt-2 text-gradient-gold">שאת חולמת עליה</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-medium text-charcoal-light mb-6">
              להפסיק להגיב מהפצע ולהתחיל להגיב מהבוגרת שבך
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              ב־5 מפגשים 1:1 נצא מהלופ של הריבים ונבנה זוגיות שמקרבת כדי שתרגישו בבית .
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-card rounded-lg px-4 py-3 shadow-soft animate-fade-in-delay-1"
                >
                  <Check className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton />
              <Button variant="outline" size="lg" onClick={scrollToForm} className="group">
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                השאירי פרטים ואחזור אלייך
              </Button>
            </div>
          </div>

          {/* Image - Left side in RTL */}
          <div className="animate-fade-in-delay-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-soft-lg">
              <img src={lielPortrait} alt="ליאל ישראל" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-cream/20 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-nude/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
