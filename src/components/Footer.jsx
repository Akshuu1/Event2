import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Services', path: '/services' },
  { name: 'Our Work', path: '/portfolio' },
  { name: 'Luxury Stays', path: '/hospitality' },
  { name: 'Our Story', path: '/about' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#070707] text-white overflow-hidden pt-32 pb-12 border-t border-white/10" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 h-full flex flex-col justify-end">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="lg:col-span-2">
            <h3 className="font-heading text-3xl font-black mb-6 uppercase">ÉLANCE</h3>
            <p className="text-white/40 text-sm max-w-sm leading-relaxed">
              India's Premier Event Architects. Specialized in luxury weddings and top-tier corporate galas across Mumbai, Delhi, and Jaipur.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B89961] mb-6">Explore</h4>
            <ul className="space-y-4">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B89961] mb-6">Our Offices</h4>
            <ul className="space-y-4">
              <li>
                <span className="text-sm font-medium text-white/60">Worli, Mumbai</span>
              </li>
              <li>
                <span className="text-sm font-medium text-white/60">Lutyens, Delhi</span>
              </li>
              <li>
                <a href="mailto:hello@elance.in" className="text-sm font-medium text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  hello@elance.in <ArrowUpRight className="w-3 h-3 text-white/30" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Massive Footer Text */}
        <h2 className="font-heading text-[15vw] leading-[0.75] font-black text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 uppercase tracking-tighter w-full overflow-hidden whitespace-nowrap">
          ÉLANCE
        </h2>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12 pt-8 border-t border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
          <p>&copy; {new Date().getFullYear()} Élance Group India.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
