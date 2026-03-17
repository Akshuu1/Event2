import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

const projects = [
  {
    title: 'Royal Palace Wedding',
    client: 'The Singh Family',
    location: 'Udaipur, Rajasthan',
    image: 'https://images.unsplash.com/photo-1595928642581-f50f4f3453a5?w=1600&q=85',
  },
  {
    title: 'Corporate Tech Summit',
    client: 'Global Tech Hub',
    location: 'Bangalore, Karnataka',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=85',
  },
  {
    title: 'Luxury Beach Wedding',
    client: 'Private Celebration',
    location: 'North Goa',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=85',
  },
  {
    title: 'Business Excellence Gala',
    client: 'Industrial Group',
    location: 'Mumbai, Maharashtra',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=1600&q=85',
  }
];

export default function Portfolio() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <PageWrapper className="bg-[#070707]">
      <div ref={containerRef} className="relative w-full min-h-screen">

        {/* Massive Fixed Background Text */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          <motion.h1
            style={{ y: titleY }}
            className="font-heading text-[20vw] font-black text-white/[0.03] uppercase tracking-tighter mix-blend-screen"
          >
            OUR WORK
          </motion.h1>
        </div>

        {/* Hero Section */}
        <section className="relative pt-40 lg:pt-56 pb-20 px-4 sm:px-6 lg:px-12 overflow-hidden z-10">
          <div className="max-w-[1600px] mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-4 sm:mb-8">
                <div className="w-16 h-[1px] bg-[#B89961]" />
                <span className="text-[#B89961] text-[9px] sm:text-[11px] font-black tracking-[0.5em] uppercase">Archive</span>
              </div>

              <h1 className="font-heading text-fluid-2 font-black leading-[0.85] tracking-[-0.04em] text-white uppercase text-balance">
                Beautiful <span className="italic text-white/40">Moments</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* List Grid View - Full Bleed */}
        <section className="relative z-10 pb-40 px-4 sm:px-6 lg:px-12">
          <div className="max-w-[1600px] mx-auto border-t border-white/10 pt-10">
            {projects.map((project, i) => (
              <ProjectRow key={project.title} project={project} index={i} />
            ))}
          </div>
        </section>

      </div>
    </PageWrapper>
  );
}

function ProjectRow({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="group relative border-b border-white/10 py-10 sm:py-12 lg:py-20 hover:bg-white/[0.02] transition-colors flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-10"
    >
      <div className="flex flex-col z-10 lg:w-[40%] text-left">
        <span className="text-[#B89961] text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.4em] mb-4">
          {index < 9 ? `0${index + 1}` : index + 1} &mdash; {project.client}
        </span>
        <h3 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-white/50 group-hover:text-white transition-colors duration-500 uppercase leading-[0.9]">
          {project.title}
        </h3>
        <p className="mt-4 text-white/40 text-sm font-medium uppercase tracking-widest hidden sm:block">
          {project.location}
        </p>
      </div>

      <div className="w-full lg:w-[50%] h-[30vh] sm:h-[40vh] lg:h-[55vh] overflow-hidden rounded-xl sm:rounded-none z-10 lg:opacity-50 lg:grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover scale-110 lg:scale-[1.2] group-hover:scale-100 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
        />
      </div>

      <div className="w-16 h-16 rounded-full border border-white/20 flex flex-col items-center justify-center group-hover:bg-white group-hover:text-[#070707] transition-all z-10 hidden lg:flex shrink-0">
        <ArrowUpRight className="w-6 h-6" />
      </div>
    </motion.div>
  );
}
