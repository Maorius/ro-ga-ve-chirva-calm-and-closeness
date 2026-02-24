import { HeroSection } from "@/components/sections/HeroSection";
import { IdentificationSection } from "@/components/sections/IdentificationSection";
import { ReframingSection } from "@/components/sections/ReframingSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { OutcomesSection } from "@/components/sections/OutcomesSection";
import { ClipsSection } from "@/components/sections/ClipsSection";
import { FitSection } from "@/components/sections/FitSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
// import { FloatingCTA } from "@/components/CTAButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <IdentificationSection />
        <ReframingSection />
        <ProcessSection />
        <OutcomesSection />
        <ClipsSection />
        <FitSection />
        <AboutSection />
        <FAQSection />
        <FinalCTASection />
      </main>

      <footer className="py-8 border-t border-border">
        <div className="container text-center">
          {/* <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} ליאל ישראל. כל הזכויות שמורות.</p> */}
        </div>
      </footer>

      <FloatingCTA />
    </div>
  );
};

export default Index;
