import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import SectionHeading from '../components/SectionHeading';

const categories = ['All', 'Royal Weddings', 'Brand Galas', 'Private Retreats'];

const projects = [
  {
    title: 'The Jodhpur Royal Wedding',
    category: 'Royal Weddings',
    location: 'Umaid Bhawan Palace',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80',
    color: 'bg-red',
    gridSpan: 'lg:col-span-2 lg:row-span-2'
  },
  {
    title: 'Monaco Tech Summit',
    category: 'Brand Galas',
    location: 'Monte Carlo',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000&q=80',
    color: 'bg-sky',
    gridSpan: 'lg:col-span-1 lg:row-span-1'
  },
  {
    title: 'Lake Como Nuptials',
    category: 'Royal Weddings',
    location: "Villa d'Este",
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&q=80',
    color: 'bg-yellow',
    gridSpan: 'lg:col-span-1 lg:row-span-1'
  },
  {
    title: 'Dubai Desert Horizon',
    category: 'Private Retreats',
    location: 'Al Maha Resort',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80',
    color: 'bg-lime',
    gridSpan: 'lg:col-span-1 lg:row-span-1'
  },
  {
    title: 'Udaipur Palace Gala',
    category: 'Brand Galas',
    location: 'City Palace, Udaipur',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1000&q=80',
    color: 'bg-blush',
    gridSpan: 'lg:col-span-1 lg:row-span-1'
  }
];

import Decorative3DScene from '../components/Decorative3DScene';
import TiltCard from '../components/TiltCard';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <PageWrapper>
      <section className="relative pt-40 pb-32 px-6 overflow-hidden min-h-[70vh] flex items-center">
        {/* 3D Background */}
        <Decorative3DScene colorA="#8CE4FF" colorB="#FDEDED" showReflector={false} />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20"
          >
            <div className="max-w-2xl">
              <SectionHeading
                label="Our Projects"
                title={<>A Collection of <br/><span className="text-gradient">Our Best Events</span></>}
                description=""
                center={false}
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                    activeTab === cat
                    ? 'bg-black text-white shadow-xl scale-105'
                    : 'bg-white border border-black/5 text-black/40 hover:bg-black/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Masonry Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:auto-rows-[380px]"
            >
              {filteredProjects.map((project, i) => (
                <TiltCard
                  key={project.title}
                  className={`relative rounded-[2.5rem] overflow-hidden group cursor-pointer ${project.gridSpan}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                  />
                  {/* Color Overlay on Hover */}
                  <div className={`absolute inset-0 ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700 mix-blend-multiply`} />
                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                    <div className="flex items-center gap-3 mb-4 opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      <span className="glass px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-black/80">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1 text-white/50 text-[10px] font-bold">
                        <MapPin className="w-3 h-3" />
                        {project.location}
                      </div>
                    </div>
                    <h3 className="font-heading text-3xl lg:text-4xl font-black text-white leading-tight group-hover:-translate-y-2 transition-transform duration-700">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                      <span className="text-white/60 font-bold uppercase tracking-widest text-[10px]">View Project</span>
                      <ArrowUpRight className="w-4 h-4 text-white/60" />
                    </div>
                  </div>
                </TiltCard>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-cream rounded-[3rem] mx-4 lg:mx-10 mb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red/20 via-transparent to-sky/10 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="font-heading text-5xl lg:text-8xl font-black mb-12 leading-[0.85]">
            Start <span className="text-gradient italic">Planning</span><br/> Your Event
          </h2>
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
