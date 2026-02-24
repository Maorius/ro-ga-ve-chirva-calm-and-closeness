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
    title: "ירושה משפחתית",
    videoUrl: "/clips/heritage.mp4",
    thumbnailUrl: "/clips/thumbs/heritage.jpg",
  },
  {
    title: "טובה בשביל עצמך",
    videoUrl: "/clips/good_for_you.mp4",
    thumbnailUrl: "/clips/thumbs/good_for_you.jpg",
  },
  {
    title: "את ראויה",
    videoUrl: "/clips/deserving.mp4",
    thumbnailUrl: "/clips/thumbs/deserving.jpg",
  },
  {
    title: "להרגיש תקוע",
    videoUrl: "/clips/being_stuck.mp4",
    thumbnailUrl: "/clips/thumbs/being_stuck.jpg",
  },
  {
    title: "אהבה עצמית",
    videoUrl: "/clips/self_love.mp4",
    thumbnailUrl: "/clips/thumbs/self_love.jpg",
  },
  {
    title: "אתה חלק מהכאב",
    videoUrl: "/clips/part_of_pain.mp4",
    thumbnailUrl: "/clips/thumbs/part_of_pain.jpg",
  },
  {
    title: "את לא תמיד צודקת",
    videoUrl: "/clips/not_right.mp4",
    thumbnailUrl: "/clips/thumbs/not_right.jpg",
  },
  {
    title: "אין זוגיות מושלמת",
    videoUrl: "/clips/no_perfect.mp4",
    thumbnailUrl: "/clips/thumbs/no_perfect.jpg",
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
    <section className="py-20 md:py-28 bg-lavender">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">כמה דברים שחשוב שתדעי</h2>
          <p className="text-lg text-muted-foreground">קליפים קצרים שיעזרו לך להבין את הגישה</p>
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
