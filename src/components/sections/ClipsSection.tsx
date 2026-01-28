import { Play, ChevronRight, ChevronLeft } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const clips = [
  {
    title: "למה ריבים חוזרים על עצמם",
    placeholder: true,
  },
  {
    title: "מה קורה כשאת מגיבה מטריגר",
    placeholder: true,
  },
  {
    title: "איך לעצור הסלמה בזמן אמת",
    placeholder: true,
  },
  {
    title: "הסוד לתיקון אחרי ריב",
    placeholder: true,
  },
  {
    title: "למה 'תקשורת טובה' לא מספיקה",
    placeholder: true,
  },
  {
    title: "איך להגיד מה שחשוב בלי להאשים",
    placeholder: true,
  },
];

export const ClipsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">
            כמה דברים שחשוב שתדעי
          </h2>
          <p className="text-lg text-muted-foreground">
            קליפים קצרים שיעזרו לך להבין את הגישה
          </p>
          <div className="section-divider mt-6" />
        </div>

        <div className="max-w-4xl mx-auto px-12 animate-fade-in-delay-1">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              direction: "rtl",
            }}
            className="w-full"
          >
            <CarouselContent className="-mr-4">
              {clips.map((clip, index) => (
                <CarouselItem key={index} className="pr-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group cursor-pointer">
                    <div className="aspect-video bg-cream-dark rounded-xl shadow-soft overflow-hidden relative mb-3 group-hover:shadow-soft-lg transition-shadow duration-300">
                      {/* Placeholder for video thumbnail */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-nude/20 to-cream-dark">
                        <div className="w-14 h-14 rounded-full bg-background shadow-soft flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 text-gold mr-[-2px]" />
                        </div>
                      </div>
                    </div>
                    <h3 className="font-medium text-foreground group-hover:text-gold transition-colors duration-300 text-center">
                      {clip.title}
                    </h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-background border-border hover:bg-primary/20" />
            <CarouselNext className="right-0 bg-background border-border hover:bg-primary/20" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
