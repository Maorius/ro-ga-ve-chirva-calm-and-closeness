import { Circle } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import type { PathType } from "./HeroChoiceSection";

const relationshipItems = [
  "את מוצאת את עצמך אומרת דברים שלא התכוונת ומתחרטת שנייה אחרי",
  "גם כשהכל בסדר, את כבר מחכה לריב הבא",
  "את מרגישה שהוא לא באמת מקשיב לא משנה איך את מנסחת",
  "את מותשת מהוויכוחים שחוזרים על עצמם",
  "יש לך תחושה שאת הופכת למישהי שאת לא אוהבת כשאת כועסת",
  "את עייפה מלהסביר את עצמך שוב ושוב",
  "את מתגעגעת לקרבה שהייתה פעם ולא יודעת איך לחזור אליה",
];

const singleItems = [
  "את שוב נכנסת לקשר עם מישהו שלא רוצה להתחייב",
  "הוא לא מתאמץ, ואת עדיין כותבת לו הודעות",
  "את מתאהבת מהר, ואז מתחילה להרגיש לבד",
  "את אומרת לעצמך ״פעם אחרונה״, ואז שוב…",
  "הקשר נגמר מהר, ואת לא מבינה מה קרה",
  "את חושבת שהוא יהיה שונה, ואז מגלה שהוא אותו הדבר",
  "את נותנת יותר ממה שאת מקבלת, ולפעמים זה כואב…",
  "את אומרת ״זה בסדר״ כשבפנים את יודעת שזה לא…",
];

interface Props {
  path: PathType;
}

export const ReframingSection = ({ path }: Props) => {
  const items = path === "single" ? singleItems : relationshipItems;

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">את מכירה את זה ש...</h2>
          <div className="section-divider" />
        </div>
        <ul className="space-y-3 mb-10 max-w-2xl mx-auto animate-fade-in-delay-1">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-right">
              <Circle className="w-2.5 h-2.5 mt-2 text-gold fill-gold flex-shrink-0" />
              <span className="text-lg leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <div className="text-center space-y-2 mb-12 animate-fade-in-delay-2">
          <p className="text-xl font-semibold text-foreground">את לא לבד ואת לא ״בעייתית״.</p>
          <p className="text-lg text-muted-foreground">פשוט עוד לא הייתה לך הדרך לעשות את זה אחרת.</p>
        </div>
        <div className="max-w-md mx-auto mb-8 animate-fade-in-delay-3">
          <LeadForm buttonText="זה בדיוק מה שאני צריכה" />
        </div>
        <p className="text-center text-muted-foreground text-sm italic animate-fade-in-delay-3">
          לרפא זה לא למחוק את מה שהיה — אלא לבחור מה את לוקחת איתך הלאה.
        </p>
      </div>
    </section>
  );
};
