import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollRotateMandala from "@/components/ScrollRotateMandala";
import OrnamentDivider from "@/components/OrnamentDivider";
import { BookOpen, ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";
import { publicUrl } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const Journal = () => (
  <div className="min-h-screen scroll-smooth">
    <ScrollRotateMandala />
    <div className="relative z-10">
      <Navbar />

      <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-warm-cream mandala-bg">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4"
          >
            <p className="font-ornate text-secondary text-lg italic mb-2">Stories & Wisdom</p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Journal
            </h1>
          </motion.div>
          <OrnamentDivider />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center font-body text-muted-foreground max-w-2xl mx-auto mt-4 mb-12"
          >
            Articles on classical dance, tradition, and technique — written by our gurus and
            practitioners.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {articles.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              >
                <Link to={`/journal/${article.id}`}>
                  <article className="group h-full bg-card rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gold/20 hover:border-gold/50 cursor-pointer">
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <img
                        src={publicUrl(article.thumbnail)}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                    </div>
                    <div className="p-6 sm:p-8 h-full flex flex-col">
                      <span className="inline-block px-3 py-1 text-xs font-body uppercase tracking-widest text-gold bg-gold/10 rounded-sm mb-4 w-fit">
                        {article.category}
                      </span>
                      <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>
                      <p className="font-body text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 line-clamp-3 flex-1">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between border-t border-gold/20 pt-4">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-gold shrink-0" />
                          <span className="font-body text-sm font-medium text-foreground">
                            {article.author}
                          </span>
                        </div>
                        <span className="flex items-center gap-1 text-gold text-sm font-body group-hover:gap-2 transition-all">
                          Read more
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </div>
);

export default Journal;
