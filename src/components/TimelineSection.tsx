import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineItem {
  title: string;
  description: string;
  emoji: string;
  image: string;
}

const timelineItems: TimelineItem[] = [
  {
    title: "The Day We Met",
    description: "That magical moment when our eyes first met. I knew right then that something beautiful was about to begin. My heart skipped a beat, and it hasn't stopped since.",
    emoji: "✨",
    image: "/Media (11).jpg",
  },
  {
    title: "Our First Smile Together",
    description: "Your smile lit up the entire room. In that instant, I found myself falling for the warmth and joy you bring into my life. A smile I never want to live without.",
    emoji: "😊",
    image: "/Snapchat-1130504363.jpg",
  },
  {
    title: "Little Moments I Love",
    description: "The late-night conversations, the random laughs, the way you say my name. Every little moment with you becomes a treasure I hold close to my heart.",
    emoji: "💫",
    image: "/image2.jpg",
  },
  {
    title: "Today & Forever",
    description: "Here we are, celebrating another year of you. Every day with you is a gift, and I promise to cherish you today, tomorrow, and always.",
    emoji: "❤️",
    image: "/image3.jpg",
  },
];

const TimelineItem = ({ item, index }: { item: TimelineItem; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-6 md:gap-12`}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Content */}
      <div className={`flex-1 w-full ${isEven ? "md:text-right" : "md:text-left"}`}>
        <motion.div
          className="bg-card p-6 md:p-8 rounded-2xl shadow-soft h-full flex flex-col justify-center"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-4xl mb-4 block">{item.emoji}</span>
          <h3 className="font-romantic text-3xl md:text-4xl text-foreground mb-4">
            {item.title}
          </h3>
          <p className="font-body text-muted-foreground leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      </div>

      {/* Timeline dot */}
      <div className="hidden md:flex flex-col items-center justify-center">
        <motion.div
          className="w-5 h-5 rounded-full bg-primary shadow-lg z-10"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
      </div>

      {/* Image */}
      <div className="flex-1 w-full">
        <motion.div
          className="relative overflow-hidden rounded-2xl shadow-soft aspect-[4/3]"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const TimelineSection = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-romantic text-5xl md:text-7xl text-foreground mb-4">
            Our Story
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            A journey of love, laughter, and beautiful moments
          </p>
        </motion.div>

        <div className="space-y-12 md:space-y-24 relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />

          {timelineItems.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
