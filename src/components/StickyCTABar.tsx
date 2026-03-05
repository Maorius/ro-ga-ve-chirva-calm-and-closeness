import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const StickyCTABar = () => {
  const [visible, setVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(scrollPercent > 0.35);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`fixed z-40 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{ bottom: isMobile ? "5rem" : "1.25rem" }}
    >
      <div className="rounded-2xl bg-background/90 backdrop-blur-md border border-border/40 shadow-soft-lg px-5 py-3 flex items-center justify-between gap-4">
        {!isMobile && (
          <p className="text-sm font-medium text-foreground whitespace-nowrap">
            רוצה לבדוק אם זה מתאים לך?
          </p>
        )}
        <Button
          variant="cta"
          size={isMobile ? "default" : "lg"}
          className={isMobile ? "w-full" : ""}
          onClick={scrollToForm}
        >
          <Heart className="w-4 h-4" />
          זה בדיוק מה שאני צריכה
        </Button>
      </div>
    </div>
  );
};
