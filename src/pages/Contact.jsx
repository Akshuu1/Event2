import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Instagram, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import SectionHeading from '../components/SectionHeading';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Flagship Studio',
    details: 'The Chanakya, Chanakyapuri, New Delhi - 110021',
    link: '#'
  },
  {
    icon: Mail,
    title: 'Inquiries',
    details: 'hello@elance.in',
    link: 'mailto:hello@elance.in'
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: '+91 11 4900 0000',
    link: 'tel:+911149000000'
  }
];

import Decorative3DScene from '../components/Decorative3DScene';

export default function Contact() {
  return (
    <PageWrapper>
      <section className="relative pt-40 pb-32 px-6 overflow-hidden min-h-[70vh] flex items-center">
        {/* 3D Background */}
        <Decorative3DScene colorA="#8CE4FF" colorB="#FFF799" showReflector={false} />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <SectionHeading
            label="Contact Us"
            title={<>Plan Your <br /><span className="text-gradient">Event</span></>}
            description=""
            center={true}
          />

          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <h2 className="font-heading text-4xl font-black">Let&apos;s Plan Your <span className="text-red">Event</span></h2>
                <p className="text-xl text-black/60 font-light leading-relaxed max-w-md">
                  We plan a limited number of events each year to ensure we give your celebration our full attention.
                </p>
              </div>

              <div className="space-y-8">
                {contactInfo.map((info, i) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-black/40 mb-1">{info.title}</div>
                      <div className="text-lg font-black group-hover:text-red transition-colors">{info.details}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="pt-12 border-t border-black/10 flex gap-6">
                {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-black/40 hover:text-black hover:border-black transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-[4rem] bg-white border border-black/5 shadow-2xl relative"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <Send className="w-32 h-32" />
              </div>
              <form className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 ml-4">Full Name</label>
                    <input type="text" className="w-full px-8 py-5 rounded-full bg-black/5 border-none focus:ring-2 focus:ring-red outline-none font-bold" placeholder="e.g. Vikram Malhotra" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 ml-4">Email Address</label>
                    <input type="email" className="w-full px-8 py-5 rounded-full bg-black/5 border-none focus:ring-2 focus:ring-red outline-none font-bold" placeholder="vikram@horizon.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 ml-4">Your Message</label>
                  <textarea rows="4" className="w-full px-8 py-6 rounded-[2rem] bg-black/5 border-none focus:ring-2 focus:ring-red outline-none font-bold resize-none" placeholder="Tell us about your event..."></textarea>
                </div>
                <button className="w-full py-6 bg-black text-white rounded-full font-black text-xl flex items-center justify-center gap-4 hover:bg-red hover:shadow-2xl hover:shadow-red/20 transition-all duration-500 group">
                  Send Message <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Backdrop or Final Visual */}
      <section className="h-[40vh] bg-stone-200 rounded-[4rem] mx-4 lg:mx-10 mb-20 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000 grayscale">
        <img
          src="https://images.unsplash.com/photo-1548013146-72479768bbaa?w=1600&q=80"
          alt="India Map Concept"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="glass px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.5em]">Delhi • Mumbai • London • Dubai</div>
        </div>
      </section>
    </PageWrapper>
  );
}
