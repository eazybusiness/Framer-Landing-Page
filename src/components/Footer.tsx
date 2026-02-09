import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <footer
      ref={ref}
      className="relative py-16 px-6 md:px-12 lg:px-24 border-t border-mono-light"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Brand mark */}
          <span className="font-display text-lg text-mono-black tracking-wide">
            The Social Experiment
          </span>

          {/* Tagline */}
          <p className="text-body-sm text-mono-grey font-light">
            Thoughtful matching. No swiping. No games.
          </p>

          {/* Copyright */}
          <p className="text-caption text-mono-silver">
            © 2026 — All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
