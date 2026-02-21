import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrnamentDivider from "@/components/OrnamentDivider";
import { Link } from "react-router-dom";
import {
  Layers,
  Hand,
  Drama,
  Music,
  BookOpen,
  Users,
  Dumbbell,
  ScrollText,
} from "lucide-react";

const learnItems = [
  {
    icon: Layers,
    title: "Basics & Adavus",
    desc: "Fundamental steps, balance, body posture and classical footwork technique.",
  },
  {
    icon: Hand,
    title: "Hand Gestures (Hastas)",
    desc: "Asamyukta & Samyukta hand gestures with meaning and expressive application.",
  },
  {
    icon: Drama,
    title: "Expression & Bhava",
    desc: "Facial expressions, Navarasa, and the art of storytelling through movement.",
  },
  {
    icon: Music,
    title: "Rhythm & Music",
    desc: "Understanding tala, counting, korvais and coordination with rhythm patterns.",
  },
  {
    icon: BookOpen,
    title: "Repertoire",
    desc: "Learning classical items like Alarippu, Jatiswaram, Varnam and Padam.",
  },
  {
    icon: Users,
    title: "Stage Training",
    desc: "Stage presence, confidence, group coordination and performance etiquette.",
  },
  {
    icon: Dumbbell,
    title: "Fitness & Posture",
    desc: "Flexibility, strength training, warm-ups and injury prevention.",
  },
  {
    icon: ScrollText,
    title: "Theory & Music Knowledge",
    desc: "Introduction to Natyashastra, Carnatic music basics and classical foundations.",
  },
];

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
      { label: "View Schedule", href: "/#schedule", primary: false },
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
      { label: "View Schedule", href: "/#schedule", primary: false },
    ],
  },
];

const feeCards = [
  { title: "Admission Fee", price: "₹1,000", sub: "One-time admission charge" },
  { title: "Monthly Fee", price: "₹2,000", sub: "Regular monthly batch", extra: "8 Classes / Month" },
  { title: "6-Month Package", price: "₹11,500", sub: "Save more with half-year plan" },
  { title: "1-Year Package", price: "₹23,500", sub: "Best value — full year training" },
];

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

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const Classes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-crimson/90 to-temple-brown/95" />
        <div className="container mx-auto px-4 relative z-10 text-center py-16">
          <motion.h1
            {...fadeUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
          >
            Dance Classes in Delhi – Nritya Kalp Dance Academy
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.15 }}
            className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto"
          >
            A soulful space rooted in tradition, discipline and expressive artistry —
            nurturing every learner with grace and confidence.
          </motion.p>
        </div>
      </section>

      {/* What Students Will Learn */}
      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-crimson">
              What Students Will Learn
            </h2>
          </motion.div>
          <OrnamentDivider />
          <motion.p
            {...fadeUp}
            className="text-center font-body text-foreground/70 max-w-3xl mx-auto mt-4 mb-12"
          >
            Nritya Kalp Dance Academy offers a structured journey through classical technique,
            expression, rhythm and stage performance — helping every learner grow with grace,
            discipline and confidence.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {learnItems.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
                className="bg-background rounded-lg border border-border p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-lg bg-deep-crimson/10 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-deep-crimson" />
                </div>
                <h3 className="font-display text-lg font-bold text-deep-crimson mb-2">{item.title}</h3>
                <p className="font-body text-sm text-foreground/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="flex justify-center gap-4 mt-12">
            <Link
              to="/#contact"
              className="px-8 py-3 bg-deep-crimson text-primary-foreground font-semibold rounded-md hover:bg-deep-crimson/90 transition-colors"
            >
              Enroll Now!
            </Link>
            <Link
              to="/#schedule"
              className="px-8 py-3 border-2 border-deep-crimson text-deep-crimson font-semibold rounded-md hover:bg-deep-crimson/10 transition-colors"
            >
              View Tomorrow's Schedule
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Class Levels */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
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

          <div className="grid md:grid-cols-3 gap-8">
            {classLevels.map((cls, i) => (
              <motion.div
                key={cls.level}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-ivory/10 backdrop-blur border border-gold/20 rounded-lg p-8 hover:border-gold/40 transition-colors"
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
                    <Link
                      key={btn.label}
                      to={btn.href}
                      className={
                        btn.primary
                          ? "px-5 py-2 text-sm font-semibold bg-deep-crimson text-primary-foreground rounded-md hover:bg-deep-crimson/90 transition-colors"
                          : "px-5 py-2 text-sm font-semibold border border-deep-crimson text-gold rounded-md hover:bg-deep-crimson/10 transition-colors"
                      }
                    >
                      {btn.label}
                    </Link>
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

      {/* Fee Structure */}
      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-crimson">
              Fee Structure
            </h2>
          </motion.div>
          <OrnamentDivider />
          <motion.div {...fadeUp} className="text-center mt-4 mb-12 space-y-1">
            <p className="font-body text-foreground/70">Nritya Kalp Dance Academy</p>
            <p className="font-body text-foreground/60 text-sm">
              Affiliated with Prayag Sangeet Samiti, Prayagraj — Registered under MSME
            </p>
            <p className="font-body text-deep-crimson text-sm">📍 Paharganj, New Delhi – 110055</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {feeCards.map((card, i) => (
              <motion.div
                key={card.title}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="bg-background rounded-lg border border-border p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{card.title}</h3>
                {card.extra && (
                  <p className="text-xs text-foreground/50 mb-1">{card.extra}</p>
                )}
                <p className="font-display text-3xl font-bold text-deep-crimson my-3">{card.price}</p>
                <p className="text-sm text-foreground/60">{card.sub}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="flex justify-center gap-4 mt-12">
            <Link
              to="/#contact"
              className="px-8 py-3 bg-deep-crimson text-primary-foreground font-semibold rounded-md hover:bg-deep-crimson/90 transition-colors"
            >
              Apply for Admission
            </Link>
            <Link
              to="/#contact"
              className="px-8 py-3 border-2 border-deep-crimson text-deep-crimson font-semibold rounded-md hover:bg-deep-crimson/10 transition-colors"
            >
              Fill Online Form
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Admissions Open */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-4">
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

          <div className="grid md:grid-cols-3 gap-8">
            {admissionCards.map((card, i) => (
              <motion.div
                key={card.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-ivory/10 backdrop-blur border border-gold/20 rounded-lg p-8"
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

          <motion.div {...fadeUp} className="flex justify-center gap-4 mt-12">
            <Link
              to="/#contact"
              className="px-8 py-3 bg-deep-crimson text-primary-foreground font-semibold rounded-md hover:bg-deep-crimson/90 transition-colors"
            >
              Download Admission Form
            </Link>
            <Link
              to="/#contact"
              className="px-8 py-3 border-2 border-deep-crimson text-gold font-semibold rounded-md hover:bg-deep-crimson/10 transition-colors"
            >
              Fill Online Form
            </Link>
          </motion.div>

          <motion.p {...fadeUp} className="text-center text-sm text-primary-foreground/50 mt-8">
            Note: Admission will be confirmed only after form submission and fee payment at the academy office.
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Classes;
