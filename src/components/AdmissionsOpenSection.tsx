import { motion } from "framer-motion";
import OrnamentDivider from "./OrnamentDivider";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const admissionCards = [
  {
    title: "Eligibility",
    items: [
      "Beginners, intermediate & advanced students welcome",
      "No prior dance experience required for beginners",
      "Minimum age: 6 years",
      "Adults batches available",
      "Special coaching for stage & exams",
    ],
  },
  {
    title: "Documents Required",
    items: [
      "1 Passport-size Photograph",
      "Age Proof (Aadhar / Birth Certificate)",
      "Parent/Guardian Contact Details",
      "Medical Fitness Declaration (if any)",
    ],
  },
  {
    title: "Fee & Batch Details",
    items: [
      "Monthly fee varies by level",
      "Weekday & weekend batches available",
      "Extra practice classes available",
      "Trial class available before joining",
    ],
  },
];

const AdmissionsOpenSection = () => (
  <section id="admissions" className="py-16 md:py-24 section-dark">
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32">
      <motion.div {...fadeUp} className="text-center mb-4">
        <p className="font-ornate text-gold text-lg italic mb-2">Begin Your Journey</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
          Admissions Open
        </h2>
      </motion.div>
      <OrnamentDivider />
      <motion.p
        {...fadeUp}
        className="text-center font-body text-primary-foreground/70 max-w-3xl mx-auto mt-4 mb-12"
      >
        Begin your classical dance journey with Nritya Kalp Dance Academy — a structured,
        disciplined and culturally rooted training program designed for all age groups.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
        {admissionCards.map((card, i) => (
          <motion.div
            key={card.title}
            {...fadeUp}
            transition={{ delay: i * 0.1 }}
            className="bg-ivory/10 backdrop-blur border border-gold/20 rounded-sm p-6 sm:p-8 hover:border-gold/50 transition-colors"
          >
            <h3 className="font-display text-xl font-bold text-gold mb-4">{card.title}</h3>
            <ul className="space-y-3">
              {card.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-primary-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeUp} className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 sm:mt-12">
        <a
          href="/#contact"
          className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-primary text-primary-foreground font-semibold text-base sm:text-lg rounded-sm border-2 border-gold/50 hover:bg-primary/80 transition-all hover:border-gold shadow-lg shadow-primary/30 text-center"
        >
          Download Admission Form
        </a>
        <a
          href="/#contact"
          className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-transparent text-gold font-semibold text-base sm:text-lg rounded-sm border-2 border-gold/40 hover:bg-gold/10 transition-all text-center"
        >
          Fill Online Form
        </a>
      </motion.div>

      <motion.p {...fadeUp} className="text-center text-sm text-primary-foreground/50 mt-8">
        Note: Admission will be confirmed only after form submission and fee payment at the academy office.
      </motion.p>
    </div>
  </section>
);

export default AdmissionsOpenSection;
