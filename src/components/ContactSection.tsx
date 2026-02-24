import { motion } from "framer-motion";
import { useState } from "react";
import OrnamentDivider from "./OrnamentDivider";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-warm-cream mandala-bg">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <p className="font-ornate text-secondary text-lg italic mb-2">Get In Touch</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Begin Your Journey
          </h2>
        </motion.div>
        <OrnamentDivider />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto mt-8"
        >
          <div className="bg-card border-2 border-gold/25 rounded-sm p-8 md:p-10 shadow-xl relative overflow-hidden">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/40" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/40" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold/40" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/40" />

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" className="text-gold">
                    <path d="M8 16 L14 22 L24 10" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground">We'll be in touch soon to schedule your trial class.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-body text-muted-foreground uppercase tracking-wide mb-2">Full Name</label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-gold transition-colors text-foreground"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body text-muted-foreground uppercase tracking-wide mb-2">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-gold transition-colors text-foreground"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body text-muted-foreground uppercase tracking-wide mb-2">Interested Dance Form</label>
                  <select className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-gold transition-colors text-foreground">
                    <option>Bharatanatyam</option>
                    <option>Kathak</option>
                    <option>Odissi</option>
                    <option>Kuchipudi</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-body text-muted-foreground uppercase tracking-wide mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-gold transition-colors text-foreground resize-none"
                    placeholder="Tell us about your experience level and goals..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-sm border border-gold/40 hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Book Your Free Trial
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
