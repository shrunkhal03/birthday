import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LandingSection from "@/components/LandingSection";
import TimelineSection from "@/components/TimelineSection";
import GallerySection from "@/components/GallerySection";
import LoveLetterSection from "@/components/LoveLetterSection";
import BirthdayRevealSection from "@/components/BirthdayRevealSection";
import ForeverSection from "@/components/ForeverSection";

const Index = () => {
  const [started, setStarted] = useState(false);
  const mainContentRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    setStarted(true);
    setTimeout(() => {
      mainContentRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleRestart = () => {
    setStarted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative">
      <AnimatePresence mode="wait">
        {!started && (
          <motion.div
            key="landing"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LandingSection onStart={handleStart} />
          </motion.div>
        )}
      </AnimatePresence>

      {started && (
        <motion.div
          ref={mainContentRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <TimelineSection />
          <GallerySection />
          <LoveLetterSection />
          <BirthdayRevealSection />
          <ForeverSection onRestart={handleRestart} />
        </motion.div>
      )}
    </main>
  );
};

export default Index;
