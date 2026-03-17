import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  'Company': [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Testimonials', path: '/testimonials' },
  ],
  'Services': [
    { name: 'Corporate Events', path: '/services' },
    { name: 'Weddings', path: '/services' },
    { name: 'Hospitality', path: '/hospitality' },
    { name: 'Catering', path: '/services' },
  ],
  'Connect': [
    { name: 'Contact Us', path: '/contact' },
    { name: 'Book a Consultation', path: '/contact' },
    { name: 'Careers', path: '/about' },
    { name: 'Press', path: '/about' },
  ],
};

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sky/10 rounded-full blur-[120px]" />

      {/* CTA Section */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-white/40 text-sm tracking-[0.3em] uppercase mb-4"
              >
                Ready to create something extraordinary?
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold max-w-xl"
              >
                Let's make your
                <span className="text-gradient hover:text-sky transition-all duration-500"> vision </span>
                real.
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-red text-white rounded-full text-lg font-bold hover:bg-sky hover:text-black hover:scale-105 active:scale-95 transition-all duration-500 shadow-xl group"
              >
                Start Your Vision
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <h3 className="font-heading text-3xl font-black text-gradient">
                Élance
              </h3>
            </Link>
            <p className="text-white/50 leading-relaxed mb-8 max-w-sm">
              Crafting extraordinary experiences that captivate, inspire, and endure. 
              Your vision, our expertise.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a href="mailto:hello@elance.com" className="flex items-center gap-3 text-white/40 hover:text-sky transition-colors text-sm">
                <Mail className="w-4 h-4" />
                hello@elance.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-white/40 hover:text-sky transition-colors text-sm">
                <Phone className="w-4 h-4" />
                +1 (234) 567-890
              </a>
              <p className="flex items-center gap-3 text-white/40 text-sm">
                <MapPin className="w-4 h-4" />
                New York · London · Dubai
              </p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-sm tracking-[0.15em] uppercase text-white/60 mb-6">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/40 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-sm">
            © 2026 Élance. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-sky/50 hover:bg-sky/5 transition-all duration-300"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
