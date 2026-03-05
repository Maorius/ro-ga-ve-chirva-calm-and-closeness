import type { PathType } from "./HeroChoiceSection";

const copyByPath = {
  relationship: "אולי את כבר בזוגיות, אבל מרגישה מותשת, בלי חיבור, תשוקה או כימיה.",
  single:
    "אולי את יוצאת לדייטים, אבל זה לא מתקדם למשהו אמיתי. אולי יש התחלה של חיבור, אבל זה לא מחזיק לאורך זמן. את רוצה זוגיות, אבל שוב ושוב מוצאת את עצמך בקשרים שלא מתפתחים או נגמרים מהר. את נותנת הזדמנות, מתאמצת שזה יעבוד, ומקווה שהפעם זה יהיה אחרת.",
};

interface Props {
  path: PathType;
}

export const IdentificationSection = ({ path }: Props) => {
  return (
    <section className="py-16 md:py-24 bg-rose-light">
      <div className="container max-w-3xl">
        <div className="text-center space-y-6 animate-fade-in">
          <p className="text-lg leading-relaxed">
            אם את כאן, כנראה שאת מרגישה תקועה בדרך לזוגיות ומשהו בפנים מרגיש לא רגוע..
          </p>

          <p className="text-lg leading-relaxed">{copyByPath[path]}</p>

          <div>
            <p className="text-lg leading-relaxed">
              <strong className="text-foreground">והאמת? זה לא את.</strong>
            </p>
            <p className="text-lg leading-relaxed mt-2 text-muted-foreground">
              זה הדפוסים שחוזרים על עצמם, הפחדים שלא נותנים לך לייצר חיבור אמיתי, והקושי להביע את עצמך בתקשורת בריאה.
            </p>
          </div>

          <p className="text-lg leading-relaxed text-muted-foreground">
            את לא יודעת איך לשנות את זה, כי את לא בטוחה מה השורש של הדברים האלה, ואולי אפילו לא לגמרי מה את רוצה.
          </p>

          <p className="text-lg leading-relaxed">
            אני כאן כדי להראות לך את הדרך: להתחבר לעצמך, להבין את הדפוסים שלך, ולצמוח לתוך זוגיות בריאה, מדויקת ויציבה.
            <br />
            <span className="font-medium text-foreground">כל מה שאת חולמת עליו, אנחנו יכולות להגשים.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
