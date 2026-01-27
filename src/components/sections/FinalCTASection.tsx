import { CTAButton } from "@/components/CTAButton";

export const FinalCTASection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container max-w-2xl text-center">
        <div className="animate-fade-in">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">
            את לא צריכה להמשיך להילחם
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            יש דרך אחרת. דרך שבה את מרגישה אהובה, שלווה, ובבית — גם כשיש אי-הסכמות.
            <br />
            <span className="text-foreground font-medium">בואי נתחיל.</span>
          </p>

          <CTAButton size="xl" />

          <p className="text-sm text-muted-foreground mt-8">
            שיחת ההתאמה היא בלי התחייבות. פשוט נדבר ונראה אם יש התאמה. 💛
          </p>
        </div>
      </div>
    </section>
  );
};
