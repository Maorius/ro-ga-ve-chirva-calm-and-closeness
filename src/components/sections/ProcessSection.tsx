import { Shield, Eye, MessageCircle, HeartHandshake, Unlock, Star, Brain, Sparkles } from "lucide-react";
import type { PathType } from "./HeroChoiceSection";

const singleSessions = [
  {
    number: 1,
    title: " מפגש ראשון",
    description: "לצאת מהבלבול ולהחזיר שליט",
    outcome: "מה באמת קורה בזוגיות שלך או בדפוסי הקשר שחוזרים על עצמם ולמה זה לא אומר שמשהו 'דפוק' בך",
  },
  {
    number: 2,
    title: "מפגש שני ",
    description: "הפצע שמבקש אהבה",
    outcome: "איך הילדה הפנימית מנהלת את הריבים ובוחרת את הזוגיות שלך ואיך מרגיעים אותה",
  },
  {
    number: 3,
    title: "מפגש שלישי  ",
    description: "לשבור את לופ הדפוסים",
    outcome: "לעצור את הפיצוץ לפני שהוא מתחיל ולבנות תגובה חדשה כזו שתייצר בסיס לקשר עתידי בריא",
  },
  {
    number: 4,
    title: "מפגש רביעי ",
    description: "לדבר אמת בלי להילחם",
    outcome: "תקשורת מקרבת, גבולות בריאים וביטוי רגשי בלי אשמה מול בן זוג וגם מול עצמך",
  },
  {
    number: 5,
    title: "מפגש חמישי ",
    description: "זהות חדשה וביטחון קדימה",
    outcome: "ערך עצמי, בחירה מודעת, זהות יציבה ואיך לשמור על השינוי גם כשהחיים קורים",
  },
];

const relationshipSessions = [
  {
    number: 1,
    title: "מפגש ראשון  ",
    description: "להחזיר שליטה",
    outcome: "לצאת מהבלבול ולהחזיר שליטה מה באמת קורה בזוגיות שלך ולמה זה לא אבוד",
  },
  {
    number: 2,
    title: "מפגש שני ",
    description: "הפצע שמבקש אהבה",
    outcome: "איך הילדה הפנימית מנהלת את הריבים ואיך מרגיעים אותה",
  },
  {
    number: 3,
    title: "מפגש שלישי  ",
    description: "לשבור את לופ הריבים",
    outcome: "לעצור את הפיצוץ לפני שהוא מתחיל",
  },
  {
    number: 4,
    title: "מפגש רביעי ",
    description: "לדבר אמת בלי להילחם",
    outcome: "תקשורת מקרבת, גבולות בריאים וביטוי רגשי בלי אשמה",
  },
  {
    number: 5,
    title: "מפגש חמישי  ",
    description: "זהות חדשה וביטחון קדימה",
    outcome: "ערך עצמי, זהות יציבה ואיך לשמור על השינוי גם כשהחיים קורים",
  },
];

const cards = [
  { icon: Shield, title: "חוסן רגשי", desc: "לווסת רגשות גם כשהשיחה מתחממת." },
  { icon: Eye, title: "בחירה מודעת", desc: "לבנות זוגיות מתוך ערכים, לא מתוך פחד." },
  { icon: MessageCircle, title: "תקשורת מקרבת", desc: "לדבר ברור, בלי התקפה ובלי שתיקה." },
  { icon: HeartHandshake, title: "תמיכה בין מפגשים", desc: "ליווי ודיוק גם באמצע השבוע." },
  { icon: Unlock, title: "שחרור העבר", desc: "לפרוק מטען רגשי שמפעיל אותך היום." },
  { icon: Star, title: "ערך עצמי", desc: "לחזק ביטחון בלי תלות באישור חיצוני." },
  { icon: Brain, title: "חסמים תת-הכרתיים", desc: "לזהות דפוסים ולשנות אותם בשורש." },
  { icon: Sparkles, title: "גוף ונפש", desc: "ליצור יחסים חדשים עם הגוף, תחושות וצרכים." },
];

export const ProcessSection = ({ path = "relationship" }: { path?: PathType }) => {
  const sessions = path === "single" ? singleSessions : relationshipSessions;
  return (
    <section className="py-16 md:py-24 bg-rose-light">
      <div className="container max-w-5xl">
        <div className="text-center mb-14 animate-fade-in">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">
            להיות אהובה בלי מלחמות, גם בתוכך: 5 מפגשים שמשנים את הדינמיקה
          </h2>
          <p className="text-lg text-muted-foreground">מפגשים אישיים של שעה</p>
          <div className="section-divider mt-6" />
        </div>

        {/* 5 sessions cards - centered last row + equal heights (stable grid) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6 mb-14">
          {sessions.map((session, index) => {
            const isFourth = index === 3; // card #4
            const isFifth = index === 4; // card #5

            return (
              <div
                key={index}
                className={[
                  "bg-background rounded-2xl p-6 shadow-soft border border-border/30",
                  "animate-fade-in-delay-1 hover:shadow-soft-lg transition-shadow duration-300",
                  "flex flex-col min-h-[260px]",
                  "md:col-span-1",
                  "lg:col-span-2",
                  isFourth ? "lg:col-start-2" : "",
                  isFifth ? "lg:col-start-4" : "",
                ].join(" ")}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-full bg-nude flex items-center justify-center font-semibold text-lg text-foreground">
                    {session.number}
                  </span>
                  <h3 className="font-heading text-xl font-semibold">{session.title}</h3>
                </div>

                <p className="text-foreground/80 font-medium mb-4 leading-relaxed">{session.description}</p>

                <div className="bg-nude/30 rounded-lg px-4 py-3 mt-auto">
                  <p className="text-sm font-medium text-foreground leading-relaxed">
                    <span className="text-gold">✦</span> {session.outcome}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bridge title for the new elements */}
        <div className="text-center mb-10 animate-fade-in">
          <h3 className="font-heading text-xl md:text-2xl font-semibold mb-3">ומה תקבלי לאורך הדרך?</h3>
          <p className="text-muted-foreground">כלים פרקטיים + עומק רגשי, כדי שהשינוי יישאר גם אחרי המפגשים.</p>
        </div>

        {/* 8 feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl p-6 shadow-soft border border-border/30 text-center animate-fade-in-delay-1 hover:shadow-soft-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-nude/30 flex items-center justify-center mb-4">
                <card.icon className="w-6 h-6 text-gold" />
              </div>
              <h4 className="font-heading text-lg font-semibold mb-2">{card.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
