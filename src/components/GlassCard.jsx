import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', hover = true, glow = false }) {
  return (
    <motion.div
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`
        relative rounded-3xl overflow-hidden
        bg-white/40 backdrop-blur-xl
        border border-white/50
        shadow-xl shadow-black/5
        ${glow ? 'glow-shadow' : ''}
        ${className}
      `}
    >
      {/* Gradient border overlay */}
      <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-sky/30 via-transparent to-yellow/20 -z-10 pointer-events-none">
        <div className="w-full h-full rounded-3xl bg-cream/60" />
      </div>
      {children}
    </motion.div>
  );
}
