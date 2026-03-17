import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

const milestones = [
  { year: '2014', title: 'Started in Mumbai', desc: 'Our journey began with a small team and a big dream to redefine luxury events.' },
  { year: '2017', title: 'Jaipur Palace Wedding', desc: 'Executed our first grand royal wedding at a heritage palace in Rajasthan.' },
  { year: '2020', title: 'Bangalore Hub', desc: 'Opened our corporate events division in India’s tech capital, Bangalore.' },
  { year: '2023', title: 'Top Agency Award', desc: 'Recognized as the best luxury event planning agency in India.' },
  { year: '2026', title: 'Future of Events', desc: 'Launching eco-friendly luxury events across major Indian cities.' },
];

export default function About() {
  const horizontalRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: horizontalRef });
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <PageWrapper className="bg-[#070707] min-h-screen relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-lens-rose opacity-20 blur-[150px]" />
      </div>

      <section className="relative pt-48 pb-24 px-4 sm:px-6 lg:px-12 border-b border-white/10 z-10">
        <div className="max-w-[1600px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-[1px] bg-[#8B1A3F]" />
              <span className="text-[#8B1A3F] text-[10px] font-black tracking-[0.6em] uppercase">10 Years in India</span>
            </div>

            <h1 className="font-heading text-fluid-hero font-black tracking-[-0.04em] text-white uppercase overflow-hidden py-2 -my-2 h-fit">
              <motion.span
                initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20"
              >
                Our Story
              </motion.span>
              <motion.span
                initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="block italic text-[#B89961]"
              >
                Of Success.
              </motion.span>
            </h1>

            <p className="mt-16 sm:mt-24 text-white/50 text-fluid-p font-light leading-relaxed max-w-xl">
              We started Élance to create moments that last a lifetime. Over the last decade, we have built a reputation for perfection in India's most luxurious weddings and corporate events.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 sm:py-32 lg:py-48 px-4 sm:px-6 lg:px-12 z-10 relative">
        <div className="max-w-[1600px] mx-auto">
          <div className="relative rounded-2xl lg:rounded-[4rem] overflow-hidden bg-[#0A0A0A] min-h-[60vh] sm:min-h-[80vh] flex flex-col justify-end border border-white/5 shadow-2xl">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&q=85"
                alt="Founder"
                className="w-full h-full object-cover opacity-40 grayscale-[0.8]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/60 to-transparent" />
            </div>

            <div className="relative z-10 p-8 sm:p-12 lg:p-24 w-full lg:w-3/4">
              <h2 className="font-heading text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-[0.9] mb-12 uppercase text-balance">
                We believe in making every dream <span className="italic text-[#B89961]">possible</span>.
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-white/30" />
                <span className="text-[#B89961] text-[9px] font-bold uppercase tracking-[0.4em]">Our Mission</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={horizontalRef} className="relative h-[200vh] hidden lg:block overflow-visible mt-20">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden border-y border-white/10 bg-[#070707]">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1px] h-[50vh] bg-gradient-to-b from-[#8B1A3F]/50 to-transparent pointer-events-none" />
          <div className="pl-12 w-full flex items-center justify-between z-20 mb-12 pr-12">
            <h2 className="font-heading text-6xl xl:text-8xl font-black text-white/10 uppercase tracking-tighter">Timeline</h2>
            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">Scroll to Explore</div>
          </div>
          <motion.div style={{ x: xTransform }} className="flex gap-16 px-12 pb-24 w-fit">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className="w-[450px] shrink-0 p-12 sm:p-16 border border-white/10 bg-[#0A0A0A] rounded-[3rem] hover:border-[#B89961]/30 transition-colors duration-500 group relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 text-[150px] font-heading font-black text-white/[0.02] group-hover:text-white/[0.05] transition-colors duration-500 leading-none pointer-events-none">
                  {m.year}
                </div>
                <h3 className="font-heading text-3xl sm:text-4xl font-black text-white mb-6 uppercase relative z-10">{m.title}</h3>
                <p className="text-white/40 text-lg font-light leading-relaxed max-w-sm relative z-10">{m.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:hidden relative z-10">
        <h2 className="font-heading text-fluid-2 font-black text-white/30 uppercase tracking-tighter mb-12">Timeline</h2>
        <div className="flex flex-col gap-8 border-l border-white/10 pl-6 lg:pl-0">
          {milestones.map((m) => (
            <div key={m.year} className="relative">
              <div className="absolute -left-8 top-2 w-4 h-4 rounded-full border-2 border-[#070707] bg-[#B89961]" />
              <div className="text-[#B89961] text-[10px] font-bold uppercase tracking-[0.4em] mb-2">{m.year}</div>
              <h3 className="font-heading text-3xl font-black text-white mb-4 uppercase">{m.title}</h3>
              <p className="text-white/50 text-base font-light">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
