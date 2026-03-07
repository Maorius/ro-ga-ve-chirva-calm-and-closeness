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

      {/* ─── ILLUSTRATION LAYER: Relationship ─── */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-[550ms] ease-out"
        style={{ opacity: hoveredChoice === "relationship" ? 1 : 0, zIndex: 2 }}
      >
        {/* Flowing silk wave - top right */}
        <svg
          className="absolute animate-[illustDrift1_18s_ease-in-out_infinite_alternate]"
          style={{ top: "5%", right: "2%", width: "55%", height: "45%", opacity: 0.38 }}
          viewBox="0 0 600 300"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 180 C80 60, 200 240, 320 120 S520 200, 600 80"
            stroke="rgba(214,145,176,0.5)"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M0 200 C100 100, 220 260, 350 140 S500 220, 600 100"
            stroke="rgba(236,168,190,0.35)"
            strokeWidth="1.8"
            fill="none"
          />
          <path
            d="M0 220 C120 130, 250 280, 380 160 S530 240, 600 130"
            stroke="rgba(214,145,176,0.25)"
            strokeWidth="1.2"
            fill="none"
          />
        </svg>
        {/* Flowing silk wave - bottom left */}
        <svg
          className="absolute animate-[illustDrift2_20s_ease-in-out_infinite_alternate]"
          style={{ bottom: "8%", left: "0%", width: "50%", height: "40%", opacity: 0.34 }}
          viewBox="0 0 500 250"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60 C60 180, 180 20, 280 150 S440 40, 500 170"
            stroke="rgba(236,168,190,0.45)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0 80 C80 190, 200 40, 300 160 S430 60, 500 180"
            stroke="rgba(214,145,176,0.3)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
        {/* Blurred rose light pockets */}
        <div
          className="absolute rounded-full animate-[illustDrift3_16s_ease-in-out_infinite_alternate]"
          style={{
            width: 300, height: 300, top: "15%", left: "8%",
            background: "radial-gradient(circle, rgba(236,168,190,0.3) 0%, rgba(214,145,176,0.1) 50%, transparent 75%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute rounded-full animate-[illustDrift1_19s_ease-in-out_infinite_alternate]"
          style={{
            width: 260, height: 260, bottom: "18%", right: "12%",
            background: "radial-gradient(circle, rgba(214,145,176,0.28) 0%, rgba(236,168,190,0.08) 55%, transparent 78%)",
            filter: "blur(55px)",
          }}
        />
        {/* Diagonal flowing gradient band */}
        <div
          className="absolute animate-[illustDrift2_17s_ease-in-out_infinite_alternate]"
          style={{
            width: "120%", height: 180, top: "35%", left: "-10%",
            background: "linear-gradient(135deg, transparent 0%, rgba(236,168,190,0.15) 30%, rgba(214,145,176,0.2) 50%, rgba(236,168,190,0.12) 70%, transparent 100%)",
            filter: "blur(40px)",
            transform: "rotate(-8deg)",
          }}
        />
      </div>

      {/* ─── ILLUSTRATION LAYER: Single ─── */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-[550ms] ease-out"
        style={{ opacity: hoveredChoice === "single" ? 1 : 0, zIndex: 2 }}
      >
        {/* Upward open curves - right */}
        <svg
          className="absolute animate-[illustFloat1_16s_ease-in-out_infinite_alternate]"
          style={{ top: "10%", right: "5%", width: "45%", height: "50%", opacity: 0.36 }}
          viewBox="0 0 400 350"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M50 300 C100 100, 200 50, 350 120"
            stroke="rgba(245,197,155,0.5)"
            strokeWidth="2.2"
            fill="none"
          />
          <path
            d="M30 320 C90 140, 190 80, 370 140"
            stroke="rgba(255,224,176,0.35)"
            strokeWidth="1.6"
            fill="none"
          />
          <path
            d="M70 280 C120 120, 210 70, 340 100"
            stroke="rgba(245,197,155,0.25)"
            strokeWidth="1.2"
            fill="none"
          />
        </svg>
        {/* Upward open curves - left */}
        <svg
          className="absolute animate-[illustFloat2_18s_ease-in-out_infinite_alternate]"
          style={{ bottom: "12%", left: "3%", width: "42%", height: "45%", opacity: 0.32 }}
          viewBox="0 0 400 300"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M350 280 C300 100, 180 60, 50 130"
            stroke="rgba(255,224,176,0.45)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M370 260 C310 120, 200 80, 40 150"
            stroke="rgba(245,197,155,0.3)"
            strokeWidth="1.4"
            fill="none"
          />
        </svg>
        {/* Warm floating light particles */}
        <div
          className="absolute rounded-full animate-[illustFloat1_14s_ease-in-out_infinite_alternate]"
          style={{
            width: 220, height: 220, top: "20%", left: "12%",
            background: "radial-gradient(circle, rgba(245,197,155,0.32) 0%, rgba(255,224,176,0.12) 50%, transparent 75%)",
            filter: "blur(45px)",
          }}
        />
        <div
          className="absolute rounded-full animate-[illustFloat2_15s_ease-in-out_infinite_alternate]"
          style={{
            width: 280, height: 280, bottom: "15%", right: "8%",
            background: "radial-gradient(circle, rgba(255,224,176,0.3) 0%, rgba(245,197,155,0.1) 55%, transparent 78%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute rounded-full animate-[illustFloat3_17s_ease-in-out_infinite_alternate]"
          style={{
            width: 160, height: 160, top: "50%", left: "45%",
            background: "radial-gradient(circle, rgba(245,197,155,0.25) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Airy upward haze band */}
        <div
          className="absolute animate-[illustFloat1_19s_ease-in-out_infinite_alternate]"
          style={{
            width: "110%", height: 160, bottom: "25%", left: "-5%",
            background: "linear-gradient(160deg, transparent 0%, rgba(255,224,176,0.14) 25%, rgba(245,197,155,0.18) 50%, rgba(255,224,176,0.1) 75%, transparent 100%)",
            filter: "blur(35px)",
            transform: "rotate(5deg)",
          }}
        />
      </div>

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
