import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4" dir="rtl">
      <div className="text-center max-w-md w-full space-y-6">
        <CheckCircle className="w-16 h-16 mx-auto text-gold" />
        <h1 className="font-heading text-2xl md:text-3xl font-semibold">תודה רבה!</h1>
        <p className="text-muted-foreground text-base md:text-lg">קיבלתי את הפרטים שלך ואחזור אלייך בהקדם.</p>
        <Button variant="outline" onClick={() => navigate("/")} className="mt-4">
          חזרה לדף הבית
        </Button>
      </div>
    </div>
  );
};

export default ThankYou;
