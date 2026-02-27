import { Check, X } from "lucide-react";
import type { PathType } from "./HeroChoiceSection";

const baseSuitableFor = [
  "את בזוגיות ארוכה והקשר חשוב לך",
  "את מרגישה תקיעות וחוסר חיבור",
  "את רוצה לעצור את הריבים ולחוות אהבה אמיתית ומחוברת",
  "את רוצה להבין את עצמך ולשנות דפוסים ישנים",
  "את מרגישה שהאינטימיות דועכת",
  "יש קונפליקט שחוזר על עצמו ללא פתרון",
  "את מוכנה לעשות עבודה פנימית, לא רק ״לשנות אותו״",
  "את מרגישה שאת ״יודעת מה נכון״ אבל לא מצליחה ליישם",
];

const notSuitableFor = [
  "את ממשיכה להאשים את בן הזוג",
  "אין רצון לשנות שום דבר בדרך שבה את מתנהלת",
  "את מחפשת פתרון קסם בלי עבודה עצמית",
  "את לא מוכנה להקדיש זמן לתרגול בין המפגשים",
];

interface Props {
  path: PathType;
}

export const FitSection = ({ path }: Props) => {
  const suitableFor = path === "single"
    ? baseSuitableFor.filter((_, i) => i !== 0)
    : baseSuitableFor;

  return (
    <section className="py-16 md:py-24 bg-rose-light">
      <div className="container max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">למי התהליך מתאים?</h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Suitable */}
          <div className="bg-background rounded-2xl p-6 md:p-8 shadow-soft border border-border/30 animate-fade-in-delay-1">
            <h3 className="font-heading text-xl font-semibold mb-6 flex items-center gap-2">
              <Check className="w-6 h-6 text-gold" />
              מתאים לך אם:
            </h3>
            <ul className="space-y-4">
              {suitableFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not suitable */}
          <div className="bg-background rounded-2xl p-6 md:p-8 shadow-soft border border-border/30 animate-fade-in-delay-2">
            <h3 className="font-heading text-xl font-semibold mb-6 flex items-center gap-2">
              <X className="w-6 h-6 text-muted-foreground" />
              לא מתאים אם:
            </h3>
            <ul className="space-y-4">
              {notSuitableFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
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
