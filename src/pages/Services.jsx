import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Building2, UtensilsCrossed, ShieldCheck, MapPin, Star, Globe } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import SectionHeading from '../components/SectionHeading';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'weddings',
    title: 'Luxury Weddings',
    label: 'Beautiful Celebrations',
    description: 'From royal palaces to beach luxury, we create weddings that you will never forget.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80',
    color: 'bg-[#FF5656]/10',
    textColor: 'text-[#FF5656]'
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    label: 'Professional Planning',
    description: 'Smooth planning for business leaders. We handle all the details so you can focus on your brand.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=1200&q=80',
    color: 'bg-[#FEB05D]/10',
    textColor: 'text-[#FEB05D]'
  },
  {
    id: 'culinary',
    title: 'Exquisite Catering',
    label: 'Delicious Menus',
    description: 'Top-quality meals created by master chefs, mixing traditional Indian flavors with international styles.',
    icon: UtensilsCrossed,
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&q=80',
    color: 'bg-[#C7EABB]/10',
    textColor: 'text-[#C7EABB]'
  }
];

import Decorative3DScene from '../components/Decorative3DScene';
import TiltCard from '../components/TiltCard';

export default function Services() {
  return (
    <PageWrapper>
      <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[70vh] flex items-center">
        {/* 3D Background */}
        <Decorative3DScene colorA="#FF5656" colorB="#FEB05D" showReflector={false} />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <SectionHeading
            label="What We Do"
            title={<>Expert <span className="text-gradient">Planning</span> <br /> for Premium Events</>}
            description=""
            center={true}
          />

          <div className="mt-20 space-y-32">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
              >
                <TiltCard className="lg:w-1/2 relative group">
                  <div className={`absolute -inset-4 ${service.color} rounded-[4rem] group-hover:scale-105 transition-transform duration-700 blur-2xl opacity-50`} />
                  <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border border-black/5">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                  </div>
                </TiltCard>

                <div className="lg:w-1/2 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl ${service.color} flex items-center justify-center`}>
                      <service.icon className={`w-5 h-5 ${service.textColor}`} />
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${service.textColor}`}>
                      {service.label}
                    </span>
                  </div>
                  <h2 className="font-heading text-5xl lg:text-7xl font-black leading-none">{service.title}</h2>
                  <p className="text-xl text-black/60 font-light leading-relaxed max-w-lg">
                    {service.description}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 font-bold group"
                  >
                    <span className="border-b-2 border-[#2C2C2C]/10 pb-1 group-hover:border-[#FF5656] transition-all duration-300">Get In Touch</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:text-[#FF5656] transition-colors" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy - Stats */}
      <section className="py-32 bg-black text-cream rounded-[4rem] mx-4 lg:mx-10 mb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeading
            light
            label="Why Élance"
            title={<>Why <span className="text-[#FF5656] italic">Choose</span> Us</>}
            center={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-20">
            <div>
              <div className="font-heading text-7xl font-black mb-4">100%</div>
              <p className="text-cream/50 uppercase tracking-widest text-xs font-bold">Your Privacy</p>
            </div>
            <div>
              <div className="font-heading text-7xl font-black mb-4 text-[#FF5656]">24/7</div>
              <p className="text-cream/50 uppercase tracking-widest text-xs font-bold">Help & Support</p>
            </div>
            <div>
              <div className="font-heading text-7xl font-black mb-4 animate-pulse">∞</div>
              <p className="text-cream/50 uppercase tracking-widest text-xs font-bold">Creative Designs</p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
