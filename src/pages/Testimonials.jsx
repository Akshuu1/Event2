import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Quote } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

const testimonials = [
  {
    name: 'Rahul & Simran',
    role: 'Wedding in Udaipur',
    content: 'Élance made our dream wedding come true. Every detail was perfect, and our guests were amazed by the royal decor and hospitality. Simply the best!',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=85',
  },
  {
    name: 'Amit Shah',
    role: 'CEO, Tech Mumbai',
    content: 'Our annual corporate gala was a huge success, thanks to the Élance team. They handled everything from stage to catering with top-notch professionalism.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85',
  },
  {
    name: 'Priya V.',
    role: 'Birthday Gala, Delhi',
    content: 'I wanted a unique celebration for my 50th birthday, and they delivered exactly that. The atmosphere was magical and the food was incredible.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=85',
  },
  {
    name: 'The Mehtas',
    role: 'Anniversary in Goa',
    content: 'A perfect sunset celebration. The team captured the vibe of Goa perfectly with luxury and elegance. Highly recommended for private parties.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=85',
  }
];

function TiltedCard({ t, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="relative w-[350px] sm:w-[500px] h-[500px] sm:h-[600px] rounded-[2rem] sm:rounded-[3rem] bg-[#0A0A0A]/80 glass-dark border border-white/10 p-8 sm:p-12 flex flex-col justify-between group overflow-hidden shrink-0"
    >
      <div
        style={{ transform: "translateZ(50px)" }}
        className="absolute top-0 right-0 w-40 h-40 bg-white/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-[#B89961]/20 transition-colors duration-700"
      />

      <div style={{ transform: "translateZ(40px)" }} className="relative z-10">
        <Quote className="w-10 sm:w-16 h-10 sm:h-16 text-[#B89961]/20 group-hover:text-[#B89961] transition-colors duration-500 mb-8 sm:mb-12" />
        <p className="font-heading text-xl sm:text-3xl font-bold text-white/90 leading-tight tracking-tight mb-8 sm:mb-12">
          "{t.content}"
        </p>
      </div>

      <div style={{ transform: "translateZ(30px)" }} className="flex items-center gap-6 relative z-10 pt-8 border-t border-white/5">
        <div className="w-14 sm:w-20 h-14 sm:h-20 rounded-full overflow-hidden border border-white/20 grayscale group-hover:grayscale-0 transition-all duration-700 shrink-0">
          <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="font-heading text-lg sm:text-2xl font-black text-white">{t.name}</div>
          <div className="text-[10px] sm:text-[12px] font-bold uppercase tracking-[0.3em] text-[#B89961]">{t.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <PageWrapper className="bg-[#070707] min-h-screen relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-lens-rose opacity-20 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-lens-gold opacity-10 blur-[150px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-48 pb-12 px-4 sm:px-6 lg:px-12 z-10">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[#B89961]/50" />
              <span className="text-[#B89961] text-[10px] sm:text-[12px] font-black tracking-[0.6em] uppercase">The Word On The Street</span>
              <div className="w-12 h-[1px] bg-[#B89961]/50" />
            </div>

            <h1 className="font-heading text-fluid-hero font-black leading-[0.8] tracking-[-0.05em] text-white uppercase mb-12">
              <span className="block italic text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Client</span>
              <span className="block">Love Stories.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <section ref={containerRef} className="relative h-[150vh] mt-12 mb-20 overflow-visible">
        <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-8 sm:gap-16 px-12"
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <TiltedCard key={`${t.name}-${i}`} t={t} index={i} />
            ))}
          </motion.div>

          <div className="absolute bottom-24 flex items-center gap-4 text-white/30 text-[10px] font-bold uppercase tracking-[0.5em] animate-pulse">
            <div className="w-12 h-1px bg-white/20" />
            Scroll to Navigate
            <div className="w-12 h-1px bg-white/20" />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 sm:py-48 px-4 sm:px-6 lg:px-12 relative z-10 border-t border-white/5 bg-[#070707]">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="font-heading text-4xl sm:text-6xl lg:text-8xl font-black text-white uppercase mb-12 sm:mb-20">
            Be Our Next <span className="italic text-[#B89961]">Success</span> <br className="hidden sm:block" /> Story.
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-6 group"
          >
            <span className="text-xl sm:text-3xl font-black uppercase text-white group-hover:text-[#B89961] transition-colors">Start Planning Now</span>
            <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#070707] transition-all">
              <Quote className="rotate-180 w-6 h-6" />
            </div>
          </a>
        </div>
      </section>
    </PageWrapper>
  );
}
