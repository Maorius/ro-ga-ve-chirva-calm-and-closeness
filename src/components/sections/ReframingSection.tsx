export const ReframingSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <div className="text-center animate-fade-in">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-8">
            זה לא רק "בעיית תקשורת"
          </h2>

          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft-lg border border-border/30 mb-8">
            <p className="text-lg md:text-xl leading-relaxed text-foreground mb-6">
              מה שקורה בזוגיות הוא לא באמת "תקשורת לקויה". 
              <br />
              זה <strong className="text-gold">טריגר + תגובה אוטומטית</strong>.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              את מגיבה מהמקום הפצוע — לא מהמקום שבאמת רוצה להגיב. 
              וזה הגיוני: כשמשהו נוגע בפצע, הגוף עובר למצב הגנה.
            </p>

            <p className="text-lg leading-relaxed text-foreground">
              בתהליך הזה נלמד לזהות את הטריגרים, להבין מאיפה הם מגיעים, 
              וליצור מרחב קטן — אבל קריטי — בין הגירוי לתגובה.
            </p>
          </div>

          <div className="bg-nude/30 rounded-xl p-6 inline-block">
            <p className="text-lg font-medium text-foreground">
              ✨ החדשות הטובות? את יכולה ללמוד להגיב אחרת. וזה לוקח פחות זמן ממה שחשבת.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
