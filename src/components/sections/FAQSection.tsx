import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "כמה זמן לוקח לראות תוצאות?",
    answer:
      "רוב הנשים מרגישות שינוי כבר אחרי המפגש הראשון בעיקר בתחושת ההבנה והבהירות. שינוי התנהגותי מורגש בדרך כלל תוך 2-3 שבועות.",
  },
  {
    question: "האם בן הזוג צריך להשתתף?",
    answer: "לא. התהליך מיועד לך בלבד. השינוי בדינמיקה קורה דרך השינוי שלך ולרוב משפיע גם עליו, גם בלי שהוא ידע.",
  },
  {
    question: "מה אם הבן זוג לא משתף פעולה?",
    answer:
      "זה בדיוק למה התהליך עובד. את לא תלויה בשינוי שלו. את לומדת לשנות את התגובות שלך וזה משנה את הדינמיקה כולה.",
  },
  {
    question: "כמה עולה התהליך?",
    answer: "נדבר על זה בשיחת ההתאמה. יש אפשרויות תשלום גמישות. ההשקעה היא בעצמך ובשקט שלך וזה שווה כל שקל.",
  },
  {
    question: "מה ההבדל מטיפול זוגי?",
    answer:
      "בטיפול זוגי שניכם נוכחים. כאן, העבודה היא אישית את לומדת לשנות את עצמך, מה שמשנה את האינטראקציה גם כשהוא לא משתנה.",
  },
  {
    question: "האם זה מתאים גם לזוגיות חדשה?",
    answer: "התהליך מיועד בעיקר לנשים בזוגיות ארוכה. אם את בזוגיות חדשה יותר, נבדוק יחד בשיחת ההתאמה אם זה מתאים.",
  },
  {
    question: "מה קורה אם אני לא מרגישה שינוי?",
    answer: "זה נדיר, כי התהליך מותאם אישית. אם משהו לא עובד, נתאים את הגישה. המטרה שלי שתצאי מכאן עם שינוי אמיתי.",
  },
  {
    question: "האם המפגשים אונליין או פרונטלי?",
    answer: "שניהם אפשריים. רוב הנשים בוחרות אונליין (זום) בגלל הנוחות, אבל אם את מעדיפה פנים אל פנים זה אפשרי גם.",
  },
  {
    question: "כמה זמן כל מפגש?",
    answer: "כל מפגש הוא כשעה. יש גם 'שיעורי בית' קצרים בין המפגשים תרגולים קטנים שעוזרים ליישם את הנלמד.",
  },
  {
    question: "מה אם אני לא בטוחה שזה מתאים לי?",
    answer: "לכן יש שיחת התאמה קצרה לפני. נבדוק יחד אם זה מתאים בלי לחץ, בלי התחייבות.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20 md:py-28 bg-sage">
      <div className="container max-w-3xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">שאלות נפוצות</h2>
          <div className="section-divider" />
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background rounded-xl shadow-soft border border-border/30 px-6 animate-fade-in-delay-1"
            >
              <AccordionTrigger className="text-right hover:no-underline py-5 text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
