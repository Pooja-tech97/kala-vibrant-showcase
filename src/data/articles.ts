export type Article = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  thumbnail: string;
};

export const articles: Article[] = [
  {
    id: 1,
    slug: "sacred-roots-of-bharatanatyam",
    title: "The Sacred Roots of Bharatanatyam",
    excerpt:
      "Discover how Bharatanatyam evolved from temple rituals in Tamil Nadu, blending devotion with artistry. The Natya Shastra and ancient Silappadikaram texts illuminate this divine dance form.",
    content: `Bharatanatyam is one of the oldest classical dance forms of India, rooted in the temples of Tamil Nadu. Its name derives from "Bhava" (expression), "Raga" (melody), "Tala" (rhythm), and "Natyam" (dance)—embodying the essence of storytelling through movement.

The dance form finds its earliest references in the Natya Shastra, an ancient treatise on performing arts attributed to sage Bharata Muni. Temple sculptures across South India, especially in Chidambaram and Thanjavur, depict dancers in poses that mirror the adavus (basic steps) we practise today.

For centuries, Bharatanatyam was performed by devadasis—temple dancers who dedicated their lives to art and devotion. The modern revival, led by pioneers like Rukmini Devi Arundale and E. Krishna Iyer, brought the form from temples to proscenium stages while preserving its spiritual core.

Today, students at Nritya Kalp learn not just the technique but the sacred stories and mudras that give Bharatanatyam its soul. Every performance is an offering—a bridge between the earthly and the divine.`,
    author: "Acharya Kalpana",
    date: "Jan 2025",
    category: "Bharatanatyam",
    thumbnail: "10.jpeg",
  },
  {
    id: 2,
    slug: "kathak-stories-through-movement",
    title: "Kathak: Stories Told Through Movement",
    excerpt:
      "From Katha (story) to Kathak — explore how this North Indian dance weaves tales through intricate footwork, spins, and expressive mudras. A journey from temples to Mughal courts.",
    content: `The word Kathak comes from "Katha"—meaning story. Kathak dancers are storytellers who use their bodies, hands, and feet to narrate tales of gods, heroes, and lovers. This classical form originated in North India, flourishing in temples and later in the courts of Mughal emperors.

The two major gharanas—Lucknow and Jaipur—developed distinct styles. Lucknow emphasised abhinaya (expression) and grace, while Jaipur focused on intricate footwork and rhythmic patterns. Both share a love for spinning, with dancers turning effortlessly to the beat of the tabla.

What makes Kathak unique is its conversational quality. The dancer often addresses the audience directly, using subtle glances and gestures. The ghungroos (ankle bells) become part of the musical composition, adding layers of rhythm to every performance.

At Nritya Kalp, we train students in both nritta (pure dance) and nritya (expressive dance), ensuring they can tell stories as compellingly as they can execute complex footwork. Kathak is not just dance—it is poetry in motion.`,
    author: "Priyanka Batham",
    date: "Dec 2024",
    category: "Kathak",
    thumbnail: "4.jpeg",
  },
  {
    id: 3,
    slug: "understanding-classical-dance-mudras",
    title: "Understanding Classical Dance Mudras",
    excerpt:
      "The language of the hands: an introduction to hasta mudras in Indian classical dance. Learn how single and double-hand gestures convey meaning and emotion on stage.",
    content: `In Indian classical dance, the hands speak. Hasta mudras—hand gestures—are a vocabulary passed down through centuries, each gesture carrying specific meaning. The Natya Shastra describes 28 single-hand mudras (asamyuta hasta) and 24 double-hand mudras (samyuta hasta).

Common mudras include Pataka (flag), used to depict clouds, forests, or night; Ardhachandra (half-moon), for the moon or a cup; and Shikhara (peak), often representing a lion, bow, or husband. The same mudra can mean different things depending on context and accompanying body language.

Mudras are not merely decorative. They are essential to abhinaya—the art of expression. A skilled dancer can convey an entire narrative through hand gestures alone, supported by facial expressions and body posture.

For students, mastering mudras is a gradual process. We begin with the basics—Pataka, Tripataka, Ardhachandra—and build toward complex combinations. With practice, the hands become an extension of the heart, capable of communicating the deepest emotions.`,
    author: "Acharya Kalpana",
    date: "Nov 2024",
    category: "Technique",
    thumbnail: "11.jpeg",
  },
  {
    id: 4,
    slug: "odissi-and-the-tribhanga-pose",
    title: "Odissi and the Tribhanga Pose",
    excerpt:
      "The three-bend posture defines Odissi's lyrical grace. Discover the tribhanga, chowka, and other foundational stances that make this Odisha dance form uniquely fluid.",
    content: `Odissi, the classical dance of Odisha, is characterised by its fluid, sculpturesque poses. The tribhanga—a three-bend posture—is its signature. The body bends at the neck, waist, and knee, creating an elegant S-curve that echoes the temple sculptures of Konark and Bhubaneswar.

Alongside tribhanga, the chowka (square stance) provides a grounded, masculine contrast. Dancers move between these poses with seamless grace, their movements inspired by the carvings of dancing maidens (apsaras) adorning ancient temples.

Odissi's repertoire includes mangalacharan (invocation), pallavi (pure dance), abhinaya (expression), and moksha (liberation). The music, rooted in Odissi classical tradition, complements the dance's lyrical quality.

Learning Odissi requires patience and precision. The torso movements—chest, waist, and hips moving in harmony—demand both strength and flexibility. At Nritya Kalp, we guide students through these foundational elements, helping them discover the poetry of Odissi.`,
    author: "Mrs Lovely",
    date: "Oct 2024",
    category: "Odissi",
    thumbnail: "image.png",
  },
];

export const getArticleById = (id: number): Article | undefined =>
  articles.find((a) => a.id === id);

export const getArticleBySlug = (slug: string): Article | undefined =>
  articles.find((a) => a.slug === slug);
