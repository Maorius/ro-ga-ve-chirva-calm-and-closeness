import type { PathType } from "./HeroChoiceSection";

interface Props {
  path: PathType;
}

export const IdentificationSection = ({ path }: Props) => {
  return (
    <section className="py-16 md:py-24 bg-rose-light">
      <div className="container max-w-3xl">
        <div className="text-center space-y-6 animate-fade-in">
          {path === "relationship" ? (
            <>
              <p className="text-lg leading-relaxed">
                אם את כאן, כנראה שאת מרגישה תקועה בזוגיות ומשהו בפנים מרגיש לא רגוע..
              </p>
              <p className="text-lg leading-relaxed">
                אולי את אוהבת אותו, אבל מרגישה מותשת.
              </p>
              <p className="text-lg leading-relaxed">
                אולי יש ביניכם חיבור, אבל אין באמת קרבה.
              </p>
              <p className="text-lg leading-relaxed">
                את בזוגיות אבל את לא מרגישה תשוקה או כימיה.
              </p>
              <p className="text-lg leading-relaxed">
                את שותקת כדי לא לריב, מוותרת כדי לא לאבד, מתאמצת כדי להחזיק את הקשר.
              </p>
              <div>
                <p className="text-lg leading-relaxed">
                  <strong className="text-foreground">והאמת? זה לא את.</strong>
                </p>
                <p className="text-lg leading-relaxed mt-2 text-muted-foreground">
                  זה הדפוסים שחוזרים על עצמם, הפחדים שלא נותנים לך לייצר חיבור אמיתי, והקושי להביע את עצמך בתקשורת בריאה.
                </p>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                את לא יודעת איך לשנות את זה, כי את לא בטוחה מה השורש של הדברים האלה, ואולי אפילו את לא לגמרי מבינה מה את רוצה.
              </p>
              <p className="text-lg leading-relaxed">
                אני כאן כדי להראות לך את הדרך: להתחבר לעצמך, להבין את הדפוסים שלך, ולצמוח לתוך זוגיות בריאה, מדויקת ויציבה.
              </p>
              <p className="text-lg leading-relaxed">
                זוגיות יציבה לא מתחילה בלשנות אותו, היא מתחילה בלהבין אותך.
              </p>
              <p className="text-lg leading-relaxed">
                <span className="font-medium text-foreground">וכל מה שאת חולמת להרגיש בתוך הקשר אפשרי.</span>
              </p>
            </>
          ) : (
            <>
              <p className="text-lg leading-relaxed">
                אם את כאן, כנראה שאת מרגישה תקועה בדרך לזוגיות ומשהו בפנים מרגיש לא רגוע..
              </p>
              <p className="text-lg leading-relaxed">
                אולי את יוצאת לדייטים, אבל זה לא מתקדם למשהו אמיתי.
              </p>
              <p className="text-lg leading-relaxed">
                אולי יש התחלה של חיבור, אבל זה לא מחזיק לאורך זמן.
              </p>
              <p className="text-lg leading-relaxed">
                את רוצה זוגיות, אבל שוב ושוב מוצאת את עצמך בקשרים שלא מתפתחים או נגמרים מהר.
              </p>
              <p className="text-lg leading-relaxed">
                את נותנת הזדמנות, מתאמצת שזה יעבוד, ומקווה שהפעם זה יהיה אחרת.
              </p>
              <div>
                <p className="text-lg leading-relaxed">
                  <strong className="text-foreground">והאמת? זה לא את.</strong>
                </p>
                <p className="text-lg leading-relaxed mt-2 text-muted-foreground">
                  אלה הדפוסים שחוזרים על עצמם, הפחדים שלא נותנים לך לבנות חיבור יציב, והקושי לזהות מה באמת נכון לך בתחילת קשר.
                </p>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                את לא יודעת איך לשנות את זה, כי את לא בטוחה מה השורש של הבחירות האלה, ואולי אפילו את לא לגמרי מבינה מה את באמת מחפשת.
              </p>
              <p className="text-lg leading-relaxed">
                אני כאן כדי להראות לך את הדרך: להתחבר לעצמך, להבין את הדפוסים שלך, ולבנות בתוכך את הבסיס לזוגיות בריאה, מדויקת ויציבה.
              </p>
              <p className="text-lg leading-relaxed">
                זוגיות יציבה לא מתחילה בלמצוא את האדם הנכון, היא מתחילה בלהבין אותך.
              </p>
              <p className="text-lg leading-relaxed">
                <span className="font-medium text-foreground">וכל מה שאת חולמת להרגיש בתוך קשר, אפשרי.</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
