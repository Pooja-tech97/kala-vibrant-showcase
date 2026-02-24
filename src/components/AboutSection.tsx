import { motion, useInView, useMotionValue, animate, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import OrnamentDivider from "./OrnamentDivider";
import { publicUrl } from "@/lib/utils";

const assistantGurus = [
  {
    name: "Mrs Lovely",
    role: "Vocal Teacher",
    image: publicUrl("g2.jpeg"),
    description:
      "16+ years of experience in teaching vocal techniques, Hindustani classical music theory and performance skills, helping students build a strong and expressive singing foundation.",
    stats: { experience: "16+", specialty: "Hindustani Classical" },
  },
  {
    name: "Priyanka Batham",
    role: "Assistant Bharatanatyam & Semi-Classical Teacher",
    image: publicUrl("g3.jpeg"),
    description:
      "Energetic teacher focusing on stage charisma, fitness and Bollywood choreography for all ages.",
    stats: { experience: "8+", specialty: "Bharatanatyam & Semi-Classical" },
  },
];

function RollingNumber({ end, suffix = "+", duration = 1.8 }: { end: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useMotionValueEvent(rounded, "change", (v) => setDisplay(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, end, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, end, duration, count]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}

const AboutSection = () => (
  <section id="about" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32">
      {/* Main Guru */}
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-sm overflow-hidden border-4 border-gold/30 shadow-2xl">
            <img src={publicUrl("g1.jpeg")} alt="Acharya Kalpana" className="w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[500px] object-cover scale-110 object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
            <a
              href="/#contact"
              className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-body text-sm font-bold hover:bg-primary/90 transition-colors"
            >
              Enroll Now
            </a>
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold/40 rounded-sm -z-10" />
          <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-gold/40 rounded-sm -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-ornate text-secondary text-lg italic mb-2">Meet Your Guide</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-1">
            Acharya Kalpana
          </h2>
          <p className="text-secondary font-semibold text-base mb-4">
            Founder & Director • Classical Dance Expert
          </p>
          <OrnamentDivider className="justify-start !py-2" />

          <p className="text-muted-foreground leading-relaxed mt-4">
            Founder with years of classical training – guiding students in Bharatanatyam, Kathak and
            Semi-Classical with refined technique, expression and stage confidence.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { end: 30, suffix: "+", label: "Years Teaching" },
              { end: 500, suffix: "+", label: "Students Trained" },
              { end: 200, suffix: "+", label: "Performances" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 bg-card rounded-sm border border-gold/20">
                <div className="font-display text-3xl font-bold text-primary">
                  <RollingNumber end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Assistant Gurus */}
      <div className="mt-20">
        <OrnamentDivider className="!py-8" />
        <p className="font-ornate text-secondary text-lg italic text-center mb-2">Our Talented Faculty</p>
        <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Meet Our Instructors
        </h3>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {assistantGurus.map((guru, index) => (
            <motion.div
              key={guru.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group bg-card rounded-sm border border-gold/20 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden h-[380px]">
                <img
                  src={guru.image}
                  alt={guru.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <a
                  href="#contact"
                  className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-5 py-2 rounded-sm font-body text-sm font-bold hover:bg-primary/90 transition-colors"
                >
                  Enroll Now
                </a>
              </div>
              <div className="p-6">
                <h4 className="font-display text-2xl font-bold text-foreground">{guru.name}</h4>
                <p className="text-secondary font-semibold text-sm mt-1 mb-3">{guru.role}</p>
                <p className="text-muted-foreground leading-relaxed text-sm">{guru.description}</p>
                <div className="mt-4 flex gap-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-display text-xl font-bold text-primary">{guru.stats.experience}</span>
                    <span>Years Exp.</span>
                  </div>
                  <div className="h-8 w-px bg-border" />
                  <div className="text-xs text-muted-foreground flex items-center">
                    {guru.stats.specialty}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
