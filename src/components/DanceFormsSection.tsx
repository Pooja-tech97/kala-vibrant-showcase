import { motion } from "framer-motion";
import OrnamentDivider from "./OrnamentDivider";
import { publicUrl } from "@/lib/utils";

const dances = [
  {
    name: "Bharatanatyam",
    origin: "Tamil Nadu",
    description: "One of the oldest classical dance traditions, known for its grace, purity, and sculptured poses rooted in ancient temple traditions.",
    image: publicUrl("10.jpeg"),
  },
  {
    name: "Kathak",
    origin: "North India",
    description: "A storytelling dance form celebrated for its intricate footwork, spins, and expressive gestures drawn from Mughal court culture.",
    image: publicUrl("review-image/3.jpg"),
  },
  {
    name: "Folk Dance",
    origin: "Across India",
    description: "Vibrant regional dance forms that celebrate festivals, harvests, and community. From Garba and Bhangra to Giddha and Lavani, each style reflects the rich cultural heritage of its region.",
    image: publicUrl("1 (1).jpeg"),
  },
];

const DanceFormsSection = () => (
  <section id="dance-forms" className="py-16 md:py-24 bg-warm-cream mandala-bg">
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-4"
      >
        <p className="font-ornate text-secondary text-lg italic mb-2">Our Offerings</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
          Classical Dance Forms
        </h2>
      </motion.div>
      <OrnamentDivider />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8">
        {dances.map((dance, i) => (
          <motion.div
            key={dance.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group bg-card rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gold/20 hover:border-gold/50"
          >
            <div className="relative h-72 overflow-hidden">
              <img
                src={dance.image}
                alt={dance.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-temple-brown/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-gold text-xs font-body uppercase tracking-widest">{dance.origin}</p>
                <h3 className="font-display text-2xl font-bold text-primary-foreground">{dance.name}</h3>
              </div>
            </div>
            <div className="p-5">
              <p className="text-muted-foreground text-sm leading-relaxed">{dance.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DanceFormsSection;
