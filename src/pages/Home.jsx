import { useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Star, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import SectionHeading from '../components/SectionHeading';

function MagneticButton({ children, className = "" }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SplitText({ children, className = "" }) {
  return (
    <span className={className}>
      {children.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.2em] pb-[0.1em]">
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
              delay: i * 0.05
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

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
    color: 'bg-mint/20',
    textColor: 'text-mint'
  },
  {
    title: 'Worldwide Planning',
    description: 'Smooth event management anywhere in the world.',
    icon: MapPin,
    color: 'bg-salmon/20',
    textColor: 'text-salmon'
  },
  {
    title: 'Guest Management',
    description: 'Top-quality services for your VIP guests.',
    icon: Star,
    color: 'bg-orange/20',
    textColor: 'text-orange'
  }
];

import TiltCard from '../components/TiltCard';

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero Section - Editorial Redesign */}
      <section className="relative min-h-[110vh] flex items-center pt-32 pb-40 px-6 overflow-hidden bg-[#FCF8F8]">
        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:w-3/5 z-20 text-left"
            >
              <span className="inline-block px-6 py-2 rounded-full border border-[#FF5656]/20 text-[10px] font-black tracking-[0.4em] uppercase text-[#FF5656] mb-10 glass-dark !bg-white/50 backdrop-blur-xl">
                Global Event Excellence
              </span>
              <h1 className="font-heading text-5xl md:text-9xl lg:text-[11rem] font-black leading-[0.85] tracking-[-0.04em] mb-12 text-[#2C2C2C]">
                <SplitText>Crafting</SplitText> <br />
                <SplitText className="text-[#FF5656]">Perfect</SplitText> <br />
                <SplitText>Moments.</SplitText>
              </h1>
              
              <div className="flex flex-wrap gap-6 md:gap-8 items-center mt-12">
                <MagneticButton className="w-full md:w-auto">
                  <Link
                    to="/portfolio"
                    className="group relative w-full md:w-auto px-12 py-6 bg-[#2C2C2C] text-[#FCF8F8] rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                  >
                    <span className="relative z-10 font-black uppercase tracking-widest text-xs flex items-center gap-3">
                      The Portfolio <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-[#FF5656] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.76, 0, 0.24, 1]" />
                  </Link>
                </MagneticButton>
                
                <p className="text-base md:text-xl text-[#2C2C2C]/50 max-w-sm font-light leading-relaxed">
                  Bespoke weddings and corporate galas designed for the <span className="text-[#2C2C2C] font-bold">top 1% globally</span>.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="lg:w-2/5 relative lg:-ml-20"
            >
              <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden floating-image ring-1 ring-black/5">
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80" 
                  className="w-full h-full object-cover scale-110"
                  alt="Luxury Event"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/60 via-transparent to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#FF5656] rounded-full flex items-center justify-center p-8 text-center glass border-none shadow-2xl"
              >
                <span className="text-white font-heading text-sm font-black uppercase leading-tight tracking-wider">Award Winning <br /> Design</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-[#2C2C2C] text-[#FCF8F8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center items-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-heading text-6xl lg:text-9xl font-black mb-4 text-[#FF5656]">{stat.value}</div>
                <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.6em]">{stat.label}</div>
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
            title={<>Beautiful <span className="italic text-[#FEB05D]">Exteriors</span> & Perfect <span className="text-[#C7EABB]">Planning</span></>}
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
                <span className="text-[#FEB05D] font-black uppercase tracking-[0.4em] text-[10px] mb-4">Luxury Weddings</span>
                <h3 className="font-heading text-4xl lg:text-6xl font-black text-white leading-[0.85] mb-6 tracking-[-0.04em]">Royal Indian <br /> Weddings</h3>
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
      <section className="py-32 bg-[#FCF8F8] relative overflow-hidden">
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
                <div className="p-12 rounded-[3.5rem] bg-white border border-[#2C2C2C]/5 hover:border-[#FF5656]/20 hover:shadow-2xl transition-all duration-700 group cursor-default h-full">
                  <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    <feature.icon className={`w-6 h-6 ${feature.textColor}`} />
                  </div>
                  <h3 className="font-heading text-2xl font-black mb-4 group-hover:text-[#FF5656] transition-colors text-[#2C2C2C]">{feature.title}</h3>
                  <p className="text-[#2C2C2C]/50 text-sm font-light leading-relaxed">{feature.description}</p>
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
