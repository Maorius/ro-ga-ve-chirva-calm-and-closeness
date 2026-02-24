import lielPortrait from "@/assets/liel-about.png";

export const AboutSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">נעים מאוד</h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Text - right side (RTL) */}
          <div className="order-2 md:order-1 animate-fade-in-delay-1">
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="font-semibold text-xl">היי אני ליאל 💛</p>
              <p>יועצת זוגית, מאמנת אישית ומאסטר ב-NLP, מלווה נשים ליצור זוגיות יציבה, תומכת ואוהבת.</p>
              <p>
                אני הייתי במקום שלך, הרגשתי לא מספיק טובה, הרגשתי לבד, הייתי מלאה בחששות ופחדים, הייתי מונעת מהפצעים
                שלי.. ואז הבנתי, הכוח בידיים שלי.
              </p>
              <p>
                אחרי שנים של חיפוש אמיתי
                <br />
                למדתי, התנסיתי, עברתי הכשרות ועבדתי על עצמי מבפנים.
              </p>
              <p>
                ואז הבנתי משהו מהותי:
                <br />
                <strong>הבעיה אף פעם לא מתחילה בחוץ.</strong>
                <br />
                היא יושבת עמוק בפנים, בפצעים הישנים, בדפוסים שנוצרו מזמן, במקומות שלא קיבלו מענה.
              </p>
              <p>מתוך ההבנה הזו בניתי שיטה שמשלבת עומק רגשי אמיתי עם כלים פרקטיים לוויסות עצמי ותקשורת בריאה.</p>
              <p>שיטה שמביאה שינוי גם כשהבן זוג לא משתנה.</p>
              <p>אם את מרגישה שיש בך רצון לשינוי, נמאס לך להרגיש לבד ואת רוצה זוגיות טובה ואוהבת, אני כאן בשבילך.</p>
              <p>
                בואי נפגש, נעצור, נקשיב ותלמדי איך לחזור לעצמך וליצור את הזוגיות שתמיד חלמת עליה ולהרגיש סוף סוף בבית.
              </p>
              <p className="text-muted-foreground italic text-base">
                יועצת זוגית ומטפלת מוסמכת בליווי רגש, מאסטר NLP ומאמנת אישית
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 animate-fade-in-delay-2 flex justify-center md:justify-start">
            <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-[520px] md:h-[520px] lg:w-[680px] lg:h-[680px] rounded-full overflow-hidden shadow-soft-lg border-4 border-background">
              <img src={lielPortrait} alt="ליאל ישראל" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
