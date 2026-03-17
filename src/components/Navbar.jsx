import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Hospitality', path: '/hospitality' },
  { name: 'About', path: '/about' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ${scrolled ? 'top-3' : 'top-6'
          }`}
      >
        <div className={`relative rounded-full px-2 py-2 transition-all duration-500 shadow-2xl ${scrolled
            ? 'bg-[#FCF8F8]/95 backdrop-blur-3xl border border-[#FF5656]/10'
            : 'bg-[#FCF8F8]/10 backdrop-blur-2xl border border-white/20'
          }`}>
          {/* Subtle light refraction border */}
          <div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-white/20 via-white/5 to-white/20 -z-10" />

          <div className="flex items-center gap-1">
            {/* Logo */}
            <Link
              to="/"
              className="px-5 py-2.5 font-heading font-black text-2xl tracking-[-0.05em] text-[#FF5656] hover:scale-105 transition-all"
            >
              Élance
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1 bg-black/5 rounded-full p-1 border border-black/5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-5 py-2 text-[10px] font-black uppercase tracking-[0.4em] transition-all rounded-full ${location.pathname === link.path
                      ? 'bg-[#FF5656] text-[#FCF8F8] shadow-xl'
                      : 'text-[#2C2C2C]/50 hover:text-[#FF5656] hover:bg-[#FF5656]/5'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>


            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-full hover:bg-black/5 transition-colors ml-2"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] lg:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

            {/* Menu panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-full md:w-80 bg-white/95 backdrop-blur-3xl p-8 pt-32 shadow-2xl border-l border-black/5"
            >
              {/* Subtle texture blobs */}
              <div className="absolute top-40 right-10 w-60 h-60 bg-black/5 rounded-full blur-[100px]" />
              <div className="absolute bottom-20 left-10 w-40 h-40 bg-black/5 rounded-full blur-[80px]" />

              <div className="relative flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3.5 text-lg font-heading font-medium rounded-2xl transition-all duration-300 ${location.pathname === link.path
                        ? 'bg-black text-cream'
                        : 'text-black hover:bg-black/5'
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
