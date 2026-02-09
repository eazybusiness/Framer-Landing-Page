import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="relative py-section px-6 md:px-12 lg:px-24 bg-mono-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="editorial-divider" />
          <span className="text-caption uppercase tracking-[0.25em] text-mono-grey">
            The Hypothesis
          </span>
        </motion.div>

        {/* Lead statement — actual client copy */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-display-lg text-mono-black leading-tight max-w-3xl"
        >
          People make better choices about potential partners when they are
          not asked to decide on physical attraction{' '}
          <span className="italic">first.</span>
        </motion.h2>

        {/* Body copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 max-w-2xl"
        >
          <p className="text-body-lg text-mono-grey font-light leading-relaxed">
            When you understand how someone lives, what they value, and where
            you genuinely align, attraction has a better chance to grow into
            something real.
          </p>
          <p className="text-body-lg text-mono-grey font-light leading-relaxed mt-6">
            The Social Experiment explores what happens when you design for
            that.
          </p>
        </motion.div>

        {/* Rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="editorial-rule mt-section origin-left"
        />

        {/* What is it — second block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-section"
        >
          <h3 className="font-display text-display-md text-mono-black mb-8">
            What is The Social Experiment?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <p className="text-body-lg text-mono-grey font-light leading-relaxed">
              A matching platform that introduces you to people based on
              values, lifestyle, and intentions — not photos.
            </p>
            <div>
              <p className="text-body-lg text-mono-grey font-light leading-relaxed">
                You're not scrolling through faces. You're being introduced to
                pre-selected matches who align with what you've said matters.
              </p>
              <p className="text-body-lg text-mono-grey font-light leading-relaxed mt-6">
                Words and context come first. Photos are shared once a match is
                made.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Who is this for */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-section border-t border-mono-light pt-12"
        >
          <h3 className="text-caption uppercase tracking-[0.25em] text-mono-grey mb-6">
            Who is this for
          </h3>
          <p className="font-display text-display-md text-mono-black max-w-2xl">
            Single. Looking for a relationship.
            <br />
            Tired of low-intent dating.
          </p>
          <p className="text-body-sm text-mono-silver font-light mt-6">
            The first cohort is London-based. Places are limited. There is an
            annual fee.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
