import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { publicUrl } from "@/lib/utils";

const HERO_IMAGES = [
  { src: publicUrl("10.jpeg"), alt: "Classical Indian dancer" },
  { src: publicUrl("4.jpeg"), alt: "Class moment" },
];

const ROTATE_INTERVAL_MS = 4500;
const FADE_DURATION = 1.8;

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((c) => (c + 1) % HERO_IMAGES.length),
      ROTATE_INTERVAL_MS
    );
    return () => clearInterval(id);
  }, []);

  return (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background images with smooth opacity rotation */}
    <div className="absolute inset-0">
      {HERO_IMAGES.map((img, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{
            duration: FADE_DURATION,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
      <div className="absolute inset-0 hero-overlay" />
    </div>

    {/* Gold border accents */}
    <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
    <div className="absolute bottom-0 left-0 right-0 h-1 gold-gradient" />

    <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 py-16 sm:py-20 md:py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-2xl"
      >
        {/* Logo just above tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-4 sm:mb-5"
        >
          <img
            src={publicUrl("logo.jpeg")}
            alt="Nritya Kalp Dance Academy"
            className="h-12 sm:h-14 md:h-16 w-auto object-contain"
          />
        </motion.div>

        <p className="font-ornate text-gold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 italic tracking-wide">
          Where Tradition Meets Grace
        </p>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-4 sm:mb-6">
          Master the Art of{" "}
          <span className="text-gold">Classical Indian Dance</span>
        </h1>
        <p className="font-body text-primary-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10 max-w-xl">
          Preserving centuries of heritage through movement, rhythm, and expression. 
          Begin your journey into the sacred art forms that have captivated hearts for millennia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-primary text-primary-foreground font-semibold text-base sm:text-lg rounded-sm border-2 border-gold/50 hover:bg-primary/80 transition-all hover:border-gold shadow-lg shadow-primary/30 text-center"
          >
            Book Your Free Trial Class
          </a>
          <a
            href="#dance-forms"
            className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-transparent text-gold font-semibold text-base sm:text-lg rounded-sm border-2 border-gold/40 hover:bg-gold/10 transition-all text-center"
          >
            Explore Dance Forms
          </a>
        </div>
      </motion.div>
    </div>

    {/* Bottom decorative wave */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 60" className="w-full text-background">
        <path d="M0,40 C360,0 720,60 1080,20 C1260,5 1380,30 1440,40 L1440,60 L0,60Z" fill="currentColor" />
      </svg>
    </div>
  </section>
  );
};

export default HeroSection;
