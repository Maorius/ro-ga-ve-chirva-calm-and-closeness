import { HeroSection } from "@/components/sections/HeroSection";
import { IdentificationSection } from "@/components/sections/IdentificationSection";
import { ReframingSection } from "@/components/sections/ReframingSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { OutcomesSection } from "@/components/sections/OutcomesSection";
import { ClipsSection } from "@/components/sections/ClipsSection";
import { FitSection } from "@/components/sections/FitSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { HowItStartsSection } from "@/components/sections/HowItStartsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { FloatingCTA } from "@/components/CTAButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Simple Logo Header */}
      <header className="py-6">
        <div className="container">
          <div className="flex justify-center">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-foreground">
              את יכולה ליצור את הזוגיות
              <span className="block mt-2 text-center text-gradient-gold">שאת חולמת עליה</span>
            </h1>
          </div>
        </div>
      </header>

      <main>
        <HeroSection />
        <IdentificationSection />
        <ReframingSection />
        <ProcessSection />
        <OutcomesSection />
        <ClipsSection />
        <FitSection />
        <AboutSection />
        <HowItStartsSection />
        <FAQSection />
        <FinalCTASection />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} ליאל ישראל. כל הזכויות שמורות.</p>
        </div>
      </footer>

      {/* Floating WhatsApp CTA for Mobile */}
      <FloatingCTA />
    </div>
  );
};

export default Index;
