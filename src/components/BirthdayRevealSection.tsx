import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import confetti from "canvas-confetti";

const BirthdayRevealSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  const [countdown, setCountdown] = useState(5);
  const [revealed, setRevealed] = useState(false);
  const [startCountdown, setStartCountdown] = useState(false);

  useEffect(() => {
    if (isInView && !startCountdown) {
      const timeout = setTimeout(() => setStartCountdown(true), 500);
      return () => clearTimeout(timeout);
    }
  }, [isInView, startCountdown]);

  useEffect(() => {
    if (!startCountdown || revealed) return;

    if (countdown > 0) {
      const timeout = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timeout);
    } else {
      setRevealed(true);
      triggerConfetti();
    }
  }, [countdown, startCountdown, revealed]);

  const triggerConfetti = () => {
    const duration = 4000;
    const animationEnd = Date.now() + duration;
    const colors = ["#f9a8d4", "#c4b5fd", "#fcd34d", "#fb7185", "#f0abfc"];

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: colors,
      });

      // Hearts
      confetti({
        particleCount: 2,
        angle: randomInRange(0, 360),
        spread: 360,
        origin: { x: randomInRange(0.2, 0.8), y: randomInRange(0.2, 0.6) },
        colors: ["#fb7185", "#f9a8d4"],
        shapes: ["circle"],
        scalar: 1.5,
      });
    }, 100);
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 love-gradient relative overflow-hidden"
    >
      <div className="text-center z-10">
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="countdown"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="relative"
            >
              <motion.p
                className="font-body text-muted-foreground text-xl mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Something special is coming...
              </motion.p>

              {startCountdown && countdown > 0 && (
                <motion.div
                  key={countdown}
                  initial={{ scale: 2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="font-romantic text-9xl md:text-[12rem] text-primary"
                >
                  {countdown}
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            >
              <motion.div
                className="text-7xl md:text-8xl mb-8"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                🎂
              </motion.div>

              <motion.h2
                className="font-romantic text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-relaxed"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Happy Birthday,{" "}
                <span className="text-primary">Mazi Debu,Mazi Divu, Mazi Madam</span> ❤️
              </motion.h2>

              <motion.p
                className="font-body text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                May this year bring you endless joy, beautiful moments, and all the love your heart can hold
              </motion.p>

              {/* Floating celebration emojis */}
              <motion.div
                className="absolute top-1/4 left-1/4 text-4xl"
                animate={{ y: [0, -20, 0], rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                🎈
              </motion.div>
              <motion.div
                className="absolute top-1/3 right-1/4 text-3xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                🎉
              </motion.div>
              <motion.div
                className="absolute bottom-1/4 left-1/3 text-3xl"
                animate={{ y: [0, -10, 0], rotate: [0, -360] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              >
                💝
              </motion.div>
              <motion.div
                className="absolute bottom-1/3 right-1/3 text-4xl"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
              >
                ✨
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BirthdayRevealSection;
