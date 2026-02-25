import { CTAButton } from "@/components/CTAButton";
import { ContactForm } from "@/components/ContactForm";

export const FinalCTASection = () => {
  return (
    <section id="contact-form" className="py-24 md:py-32 bg-rose">
      <div className="container max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">את לא צריכה להמשיך להילחם</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            יש דרך אחרת. דרך שבה את מרגישה אהובה, שלווה, ובבית גם כשיש אי-הסכמות.
            <br />
            <span className="text-foreground font-medium">בואי נתחיל.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* WhatsApp Option */}
          <div className="text-center md:text-right">
            <div className="bg-background/50 rounded-2xl p-6 md:p-8 border border-border/30">
              <h3 className="font-heading text-xl font-semibold mb-4">או פשוט שלחי הודעה בוואטסאפ</h3>
              <p className="text-muted-foreground mb-6">אם את מעדיפה לדבר ישירות, אני כאן.</p>
              <CTAButton size="lg" />
              <p className="text-sm text-muted-foreground mt-6">
                שיחת ההתאמה היא בלי התחייבות. פשוט נדבר ונראה אם יש התאמה. 💛
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
