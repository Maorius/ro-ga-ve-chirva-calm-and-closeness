import { MessageCircle, Phone, Check, ArrowLeft } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";

const steps = [
  {
    icon: MessageCircle,
    title: "שליחת הודעה בוואטסאפ",
    description: "לחצי על הכפתור ושלחי הודעה קצרה",
  },
  {
    icon: Check,
    title: "3 שאלות קצרות",
    description: "אשאל כמה שאלות כדי להבין אם יש התאמה",
  },
  {
    icon: Phone,
    title: "שיחת התאמה",
    description: "שיחה קצרה של 10–15 דקות — בלי התחייבות",
  },
  {
    icon: ArrowLeft,
    title: "התחלת התהליך",
    description: "אם מתאים — נקבע את המפגש הראשון",
  },
];

export const HowItStartsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">
            איך מתחילים?
          </h2>
          <p className="text-lg text-muted-foreground">
            תהליך פשוט ונוח, בקצב שלך
          </p>
          <div className="section-divider mt-6" />
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-delay-1"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-nude flex items-center justify-center mb-4 shadow-soft">
                <step.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <CTAButton size="xl" />
        </div>
      </div>
    </section>
  );
};
