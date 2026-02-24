import { motion } from "framer-motion";
import OrnamentDivider from "./OrnamentDivider";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const classLevels = [
  {
    level: "Beginner",
    duration: "6–8 months",
    title: "Beginner — Foundations",
    desc: "Introduction to basic adavus, posture (Aramandi), simple hand gestures and rhythm counting.",
    syllabus: "Basic Adavus, Aramandi, Simple Hastas",
    age: "6+ (children & adults welcome)",
    outcome: "Clean technique, basic coordination and short presentation-ready items",
    buttons: [
      { label: "Enroll Now", href: "/#contact", primary: true },
      { label: "Meet Gurus", href: "/#about", primary: false },
    ],
  },
  {
    level: "Intermediate",
    duration: "8–12 months",
    title: "Intermediate — Development",
    desc: "Combination sequences, expressive abhinaya, jatis and coordination with live rhythm accompaniment.",
    syllabus: "Compound Adavus, Jatis, Introduction to Varnam sections",
    age: "8+ with basic foundation",
    outcome: "Confident group performance, deeper expressive skills",
    buttons: [
      { label: "Enroll Now", href: "/#contact", primary: true },
      { label: "Meet Gurus", href: "/#about", primary: false },
    ],
  },
  {
    level: "Advanced",
    duration: "12+ months",
    title: "Advanced — Performance & Mastery",
    desc: "Varnam practice, complex jatis, solo repertoire and full stage preparation with costume & makeup guidance.",
    syllabus: "Varnam, Padam, Complex Korvais, Solo choreography",
    age: "Students with strong technical base (by audition)",
    outcome: "Solo-ready performers, exam & competition preparation, artistic maturity",
    buttons: [
      { label: "Enroll Now", href: "/#contact", primary: true },
      { label: "Meet Gurus", href: "/#about", primary: false },
    ],
  },
];

const ClassLevelsSection = () => (
  <section id="classes" className="py-16 md:py-24 section-dark">
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32">
      <motion.div {...fadeUp} className="text-center mb-4">
        <p className="font-ornate text-gold text-lg italic mb-2">Structured Learning</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground">
          Class Levels
        </h2>
      </motion.div>
      <OrnamentDivider />
      <motion.p
        {...fadeUp}
        className="text-center font-body text-primary-foreground/70 max-w-3xl mx-auto mt-4 mb-12"
      >
        Structured courses designed to take students from fundamentals to stage-ready solo performance.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
        {classLevels.map((cls, i) => (
          <motion.div
            key={cls.level}
            {...fadeUp}
            transition={{ delay: i * 0.1 }}
            className="bg-ivory/10 backdrop-blur border border-gold/20 rounded-sm p-8 hover:border-gold/50 transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-deep-crimson/15 text-gold">
                {cls.level}
              </span>
              <span className="text-sm text-primary-foreground/60">Duration: {cls.duration}</span>
            </div>
            <h3 className="font-display text-xl font-bold text-gold mb-3">{cls.title}</h3>
            <p className="font-body text-sm text-primary-foreground/70 mb-4">{cls.desc}</p>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p><strong>Syllabus:</strong> {cls.syllabus}</p>
              <p><strong>Recommended Age:</strong> {cls.age}</p>
              <p><strong>Outcome:</strong> {cls.outcome}</p>
            </div>
            <div className="flex gap-3 mt-6">
              {cls.buttons.map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  className={
                    btn.primary
                      ? "px-5 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-sm border border-gold/50 hover:bg-primary/80 transition-all"
                      : "px-5 py-2 text-sm font-semibold border border-gold/40 text-gold rounded-sm hover:bg-gold/10 transition-all"
                  }
                >
                  {btn.label}
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p {...fadeUp} className="text-center text-sm text-primary-foreground/50 mt-10">
        Note: Each level includes regular assessments, optional private coaching and periodic stage workshops.
        Flexible weekday & weekend batches available.
      </motion.p>
    </div>
  </section>
);

export default ClassLevelsSection;
