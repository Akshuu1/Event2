import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  const cursorRef = useRef(null);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Core cursor spring
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Aesthetic "Lagging" Ring - slightly slower for flow
  const ringX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 0.8 });
  const ringY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 0.8 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target.closest('.magnetic-target');
      if (target) {
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        
        target.style.transform = `translate(${distanceX * 0.35}px, ${distanceY * 0.35}px)`;
      } else {
        document.querySelectorAll('.magnetic-target').forEach(el => {
          el.style.transform = 'translate(0, 0)';
        });
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e) => {
      const target = e.target.closest('button, a, .magnetic-target, input, textarea') || 
                     (window.getComputedStyle(e.target).cursor === 'pointer' ? e.target : null);
      if (target) setIsHovered(true);
    };

    const handleMouseOut = () => setIsHovered(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[10000]">
        {/* Geometric Outer Ring */}
        <motion.div
          style={{
            x: ringX,
            y: ringY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          className="absolute w-12 h-12 border border-[#FF5656]/30 rounded-full flex items-center justify-center pointer-events-none"
          animate={{
            scale: isHovered ? 1.8 : 1,
            rotate: isHovered ? 90 : 0,
            borderRadius: isHovered ? "30%" : "50%",
            borderColor: isHovered ? "rgba(255, 86, 86, 0.6)" : "rgba(255, 86, 86, 0.3)"
          }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          {/* Geometric "Dots" orbiting */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#FF5656] rounded-full" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#FF5656] rounded-full opacity-30" />
          </motion.div>
        </motion.div>

        {/* Main Cursor Visuals */}
        <motion.div
          ref={cursorRef}
          style={{
            x: cursorX,
            y: cursorY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          className="absolute flex items-center justify-center pointer-events-none"
        >
          <motion.div
            animate={{
              scale: isClicked ? 0.8 : (isHovered ? 1.2 : 1),
              rotate: isHovered ? -15 : 0,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="relative w-10 h-10 flex items-center justify-center"
          >
            {/* Core Geometric Cursor */}
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-[#FF5656] shadow-[0_0_15px_rgba(255,86,86,0.5)]" />
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 w-3 h-3 rounded-full border border-[#FF5656]" 
              />
            </div>

            {/* Premium Glow Effect */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 0.15, scale: 2 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="absolute inset-0 rounded-full bg-[#FF5656] blur-xl -z-10"
                />
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        * { cursor: none !important; }
        .magnetic-target { transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1); }
        @media (max-width: 1024px) {
          * { cursor: auto !important; }
          .fixed.inset-0.pointer-events-none.z-\[10000\] { display: none; }
        }
      `}} />
    </>
  );
};

export default CustomCursor;
