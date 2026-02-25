import { Check } from "lucide-react";

const outcomes = [
  "פחות “פיצוצים” ויותר שיחות שנגמרות בהבנה",
  "תחושת ערך עצמי וביטחון רגשי בתוך הזוגיות",
  "להרגיש רוגע גם כשיש מתח",
  "פחות תגובה אוטומטית, יותר בחירה",
  "יותר קרבה וחום אחרי שיחה קשה",
  "להרגיש בטוחה בזוגיות — גם כשיש אי-הסכמות",
  "לזהות מתי את מגיבה מטריגר ולא מהמציאות",
  "לחזור להרגיש קרובה ואהובה",
];

export const OutcomesSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">מה משתנה בפועל?</h2>
          <p className="text-lg text-muted-foreground">אחרי התהליך, נשים מספרות שהן מצליחות:</p>
          <div className="section-divider mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-soft border border-border/30 animate-fade-in-delay-1"
            >
              <div className="w-8 h-8 rounded-full bg-nude flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-gold" />
              </div>
              <p className="text-lg leading-relaxed">{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
