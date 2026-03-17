import { motion } from 'framer-motion';
import { Sparkles, Trophy, Globe, Heart, ArrowUpRight } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import SectionHeading from '../components/SectionHeading';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Years of Experience', value: '10+' },
  { label: 'Successful Events', value: '300+' },
  { label: 'Global Awards', value: '25+' },
];

import Decorative3DScene from '../components/Decorative3DScene';

export default function About() {
  return (
    <PageWrapper>
      <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[70vh] flex items-center">
        {/* 3D Background */}
        <Decorative3DScene colorA="#FF5656" colorB="#FEB05D" showReflector={false} />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <SectionHeading
            label="Our Story"
            title={<>Luxury <span className="text-gradient">Events</span> <br /> Since 2014</>}
            description=""
            center={true}
          />

          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="font-heading text-4xl lg:text-5xl font-black leading-tight">Our Vision for <span className="italic text-[#FF5656]">Perfection</span></h2>
              <p className="text-xl text-black/60 font-light leading-relaxed">
                Founded in New Delhi, Élance started with one goal: to provide the best event services in India. Today, we plan premium weddings and business events all over the world.
              </p>
              <p className="text-xl text-black/60 font-light leading-relaxed">
                We don&apos;t just follow others. We lead the way in creating beautiful and memorable events.
              </p>
              <div className="pt-8 border-t border-black/10 grid grid-cols-2 gap-12">
                {stats.slice(0, 2).map(stat => (
                  <div key={stat.label}>
                    <div className="font-heading text-5xl font-black mb-2">{stat.value}</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-black/40">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80"
                alt="Founder Vision"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
                <div className="text-white">
                  <p className="font-heading text-2xl font-black italic">"We aim for perfection every time."</p>
                  <p className="text-xs uppercase tracking-[0.3em] font-bold mt-2 opacity-60">— Our Founder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - High Impact Cards */}
      <section className="py-32 px-6 bg-black text-cream rounded-[4rem] mx-4 lg:mx-10 mb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            light
            label="Our Beliefs"
            title={<>The Élance <span className="text-[#FF5656] italic">Values</span></>}
            center={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              { icon: Sparkles, color: "#FF5656", title: "Luxury", desc: "Creating beautiful spaces and settings for your events." },
              { icon: Globe, color: "#FEB05D", title: "Worldwide", desc: "Planning perfect events anywhere in the world, with great care." },
              { icon: Heart, color: "#C7EABB", title: "Privacy", desc: "We are fully committed to keeping your event private and secure." }
            ].map((belief, i) => (
              <div 
                key={i} 
                className="p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[3.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-md relative group overflow-hidden"
              >
                {/* Subtle colored glow for each card to avoid "grey" look */}
                <div 
                  className="absolute -top-20 -right-20 w-40 h-40 blur-[80px] opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-700" 
                  style={{ backgroundColor: belief.color }}
                />
                
                <belief.icon className="w-8 h-8 lg:w-10 lg:h-10 mb-8 transition-transform duration-500 group-hover:scale-110" style={{ color: belief.color }} />
                <h3 className="font-heading text-2xl font-black mb-4 text-white">{belief.title}</h3>
                <p className="text-cream/40 text-sm font-light leading-relaxed">{belief.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 text-center">
        <SectionHeading
          label="Contact Us"
          title={<>Get In Touch for a <span className="text-gradient">Private Consultation</span></>}
          center={true}
        />
        <motion.div className="mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-6 px-16 py-7 bg-[#2C2C2C] text-[#FCF8F8] rounded-full text-2xl font-black hover:bg-[#FF5656] hover:scale-105 transition-all duration-500 group"
          >
            Get In Touch <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </PageWrapper>
  );
}
