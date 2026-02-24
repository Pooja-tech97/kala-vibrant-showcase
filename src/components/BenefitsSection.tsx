import { motion } from "framer-motion";
import OrnamentDivider from "./OrnamentDivider";
import { Heart, Music, Sparkles, Users } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Cultural Connection",
    description: "Deepen your bond with India's rich artistic heritage and spiritual traditions through movement.",
  },
  {
    icon: Sparkles,
    title: "Physical Fitness",
    description: "Build strength, flexibility, and stamina through rigorous yet graceful training routines.",
  },
  {
    icon: Music,
    title: "Artistic Mastery",
    description: "Develop musicality, rhythm, and expressive storytelling through the language of classical dance.",
  },
  {
    icon: Users,
    title: "Discipline & Focus",
    description: "Cultivate mental clarity, patience, and dedication that translate to every aspect of life.",
  },
];

const BenefitsSection = () => (
  <section className="py-16 md:py-24 section-dark">
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-4"
      >
        <p className="font-ornate text-gold text-lg italic mb-2">Why Learn With Us</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground">
          Benefits of Learning
        </h2>
      </motion.div>
      <OrnamentDivider />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-6 sm:mt-8">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center p-6"
          >
            <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-5">
              <b.icon className="text-gold" size={28} />
            </div>
            <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">{b.title}</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">{b.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
