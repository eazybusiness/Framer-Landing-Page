import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 overflow-hidden">
      {/* Abstract geometric element — converging lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.04]"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="600" y1="0" x2="300" y2="600" stroke="#0A0A0A" strokeWidth="1" />
          <line x1="600" y1="100" x2="350" y2="600" stroke="#0A0A0A" strokeWidth="1" />
          <line x1="600" y1="200" x2="400" y2="600" stroke="#0A0A0A" strokeWidth="1" />
          <line x1="600" y1="300" x2="450" y2="600" stroke="#0A0A0A" strokeWidth="1" />
          <line x1="600" y1="400" x2="500" y2="600" stroke="#0A0A0A" strokeWidth="1" />
        </svg>
      </div>

      {/* Editorial top line */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 text-caption uppercase tracking-[0.25em] text-mono-grey mb-10"
      >
        London Pilot — 2026
      </motion.p>

      {/* Main headline — fixed overflow with proper padding */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 font-display text-display-xl text-center max-w-5xl px-4 text-mono-black"
      >
        The Social
        <br />
        <span className="italic">Experiment</span>
      </motion.h1>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-10 w-16 h-px bg-mono-charcoal mt-10 mb-8"
      />

      {/* Subheadline — actual client copy */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="relative z-10 text-body-lg text-mono-grey max-w-md text-center font-light"
      >
        Thoughtful matching. No swiping. No games.
      </motion.p>

      {/* CTA button */}
      <motion.a
        href="#register"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="relative z-10 mt-12 px-8 py-3 border border-mono-charcoal text-mono-black text-body-sm uppercase tracking-[0.15em] hover:bg-mono-black hover:text-mono-white transition-all duration-500"
      >
        Register Interest
      </motion.a>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-mono-grey" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
