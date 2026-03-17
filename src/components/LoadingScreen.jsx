import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const brandName = "ÉLANCE";

  useEffect(() => {
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => setIsLoaded(true), 800);
        setTimeout(() => onComplete && onComplete(), 1800);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  const containerVars = {
    exit: {
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.2
      }
    }
  };

  const letterVars = {
    initial: { y: 100, opacity: 0 },
    animate: i => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.1 + i * 0.05
      }
    })
  };

  return (
    <AnimatePresence mode="wait">
      {!isLoaded && (
        <motion.div
          key="loader"
          variants={containerVars}
          exit="exit"
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#FCF8F8] overflow-hidden"
        >
          {/* Background Decorative Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.03, scale: 1 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <h2 className="text-[40vw] font-black text-[#2C2C2C] leading-none select-none">
              {brandName}
            </h2>
          </motion.div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Progress Circular Accent */}
            <div className="relative w-48 h-48 flex items-center justify-center mb-12">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  fill="none"
                  stroke="#2C2C2C08"
                  strokeWidth="2"
                />
                <motion.circle
                  cx="96"
                  cy="96"
                  r="88"
                  fill="none"
                  stroke="#FF5656"
                  strokeWidth="2"
                  strokeDasharray="553"
                  initial={{ strokeDashoffset: 553 }}
                  animate={{ strokeDashoffset: 553 - (553 * progress) / 100 }}
                  transition={{ duration: 0.1 }}
                />
              </svg>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-heading text-4xl font-black text-[#2C2C2C] tabular-nums">
                  {progress}%
                </span>
              </div>
            </div>

            {/* Brand Reveal */}
            <div className="flex overflow-hidden pb-4">
              {brandName.split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVars}
                  initial="initial"
                  animate="animate"
                  className="font-heading text-6xl md:text-8xl font-black tracking-tighter text-[#2C2C2C] inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="font-body text-[10px] font-black uppercase tracking-[0.8em] text-[#2C2C2C]/30 mt-4"
            >
              Curating Excellence
            </motion.p>
          </div>

          {/* Minimalist Accents */}
          <div className="absolute bottom-12 left-12 flex flex-col gap-1">
            <div className="w-12 h-1px bg-[#2C2C2C]/10" />
            <span className="text-[8px] font-black uppercase tracking-widest text-[#2C2C2C]/20">Global Events</span>
          </div>

          {/* Transition overlay */}
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: progress / 100 }}
            className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF5656] origin-bottom transition-all duration-300"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
