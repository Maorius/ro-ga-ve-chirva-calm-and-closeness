import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "היי ליאל, אני בזוגיות ארוכה ורוצה לצאת מהלופ של ריבים חוזרים. אפשר בדיקת התאמה?"
);
const WHATSAPP_LINK = `https://wa.me/972000000000?text=${WHATSAPP_MESSAGE}`;

interface CTAButtonProps {
  className?: string;
  showSubtext?: boolean;
  size?: "default" | "lg" | "xl";
}

export const CTAButton = ({ className = "", showSubtext = true, size = "lg" }: CTAButtonProps) => {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <Button variant="whatsapp" size={size} asChild>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="ml-2" />
          בדיקת התאמה בוואטסאפ
        </a>
      </Button>
      {showSubtext && (
        <p className="text-sm text-muted-foreground text-center max-w-xs">
          3 שאלות קצרות → ואם יש התאמה נקבע שיחת התאמה (10–15 דק׳).
        </p>
      )}
    </div>
  );
};

export const FloatingCTA = () => {
  return (
    <div className="whatsapp-float">
      <Button variant="whatsapp" size="icon" className="rounded-full w-14 h-14 shadow-lg" asChild>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="w-7 h-7" />
        </a>
      </Button>
    </div>
  );
};

export { WHATSAPP_LINK };
