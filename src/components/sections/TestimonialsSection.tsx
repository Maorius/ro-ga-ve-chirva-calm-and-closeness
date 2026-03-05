import { useState, useCallback, useEffect } from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import review1 from "@/assets/whatsapp_review1.jpg";
import review2 from "@/assets/whatsapp_review2.jpg";
import review3 from "@/assets/whatsapp_review3.jpg";
import review4 from "@/assets/whatsapp_review4.jpg";
import review5 from "@/assets/whatsapp_review5.jpg";
import review6 from "@/assets/whatsapp_review6.jpg";
import review7 from "@/assets/whatsapp_review7.jpg";
import review8 from "@/assets/whatsapp_review8.jpg";
import review9 from "@/assets/whatsapp_review9.jpg";

const reviews = [review1, review2, review3, review4, review5, review6, review7, review8, review9];

export const TestimonialsSection = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOpen = (index: number) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const handleClose = (nextOpen: boolean) => {
    setOpen(nextOpen);
  };

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + reviews.length) % reviews.length);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % reviews.length);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goPrev(); // RTL: right = prev
      if (e.key === "ArrowLeft") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, goPrev, goNext]);

  const scrollToCTA = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 bg-rose-light">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">מה נשים מספרות אחרי התהליך איתי</h2>
          <p className="text-muted-foreground text-lg mb-6">תהליך קצר-שינוי ענקי</p>
          <div className="section-divider" />
        </div>

        <div className="max-w-5xl mx-auto px-12 animate-fade-in-delay-1">
          <Carousel opts={{ align: "center", loop: true, direction: "rtl" }} className="w-full">
            <CarouselContent className="-mr-4">
              {reviews.map((src, index) => (
                <CarouselItem key={index} className="pr-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <button
                    type="button"
                    onClick={() => handleOpen(index)}
                    className="group w-full text-center"
                    aria-label={`עדות ${index + 1} – לחצי להגדלה`}
                  >
                    <div className="w-full bg-muted/30 rounded-2xl overflow-hidden flex items-center justify-center h-[420px] sm:h-[460px] md:h-[560px] lg:h-[620px]">
                      <img
                        src={src}
                        alt={`עדות לקוחה ${index + 1}`}
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-background border-border hover:bg-primary/20" />
            <CarouselNext className="right-0 bg-background border-border hover:bg-primary/20" />
          </Carousel>
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-14 animate-fade-in-delay-1">
          <p className="text-lg text-muted-foreground mb-6">כי זה לא מאוחר להיות בזוגיות בריאה ונכונה לך</p>
          <Button variant="cta" size="lg" onClick={scrollToCTA}>
            <Heart className="ml-2 w-5 h-5" />
            זה בדיוק מה שאני צריכה
          </Button>
        </div> */}

        {/* Modal */}
        <Dialog open={open} onOpenChange={handleClose}>
          <DialogContent className="max-w-lg p-2 bg-background">
            <div className="relative flex items-center justify-center">
              <button
                onClick={goNext}
                className="absolute left-1 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 border border-border p-1.5 hover:bg-primary/20 transition-colors"
                aria-label="הבא"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <img
                src={reviews[activeIndex]}
                alt={`עדות לקוחה ${activeIndex + 1}`}
                className="max-h-[80vh] w-auto object-contain rounded-lg mx-auto"
              />

              <button
                onClick={goPrev}
                className="absolute right-1 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 border border-border p-1.5 hover:bg-primary/20 transition-colors"
                aria-label="הקודם"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
