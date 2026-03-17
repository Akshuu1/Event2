import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Star, Plane, ArrowUpRight } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

const offerings = [
  {
    title: 'VIP Concierge',
    description: 'Bespoke lifestyle management ensuring absolute comfort and discretion prior, during, and after your event.',
    icon: Star,
  },
  {
    title: 'Aviation & Transit',
    description: 'Chauffeured motorcades to chartered Gulfstreams. Logistics executed with military-grade precision and effortless style.',
    icon: Plane,
  },
  {
    title: 'Close Protection',
    description: 'Ex-special forces security personnel integrated seamlessly into the environment, guaranteeing safety without compromising atmosphere.',
    icon: ShieldCheck,
  }
];

export default function Hospitality() {
  const heroRef = useRef(null);

  // Parallax the hero background image slower than scroll
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <PageWrapper className="bg-[#070707] min-h-screen">

      {/* ═══════════════════════════════════════
          HERO — Deep Atmospheric Parallax
      ═══════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-white/10">

        {/* Parallax Background */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 origin-top">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=2000&q=85"
            alt="Luxury Hospitality"
            className="w-full h-[120%] object-cover grayscale-[0.6] opacity-40 mix-blend-screen"
          />
          {/* Extremely moody gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-transparent to-[#070707]" />
        </motion.div>

        {/* Cinematic Title & Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-lens-rose opacity-30 blur-[120px] pointer-events-none z-0" />

        <div className="relative z-10 w-full max-w-[1600px] mx-auto text-center mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[#B89961]" />
              <span className="text-[#B89961] text-[10px] font-bold tracking-[0.6em] uppercase">The Invisible Art</span>
              <div className="w-12 h-[1px] bg-[#B89961]" />
            </div>

            <h1 className="font-heading text-fluid-1 font-black tracking-[-0.04em] text-white uppercase text-balance leading-tight">
              Absolute <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/10 italic">Discretion</span>
            </h1>
          </motion.div>
        </div>

        {/* Scroll indicator overlaying the image */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
          <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent opacity-30" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES — Minimal Glass Cards
      ═══════════════════════════════════════ */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto relative z-10">

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">

            {/* Sticky Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-40">
                <h2 className="font-heading text-fluid-2 font-black text-white leading-tight mb-8">
                  The Art of <br /><span className="text-white/30 italic">Anticipation</span>
                </h2>
                <p className="text-white/50 text-fluid-p font-light leading-relaxed max-w-sm">
                  True luxury is invisible. It's the drink served precisely before you ask, the armored vehicle waiting at the exact right exit.
                </p>
              </div>
            </div>

            {/* List */}
            <div className="lg:w-2/3 flex flex-col gap-6 lg:gap-10 mt-12 lg:mt-0">
              {offerings.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ delay: i * 0.1, duration: 1 }}
                  className="group flex flex-col sm:flex-row gap-8 sm:gap-12 items-start p-8 sm:p-12 lg:p-14 rounded-2xl sm:rounded-[3rem] bg-white/[0.01] border border-white/5 hover:border-white/20 transition-all duration-700 backdrop-blur-md"
                >
                  <div className="w-16 h-16 shrink-0 rounded-full border border-white/10 flex items-center justify-center bg-[#070707] group-hover:bg-white group-hover:text-[#070707] transition-all duration-500">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-none uppercase">
                      {item.title}
                    </h3>
                    <p className="text-white/40 text-base sm:text-lg font-light leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA — Minimal Typography
      ═══════════════════════════════════════ */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 mb-8 block">
            Clientele Onboarding
          </span>
          <h2 className="font-heading text-fluid-2 font-black leading-[0.85] tracking-[-0.04em] text-white mb-12 uppercase text-balance max-w-4xl">
            Demand <span className="text-[#8B1A3F] italic">More</span> From The World.
          </h2>
          <a
            href="/contact"
            className="group flex items-center justify-center gap-4 px-12 py-6 rounded-full border border-[#B89961] text-[#B89961] font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#B89961] hover:text-[#070707] transition-all duration-500"
          >
            Contact Concierge
            <ArrowUpRight className="w-4 h-4 bg-transparent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </section>

    </PageWrapper>
  );
}
