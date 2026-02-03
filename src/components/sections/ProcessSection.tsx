import { CTAButton } from "@/components/CTAButton";

const sessions = [
  {
    number: 1,
    title: "מפגש ראשון",
    description: "להחזיר שליטה",
    outcome: "לצאת מהבלבול ולהחזיר שליטה מה באמת קורה בזוגיות שלך ולמה זה לא אבוד",
  },
  {
    number: 2,
    title: "מפגש שני",
    description: "הפצע שמבקש אהבה",
    outcome: "איך הילדה הפנימית מנהלת את הריבים ואיך מרגיעים אותה",
  },
  {
    number: 3,
    title: "מפגש שלישי",
    description: "לשבור את לופ הריבים",
    outcome: "לעצור את הפיצוץ לפני שהוא מתחיל",
  },
  {
    number: 4,
    title: "מפגש רביעי",
    description: "לדבר אמת בלי להילחם",
    outcome: "תקשורת מקרבת, גבולות בריאים וביטוי רגשי בלי אשמה",
  },
  {
    number: 5,
    title: "מפגש חמישי",
    description: "זהות חדשה וביטחון קדימה",
    outcome: "ערך עצמי, זהות יציבה ואיך לשמור על השינוי גם כשהחיים קורים",
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-20 md:py-28 bg-blush">
      <div className="container">
        <div className="text-center mb-14 animate-fade-in">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">התהליך: 5 מפגשים שמשנים את הדינמיקה</h2>
          <p className="text-lg text-muted-foreground">מפגשים אישיים של שעה, אונליין או פרונטלי</p>
          <div className="section-divider mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
          {sessions.map((session, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 shadow-soft border border-border/30 animate-fade-in-delay-1 hover:shadow-soft-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-nude flex items-center justify-center font-semibold text-lg text-foreground">
                  {session.number}
                </span>
                <h3 className="font-heading text-xl font-semibold">{session.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">{session.description}</p>
              <div className="bg-nude/30 rounded-lg px-4 py-3">
                <p className="text-sm font-medium text-foreground">
                  <span className="text-gold">✦</span> {session.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};
