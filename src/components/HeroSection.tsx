import { motion } from "framer-motion";
import heroImage from "@/assets/hero-dance.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImage} alt="Classical Indian dancer" className="w-full h-full object-cover" />
      <div className="absolute inset-0 hero-overlay" />
    </div>

    {/* Gold border accents */}
    <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
    <div className="absolute bottom-0 left-0 right-0 h-1 gold-gradient" />

    <div className="relative container mx-auto px-4 py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-2xl"
      >
        {/* Decorative lotus */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6"
        >
          <svg width="60" height="30" viewBox="0 0 60 30" className="text-gold">
            <path d="M30 28 C25 20, 10 15, 5 5 C15 10, 25 12, 30 2 C35 12, 45 10, 55 5 C50 15, 35 20, 30 28Z" fill="currentColor" opacity="0.8" />
          </svg>
        </motion.div>

        <p className="font-ornate text-gold text-xl md:text-2xl mb-4 italic tracking-wide">
          Where Tradition Meets Grace
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
          Master the Art of{" "}
          <span className="text-gold">Classical Indian Dance</span>
        </h1>
        <p className="font-body text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
          Preserving centuries of heritage through movement, rhythm, and expression. 
          Begin your journey into the sacred art forms that have captivated hearts for millennia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-sm border-2 border-gold/50 hover:bg-primary/80 transition-all hover:border-gold shadow-lg shadow-primary/30"
          >
            Book Your Free Trial Class
          </a>
          <a
            href="#dance-forms"
            className="inline-block px-8 py-4 bg-transparent text-gold font-semibold text-lg rounded-sm border-2 border-gold/40 hover:bg-gold/10 transition-all text-center"
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

export default HeroSection;
