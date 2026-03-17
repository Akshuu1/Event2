import { motion } from 'framer-motion';
import { Star, Quote, ArrowUpRight } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import SectionHeading from '../components/SectionHeading';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: 'Vikram Malhotra',
    role: 'CEO, Horizon Global',
    content: 'Élance made our annual summit a success. The planning was perfect and the service was top-quality.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    accent: 'sky'
  },
  {
    name: 'Ananya Kapoor',
    role: 'Managing Director, AK Esthetics',
    content: 'Our private party was beautiful and well-planned. Every detail was handled perfectly. They provide the best service.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    accent: 'red'
  },
  {
    name: 'Aditya Singhania',
    role: 'Founder, Singhania Group',
    content: 'Élance handled our family wedding with great care and privacy. They are experts at creating special moments.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    accent: 'lime'
  }
];

import Decorative3DScene from '../components/Decorative3DScene';

export default function Testimonials() {
  return (
    <PageWrapper>
      <section className="relative pt-40 pb-32 px-6 overflow-hidden min-h-[70vh] flex items-center">
        {/* 3D Background */}
        <Decorative3DScene colorA="#E62727" colorB="#8CE4FF" showReflector={false} />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <SectionHeading
            label="Klient Reviews"
            title={<>Trusted by <br/><span className="text-gradient">Clients Worldwide</span></>}
            description=""
            center={true}
          />

          <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-10 lg:p-12 rounded-[3rem] bg-white border border-black/5 shadow-lg group hover:-translate-y-3 hover:shadow-2xl transition-all duration-700"
              >
                <div className="flex items-center gap-1 text-red mb-6">
                   {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
                </div>
                <Quote className="w-10 h-10 text-black/5 mb-4 group-hover:text-red/30 transition-colors duration-700" />
                <p className="text-lg text-black/70 font-light leading-relaxed mb-10 italic">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-black/5">
                   <div className="w-14 h-14 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 ring-2 ring-black/5">
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                   </div>
                   <div>
                      <div className="font-heading text-base font-black">{t.name}</div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">{t.role}</div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-32 bg-black text-cream rounded-[3rem] mx-4 lg:mx-10 mb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-sky/10 via-transparent to-red/10 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
           <h2 className="font-heading text-5xl lg:text-8xl font-black mb-12 leading-[0.85]">Building Trust <br/> Through <span className="text-gradient">Results</span></h2>
           <Link
             to="/contact"
             className="inline-flex items-center gap-4 px-14 py-6 bg-white text-black rounded-full text-xl font-black hover:bg-sky hover:scale-105 active:scale-95 transition-all duration-500 group"
           >
             Get In Touch <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
