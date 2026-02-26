import { useMemo, useState } from "react";
import { Play } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type Clip = {
  title: string;
  videoUrl: string; // local MP4 URL (from /public)
  thumbnailUrl: string; // local image URL (from /public)
};

const clips: Clip[] = [
  {
    title: "ויכוח בזוגיות",
    videoUrl: "/clips/argument.mp4",
    thumbnailUrl: "/clips/thumbs/argument.jpg",
  },
  {
    title: "הבן זוג הוא מראה בשבילך",
    videoUrl: "/clips/bf_mirror.mp4",
    thumbnailUrl: "/clips/thumbs/bf_mirror.jpg",
  },
  {
    title: "לתקשר את מי שאת",
    videoUrl: "/clips/communicate.mp4",
    thumbnailUrl: "/clips/thumbs/communicate.jpg",
  },
  {
    title: "תקשורת בריאה נועדה להביא לריפוי",
    videoUrl: "/clips/healing.mp4",
    thumbnailUrl: "/clips/thumbs/healing.jpg",
  },
  {
    title: "לא לפרק על ריבים",
    videoUrl: "/clips/tearing_down.mp4",
    thumbnailUrl: "/clips/thumbs/tearing_down.jpg",
  },
  {
    title: "אנחנו עכשיו ביחד",
    videoUrl: "/clips/together_now.mp4",
    thumbnailUrl: "/clips/thumbs/together_now.jpg",
  },
  {
    title: "ויכוח הוא נקודת מפנה",
    videoUrl: "/clips/turning_point.mp4",
    thumbnailUrl: "/clips/thumbs/turning_point.jpg",
  },
  {
    title: "אם יש רצון הוא ישנה",
    videoUrl: "/clips/will_change.mp4",
    thumbnailUrl: "/clips/thumbs/will_change.jpg",
  },
];

export const ClipsSection = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeClip = useMemo(() => {
    if (activeIndex === null) return null;
    return clips[activeIndex] ?? null;
  }, [activeIndex]);

  const handleOpenClip = (index: number) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const handleClose = (nextOpen: boolean) => {
    setOpen(nextOpen);
    // Reset to stop playback when closing
    if (!nextOpen) setActiveIndex(null);
  };

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">כמה דברים שחשוב שתדעי</h2>
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
                  <button
                    type="button"
                    onClick={() => handleOpenClip(index)}
                    className="group w-full text-right"
                    aria-label={`ניגון קליפ: ${clip.title}`}
                  >
                    <div className="relative w-full overflow-hidden rounded-2xl aspect-[9/16] bg-muted/30 mb-3 shadow-soft group-hover:shadow-soft-lg transition-shadow duration-300">
                      <img
                        src={clip.thumbnailUrl}
                        alt={clip.title}
                        className="absolute inset-0 w-full h-full object-contain"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/15 transition-colors z-10" />
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="w-14 h-14 rounded-full bg-background/95 shadow-soft flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 text-gold mr-[-2px]" />
                        </div>
                      </div>
                    </div>

                    <h3 className="font-medium text-foreground group-hover:text-gold transition-colors duration-300 text-center">
                      {clip.title}
                    </h3>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-0 bg-background border-border hover:bg-primary/20" />
            <CarouselNext className="right-0 bg-background border-border hover:bg-primary/20" />
          </Carousel>
        </div>

        <Dialog open={open} onOpenChange={handleClose}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-right">{activeClip?.title ?? ""}</DialogTitle>
            </DialogHeader>

            {activeClip && (
              <div className="w-full aspect-video rounded-lg overflow-hidden bg-black">
                <video
                  key={activeClip.videoUrl} // re-mount stops previous playback
                  src={activeClip.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  poster={activeClip.thumbnailUrl}
                  className="w-full h-full"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
