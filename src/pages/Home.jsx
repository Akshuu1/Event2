import { motion } from 'framer-motion';
import { ArrowUpRight, Star, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import SectionHeading from '../components/SectionHeading';

const stats = [
  { label: 'Royal Weddings', value: '150+' },
  { label: 'Corporate Galas', value: '200+' },
  { label: 'Global Cities', value: '50+' },
];

const features = [
  {
    title: 'Personalized Planning',
    description: 'We handle every detail to make your event perfect.',
    icon: Sparkles,
    color: 'bg-sky/10',
    textColor: 'text-sky'
  },
  {
    title: 'Worldwide Planning',
    description: 'Smooth event management anywhere in the world.',
    icon: MapPin,
    color: 'bg-red/10',
    textColor: 'text-red'
  },
  {
    title: 'Guest Management',
    description: 'Top-quality services for your VIP guests.',
    icon: Star,
    color: 'bg-yellow/10',
    textColor: 'text-yellow'
  }
];

import Decorative3DScene from '../components/Decorative3DScene';
import TiltCard from '../components/TiltCard';

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        {/* 3D Immersive Scene */}
        <Decorative3DScene />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-black/10 text-[10px] font-black tracking-[0.3em] uppercase text-black/40 mb-8 glass">
              Luxury Events Since 2014
            </span>
            <h1 className="font-heading text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tight mb-10 translate-y-2">
              Exceptional <br/>
              <span className="text-gradient">Celebrations</span>
            </h1>
            <p className="text-xl md:text-3xl text-black/60 max-w-3xl mx-auto font-light leading-relaxed mb-12">
              India&apos;s leading experts in <span className="font-black text-black">luxury weddings</span> and <span className="font-black text-black">premium hospitality</span>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/portfolio"
                className="group relative px-10 py-5 bg-black text-white rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 font-bold flex items-center gap-2">
                  Explore Our Work <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-red translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
              <Link
                to="/contact"
                className="px-10 py-5 rounded-full border-2 border-black/5 font-bold hover:bg-black/5 transition-all text-black"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-black text-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center items-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-heading text-6xl lg:text-8xl font-black mb-2">{stat.value}</div>
                <div className="text-cream/40 text-xs font-bold uppercase tracking-[0.2em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Grid */}
      <section className="py-32 px-4 lg:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Our Work"
            title={<>Beautiful <span className="italic text-red">Exteriors</span> & Perfect <span className="text-gradient">Planning</span></>}
            description=""
            center={true}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20 relative">
            {/* Background Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aura-sky pointer-events-none" />
            
            {/* Main Feature */}
            <TiltCard className="relative z-10 aspect-[4/5] lg:aspect-auto lg:h-[800px] rounded-[3rem] overflow-hidden group shadow-brand">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1000&q=80"
                alt="Luxury Indian Wedding"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-12 flex flex-col justify-end">
                <span className="text-red font-black uppercase tracking-widest text-xs mb-4">Luxury Weddings</span>
                <h3 className="font-heading text-4xl lg:text-6xl font-black text-white leading-tight mb-6">Royal Indian <br/> Weddings</h3>
                <Link to="/portfolio" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                  <span className="font-bold uppercase tracking-widest text-xs">View Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </TiltCard>

            <div className="grid grid-cols-1 gap-8 relative z-10">
              {/* Secondary Grid Items */}
              <TiltCard className="relative h-[384px] rounded-[3rem] overflow-hidden group shadow-lg bg-sky">
                <img
                  src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=1000&q=80"
                  alt="Elite Corporate Gala"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/40 p-12 flex flex-col justify-end">
                   <h3 className="font-heading text-3xl font-black text-white mb-2">Business Events</h3>
                   <p className="text-white/70 text-sm font-light">Large-scale events for global brands.</p>
                </div>
              </TiltCard>

              <TiltCard className="relative h-[384px] rounded-[3rem] overflow-hidden group shadow-lg bg-lime">
                <img
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1000&q=80"
                  alt="Elite Hospitality"
                  className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/40 p-12 flex flex-col justify-end">
                   <h3 className="font-heading text-3xl font-black text-white mb-2">Private Parties</h3>
                   <p className="text-white/70 text-sm font-light">Small gatherings planned with great care.</p>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* DNA Section */}
      <section className="py-32 bg-cream relative overflow-hidden">
        {/* Background Aura */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-aura-red pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-aura-yellow pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeading
            label="Our Approach"
            title={<>How We <span className="text-gradient">Work</span></>}
            description=""
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {features.map((feature, i) => (
              <TiltCard key={feature.title}>
                <div className="p-12 rounded-[3.5rem] bg-cream border border-black/5 hover:shadow-brand transition-all duration-700 group cursor-default h-full">
                  <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    <feature.icon className={`w-6 h-6 ${feature.textColor}`} />
                  </div>
                  <h3 className="font-heading text-2xl font-black mb-4 group-hover:text-red transition-colors">{feature.title}</h3>
                  <p className="text-black/50 text-sm font-light leading-relaxed">{feature.description}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-40 bg-black text-cream rounded-[3rem] mx-4 lg:mx-10 mb-20 overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red/10 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <SectionHeading
            light
            label="Contact Us"
            title={<>Working <span className="text-sky italic">Worldwide</span></>}
            center={true}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-6 px-16 py-7 bg-white text-black rounded-full text-2xl font-black hover:bg-sky hover:scale-105 active:scale-95 transition-all duration-500 shadow-2xl group"
            >
              Get In Touch
              <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
