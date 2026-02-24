import { motion } from "framer-motion";
import OrnamentDivider from "./OrnamentDivider";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const feeCards = [
  { title: "Admission Fee", price: "₹1,000", sub: "One-time admission charge" },
  { title: "Monthly Fee", price: "₹2,000", sub: "Regular monthly batch", extra: "8 Classes / Month" },
  { title: "6-Month Package", price: "₹11,500", sub: "Save more with half-year plan" },
  { title: "1-Year Package", price: "₹23,500", sub: "Best value — full year training" },
];

const FeeStructureSection = () => (
  <section id="fee-structure" className="py-16 md:py-24 bg-warm-cream mandala-bg">
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32">
      <motion.div {...fadeUp} className="text-center mb-4">
        <p className="font-ornate text-secondary text-lg italic mb-2">Investment in Art</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
          Fee Structure
        </h2>
      </motion.div>
      <OrnamentDivider />
      <motion.div {...fadeUp} className="text-center mt-4 mb-12 space-y-1">
        <p className="font-body text-foreground">Nritya Kalp Dance Academy</p>
        <p className="font-body text-muted-foreground text-sm">
          Affiliated with Prayag Sangeet Samiti, Prayagraj — Registered under MSME
        </p>
        <p className="font-body text-secondary text-sm">📍 Paharganj, New Delhi – 110055</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {feeCards.map((card, i) => (
          <motion.div
            key={card.title}
            {...fadeUp}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-sm border border-gold/20 p-6 text-center hover:border-gold/50 hover:shadow-xl transition-all"
          >
            <h3 className="font-display text-lg font-bold text-foreground mb-1">{card.title}</h3>
            {card.extra && (
              <p className="text-xs text-muted-foreground mb-1">{card.extra}</p>
            )}
            <p className="font-display text-3xl font-bold text-gold my-3">{card.price}</p>
            <p className="text-sm text-muted-foreground">{card.sub}</p>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeUp} className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 sm:mt-12">
        <a
          href="/#contact"
          className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-primary text-primary-foreground font-semibold text-base sm:text-lg rounded-sm border-2 border-gold/50 hover:bg-primary/80 transition-all hover:border-gold shadow-lg shadow-primary/30 text-center"
        >
          Apply for Admission
        </a>
        <a
          href="/#contact"
          className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-transparent text-secondary font-semibold text-base sm:text-lg rounded-sm border-2 border-gold/40 hover:bg-gold/10 transition-all text-center"
        >
          Fill Online Form
        </a>
      </motion.div>
    </div>
  </section>
);

export default FeeStructureSection;
