import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const letterContent = `My Dearest Love,

Every day I spend with you feels like the greatest gift life could ever give me. Your smile brightens even my darkest days, and your laughter is the sweetest melody I've ever heard.

I love the way your eyes light up when you talk about things you're passionate about. I love how you make ordinary moments feel magical. I love how being with you feels like coming home.

Thank you for choosing me, for loving me, for being you. You've made my life infinitely more beautiful just by being in it.

On this special day, I want you to know that my love for you grows stronger with every passing moment. You are my today, my tomorrow, and my forever.

With all my heart,
Your Love ❤️`;

const LoveLetterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayedText, setDisplayedText] = useState("");
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if (isInView && !startTyping) {
      const timeout = setTimeout(() => setStartTyping(true), 500);
      return () => clearTimeout(timeout);
    }
  }, [isInView, startTyping]);

  useEffect(() => {
    if (!startTyping) return;

    if (displayedText.length < letterContent.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(letterContent.slice(0, displayedText.length + 1));
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, startTyping]);

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-romantic text-5xl md:text-7xl text-foreground mb-4">
            A Letter For You
          </h2>
          <span className="text-4xl">💌</span>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Paper effect */}
          <div className="bg-cream rounded-lg shadow-dreamy p-8 md:p-12 relative overflow-hidden">
            {/* Subtle paper lines */}
            <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="border-b border-primary/20"
                  style={{ height: "2rem" }}
                />
              ))}
            </div>

            {/* Letter content */}
            <div className="relative z-10">
              <p className="font-body text-foreground leading-[2rem] whitespace-pre-wrap text-base md:text-lg">
                {displayedText}
                {displayedText.length < letterContent.length && startTyping && (
                  <motion.span
                    className="inline-block w-0.5 h-5 bg-primary ml-0.5 align-middle"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                )}
              </p>
            </div>

            {/* Decorative corner fold */}
            <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-muted to-transparent" />
          </div>

          {/* Decorative hearts */}
          <motion.div
            className="absolute -top-4 -right-4 text-3xl"
            animate={{ y: [0, -5, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            💗
          </motion.div>
          <motion.div
            className="absolute -bottom-4 -left-4 text-2xl"
            animate={{ y: [0, 5, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          >
            💕
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
