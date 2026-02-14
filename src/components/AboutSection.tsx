import { motion } from "framer-motion";
import OrnamentDivider from "./OrnamentDivider";
import guruImg from "@/assets/guru.jpg";

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-sm overflow-hidden border-4 border-gold/30 shadow-2xl">
            <img src={guruImg} alt="Guru Lakshmi Devi" className="w-full h-[500px] object-cover" />
          </div>
          {/* Decorative accent */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold/40 rounded-sm -z-10" />
          <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-gold/40 rounded-sm -z-10" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-ornate text-secondary text-lg italic mb-2">Meet Your Guide</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
            Guru Lakshmi Devi
          </h2>
          <OrnamentDivider className="justify-start !py-4" />
          
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              With over 30 years of dedicated practice and teaching, Guru Lakshmi Devi is a 
              renowned exponent of Bharatanatyam and Kuchipudi. Trained under legendary masters 
              at Kalakshetra, Chennai, she brings an unparalleled depth of knowledge and artistry.
            </p>
            <p>
              Her teaching philosophy centers on nurturing each student's unique expression while 
              maintaining the rigorous discipline and spiritual depth of classical traditions. 
              She has trained over 500 students who have gone on to perform across the world.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { number: "30+", label: "Years Teaching" },
              { number: "500+", label: "Students Trained" },
              { number: "200+", label: "Performances" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 bg-card rounded-sm border border-gold/20">
                <div className="font-display text-3xl font-bold text-primary">{stat.number}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
