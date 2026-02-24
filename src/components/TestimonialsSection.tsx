import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import OrnamentDivider from "./OrnamentDivider";
import { publicUrl } from "@/lib/utils";

const testimonials = [
  {
    name: "Priya Sharma",
    text: "Guru Lakshmi Devi transformed my understanding of Bharatanatyam. Her patience and depth of knowledge made my arangetram a truly memorable experience.",
    role: "Bharatanatyam Student, 5 years",
    image: publicUrl("avatar-1.jpg"),
  },
  {
    name: "Ananya Krishnan",
    text: "Learning Kathak here has been a spiritual journey. The academy doesn't just teach dance — it teaches you to connect with your cultural roots on a profound level.",
    role: "Kathak Student, 3 years",
    image: publicUrl("avatar-2.jpg"),
  },
  {
    name: "Meera Patel",
    text: "As a parent, I've seen my daughter blossom with confidence and grace. The discipline and artistry she's gained here extends far beyond the dance floor.",
    role: "Parent of Odissi Student",
    image: publicUrl("avatar-3.jpg"),
  },
  {
    name: "Deepa Rao",
    text: "The attention to detail in abhinaya and nritta is exceptional. Every class feels like a masterclass in both technique and expression.",
    role: "Kuchipudi Student, 4 years",
    image: publicUrl("avatar-1.jpg"),
  },
];

const AUTO_SCROLL_INTERVAL_MS = 5000;

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((c) => (c + 1) % testimonials.length),
      AUTO_SCROLL_INTERVAL_MS
    );
    return () => clearInterval(id);
  }, []);

  const t = testimonials[current];

  return (
    <section className="py-16 md:py-24 bg-warm-cream mandala-bg">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <p className="font-ornate text-secondary text-lg italic mb-2">Voices of Our Students</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">Testimonials</h2>
        </motion.div>
        <OrnamentDivider />

        <div className="max-w-3xl mx-auto mt-8">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-card border border-gold/20 rounded-sm p-8 md:p-12 text-center relative"
          >
            <Quote className="mx-auto mb-6 text-gold/40" size={48} />
            <p className="font-ornate text-xl md:text-2xl text-foreground leading-relaxed italic mb-8">
              "{t.text}"
            </p>
            <div className="flex items-center justify-center gap-3">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-gold/30 shrink-0"
              />
              <div className="text-left">
                <p className="font-display text-lg font-bold text-primary">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-gold" : "bg-gold/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
