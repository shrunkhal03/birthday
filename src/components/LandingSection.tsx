import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";
import TypewriterText from "./TypewriterText";

interface LandingSectionProps {
  onStart: () => void;
}

const LandingSection = ({ onStart }: LandingSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden romantic-gradient">
      <FloatingHearts />
      
      <motion.div
        className="text-center z-10 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <span className="text-6xl">💕</span>
        </motion.div>
        
        <h1 className="font-romantic text-5xl md:text-7xl lg:text-8xl mb-8 leading-relaxed max-w-4xl mx-auto text-rose-800">
          <TypewriterText
            text="Hey love… I made something special just for you."
            delay={500}
            speed={45}
          />
        </h1>
        
        <motion.p
          className="font-body text-muted-foreground text-lg md:text-xl mb-12 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1 }}
        >
          A little journey through our beautiful moments together
        </motion.p>
        
        <motion.button
          onClick={onStart}
          className="group relative px-10 py-4 bg-primary text-primary-foreground font-body font-medium rounded-full shadow-dreamy overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 6, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 flex items-center gap-2">
            Begin Our Story
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
          <motion.div
            className="absolute inset-0 bg-rose-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </motion.button>
      </motion.div>
      
      {/* Decorative sparkles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-sparkle" style={{ animationDelay: "0s" }} />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent/40 rounded-full animate-sparkle" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-secondary/50 rounded-full animate-sparkle" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-primary/30 rounded-full animate-sparkle" style={{ animationDelay: "1.5s" }} />
    </section>
  );
};

export default LandingSection;
