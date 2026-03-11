import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Heart, Loader2, CheckCircle } from "lucide-react";
import { z } from "zod";

const leadSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "שם חייב להכיל לפחות 2 תווים" })
    .max(100, { message: "שם לא יכול לעלות על 100 תווים" }),
  phone: z
    .string()
    .trim()
    .min(9, { message: "מספר טלפון לא תקין" })
    .max(15, { message: "מספר טלפון לא תקין" })
    .regex(/^[0-9\-\+\s]+$/, { message: "מספר טלפון לא תקין" }),
  message: z.string().trim().max(1000, { message: "ההודעה ארוכה מדי (עד 1000 תווים)" }).optional(),
});

type LeadFormData = z.infer<typeof leadSchema>;

interface LeadFormProps {
  buttonText?: string;
  className?: string;
}

export const LeadForm = ({ buttonText = "זה בדיוק מה שאני צריכה", className = "" }: LeadFormProps) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof LeadFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = leadSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof LeadFormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof LeadFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contact_submissions").insert({
        full_name: result.data.fullName.trim(),
        phone: result.data.phone.trim(),
        email: "",
        message: result.data.message?.trim() || null,
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "הפרטים נשלחו בהצלחה! 💞",
        description: "אחזור אלייך בהקדם.",
      });
    } catch (error) {
      toast({
        title: "שגיאה בשליחה",
        description: "אנא נסי שוב.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`rounded-2xl p-4 md:p-5 text-center animate-fade-in ${className}`}>
        <CheckCircle className="w-12 h-12 mx-auto text-gold mb-3" />
        <h3 className="font-heading text-lg font-semibold mb-1">תודה רבה! 💞</h3>
        <p className="text-muted-foreground text-sm">קיבלתי את הפרטים שלך ואחזור אלייך בהקדם.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl p-4 md:p-5 shadow-soft border border-border/30 bg-background/80 backdrop-blur-sm ${className}`}
    >
      <div className="space-y-3">
        <div className="space-y-1.5">
          <Label htmlFor="fullName" className="text-sm">
            שם מלא <span className="text-destructive">*</span>
          </Label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="השם שלך"
            className={`rounded-xl ${errors.fullName ? "border-destructive" : ""} ${inputSize}`}
            disabled={isSubmitting}
          />
          {errors.fullName && <p className="text-xs text-destructive">{errors.fullName}</p>}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="phone" className="text-sm">
            טלפון <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="מספר טלפון"
            className={`rounded-xl ${errors.phone ? "border-destructive" : ""} ${inputSize}`}
            disabled={isSubmitting}
            dir="rtl"
          />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="message" className="text-sm">
            משהו שחשוב לך שאדע
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="ספרי לי קצת..."
            rows={2}
            className={`rounded-xl ${errors.message ? "border-destructive" : ""}`}
            disabled={isSubmitting}
          />
          {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
        </div>

        <Button
          type="submit"
          variant="cta"
          size="default"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              שולחת...
            </>
          ) : (
            <>
              {buttonText}
              <Heart className="w-5 h-5" />
            </>
          )}
        </Button>
        <p className="text-sm text-muted-foreground text-center mt-3 font-medium">
          שיחת היכרות • בלי התחייבות
        </p>
      </div>
    </form>
  );
};
