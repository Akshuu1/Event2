import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

const stats = [
  { label: 'Events in Mumbai & Delhi', value: '500', suffix: '+' },
  { label: 'Palace Weddings in Jaipur', value: '150', suffix: '+' },
  { label: 'Years of Experience', value: '10', suffix: '+' },
];

const works = [
  {
    title: 'Majestic Udaipur',
    client: 'Royal Wedding',
    image: 'https://images.unsplash.com/photo-1595928642581-f50f4f3453a5?w=1600&q=85',
  },
  {
    title: 'Mumbai High-Life',
    client: 'Business Gala',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=1600&q=85',
  },
  {
    title: 'Goa Sunset Party',
    client: 'Private Celebration',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600&q=85',
  }
];

function SplitText({ children, delay = 0, animate = false }) {
  return (
    <span className="inline-block overflow-hidden py-4 px-2 -my-4 -mx-2 h-fit">
      {children.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "110%", rotate: 5 }}
          whileInView={!animate ? { y: 0, rotate: 0 } : undefined}
          animate={animate ? { y: 0, rotate: 0 } : undefined}
          viewport={{ once: true, amount: 0, margin: "20% 0px" }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            delay: delay + i * 0.03
          }}
          className="inline-block origin-bottom"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll(); // Global scroll is more reliable with Lenis root
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const heroScale = useTransform(smoothProgress, [0, 0.15], [1, 0.9]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const heroY = useTransform(smoothProgress, [0, 0.15], [0, 150]);

  const textX1 = useTransform(smoothProgress, [0, 1], [0, -600]);
  const textX2 = useTransform(smoothProgress, [0, 1], [0, 600]);

  return (
    <PageWrapper className="relative bg-[#070707] min-h-screen w-full">

      {/* ═══════════════════════════════════════
          CINEMATIC HERO
      ═══════════════════════════════════════ */}
      <motion.section
        style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
        className="relative min-h-screen w-full flex flex-col justify-end px-4 sm:px-6 lg:px-12 pt-32 pb-12 lg:pb-24 origin-bottom overflow-hidden pointer-events-none"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-lens-rose opacity-40 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-lens-gold opacity-30 blur-[120px]" />
        </div>

        <div className="relative z-10 w-full flex flex-col items-center px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center gap-3 mb-6 sm:mb-8"
          >
            <div className="w-8 h-[1px] bg-[#B89961]/50" />
            <span className="text-[#B89961] text-[9px] sm:text-[11px] font-black tracking-[0.6em] uppercase">Defining The Absolute</span>
            <div className="w-8 h-[1px] bg-[#B89961]/50" />
          </motion.div>

          <h1 className="font-heading text-fluid-hero font-black tracking-[-0.05em] text-white text-center w-full uppercase mb-4 sm:mb-12 pointer-events-auto leading-tight">
            <div className="py-4 -my-4"><SplitText delay={0.4} animate={true}>Grand</SplitText></div>
            <div className="flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-4 md:gap-x-8 gap-y-2 mt-2 py-4 -my-4">
              <span className="italic font-light text-[#B89961]"><SplitText delay={0.6} animate={true}>Indian</SplitText></span>
              <span><SplitText delay={0.8} animate={true}>Weddings</SplitText></span>
            </div>
          </h1>

          <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 sm:gap-10 border-t border-white/10 pt-6 sm:pt-8 w-full max-w-[1600px] pointer-events-auto">
            <p className="text-white/50 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] max-w-sm text-center sm:text-left">
              India's Top Luxury Event Planners. We make your big moments unforgettable.
            </p>
            <div className="flex gap-2 text-white/30 text-[9px] font-black uppercase tracking-[0.4em]">
              <span>Scroll</span><span>See</span><span>Magic</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════
          KINETIC TYPOGRAPHY / MANIFESTO 
      ═══════════════════════════════════════ */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden z-10 bg-[#070707]">
        <div className="max-w-[1600px] mx-auto relative z-10">
          <motion.div style={{ x: textX1 }} className="whitespace-nowrap mb-4 sm:mb-8 pl-12 sm:pl-32">
            <h2 className="font-heading text-fluid-2 font-black text-transparent bg-clip-text bg-gradient-to-r from-white/10 to-white/40 uppercase">
              We create beautiful stories that
            </h2>
          </motion.div>
          <motion.div style={{ x: textX2 }} className="whitespace-nowrap pl-4 sm:pl-12">
            <h2 className="font-heading text-fluid-1 font-black text-white uppercase italic">
              Stay In Your Heart Forever
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 sm:mt-24 items-center">
            {/* Left Image - Parallax */}
            <motion.div
              style={{ y: useTransform(smoothProgress, [0.1, 0.4], [100, -100]) }}
              className="hidden lg:block relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10"
            >
              <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80" alt="Detail" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707] to-transparent opacity-60" />
            </motion.div>

            {/* Center Content */}
            <div className="lg:col-span-1">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-fluid-p text-white/50 font-light leading-relaxed mb-8"
              >
                Élance is India's most loved event agency. From royal weddings in Jaipur to high-profile corporate galas in Mumbai, we handle everything with care and perfection. Your dream is our responsibility.
              </motion.p>
              <div className="flex gap-4 items-center">
                <div className="w-12 h-[1px] bg-[#B89961]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#B89961]">Crafting Excellence</span>
              </div>
            </div>

            {/* Right Image - Parallax */}
            <motion.div
              style={{ y: useTransform(smoothProgress, [0.1, 0.4], [-50, 50]) }}
              className="relative aspect-[16/9] md:aspect-square rounded-2xl overflow-hidden border border-white/10"
            >
              <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80" alt="Wedding" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707] to-transparent opacity-60" />
            </motion.div>
          </div>
        </div>

        {/* Decorative elements to fill space */}
        <div className="absolute top-1/2 left-0 w-[30rem] h-[30rem] bg-lens-rose opacity-10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[20rem] h-[20rem] bg-lens-gold opacity-10 blur-[100px] pointer-events-none" />
      </section>

      {/* ═══════════════════════════════════════
          EXPERIENCE BENTO — Filling the Voids
      ═══════════════════════════════════════ */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-[#070707] relative z-10">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 auto-rows-[250px] md:auto-rows-[350px]">

            {/* Bento Card 1: Large Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-8 md:row-span-2 relative rounded-3xl overflow-hidden group border border-white/5"
            >
              <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=85" alt="Event" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-10 left-10">
                <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-2">Cinematic<br /><span className="italic text-[#B89961]">Scale</span></h3>
                <p className="text-white/60 text-sm font-medium uppercase tracking-[0.2em]">Large Format Production</p>
              </div>
            </motion.div>

            {/* Bento Card 2: Stat/Icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-4 md:row-span-1 bg-white/5 backdrop-blur-3xl rounded-3xl p-8 border border-white/10 flex flex-col justify-between group overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="w-32 h-32 rounded-full border border-white" />
              </div>
              <div className="text-[#B89961] text-xs font-black uppercase tracking-[0.4em]">Heritage</div>
              <div className="font-heading text-5xl font-black text-white">10+ <span className="text-xl font-light text-white/50 block mt-2 tracking-normal">Years of Legacy</span></div>
            </motion.div>

            {/* Bento Card 3: Small Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-4 md:row-span-1 relative rounded-3xl overflow-hidden border border-white/5"
            >
              <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1000&q=80" alt="Decor" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#070707]/30" />
            </motion.div>

            {/* Bento Card 4: Quote/Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-6 md:row-span-1 flex flex-col justify-center p-8 sm:p-12"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-light text-white/80 leading-snug italic">
                "We don't just plan events, we curate atmospheres that resonate with your soul and define your legacy."
              </p>
            </motion.div>

            {/* Bento Card 5: Grid Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-6 md:row-span-1 relative rounded-3xl overflow-hidden border border-white/5 group"
            >
              <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80" alt="Gala" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-lens-gold opacity-20 pointer-events-none" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FULL BLEED CINEMATIC MEDIA
      ═══════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 lg:py-48 w-full overflow-hidden z-10 bg-[#070707]">
        <motion.div
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-20%" }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1544161515-4ad65f738bd7?w=2000&q=85"
            alt="Indian Luxury Event"
            className="w-full h-full object-cover grayscale-[0.3]"
          />
          <div className="absolute inset-0 bg-[#070707]/60" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#070707] to-transparent" />
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#070707] to-transparent" />
        </motion.div>

        <div className="relative z-10 h-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 1 }}
                className="text-center sm:text-left border-l border-white/20 pl-6 sm:pl-8"
              >
                <div className="font-heading text-5xl sm:text-6xl md:text-8xl font-black text-white mb-2 sm:mb-4">
                  {stat.value}<span className="text-[#B89961]">{stat.suffix}</span>
                </div>
                <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.4em] text-white/50">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ARCHIVE / WORKS
      ═══════════════════════════════════════ */}
      <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 relative z-10 bg-[#070707]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 sm:mb-16 gap-6">
            <h2 className="font-heading text-fluid-2 font-black text-white">
              Selected <span className="italic text-gradient-gold">Events</span>
            </h2>
            <Link to="/portfolio" className="group flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors">See All Work</span>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#070707] transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          <div className="flex flex-col border-t border-white/10">
            {works.map((work, i) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative border-b border-white/10 py-8 sm:py-12 lg:py-16 hover:bg-white/[0.02] transition-colors cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between"
              >
                <div className="flex flex-col z-10 relative pointer-events-none">
                  <span className="text-[#B89961] text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.4em] mb-2 sm:mb-4 text-left">{work.client}</span>
                  <h3 className="font-heading text-3xl sm:text-5xl lg:text-7xl font-black text-white/80 group-hover:text-white transition-colors group-hover:translate-x-4 sm:group-hover:translate-x-8 duration-500">
                    {work.title}
                  </h3>
                </div>

                <div className="md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#070707] transition-all z-10 relative pointer-events-none hidden md:flex shrink-0">
                  <ArrowUpRight className="w-6 h-6" />
                </div>

                <div className="md:absolute top-1/2 left-3/4 md:-translate-x-1/2 md:-translate-y-1/2 w-full md:w-[400px] aspect-[4/3] overflow-hidden pointer-events-none opacity-100 md:opacity-0 md:scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 z-0 mt-6 md:mt-0 rounded-xl md:rounded-none">
                  <img src={work.image} alt={work.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
