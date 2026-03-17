import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

const services = [
  {
    id: '01',
    title: 'Grand Weddings',
    tagline: 'Royal Celebrations',
    description: 'We specialize in royal weddings across Jaipur, Udaipur, and beyond. From traditional rituals to modern luxury, we make your big day truly magical.',
    image: 'https://images.unsplash.com/photo-1595928642581-f50f4f3453a5?w=1600&q=85',
  },
  {
    id: '02',
    title: 'Corporate Events',
    tagline: 'Business & Beyond',
    description: 'Top corporate summits and galas in Mumbai and Delhi. We handle everything from venue to technology, ensuring your brand looks the best.',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=1600&q=85',
  },
  {
    id: '03',
    title: 'Luxury Catering',
    tagline: 'A Taste of Royalty',
    description: 'World-class chefs serving authentic Indian and global cuisines. From royal thalis to modern fusion, we bring the best tastes to your table.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=1600&q=85',
  }
];

export default function Services() {
  const containerRef = useRef(null);

  return (
    <PageWrapper className="bg-[#070707] min-h-screen">

      {/* ═══════════════════════════════════════
          HERO — Localized
      ═══════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-end pb-16 px-4 sm:px-6 lg:px-12 pt-32 lg:pt-40">
        <div className="absolute inset-0 bg-lens-rose opacity-20 pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="w-8 sm:w-16 h-[1px] bg-white/30" />
              <span className="text-white/50 text-[9px] sm:text-[11px] font-black tracking-[0.5em] uppercase">What We Do</span>
            </div>

            <h1 className="font-heading text-fluid-1 font-black tracking-[-0.04em] text-white overflow-hidden uppercase py-2 -my-2">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="block"
              >
                Our Expert
              </motion.span>
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="block italic text-[#B89961]"
              >
                Services
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-10 sm:mt-12 max-w-xl"
            >
              <p className="text-white/50 text-fluid-p font-light leading-relaxed">
                From grand weddings to top business events, we bring your vision to life with style and perfection. We handle the hard work, you enjoy the moment.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STACKING CARDS
      ═══════════════════════════════════════ */}
      <section ref={containerRef} className="relative pb-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto space-y-12 sm:space-y-16 lg:space-y-24">
          {services.map((service, index) => (
            <ServiceStackCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

    </PageWrapper>
  );
}

function ServiceStackCard({ service, index }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div
      ref={cardRef}
      className="sticky top-24 lg:top-32 w-full h-auto min-h-[70vh] flex flex-col lg:flex-row bg-[#0A0A0A] rounded-2xl lg:rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl"
      style={{ zIndex: index }}
    >
      <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-24 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-8 sm:mb-12">
          <span className="text-[#B89961] font-heading text-4xl sm:text-6xl font-black">{service.id}</span>
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 hidden sm:inline-block">
            {service.tagline}
          </span>
        </div>

        <h2 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[0.9] tracking-[-0.03em] mb-6 sm:mb-8 uppercase">
          {service.title}
        </h2>

        <p className="text-base sm:text-xl text-white/50 font-light leading-relaxed mb-10 sm:mb-12 max-w-lg">
          {service.description}
        </p>

        <a href="#contact" className="group inline-flex items-center gap-4">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-all">
            Get In Touch
          </span>
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#0A0A0A] transition-all">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </a>
      </div>

      <div className="w-full lg:w-1/2 h-[40vh] lg:h-auto overflow-hidden relative">
        <motion.img
          style={{ y: imageY, scale: 1.15 }}
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover grayscale-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#0A0A0A] lg:via-transparent lg:to-transparent opacity-80" />
      </div>
    </div>
  );
}
