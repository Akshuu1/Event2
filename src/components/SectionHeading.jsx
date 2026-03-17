import { motion } from 'framer-motion';

export default function SectionHeading({ label, title, description, light = false, center = true }) {
  return (
    <div className={`${center ? 'text-center' : ''} mb-16`}>
      {label && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-[10px] font-black tracking-[0.6em] uppercase mb-6 ${light ? 'text-[#FCF8F8]/40' : 'text-[#FF5656]'}`}
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className={`font-heading text-4xl md:text-5xl lg:text-7xl font-black leading-[0.85] tracking-[-0.04em] ${light ? 'text-white' : 'text-plum'} ${center ? 'max-w-4xl mx-auto' : ''}`}
      >
        {title}
      </motion.h2>
      {description && description.length > 0 && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`mt-8 text-xl font-light leading-relaxed ${light ? 'text-white/50' : 'text-black/50'} ${center ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
