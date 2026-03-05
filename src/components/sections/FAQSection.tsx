import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { PathType } from "./HeroChoiceSection";

const relationshipFaqs = [
  {
    question: "כמה זמן לוקח לראות תוצאות?",
    answer: "כבר אחרי מפגש ראשון את תביני את שורש הבעיה ותחווי תחושת בהירות והבנה. כמובן שבכל מפגש מקבלים משימות ולכן בכל מפגש תראי עוד שינוי ועוד תוצאה.",
  },
  {
    question: "האם בן הזוג צריך להשתתף?",
    answer: "לא. התהליך מיועד לך בלבד. השינוי בדינמיקה קורה דרך השינוי שלך וזה משפיע גם עליו, גם בלי שהוא יודע.",
  },
  {
    question: "מה אם הבן זוג לא משתף פעולה?",
    answer: "זה בדיוק למה התהליך עובד. את לא תלויה בשינוי שלו. את לומדת לשנות את העולם הפנימי שלך וזה משנה את הדינמיקה כולה.",
  },
  {
    question: "מה ההבדל מטיפול זוגי?",
    answer: "בטיפול זוגי שניכם נוכחים. כאן, העבודה היא אישית לחלוטין. את לומדת לשנות ולהכיר את עצמך, מה שמשנה את האינטראקציה גם כשהוא לא משתנה.",
  },
  {
    question: "האם זה מתאים לי גם אם אני לא בזוגיות?",
    answer: "בהחלט כן. ישנו מסלול שמתאים לרווקות. התהליך הוא אישי מה שמוביל לזוגיות בריאה ויציבה ולכן גם אם את לא נמצאת בזוגיות כרגע אנחנו נבנה את הבסיס המדויק ביותר לזוגיות שתכנס לך לחיים.",
  },
  {
    question: "כמה זמן כל מפגש?",
    answer: "כל מפגש הוא כשעה. בכל מפגש תקבלי משימות שיעזרו לך ליישם את מה שלמדנו.",
  },
  {
    question: "מה אם אני לא בטוחה שזה מתאים לי?",
    answer: "מוזמנת להשאיר פרטים ונבצע שיחת התאמה. נבדוק יחד אם זה מתאים לך בלי לחץ ובלי התחייבות.",
  },
];

const singleFaqs = [
  {
    question: "לא כדאי שאהיה בזוגיות קודם?",
    answer: "אני מבינה את המחשבה, אבל מדובר בתהליך אישי שמחבר אותך לעצמך. ברגע שאת תעברי את התהליך את תכנסי לזוגיות בריאה. הזוגיות עצמה לא משנה, משנה מי את בתוכה.",
  },
  {
    question: "איך התהליך הזה עוזר לי לבחור נכון בזוגיות?",
    answer: "בתהליך אנחנו מתמקדות בך ומבינות את הצרכים והרצונות הכי עמוקים שלך, אנחנו מרפאות פצעים מהעבר וכך אנחנו מצליחות להכנס לזוגיות מתוך מקום בוגר ובשל.",
  },
  {
    question: "האם יש תמיכה בין המפגשים?",
    answer: "כן, יש ליווי ותמיכה שמאפשרים לשלב את הכלים ביום-יום ולהרגיש ביטחון בכל צעד. אני זמינה לכל שאלה גם בין המפגשים ותמיד שמחה לשמוע על התקדמויות ודברים שצצים במהלך השבוע.",
  },
  {
    question: "האם התהליך אישי או בקבוצה?",
    answer: "התהליך הוא אישי כך שהלמידה מותאמת לך באופן מלא, עם מקום לשאלות והתמקדות בצרכים שלך.",
  },
];

interface Props {
  path: PathType;
}

export const FAQSection = ({ path }: Props) => {
  const faqs = path === "single" ? singleFaqs : relationshipFaqs;

  return (
    <section className="py-16 md:py-24 bg-rose-light">
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
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
