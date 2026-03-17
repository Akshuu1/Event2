import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070707] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-lens-white opacity-20 pointer-events-none" />

      {/* Cinematic Flash Reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <h1 className="font-heading text-fluid-hero font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">
          ÉLANCE
        </h1>
      </motion.div>

      {/* Loader Bar */}
      <div className="absolute bottom-16 w-64 h-[2px] bg-white/10 overflow-hidden rounded-full">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full bg-white relative"
        >
          <div className="absolute top-0 right-0 w-8 h-full bg-white shadow-[0_0_10px_white] blur-[2px]" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-6 text-[10px] font-bold uppercase tracking-[0.4em] text-white/40"
      >
        Global Event Architecture
      </motion.div>
    </motion.div>
  );
}
