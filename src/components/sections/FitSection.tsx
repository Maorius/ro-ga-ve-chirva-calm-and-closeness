import { Check, X, AlertCircle } from "lucide-react";

const suitableFor = [
  "נשים בזוגיות ארוכה שרוצות לצאת מדפוס הריבים",
  "מי שמוכנה לעשות עבודה פנימית לא רק לשנות את הבן זוג",
  "את מוכנה לתהליך ממוקד ועבודה על דפוסים",
  "מי שמרגישה שהיא 'יודעת מה נכון' אבל לא מצליחה ליישם",
];

const notSuitableFor = [
  "אין רצון לשנות שום דבר בדרך שבה את נכנסת לשיחות",
  "מי שמחפשת פתרון קסם בלי עבודה עצמית",
  "מי שלא מוכנה להקדיש זמן לתרגול בין המפגשים",
];

export const FitSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">למי התהליך מתאים?</h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Suitable For */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30 animate-fade-in-delay-1">
            <h3 className="font-heading text-xl font-semibold mb-6 flex items-center gap-2">
              <Check className="w-6 h-6 text-gold" />
              מתאים לך אם...
            </h3>
            <ul className="space-y-4">
              {suitableFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Suitable For */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30 animate-fade-in-delay-2">
            <h3 className="font-heading text-xl font-semibold mb-6 flex items-center gap-2">
              <X className="w-6 h-6 text-muted-foreground" />
              לא מתאים אם...
            </h3>
            <ul className="space-y-4">
              {notSuitableFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
