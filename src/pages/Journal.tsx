import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrnamentDivider from "@/components/OrnamentDivider";
import { User, Calendar, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";

const articles = [
  {
    id: 1,
    title: "The Sacred Origins of Bharatanatyam",
    excerpt:
      "Tracing the roots of Bharatanatyam from the ancient temples of Tamil Nadu to the modern stage — a journey through devotion, discipline, and divine expression.",
    author: "Guru Lakshmi Devi",
    date: "February 20, 2026",
    readTime: "8 min read",
    category: "History",
    image: "/dance.jpeg",
    content: `Bharatanatyam, one of the oldest classical dance forms in India, finds its origins in the sacred temples of Tamil Nadu. The Natyashastra, penned by sage Bharata Muni around 200 BCE, is often considered the foundational text of this art form.\n\nThe dance was originally performed by Devadasis — temple dancers who dedicated their lives to the worship of deities through movement, rhythm, and expression. Each gesture, or mudra, carried spiritual significance, transforming the dancer into a vessel of divine storytelling.\n\nIn the early 20th century, pioneers like Rukmini Devi Arundale revived Bharatanatyam, rescuing it from social stigma and presenting it on the world stage. Today, it stands as a symbol of India's rich cultural heritage, blending intricate footwork (nritta), expressive storytelling (nritya), and dramatic art (natya).\n\nThe Adavus — basic dance units — form the building blocks, while the Arangetram marks a dancer's formal debut. From the rhythmic patterns of Sollukattus to the devotional Padams, every element of Bharatanatyam speaks of a civilization's artistic genius.`,
  },
  {
    id: 2,
    title: "Understanding Abhinaya: The Art of Expression",
    excerpt:
      "Beyond footwork and rhythm lies Abhinaya — the soul of Indian classical dance. Explore how dancers communicate complex emotions through face, body, and spirit.",
    author: "Priyanka Batham",
    date: "February 12, 2026",
    readTime: "6 min read",
    category: "Technique",
    image: "/dance2.jpeg",
    content: `Abhinaya, derived from the Sanskrit root 'abhi' (towards) and 'ni' (to lead), literally means leading the audience towards a particular emotion or rasa. It is the expressive aspect of Indian classical dance that distinguishes it from mere physical movement.\n\nThere are four types of Abhinaya:\n\n1. **Angika** — Expression through body movements including hand gestures (hastas), eye movements, and postures\n2. **Vachika** — Expression through speech, song, and verbal narrative\n3. **Aharya** — Expression through costumes, makeup, and stage decoration\n4. **Satvika** — The most refined form, expression through genuine emotional states\n\nThe Navarasa — nine fundamental emotions — form the emotional vocabulary: Shringara (love), Hasya (joy), Karuna (sorrow), Raudra (anger), Veera (courage), Bhayanaka (fear), Bibhatsa (disgust), Adbhuta (wonder), and Shanta (peace).\n\nA skilled dancer can evoke tears and laughter within moments, painting vivid stories through the flicker of an eye or the curve of a smile. This is the true magic of Abhinaya.`,
  },
  {
    id: 3,
    title: "The Rhythmic Mathematics of Tala",
    excerpt:
      "Discover how Indian classical dance uses complex rhythmic cycles called Tala to create mesmerizing patterns of sound and movement.",
    author: "Mrs. Lovely",
    date: "January 28, 2026",
    readTime: "7 min read",
    category: "Rhythm",
    image: "/dance  3.jpeg",
    content: `Tala, the rhythmic framework of Indian classical music and dance, is far more than simple time-keeping. It is a sophisticated mathematical system that creates intricate patterns of beats, silences, and accents.\n\nThe most common tala in Bharatanatyam is Adi Tala, consisting of 8 beats (4+2+2). But the system extends far beyond this, with talas of 3, 5, 7, 9, and even complex combinations creating 35 fundamental patterns.\n\nDancers learn to navigate these rhythmic cycles through Sollukattus — rhythmic syllables like "ta ka dhi mi" that correspond to specific foot patterns. The interplay between the dancer's feet, the mridangam (drum), and the nattuvangam (cymbals) creates a three-dimensional rhythmic experience.\n\nAdvanced concepts like Korvai (rhythmic compositions that end precisely on the samam or first beat) and Theermanam (concluding phrases) showcase the mathematical precision inherent in this art form. A dancer performing a complex Korvai is essentially solving a rhythmic equation in real-time through movement.`,
  },
  {
    id: 4,
    title: "Kathak: The Storytellers of North India",
    excerpt:
      "From Mughal courts to contemporary stages, Kathak has evolved while preserving its essence as the dance of storytellers.",
    author: "Guru Lakshmi Devi",
    date: "January 15, 2026",
    readTime: "9 min read",
    category: "History",
    image: "/kathak.jpg",
    content: `Kathak, derived from 'Katha' meaning story, is the classical dance form of North India. Its journey from temple courtyards to Mughal courts and finally to the global stage is a fascinating tale of artistic evolution.\n\nThe Kathakas, or storytellers, were originally temple performers who narrated mythological tales through dance and gesture. With the advent of Mughal rule, Kathak absorbed Persian and Central Asian influences, developing the characteristic spins (chakkars), intricate footwork (tatkar), and the Mughal court aesthetic.\n\nThree major gharanas (schools) define Kathak's lineage:\n- **Lucknow Gharana** — Known for grace, expressiveness, and abhinaya\n- **Jaipur Gharana** — Celebrated for vigorous footwork and technical precision\n- **Benaras Gharana** — The oldest, maintaining the devotional character\n\nA Kathak performance typically begins with an invocation (Vandana), followed by pure dance (Nritta) sections like Thaat, Aamad, and Toda-Tukda, and culminates in expressive pieces (Nritya) such as Thumri and Bhajan interpretations.\n\nThe iconic ghungroos (ankle bells) — often numbering 100-200 on each ankle — create the distinctive sonic landscape of Kathak.`,
  },
  {
    id: 5,
    title: "Preparing for Your Arangetram: A Complete Guide",
    excerpt:
      "The Arangetram is a dancer's formal debut — a milestone of years of dedication. Here's everything you need to know to prepare for this sacred moment.",
    author: "Priyanka Batham",
    date: "January 5, 2026",
    readTime: "10 min read",
    category: "Guide",
    image: "/hero-dance.jpg",
    content: `The Arangetram (literally "ascending the stage") is the most significant milestone in a Bharatanatyam dancer's journey. It marks the transition from student to performer and is traditionally the dancer's solo debut recital.\n\nA typical Arangetram follows the Margam — the traditional concert format:\n\n1. **Pushpanjali** — Offering of flowers, an invocation to the divine\n2. **Alarippu** — A rhythmic introduction, "blossoming" of the dancer\n3. **Jatiswaram** — Pure dance showcasing technical mastery\n4. **Shabdam** — First expressive piece, often praising a deity\n5. **Varnam** — The centerpiece, combining nritta and abhinaya (30-45 minutes)\n6. **Padam** — A devotional or romantic lyrical piece\n7. **Tillana** — A joyous, rhythmic finale\n8. **Mangalam** — Concluding benediction\n\nPreparation typically intensifies 6-12 months before the event, with daily practice sessions of 2-3 hours. Physical conditioning, costume fittings, orchestra rehearsals, and venue arrangements all require careful planning.\n\nThe emotional and spiritual preparation is equally important — the Arangetram is not merely a performance but a spiritual offering, a culmination of the guru-shishya parampara (teacher-student tradition).`,
  },
];

const categoryColors: Record<string, string> = {
  History: "bg-primary/15 text-primary border-primary/30",
  Technique: "bg-accent/15 text-accent border-accent/30",
  Rhythm: "bg-secondary/15 text-secondary border-secondary/30",
  Guide: "bg-gold/15 text-gold-dark border-gold/30",
};

const Journal = () => {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const article = selectedArticle !== null ? articles.find((a) => a.id === selectedArticle) : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 section-dark overflow-hidden">
        <div className="absolute inset-0 mandala-bg opacity-30" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-ornate italic text-gold text-lg mb-2"
          >
            ~ Nritya Patrika ~
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display text-primary-foreground mb-4"
          >
            The Dance Journal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/70 font-body max-w-2xl mx-auto text-lg"
          >
            Explore the rich world of Indian classical dance through curated articles on history, technique, rhythm, and
            the spiritual essence of movement.
          </motion.p>
        </div>
        {/* Bottom ornamental border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 gold-gradient opacity-60" />
      </section>

      {selectedArticle !== null && article ? (
        /* Full Article View */
        <section className="py-16 bg-warm-cream mandala-bg">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="mb-8 text-sm font-body text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
            >
              ← Back to all articles
            </motion.button>

            <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="mb-6">
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${categoryColors[article.category] || ""}`}
                >
                  {article.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-display text-foreground mb-6 leading-tight">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-body mb-8 pb-6 border-b border-gold/20">
                <span className="flex items-center gap-1.5">
                  <User size={14} className="text-gold" /> {article.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-gold" /> {article.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-gold" /> {article.readTime}
                </span>
              </div>

              <div className="rounded-lg overflow-hidden mb-10 border border-gold/20">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none font-body text-foreground/85 leading-relaxed space-y-4">
                {article.content.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>

              <OrnamentDivider className="mt-12" />
            </motion.article>
          </div>
        </section>
      ) : (
        /* Article Listing */
        <section className="py-16 bg-warm-cream mandala-bg">
          <div className="container mx-auto px-4">
            {/* Featured Article */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div
                className="relative rounded-xl overflow-hidden cursor-pointer group border border-gold/20 shadow-lg"
                onClick={() => setSelectedArticle(articles[0].id)}
              >
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <span
                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-3 ${categoryColors[articles[0].category]}`}
                  >
                    {articles[0].category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display text-white mb-3">
                    {articles[0].title}
                  </h2>
                  <p className="text-white/70 font-body text-sm md:text-base max-w-2xl mb-4">
                    {articles[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-white/60 text-sm font-body">
                    <span className="flex items-center gap-1.5">
                      <User size={14} /> {articles[0].author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} /> {articles[0].date}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <OrnamentDivider />

            {/* Article Grid */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {articles.slice(1).map((a, i) => (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-xl overflow-hidden border border-gold/20 shadow-sm hover:shadow-lg transition-shadow cursor-pointer group"
                  onClick={() => setSelectedArticle(a.id)}
                >
                  <div className="overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full border ${categoryColors[a.category]}`}
                      >
                        {a.category}
                      </span>
                      <span className="text-xs text-muted-foreground font-body flex items-center gap-1">
                        <Clock size={12} /> {a.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-display text-foreground mb-2 group-hover:text-primary transition-colors">
                      {a.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body mb-4 line-clamp-2">
                      {a.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground font-body flex items-center gap-1.5">
                        <User size={12} className="text-gold" /> {a.author}
                      </span>
                      <span className="text-xs text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Journal;
