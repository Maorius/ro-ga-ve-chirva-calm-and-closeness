import { Shield, Eye, MessageCircle, HeartHandshake, Unlock, Star, Brain, Sparkles } from "lucide-react";

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

export const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 bg-rose-light">
      <div className="container max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">
            השיטה שלי לזוגיות חזקה, מה תקבלי?
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl p-6 shadow-soft border border-border/30 text-center animate-fade-in-delay-1 hover:shadow-soft-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-nude/30 flex items-center justify-center mb-4">
                <card.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
