import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "היי ליאל, אני בזוגיות ארוכה ורוצה לצאת מהלופ של ריבים חוזרים. אפשר בדיקת התאמה?",
);
const WHATSAPP_LINK = `https://api.whatsapp.com/send/?phone=972549726476&text=%D7%94%D7%99%D7%99+%D7%9C%D7%99%D7%90%D7%9C%2C+%D7%90%D7%A0%D7%99+%D7%91%D7%96%D7%95%D7%92%D7%99%D7%95%D7%AA+%D7%90%D7%A8%D7%95%D7%9B%D7%94+%D7%95%D7%A8%D7%95%D7%A6%D7%94+%D7%9C%D7%A6%D7%90%D7%AA+%D7%9E%D7%94%D7%9C%D7%95%D7%A4+%D7%A9%D7%9C+%D7%A8%D7%99%D7%91%D7%99%D7%9D+%D7%97%D7%95%D7%96%D7%A8%D7%99%D7%9D.+%D7%90%D7%A4%D7%A9%D7%A8+%D7%91%D7%93%D7%99%D7%A7%D7%AA+%D7%94%D7%AA%D7%90%D7%9E%D7%94%3F&type=phone_number&app_absent=0`;

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
          אם את רוצה שינוי לחצי כאן
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
