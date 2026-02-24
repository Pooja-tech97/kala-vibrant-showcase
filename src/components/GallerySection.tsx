import { useState } from "react";
import { motion } from "framer-motion";
import OrnamentDivider from "./OrnamentDivider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { publicUrl } from "@/lib/utils";

type GalleryItem = { type: "image"; src: string; alt: string } | { type: "video"; src: string; alt: string };

const videos: GalleryItem[] = [
  { type: "video", src: publicUrl("v1.mp4"), alt: "Performance reel" },
  { type: "video", src: publicUrl("v2.mp4"), alt: "Stage clip" },
];

const imagesGeneral: GalleryItem[] = [
  { type: "image", src: publicUrl("2.jpeg"), alt: "Gallery" },
  { type: "image", src: publicUrl("3.jpeg"), alt: "Event photo" },
  { type: "image", src: publicUrl("4.jpeg"), alt: "Class moment" },
  { type: "image", src: publicUrl("7.jpeg"), alt: "Students" },
  { type: "image", src: publicUrl("12.jpeg"), alt: "Gallery" },
  { type: "image", src: publicUrl("10.jpeg"), alt: "Gallery" },
  { type: "image", src: publicUrl("11.jpeg"), alt: "Creative movement" },
  { type: "image", src: publicUrl("13.jpeg"), alt: "Dance moment" },
  { type: "image", src: publicUrl("image.png"), alt: "Dance performance" },
];

// Awards: 8 first, then 5, 6
const awards: GalleryItem[] = [
  { type: "image", src: publicUrl("8.jpeg"), alt: "Award / Recognition" },
  { type: "image", src: publicUrl("5.jpeg"), alt: "Newspaper / Recognition" },
  { type: "image", src: publicUrl("6.jpeg"), alt: "Recognition" },
];

const allItems: GalleryItem[] = [...imagesGeneral, ...awards, ...videos];

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const renderItem = (item: GalleryItem, index: number) => {
    if (item.type === "video") {
      return (
        <motion.div
          key={`${item.src}-${index}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          className="group relative overflow-hidden rounded-sm aspect-square border border-gold/15 bg-black"
        >
          <video
            src={item.src}
            controls
            className="w-full h-full object-cover"
            preload="metadata"
          />
          <div className="absolute inset-0 bg-temple-brown/0 group-hover:bg-temple-brown/30 transition-all duration-300 flex items-end p-4 pointer-events-none">
            <p className="text-primary-foreground text-sm font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {item.alt}
            </p>
          </div>
        </motion.div>
      );
    }
    return (
      <motion.div
        key={`${item.src}-${index}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.05 }}
        className="group relative overflow-hidden rounded-sm aspect-square border border-gold/15 bg-muted/30"
      >
        <img
          src={item.src}
          alt={item.alt}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${item.src.includes("image.png") ? "scale-110" : ""}`}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-temple-brown/0 group-hover:bg-temple-brown/40 transition-all duration-300 flex items-end p-4">
          <p className="text-primary-foreground text-sm font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {item.alt}
          </p>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <p className="font-ornate text-secondary text-lg italic mb-2">Moments in Motion</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">Gallery</h2>
        </motion.div>
        <OrnamentDivider />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
          <TabsList className="w-full max-w-2xl mx-auto flex flex-wrap h-auto gap-1.5 sm:gap-2 bg-gold/10 border border-gold/20 p-1.5 sm:p-2 rounded-sm">
            <TabsTrigger value="all" className="flex-1 min-w-[70px] sm:min-w-[100px] text-xs sm:text-sm data-[state=active]:bg-gold data-[state=active]:text-primary-foreground py-2">
              All
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex-1 min-w-[70px] sm:min-w-[100px] text-xs sm:text-sm data-[state=active]:bg-gold data-[state=active]:text-primary-foreground py-2">
              Videos
            </TabsTrigger>
            <TabsTrigger value="images" className="flex-1 min-w-[70px] sm:min-w-[100px] text-xs sm:text-sm data-[state=active]:bg-gold data-[state=active]:text-primary-foreground py-2">
              Images
            </TabsTrigger>
            <TabsTrigger value="awards" className="flex-1 min-w-[70px] sm:min-w-[100px] text-xs sm:text-sm data-[state=active]:bg-gold data-[state=active]:text-primary-foreground py-2">
              Awards
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allItems.map((item, i) => renderItem(item, i))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {videos.map((item, i) => renderItem(item, i))}
            </div>
          </TabsContent>

          <TabsContent value="images" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {imagesGeneral.map((item, i) => renderItem(item, i))}
            </div>
          </TabsContent>

          <TabsContent value="awards" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {awards.map((item, i) => renderItem(item, i))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default GallerySection;
