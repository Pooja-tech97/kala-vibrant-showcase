import { motion } from "framer-motion";
import OrnamentDivider from "./OrnamentDivider";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";

const images = [
  { src: gallery1, alt: "Group performance on stage" },
  { src: gallery2, alt: "Students practicing in studio" },
  { src: gallery3, alt: "Arangetram ceremony" },
  { src: gallery4, alt: "Close-up of ghungroo ankle bells" },
];

const GallerySection = () => (
  <section id="gallery" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-4"
      >
        <p className="font-ornate text-secondary text-lg italic mb-2">Moments in Motion</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Gallery</h2>
      </motion.div>
      <OrnamentDivider />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-sm aspect-square border border-gold/15"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-temple-brown/0 group-hover:bg-temple-brown/40 transition-all duration-300 flex items-end p-4">
              <p className="text-primary-foreground text-sm font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
