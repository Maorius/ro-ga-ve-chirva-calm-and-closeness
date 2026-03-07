import { useState } from "react";
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

type HoveredChoice = "relationship" | "single" | null;

export const ChoiceGate = ({ onSelect }: ChoiceGateProps) => {
  const [hoveredChoice, setHoveredChoice] = useState<HoveredChoice>(null);

  const handleSelect = (path: PathType) => {
    setPathAndPersist(path);
    onSelect(path);
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      dir="rtl"
    >
      {/* ─── LAYER A: Base gradient ─── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 15% 20%, rgba(244, 214, 222, 0.55) 0%, rgba(244, 214, 222, 0) 42%),
            radial-gradient(circle at 85% 75%, rgba(247, 231, 214, 0.48) 0%, rgba(247, 231, 214, 0) 44%),
            linear-gradient(135deg, #fffaf8 0%, #fdf6f4 45%, #fcf2ee 100%)
          `,
        }}
      />

      {/* ─── LAYER B: Blurred atmosphere ─── */}
      <div className="pointer-events-none absolute inset-0" style={{ opacity: 0.45 }}>
        <div
          className="absolute rounded-full"
          style={{
            width: 520,
            height: 520,
            top: "8%",
            right: "-4%",
            background: "radial-gradient(circle, rgba(236,168,190,0.5) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 480,
            height: 480,
            bottom: "5%",
            left: "-2%",
            background: "radial-gradient(circle, rgba(245,197,155,0.45) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 360,
            height: 360,
            top: "45%",
            left: "35%",
            background: "radial-gradient(circle, rgba(244,214,222,0.35) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* ─── LAYER C: Animated drift ─── */}
      <div className="pointer-events-none absolute inset-0" style={{ opacity: 0.4 }}>
        <div
          className="absolute rounded-full animate-[drift1_20s_ease-in-out_infinite_alternate]"
          style={{
            width: 440,
            height: 440,
            top: "10%",
            left: "10%",
            background: "radial-gradient(circle, rgba(236,168,190,0.4) 0%, transparent 65%)",
            filter: "blur(70px)",
          }}
        />
        <div
          className="absolute rounded-full animate-[drift2_22s_ease-in-out_infinite_alternate]"
          style={{
            width: 500,
            height: 500,
            bottom: "10%",
            right: "8%",
            background: "radial-gradient(circle, rgba(245,197,155,0.35) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute rounded-full animate-[drift3_24s_ease-in-out_infinite_alternate]"
          style={{
            width: 320,
            height: 320,
            top: "55%",
            left: "50%",
            background: "radial-gradient(circle, rgba(255,224,176,0.3) 0%, transparent 65%)",
            filter: "blur(75px)",
          }}
        />
      </div>

      {/* ─── HOVER OVERLAY: Relationship ─── */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-[500ms] ease-out"
        style={{
          opacity: hoveredChoice === "relationship" ? 1 : 0,
          background: `
            radial-gradient(circle at 30% 35%, rgba(236, 168, 190, 0.32) 0%, rgba(236, 168, 190, 0) 42%),
            radial-gradient(circle at 72% 68%, rgba(214, 145, 176, 0.18) 0%, rgba(214, 145, 176, 0) 45%)
          `,
        }}
      />

      {/* ─── HOVER OVERLAY: Single ─── */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-[500ms] ease-out"
        style={{
          opacity: hoveredChoice === "single" ? 1 : 0,
          background: `
            radial-gradient(circle at 28% 30%, rgba(245, 197, 155, 0.28) 0%, rgba(245, 197, 155, 0) 40%),
            radial-gradient(circle at 75% 70%, rgba(255, 224, 176, 0.22) 0%, rgba(255, 224, 176, 0) 48%)
          `,
        }}
      />

      {/* ─── CONTENT ─── */}
      <div className="relative z-10 max-w-xl w-full text-center animate-fade-in">
        <h1 className="font-heading text-3xl md:text-4xl font-semibold mb-10">
          איפה את נמצאת היום?
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* ─── Relationship card ─── */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredChoice("relationship")}
            onMouseLeave={() => setHoveredChoice(null)}
          >
            {/* Spotlight */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-[380ms] ease-out"
              style={{
                width: 480,
                height: 480,
                opacity: hoveredChoice === "relationship" ? 1 : 0,
                background: "radial-gradient(circle, rgba(236,168,190,0.45) 0%, rgba(214,145,176,0.15) 40%, transparent 70%)",
                filter: "blur(60px)",
                zIndex: 0,
              }}
            />
            <button
              type="button"
              onClick={() => handleSelect("relationship")}
              className="relative z-[1] w-full rounded-2xl p-8 md:p-10 text-center cursor-pointer transition-all duration-300 ease-out"
              style={{
                background:
                  hoveredChoice === "relationship"
                    ? "rgba(255,255,255,0.92)"
                    : "hsl(var(--card))",
                boxShadow:
                  hoveredChoice === "relationship"
                    ? "0 16px 48px -8px rgba(214,145,176,0.3), 0 4px 16px -4px rgba(236,168,190,0.2)"
                    : "0 4px 20px -2px hsl(var(--nude) / 0.3)",
                transform:
                  hoveredChoice === "relationship"
                    ? "scale(1.045) translateY(-6px)"
                    : hoveredChoice === "single"
                    ? "scale(0.99)"
                    : "scale(1)",
                opacity:
                  hoveredChoice === "single" ? 0.93 : 1,
                border:
                  hoveredChoice === "relationship"
                    ? "2px solid rgba(236,168,190,0.7)"
                    : "1px solid hsl(var(--border) / 0.3)",
              }}
            >
              <div className="w-14 h-14 rounded-full bg-rose-light flex items-center justify-center mx-auto mb-5">
                <Heart
                  className="w-7 h-7 text-gold"
                  style={{
                    animation:
                      hoveredChoice === "relationship"
                        ? "heartPulse 1.4s ease-in-out infinite"
                        : "none",
                  }}
                />
              </div>
              <h2 className="font-heading text-xl font-semibold mb-2">אני בזוגיות</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                אני אוהבת אותו אבל מרגישה שחיקה וריחוק אני רוצה לבנות זוגיות יציבה ואוהבת יותר
              </p>
            </button>
          </div>

          {/* ─── Single card ─── */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredChoice("single")}
            onMouseLeave={() => setHoveredChoice(null)}
          >
            {/* Spotlight */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-[380ms] ease-out"
              style={{
                width: 480,
                height: 480,
                opacity: hoveredChoice === "single" ? 1 : 0,
                background: "radial-gradient(circle, rgba(245,197,155,0.45) 0%, rgba(255,224,176,0.18) 40%, transparent 70%)",
                filter: "blur(60px)",
                zIndex: 0,
              }}
            />
            <button
              type="button"
              onClick={() => handleSelect("single")}
              className="relative z-[1] w-full rounded-2xl p-8 md:p-10 text-center cursor-pointer transition-all duration-300 ease-out"
              style={{
                background:
                  hoveredChoice === "single"
                    ? "rgba(255,255,255,0.92)"
                    : "hsl(var(--card))",
                boxShadow:
                  hoveredChoice === "single"
                    ? "0 16px 48px -8px rgba(245,197,155,0.3), 0 4px 16px -4px rgba(255,224,176,0.2)"
                    : "0 4px 20px -2px hsl(var(--nude) / 0.3)",
                transform:
                  hoveredChoice === "single"
                    ? "scale(1.045) translateY(-6px)"
                    : hoveredChoice === "relationship"
                    ? "scale(0.99)"
                    : "scale(1)",
                opacity:
                  hoveredChoice === "relationship" ? 0.93 : 1,
                border:
                  hoveredChoice === "single"
                    ? "2px solid rgba(245,197,155,0.7)"
                    : "1px solid hsl(var(--border) / 0.3)",
              }}
            >
              <div className="w-14 h-14 rounded-full bg-rose-light flex items-center justify-center mx-auto mb-5">
                <Users
                  className="w-7 h-7 text-gold"
                  style={{
                    animation:
                      hoveredChoice === "single"
                        ? "iconFloat 1.2s ease-in-out infinite"
                        : "none",
                  }}
                />
              </div>
              <h2 className="font-heading text-xl font-semibold mb-2">אני רווקה</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                אני נכנסת לקשרים שלא מחזיקים אני רוצה ליצור זוגיות יציבה אחת ולתמיד
              </p>
            </button>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-10 max-w-md mx-auto leading-relaxed">
          לא משנה מאיפה את מתחילה, המטרה זהה: קשר יציב בלי לאבד את עצמך.
        </p>
      </div>
    </div>
  );
};
