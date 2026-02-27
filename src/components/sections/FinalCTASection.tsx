import { LeadForm } from "@/components/LeadForm";

export const FinalCTASection = () => {
  return (
    <section id="contact-form" className="relative py-16 md:py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,hsl(350_50%_92%/0.4),transparent_55%),radial-gradient(circle_at_80%_60%,hsl(20_60%_88%/0.4),transparent_55%)]" />
      <div className="relative z-10 container max-w-4xl">
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
