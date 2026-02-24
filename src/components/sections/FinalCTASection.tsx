import { LeadForm } from "@/components/LeadForm";

export const FinalCTASection = () => {
  return (
    <section id="contact-form" className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">
            את לא צריכה להמשיך להילחם
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            יש דרך אחרת. דרך שבה את מרגישה אהובה, שלווה, ובבית גם כשיש אי-הסכמות.
            <br />
            <span className="text-foreground font-medium">בואי נתחיל.</span>
          </p>
        </div>

        <div className="max-w-md mx-auto animate-fade-in-delay-1">
          <LeadForm buttonText="אני רוצה" compact />
        </div>
      </div>
    </section>
  );
};
