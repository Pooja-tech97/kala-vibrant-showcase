import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollRotateMandala from "@/components/ScrollRotateMandala";
import { BookOpen, ArrowLeft } from "lucide-react";
import { getArticleById } from "@/data/articles";
import { publicUrl } from "@/lib/utils";

const JournalDetail = () => {
  const { id } = useParams();
  const article = id ? getArticleById(Number(id)) : undefined;

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-warm-cream">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-foreground mb-4">
            Article not found
          </h1>
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 text-gold hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Journal
          </Link>
        </div>
      </div>
    );
  }

  const paragraphs = article.content.split("\n\n").filter(Boolean);

  return (
    <div className="min-h-screen scroll-smooth">
      <ScrollRotateMandala />
      <div className="relative z-10">
        <Navbar />

        <article className="pt-28 pb-16 md:pt-32 md:pb-24 bg-warm-cream mandala-bg min-h-screen">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/journal"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-8 font-body text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Journal
              </Link>

              <div className="relative h-56 sm:h-72 md:h-80 rounded-sm overflow-hidden mb-8 border border-gold/20">
                <img
                  src={publicUrl(article.thumbnail)}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
              </div>

              <span className="inline-block px-3 py-1 text-xs font-body uppercase tracking-widest text-gold bg-gold/10 rounded-sm mb-4">
                {article.category}
              </span>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {article.title}
              </h1>

              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gold/20">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-gold shrink-0" />
                  <span className="font-body font-medium text-foreground">{article.author}</span>
                </div>
                <span className="font-body text-sm text-muted-foreground">{article.date}</span>
              </div>

              <div className="font-body text-foreground/90 leading-relaxed space-y-6">
                {paragraphs.map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                    className="text-base sm:text-lg"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-12 pt-8 border-t border-gold/20"
              >
                <Link
                  to="/journal"
                  className="inline-flex items-center gap-2 text-gold hover:text-primary transition-colors font-body font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  View all articles
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </article>

        <Footer />
      </div>
    </div>
  );
};

export default JournalDetail;
