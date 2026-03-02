import { motion } from "framer-motion";

interface Photo {
  id: number;
  caption: string;
  rotation: number;
  image: string;
}

const photos: Photo[] = [
  { id: 1, caption: "Our First date 💕", rotation: -3, image: "/image4.jpg" },
  { id: 2, caption: "That smile I fell for ✨", rotation: 2, image: "/image5.jpg" },
  { id: 3, caption: "I love the way you see me 🫶", rotation: -2, image: "/shared image (4).jpg" },
  { id: 4, caption: "Always laughing with you 😊", rotation: 3, image: "/shared image (8).jpg" },
  { id: 5, caption: "My favorite person 💖", rotation: -1, image: "/shared image (10).jpg" },
  { id: 6, caption: "Us against the world 🌍", rotation: 2, image: "/shared image (11).jpg" },
];

const PolaroidCard = ({ photo, index }: { photo: Photo; index: number }) => {
  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 50, rotate: photo.rotation }}
      whileInView={{ opacity: 1, y: 0, rotate: photo.rotation }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        rotate: 0,
        zIndex: 10,
        transition: { duration: 0.3 }
      }}
    >
      <div className="bg-card  pb-12 rounded-sm shadow-polaroid transition-shadow duration-300 group-hover:shadow-dreamy">
        {/* Photo */}
        <div className="aspect-square bg-muted rounded-sm overflow-hidden relative">
          <img
            src={photo.image}
            alt={photo.caption}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Caption */}
        <motion.p
          className="absolute bottom-3 left-0 right-0 text-center font-body text-sm text-muted-foreground px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          {photo.caption}
        </motion.p>
      </div>

      {/* Tape effect */}
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-muted/60 rotate-2" />
    </motion.div>
  );
};

const GallerySection = () => {
  return (
    <section className="py-20 md:py-32 px-6 romantic-gradient">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-romantic text-5xl md:text-7xl text-foreground mb-4">
            Our Memories
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Moments frozen in time, forever in my heart
          </p>
          <p className="font-body text-muted-foreground/70 text-sm mt-2 italic">
            (Hover to see captions)
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {photos.map((photo, index) => (
            <PolaroidCard key={photo.id} photo={photo} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
