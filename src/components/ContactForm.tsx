import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
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
  email: z.string().trim().email({ message: "כתובת מייל לא תקינה" }).max(255, { message: "כתובת מייל ארוכה מדי" }),
  message: z.string().trim().max(1000, { message: "ההודעה ארוכה מדי (עד 1000 תווים)" }).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xbdpvqye", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: result.data.fullName.trim(),
          phone: result.data.phone.trim(),
          email: result.data.email.trim(),
          message: result.data.message?.trim() || "",
        }),
      });
      if (!response.ok) throw new Error("Formspree error");

      navigate("/thank-you");
    } catch (error) {
      toast({
        title: "שגיאה בשליחה",
        description: "אנא נסי שוב או צרי קשר בוואטסאפ.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-background rounded-2xl p-6 md:p-8 shadow-soft-lg border border-border/30 animate-fade-in"
    >
      <h3 className="font-heading text-xl font-semibold mb-6 text-center">השאירי פרטים ואחזור אלייך</h3>

      <div className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-base">
            שם מלא <span className="text-destructive">*</span>
          </Label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="השם שלך"
            className={errors.fullName ? "border-destructive" : ""}
            disabled={isSubmitting}
          />
          {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-base">
            טלפון <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="מספר טלפון"
            className={errors.phone ? "border-destructive" : ""}
            disabled={isSubmitting}
            dir="rtl"
          />
          {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-base">
            אימייל <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            className={errors.email ? "border-destructive" : ""}
            disabled={isSubmitting}
          />
          {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-base">
            הודעה (אופציונלי)
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="ספרי לי קצת על המצב שלך..."
            rows={4}
            className={errors.message ? "border-destructive" : ""}
            disabled={isSubmitting}
          />
          {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
        </div>

        <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              שולחת...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              שליחה
            </>
          )}
        </Button>
      </div>
    </form>
  );
};
