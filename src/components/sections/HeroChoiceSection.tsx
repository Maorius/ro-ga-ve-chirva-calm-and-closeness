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

export function clearPath() {
  localStorage.removeItem(STORAGE_KEY);
  const url = new URL(window.location.href);
  url.searchParams.delete("path");
  window.history.replaceState({}, "", url.toString());
}

interface ChoiceGateProps {
  onSelect: (path: PathType) => void;
}

export const ChoiceGate = ({ onSelect }: ChoiceGateProps) => {
  const handleSelect = (path: PathType) => {
    setPathAndPersist(path);
    onSelect(path);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4" dir="rtl">
      <div className="max-w-xl w-full text-center animate-fade-in">
        <h1 className="font-heading text-3xl md:text-4xl font-semibold mb-10">
          מה מתאים לך כרגע?
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <button
            type="button"
            onClick={() => handleSelect("relationship")}
            className="group bg-card rounded-2xl p-8 md:p-10 shadow-soft border border-border/30 hover:border-gold/40 hover:shadow-soft-lg transition-all duration-300 text-center cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-rose-light flex items-center justify-center mx-auto mb-5">
              <Heart className="w-7 h-7 text-gold" />
            </div>
            <h2 className="font-heading text-xl font-semibold mb-2">אני בזוגיות</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              רוצה פחות ריבים, יותר קרבה וביטחון
            </p>
          </button>

          <button
            type="button"
            onClick={() => handleSelect("single")}
            className="group bg-card rounded-2xl p-8 md:p-10 shadow-soft border border-border/30 hover:border-gold/40 hover:shadow-soft-lg transition-all duration-300 text-center cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-rose-light flex items-center justify-center mx-auto mb-5">
              <Users className="w-7 h-7 text-gold" />
            </div>
            <h2 className="font-heading text-xl font-semibold mb-2">אני רווקה</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              רוצה להיכנס לזוגיות בריאה אחת ולתמיד
            </p>
          </button>
        </div>

        <p className="text-sm text-muted-foreground mt-10 max-w-md mx-auto leading-relaxed">
          לא משנה מאיפה את מתחילה, המטרה זהה: קשר יציב בלי לאבד את עצמך.
        </p>
      </div>
    </div>
  );
};