import { useState } from "react";
import { ChoiceGate, getInitialPath, clearPath, type PathType } from "@/components/sections/HeroChoiceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { IdentificationSection } from "@/components/sections/IdentificationSection";
import { ReframingSection } from "@/components/sections/ReframingSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { OutcomesSection } from "@/components/sections/OutcomesSection";
import { ClipsSection } from "@/components/sections/ClipsSection";
import { FitSection } from "@/components/sections/FitSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { FloatingCTA } from "@/components/CTAButton";
import { StickyCTABar } from "@/components/StickyCTABar";
import { ArrowLeftRight } from "lucide-react";

const Index = () => {
  const [path, setPath] = useState<PathType | null>(getInitialPath);

  const handlePathSelect = (selected: PathType) => {
    setPath(selected);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReset = () => {
    clearPath();
    setPath(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!path) {
    return <ChoiceGate onSelect={handlePathSelect} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Switch path button */}
      <button
        type="button"
        onClick={handleReset}
        className="fixed top-4 left-4 z-50 flex items-center gap-1.5 px-3 py-2 rounded-xl bg-background/80 backdrop-blur border border-border/40 text-xs text-muted-foreground hover:text-foreground hover:border-gold/40 transition-all duration-300 shadow-soft"
        dir="rtl"
      >
        <ArrowLeftRight className="w-3.5 h-3.5" />
        <span>החלפת מסלול</span>
      </button>

      <main>
        <HeroSection />
        <IdentificationSection path={path} />
        <ReframingSection path={path} />
        <ProcessSection path={path} />
        <OutcomesSection path={path} />
        <AboutSection />
        <TestimonialsSection />
        <ClipsSection />
        <FitSection path={path} />
        <FAQSection path={path} />
        <FinalCTASection />
      </main>

      {/* <footer className="py-8 border-t border-border">
        <div className="container text-center" />
      </footer> */}

      <FloatingCTA />
      <StickyCTABar />
    </div>
  );
};

export default Index;
