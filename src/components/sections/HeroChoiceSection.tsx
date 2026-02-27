import { Heart, Users } from "lucide-react";

export type PathType = "relationship" | "single";

const STORAGE_KEY = "liel_path";

export function getInitialPath(): PathType | null {
  const params = new URLSearchParams(window.location.search);
  const qp = params.get("path");
  if (qp === "relationship" || qp === "single") {
    localStorage.setItem(STORAGE_KEY, qp);
    return qp;
  }
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "relationship" || stored === "single") return stored;
  return null;
}

export function setPathAndPersist(path: PathType) {
  localStorage.setItem(STORAGE_KEY, path);
  const url = new URL(window.location.href);
  url.searchParams.set("path", path);
  window.history.replaceState({}, "", url.toString());
  console.log("segment_selected:", path);
}

interface HeroChoiceSectionProps {
  onSelect: (path: PathType) => void;
}

export const HeroChoiceSection = ({ onSelect }: HeroChoiceSectionProps) => {
  const handleSelect = (path: PathType) => {
    setPathAndPersist(path);
    onSelect(path);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-8">
            מה מתאים לך כרגע?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl mx-auto">
            {/* Relationship */}
            <button
              type="button"
              onClick={() => handleSelect("relationship")}
              className="group bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30 hover:border-gold/40 hover:shadow-soft-lg transition-all duration-300 text-center cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-rose-light flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">אני בזוגיות</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                רוצה פחות ריבים, יותר קרבה וביטחון
              </p>
            </button>

            {/* Single */}
            <button
              type="button"
              onClick={() => handleSelect("single")}
              className="group bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30 hover:border-gold/40 hover:shadow-soft-lg transition-all duration-300 text-center cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-rose-light flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">אני רווקה</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                רוצה להיכנס לזוגיות בריאה אחת ולתמיד
              </p>
            </button>
          </div>

          <p className="text-sm text-muted-foreground mt-8 max-w-md mx-auto leading-relaxed">
            לא משנה מאיפה את מתחילה, המטרה זהה: קשר יציב בלי לאבד את עצמך.
          </p>
        </div>
      </div>
    </section>
  );
};
