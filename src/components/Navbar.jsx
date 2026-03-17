import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Our Work', path: '/portfolio' },
  { name: 'Luxury Stays', path: '/hospitality' },
  { name: 'Our Story', path: '/about' },
  { name: 'Reviews', path: '/testimonials' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 inset-x-0 z-50 px-6 py-6 transition-all duration-300 pointer-events-none"
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <Link to="/" className="pointer-events-auto relative z-50 group flex items-center gap-3">
            <span className="font-heading text-xl md:text-2xl font-black tracking-tighter text-white uppercase group-hover:text-[#B89961] transition-colors duration-300">
              ÉLANCE
            </span>
          </Link>

          <div className="hidden lg:flex items-center pointer-events-auto">
            <div className="glass-dark px-2 py-2 rounded-full flex items-center gap-2 border border-white/10 shadow-2xl">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="relative px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-300 group"
                  >
                    <span className={cn("relative z-10 transition-colors duration-300", isActive ? "text-[#070707]" : "text-white/60 group-hover:text-white")}>
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:flex items-center pointer-events-auto">
            <Link
              to="/contact"
              className="group relative px-8 py-3 bg-white text-[#070707] rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 font-bold uppercase tracking-[0.1em] text-xs">Contact</span>
              <div className="absolute inset-0 bg-[#B89961] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden pointer-events-auto relative z-50 w-12 h-12 rounded-full glass-dark flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0, backgroundColor: isOpen ? '#B89961' : '#FFFFFF' }}
              className="w-5 h-0.5"
            />
            <motion.span
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="w-5 h-0.5 bg-white"
            />
            <motion.span
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0, backgroundColor: isOpen ? '#B89961' : '#FFFFFF' }}
              className="w-5 h-0.5"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#070707] flex flex-col justify-center px-10"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[500px] max-h-[500px] bg-lens-rose opacity-20 pointer-events-none" />

            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              className="relative z-10 flex flex-col gap-6"
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 mb-4 border-b border-white/10 pb-4">Explore</div>
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 }
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.path}
                    className="font-heading text-4xl sm:text-5xl font-black tracking-[-0.02em] text-white hover:text-[#B89961] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 20 }
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 pt-8 border-t border-white/10"
              >
                <Link
                  to="/contact"
                  className="font-heading text-2xl font-black text-[#B89961] flex items-center gap-4 group"
                >
                  Contact Us
                  <div className="w-8 h-8 rounded-full border border-[#B89961] flex items-center justify-center group-hover:bg-[#B89961] group-hover:text-[#070707] transition-all">
                    →
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
