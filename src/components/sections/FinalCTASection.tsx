import { LeadForm } from "@/components/LeadForm";
import finalCtaBg from "@/assets/final-cta-bg.jpg";

export const FinalCTASection = () => {
  return (
    <section id="contact-form" className="relative py-16 md:py-24 overflow-hidden">
      <style>
        {`
          @keyframes finalCtaShine {
            0% {
              background-position: 200% center;
            }
            100% {
              background-position: -200% center;
            }
          }
        `}
      </style>

      {/* Background image layer with vertical fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${finalCtaBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.18) 40%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.18) 40%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Light overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, hsla(30,60%,98%,0.45) 0%, hsla(30,60%,98%,0.65) 45%, hsla(30,60%,98%,0.9) 80%, hsla(30,60%,98%,1) 100%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,hsl(350_50%_92%/0.4),transparent_55%),radial-gradient(circle_at_80%_60%,hsl(20_60%_88%/0.4),transparent_55%)]" />

      <div className="relative z-10 container max-w-4xl">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="font-heading text-[2rem] md:text-[2.15rem] font-semibold leading-tight mb-6 text-gradient-gold text-[52px]">
            את לא צריכה <span>להמשיך להילחם</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            יש דרך אחרת. דרך שבה את מרגישה אהובה, שלווה, ובבית גם כשיש אי-הסכמות.
            <br />
            <span className="text-xl font-semibold text-foreground">זה בדיוק מה שאת צריכה.</span>
          </p>
        </div>

        <div className="max-w-md mx-auto animate-fade-in-delay-1">
          <LeadForm buttonText="זה בדיוק מה שאני צריכה" />
        </div>
      </div>
    </section>
  );
};
