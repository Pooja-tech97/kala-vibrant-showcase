import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import OrnamentDivider from "./OrnamentDivider";
import { publicUrl } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const carouselTransition = {
  type: "tween" as const,
  duration: 0.55,
  ease: [0.4, 0, 0.2, 1] as const,
};

const imageTransition = {
  type: "tween" as const,
  duration: 0.6,
  ease: [0.4, 0, 0.2, 1] as const,
};

const reviews = [
  {
    quote:
      "Guru Lakshmi Devi transformed my understanding of Bharatanatyam. Her patience and depth of knowledge made my arangetram a truly memorable experience.",
    source: "Priya Sharma — Bharatanatyam Student, 5 years",
  },
  {
    quote:
      "Learning Kathak here has been a spiritual journey. The academy doesn't just teach dance — it teaches you to connect with your cultural roots on a profound level.",
    source: "Ananya Krishnan — Kathak Student, 3 years",
  },
  {
    quote:
      "As a parent, I've seen my daughter blossom with confidence and grace. The discipline and artistry she's gained here extends far beyond the dance floor.",
    source: "Meera Patel — Parent of Odissi Student",
  },
  {
    quote:
      "The attention to detail in abhinaya and nritta is exceptional. Every class feels like a masterclass in both technique and expression.",
    source: "Deepa Rao — Kuchipudi Student, 4 years",
  },
];

// Images from public/review-image/ — use 1.jpg, 2.jpg, 3.jpg, 4.jpg (or .jpeg / .png)
const reviewImages = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"].map((f) =>
  publicUrl(`review-image/${f}`)
);

const AUTO_SCROLL_INTERVAL_MS = 6000;

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % reviews.length);
  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((c) => (c + 1) % reviews.length),
      AUTO_SCROLL_INTERVAL_MS
    );
    return () => clearInterval(id);
  }, []);

  const r = reviews[current];
  const imageSrc = reviewImages[current] ?? reviewImages[0];

  return (
    <section className="py-16 md:py-24 bg-warm-cream mandala-bg relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none border-t border-b border-gold/10" />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32 relative">
        <motion.div {...fadeUp} className="text-center mb-4">
          <p className="font-ornate text-secondary text-lg italic mb-2">Voices of Our Community</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Reviews
          </h2>
        </motion.div>
        <OrnamentDivider />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch min-h-[420px] md:min-h-[480px] mt-8 md:mt-12">
          {/* Left: Reviews carousel */}
          <div className="flex flex-col justify-center">
            <div className="relative flex items-center gap-4">
              <button
                onClick={prev}
                className="shrink-0 p-2 rounded-full border border-primary/30 text-primary hover:bg-primary/5 transition-all duration-300 ease-out"
                aria-label="Previous review"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex-1 min-w-0 overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={carouselTransition}
                  >
                    <p className="font-ornate text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed italic mb-6">
                      &ldquo;{r.quote}&rdquo;
                    </p>
                    <p className="font-display text-base sm:text-lg font-bold text-primary">
                      {r.source}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                onClick={next}
                className="shrink-0 p-2 rounded-full border border-primary/30 text-primary hover:bg-primary/5 transition-all duration-300 ease-out"
                aria-label="Next review"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    i === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="relative w-full h-[400px] sm:h-[420px] md:h-[450px] rounded-sm overflow-hidden border border-gold/20 shadow-lg bg-muted"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={current}
                src={imageSrc}
                alt="Dance performance"
                className="absolute inset-0 w-full h-full object-cover object-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={imageTransition}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = publicUrl("placeholder.svg");
                }}
              />
            </AnimatePresence>
            <div
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white/80 text-xs font-body tracking-wider origin-center"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              Photo: Nritya Kalp
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
