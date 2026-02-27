import { useState, useRef } from "react";
import { HeroChoiceSection, getInitialPath, type PathType } from "@/components/sections/HeroChoiceSection";
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

const Index = () => {
  const initialPath = getInitialPath();
  const [path, setPath] = useState<PathType>(initialPath ?? "relationship");
  const [showChoice, setShowChoice] = useState(initialPath === null);
  const heroRef = useRef<HTMLDivElement>(null);

  const handlePathSelect = (selected: PathType) => {
    setPath(selected);
    setShowChoice(false);
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <main>
        {showChoice && <HeroChoiceSection onSelect={handlePathSelect} />}
        <div ref={heroRef}>
          <HeroSection />
        </div>
        <IdentificationSection path={path} />
        <ReframingSection />
        <ProcessSection />
        <OutcomesSection path={path} />
        <AboutSection />
        <TestimonialsSection />
        <ClipsSection />
        <FitSection path={path} />
        <FAQSection />
        <FinalCTASection />
      </main>

      <footer className="py-8 border-t border-border">
        <div className="container text-center" />
      </footer>

      <FloatingCTA />
    </div>
  );
};

export default Index;
