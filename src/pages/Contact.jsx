import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

const locations = [
  { city: 'Mumbai', desc: 'Main Office • Worli, Sea Face', time: 'IST/GMT+5:30' },
  { city: 'Delhi', desc: 'Atelier • Lutyens Zone', time: 'IST/GMT+5:30' }
];

export default function Contact() {
  return (
    <PageWrapper className="bg-[#070707] min-h-screen pb-0">
      <section className="min-h-screen flex flex-col lg:flex-row relative">

        {/* ═══════════════════════════════════════
            LEFT — Simple & Clear Form
        ═══════════════════════════════════════ */}
        <div className="w-full lg:w-[60%] pt-40 lg:pt-56 pb-20 px-4 sm:px-6 lg:px-20 z-10 bg-[#070707]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-[1px] bg-[#B89961]" />
              <span className="text-[#B89961] text-[10px] sm:text-[11px] font-black tracking-[0.5em] uppercase">Get In Touch</span>
            </div>

            <h1 className="font-heading text-fluid-2 font-black leading-[0.85] tracking-[-0.04em] text-white uppercase overflow-hidden mb-12">
              <span className="block italic text-white/50">Start Your</span>
              <span className="block">Journey Here.</span>
            </h1>

            <p className="text-white/40 text-fluid-p font-light leading-relaxed mb-16 sm:mb-24">
              We are ready to make your dream event come to life. Share your vision with us, and we will handle the rest.
            </p>

            <form className="space-y-12 sm:space-y-16 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
                <div className="relative group">
                  <input type="text" id="name" required className="w-full bg-transparent border-0 border-b border-white/20 pb-4 text-xl sm:text-2xl font-heading font-medium text-white focus:ring-0 focus:border-white focus:outline-none transition-colors peer placeholder-transparent rounded-none" placeholder="Name" />
                  <label htmlFor="name" className="absolute left-0 top-0 text-white/40 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] transition-all peer-focus:-top-6 peer-focus:text-[9px] peer-focus:text-[#B89961] peer-valid:-top-6 peer-valid:text-[9px] peer-valid:text-white/40">Your Name</label>
                </div>
                <div className="relative group">
                  <input type="email" id="email" required className="w-full bg-transparent border-0 border-b border-white/20 pb-4 text-xl sm:text-2xl font-heading font-medium text-white focus:ring-0 focus:border-white focus:outline-none transition-colors peer placeholder-transparent rounded-none" placeholder="Email" />
                  <label htmlFor="email" className="absolute left-0 top-0 text-white/40 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] transition-all peer-focus:-top-6 peer-focus:text-[9px] peer-focus:text-[#B89961] peer-valid:-top-6 peer-valid:text-[9px] peer-valid:text-white/40">Your Email</label>
                </div>
              </div>

              <div className="relative group mt-12">
                <textarea id="vision" rows="3" required className="w-full bg-transparent border-0 border-b border-white/20 pb-4 text-xl sm:text-2xl font-heading font-medium text-white focus:ring-0 focus:border-white focus:outline-none transition-colors resize-none peer placeholder-transparent rounded-none" placeholder="Vision"></textarea>
                <label htmlFor="vision" className="absolute left-0 top-0 text-white/40 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] transition-all peer-focus:-top-6 peer-focus:text-[9px] peer-focus:text-[#B89961] peer-valid:-top-6 peer-valid:text-[9px] peer-valid:text-white/40">Tell Us About Your Event</label>
              </div>

              <div className="pt-8">
                <button className="group inline-flex items-center gap-6 bg-transparent text-white text-lg sm:text-xl font-black uppercase tracking-[0.1em] hover:text-[#B89961] transition-colors border-b-2 border-transparent hover:border-[#B89961] pb-2">
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </button>
              </div>
            </form>

            <div className="mt-32 pt-16 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-12">
              {locations.map((loc) => (
                <div key={loc.city}>
                  <h4 className="font-heading text-2xl sm:text-3xl font-black text-white uppercase mb-4">{loc.city}</h4>
                  <p className="text-[#B89961] text-[10px] font-bold uppercase tracking-[0.4em] mb-2">{loc.time}</p>
                  <p className="text-white/40 text-sm font-light leading-relaxed">{loc.desc}</p>
                </div>
              ))}
            </div>

          </motion.div>
        </div>

        {/* ═══════════════════════════════════════
            RIGHT — Cinematic Indian Image
        ═══════════════════════════════════════ */}
        <div className="w-full lg:w-[40%] h-[50vh] lg:h-screen relative lg:fixed lg:right-0 lg:top-0 order-first lg:order-last">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1544161515-4ad65f738bd7?w=1600&q=85" // Beautiful Indian Wedding Scene
              alt="Indian Event Contact"
              className="w-full h-full object-cover grayscale opacity-80"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#070707] to-transparent lg:hidden" />
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-l from-[#070707]/20 via-[#070707] to-[#070707]" />
          </motion.div>
        </div>

      </section>
    </PageWrapper>
  );
}
