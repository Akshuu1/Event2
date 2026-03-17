import { motion } from 'framer-motion';
import { ShieldCheck, Star, Users, Coffee, HeartHandshake, Sparkles, ArrowUpRight } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import SectionHeading from '../components/SectionHeading';
import { Link } from 'react-router-dom';

const offerings = [
  {
    title: 'VIP Guest Management',
    description: 'Special support for celebrities and VIPs. We handle everything with care and privacy.',
    icon: ShieldCheck,
    color: 'bg-sky/10',
    textColor: 'text-sky'
  },
  {
    title: 'Travel & Transport',
    description: 'Private travel and transport for your guests, ensuring they arrive in style and comfort.',
    icon: Coffee,
    color: 'bg-red/10',
    textColor: 'text-red'
  },
  {
    title: 'Professional Security',
    description: 'Top-quality security for your events, so you can enjoy the day without worries.',
    icon: Star,
    color: 'bg-yellow/10',
    textColor: 'text-yellow'
  }
];

import Decorative3DScene from '../components/Decorative3DScene';
import TiltCard from '../components/TiltCard';

export default function Hospitality() {
  return (
    <PageWrapper>
      <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[70vh] flex items-center">
        {/* 3D Background */}
        <Decorative3DScene colorA="#E62727" colorB="#FFF799" showReflector={false} />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <SectionHeading
            label="Guest Services"
            title={<>The Secret to <span className="text-gradient italic">Seamless</span> <br/> Service</>}
            description=""
            center={true}
          />

          <TiltCard className="mt-24 relative group">
            <div className="absolute inset-0 bg-black/5 rounded-[3rem] group-hover:scale-105 transition-transform duration-700 blur-2xl opacity-50" />
            <div className="relative aspect-video rounded-[4rem] overflow-hidden shadow-2xl border border-black/5">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80" 
                alt="Luxury Hospitality" 
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-12 left-12">
                <span className="glass px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest text-black/70">Premium Service</span>
              </div>
            </div>
          </TiltCard>

          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerings.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 rounded-[3.5rem] bg-white border border-black/5 shadow-lg group"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon className={`w-6 h-6 ${item.textColor}`} />
                </div>
                <h3 className="font-heading text-2xl font-black mb-4">{item.title}</h3>
                <p className="text-black/50 text-sm font-light leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-40 bg-black text-cream rounded-[4rem] mx-4 lg:mx-10 mb-20 overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-heading text-6xl lg:text-8xl font-black mb-12 leading-[0.9]">Going Above and <span className="text-gradient italic">Beyond</span></h2>
          <p className="text-xl lg:text-2xl text-cream/40 font-light mb-16">We handle all the hard work so you can enjoy your special moment.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-4 px-12 py-5 bg-white text-black rounded-full font-black text-xl hover:bg-sky transition-all duration-500 group"
          >
            Get In Touch <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
