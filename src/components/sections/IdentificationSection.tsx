const painPoints = [
  "את מוצאת את עצמך אומרת דברים שלא התכוונת — ומתחרטת שנייה אחרי",
  "גם כשהכל בסדר, את כבר מחכה לריב הבא",
  "את מרגישה שהוא לא באמת מקשיב — לא משנה איך את מנסחת",
  "יש לך תחושה שאת הופכת למישהי שאת לא אוהבת כשאת כועסת",
  "את עייפה מלהסביר את עצמך שוב ושוב",
  "את מתגעגעת לקרבה שהייתה פעם — ולא יודעת איך לחזור אליה",
];

export const IdentificationSection = () => {
  return (
    <section className="py-20 md:py-28 bg-rose-light">
      <div className="container max-w-3xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">
            אם את מכירה את זה...
          </h2>
          <div className="section-divider" />
        </div>

        <div className="space-y-4">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-5 shadow-soft animate-fade-in-delay-1 border border-border/50"
            >
              <p className="text-lg leading-relaxed">{point}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-xl font-medium mt-12 text-charcoal-light animate-fade-in-delay-2">
          את לא לבד. ואת לא "בעייתית". פשוט עוד לא הייתה לך הדרך לעשות את זה אחרת.
        </p>
      </div>
    </section>
  );
};
