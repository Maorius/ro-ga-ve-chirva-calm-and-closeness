import { Check } from "lucide-react";
import type { PathType } from "./HeroChoiceSection";

const outcomes = [
  "פחות ״פיצוצים״ ויותר שיחות שנגמרות בהבנה",
  "פחות תגובה אוטומטית, יותר בחירה.",
  "את יודעת בדיוק מה את רוצה בזוגיות ומה כבר לא מתאים לך.",
  "את מציבה גבולות בלי רגשות אשמה.",
  "את מתקשרת בצורה בריאה וברורה, בלי להתפוצץ ובלי לשתוק.",
  "את לא נשארת בקשר רק כי את מפחדת להיות לבד.",
  "את בונה זוגיות שמבוססת על חיבור, כימיה ויציבות לא על מאבק.",
];

const closingByPath = {
  relationship: "את לומדת לתקן בלי להילחם, לדבר בלי לפחד, ולהחזיר חיבור ותשוקה.",
  single: "את שוברת את הדפוסים שמנעו ממך להיכנס לקשר בריא, ובוחרת ממקום יציב ולא מתוך חוסר.",
};

interface Props {
  path: PathType;
}

export const OutcomesSection = ({ path }: Props) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        {/* Top: checklist */}
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">מה משתנה בפועל?</h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-14">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-card rounded-xl p-5 shadow-soft border border-border/30 animate-fade-in-delay-1"
            >
              <div className="w-7 h-7 rounded-full bg-nude/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-gold" />
              </div>
              <p className="text-base leading-relaxed">{outcome}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider mb-12" />

        {/* Emotional block */}
        <div className="text-center space-y-4 animate-fade-in-delay-2 max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground">מה שאת באמת מרוויחה זה לא רק זוגיות טובה יותר.</p>
          <p className="font-heading text-2xl md:text-3xl font-bold text-foreground">את מרוויחה אותך.</p>
          <p className="text-lg text-foreground">את מפסיקה לרצות.</p>
          <p className="text-lg text-foreground">מפסיקה לפחד מעימותים.</p>
          <p className="text-lg text-foreground">מפסיקה להתכווץ כדי שיאהבו אותך.</p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            ובמקום זה את בונה קשר שבו את לא צריכה לאבד את עצמך כדי להישאר.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            {closingByPath[path]}
          </p>
        </div>
      </div>
    </section>
  );
};
