import { motion } from "framer-motion";
import OrnamentDivider from "./OrnamentDivider";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const delhiRates = [
  { label: "Single Performance", price: "₹5,000" },
  { label: "2 Performances", price: "₹8,500" },
  { label: "3 Performances", price: "₹12,000" },
  { label: "4-5 Performances", price: "₹15,000" },
  { label: "7-8 Performances", price: "₹20,000" },
  { label: "10 Performances", price: "₹25,000" },
];

const ncrRates = [
  { label: "Single Performance", price: "₹8,000" },
  { label: "2 Performances", price: "₹10,000" },
  { label: "3 Performances", price: "₹13,500" },
  { label: "4-5 Performances", price: "₹17,000" },
  { label: "7-8 Performances", price: "₹23,000" },
  { label: "10 Performances", price: "₹30,000" },
];

const StagePerformanceSection = () => (
  <section id="stage-performance" className="py-16 md:py-24 section-dark">
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32">
      <motion.div {...fadeUp} className="text-center mb-4">
        <span className="inline-block px-5 py-1.5 rounded-full bg-gold text-primary font-semibold text-sm mb-4">
          Stage • Events • Celebrations
        </span>
      </motion.div>
      <motion.h2
        {...fadeUp}
        className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-center mb-4"
      >
        Stage Performance & Event Dance Charges in Delhi NCR
      </motion.h2>
      <motion.p
        {...fadeUp}
        className="text-center text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto mb-12"
      >
        Elegant, professionally choreographed performances for cultural programs, weddings and grand events.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.1 }}
          className="bg-ivory/10 backdrop-blur border border-gold/30 rounded-lg p-6 md:p-8"
        >
          <h3 className="font-display text-xl font-bold text-primary-foreground mb-0.5">Delhi</h3>
          <p className="text-primary-foreground/60 text-sm mb-6">(Under 25 KM)</p>
          <ul className="space-y-3">
            {delhiRates.map((row, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-primary-foreground/90 text-sm md:text-base"
              >
                <span className="font-body shrink-0">{row.label}</span>
                <span className="flex-1 min-w-[12px] border-b border-dotted border-primary-foreground/40 self-end mb-0.5" />
                <span className="font-display font-bold text-gold shrink-0">{row.price}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ delay: 0.2 }}
          className="bg-ivory/10 backdrop-blur border border-gold/30 rounded-lg p-6 md:p-8"
        >
          <h3 className="font-display text-xl font-bold text-primary-foreground mb-0.5">
            Noida / Gurgaon
          </h3>
          <p className="text-primary-foreground/60 text-sm mb-6">(Outstation NCR)</p>
          <ul className="space-y-3">
            {ncrRates.map((row, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-primary-foreground/90 text-sm md:text-base"
              >
                <span className="font-body shrink-0">{row.label}</span>
                <span className="flex-1 min-w-[12px] border-b border-dotted border-primary-foreground/40 self-end mb-0.5" />
                <span className="font-display font-bold text-gold shrink-0">{row.price}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default StagePerformanceSection;
