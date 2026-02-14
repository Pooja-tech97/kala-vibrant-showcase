const Footer = () => (
  <footer className="bg-temple-brown py-12 border-t border-gold/20">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="font-display text-2xl font-bold text-gold mb-3">
            नृत्य <span className="font-ornate text-primary-foreground/80 text-lg">Academy</span>
          </h3>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Preserving the sacred art of classical Indian dance through dedicated teaching and authentic tradition.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold text-gold uppercase tracking-widest mb-3">Quick Links</h4>
          <div className="space-y-2">
            {["Dance Forms", "About", "Schedule", "Gallery", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(" ", "-")}`}
                className="block text-primary-foreground/60 text-sm hover:text-gold transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold text-gold uppercase tracking-widest mb-3">Contact</h4>
          <div className="space-y-2 text-primary-foreground/60 text-sm">
            <p>123 Temple Street, Cultural District</p>
            <p>info@nrityaacademy.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
      <div className="h-px bg-gold/15" />
      <p className="text-center text-primary-foreground/40 text-xs mt-6">
        © 2026 Nritya Academy. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
