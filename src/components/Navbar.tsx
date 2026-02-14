import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Dance Forms", href: "#dance-forms" },
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-temple-brown/95 backdrop-blur-sm border-b border-gold/30"
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#" className="font-display text-2xl font-bold text-gold tracking-wide">
          नृत्य<span className="text-primary-foreground font-ornate text-lg ml-1">Academy</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-body text-primary-foreground/80 hover:text-gold transition-colors tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-5 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors border border-gold/40"
          >
            Book Trial
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-temple-brown border-t border-gold/20 px-4 pb-4"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-primary-foreground/80 hover:text-gold transition-colors text-sm uppercase tracking-wide border-b border-gold/10"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
