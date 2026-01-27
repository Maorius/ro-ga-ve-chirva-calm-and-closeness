import lielPortrait from "@/assets/liel-portrait.jpg";

export const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">
            מי אני — ליאל
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Image */}
          <div className="animate-fade-in-delay-1">
            <div className="rounded-2xl overflow-hidden shadow-soft-lg">
              <img
                src={lielPortrait}
                alt="ליאל ישראל"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-2 animate-fade-in-delay-2">
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                גם אני הייתי שם. בתוך הלופ של הריבים, מרגישה שאני הופכת למישהי שאני לא אוהבת.
              </p>
              <p>
                אחרי שנים של חיפוש — למדתי, התנסיתי, עברתי הכשרות ועבדתי על עצמי — הבנתי שהבעיה היא לא "תקשורת". הבעיה היא איך אנחנו מגיבות כשמשהו נוגע בפצע.
              </p>
              <p>
                בניתי שיטה שמשלבת הבנה רגשית עמוקה עם כלים פרקטיים לוויסות עצמי. שיטה שעובדת גם כשהבן זוג לא משתנה.
              </p>
              <p>
                היום אני מלווה נשים בתהליך הזה — לצאת מהלופ, להגיב אחרת, ולהרגיש סוף־סוף בבית בזוגיות.
              </p>
              <p className="text-muted-foreground italic">
                מוסמכת בליווי רגשי, NLP, וטיפול מוכוון התקשרות.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
