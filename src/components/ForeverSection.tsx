import { motion } from "framer-motion";

interface ForeverSectionProps {
  onRestart: () => void;
}

const ForeverSection = ({ onRestart }: ForeverSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 sunset-gradient relative overflow-hidden">
      <motion.div
        className="text-center z-10 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Heart illustration */}
        <motion.div
          className="relative w-32 h-32 mx-auto mb-10"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-8xl">
            💖
          </div>
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/20"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        <motion.h2
          className="font-romantic text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          This is just the beginning
          <br />
          <span className="text-primary">of our forever</span>
        </motion.h2>

        <motion.p
          className="font-body text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          I can't wait to create more beautiful memories with you.
          <br />
          Thank you for being my everything.
        </motion.p>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <motion.button
            onClick={onRestart}
            className="px-8 py-3 bg-card text-foreground font-body font-medium rounded-full shadow-soft transition-all duration-300 hover:shadow-dreamy hover:scale-105 border border-border"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center gap-2">
              <span>💕</span>
              Experience Again
            </span>
          </motion.button>
        </motion.div>

        <motion.p
          className="font-romantic text-2xl text-primary mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Forever Yours ❤️
        </motion.p>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 text-2xl opacity-50"
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        ✨
      </motion.div>
      <motion.div
        className="absolute top-40 right-20 text-3xl opacity-40"
        animate={{ y: [0, 10, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        💫
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-20 text-2xl opacity-50"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        🌸
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-3xl opacity-40"
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        💕
      </motion.div>
    </section>
  );
};

export default ForeverSection;
