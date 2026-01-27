import { Play } from "lucide-react";

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {clips.map((clip, index) => (
            <div
              key={index}
              className="group cursor-pointer animate-fade-in-delay-1"
            >
              <div className="aspect-video bg-cream-dark rounded-xl shadow-soft overflow-hidden relative mb-3 group-hover:shadow-soft-lg transition-shadow duration-300">
                {/* Placeholder for video thumbnail */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-nude/20 to-cream-dark">
                  <div className="w-14 h-14 rounded-full bg-background shadow-soft flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-gold mr-[-2px]" />
                  </div>
                </div>
              </div>
              <h3 className="font-medium text-foreground group-hover:text-gold transition-colors duration-300">
                {clip.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
