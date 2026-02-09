import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="relative py-section px-6 md:px-12 lg:px-24 bg-mono-off"
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
            How It Works
          </span>
        </motion.div>

        {/* Opening line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-display-md text-mono-black mb-16"
        >
          You start with the truth.
        </motion.p>

        {/* The Survey — 3-part grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-caption uppercase tracking-[0.25em] text-mono-grey mb-10">
            The Survey
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
            {/* Part 1 */}
            <div className="group">
              <span className="block text-caption uppercase tracking-[0.2em] text-mono-silver mb-3">
                Part 1
              </span>
              <div className="w-full h-px bg-mono-light mb-5 group-hover:bg-mono-charcoal transition-colors duration-500" />
              <h4 className="font-display text-lg text-mono-black mb-3">
                The Basics
              </h4>
              <p className="text-body-sm text-mono-grey font-light leading-relaxed">
                Age, work, lifestyle, relationship status. The realities that
                shape compatibility, whether we romanticise them or not.
              </p>
            </div>

            {/* Part 2 */}
            <div className="group">
              <span className="block text-caption uppercase tracking-[0.2em] text-mono-silver mb-3">
                Part 2
              </span>
              <div className="w-full h-px bg-mono-light mb-5 group-hover:bg-mono-charcoal transition-colors duration-500" />
              <h4 className="font-display text-lg text-mono-black mb-3">
                Your Words
              </h4>
              <p className="text-body-sm text-mono-grey font-light leading-relaxed">
                Two open questions. Who you are. What you're looking for. No
                prompts. No clever one-liners to hide behind.
              </p>
            </div>

            {/* Part 3 */}
            <div className="group">
              <span className="block text-caption uppercase tracking-[0.2em] text-mono-silver mb-3">
                Part 3
              </span>
              <div className="w-full h-px bg-mono-light mb-5 group-hover:bg-mono-charcoal transition-colors duration-500" />
              <h4 className="font-display text-lg text-mono-black mb-3">
                Values &amp; Preferences
              </h4>
              <p className="text-body-sm text-mono-grey font-light leading-relaxed">
                Questions about intimacy, money, ambition, family, lifestyle.
                These answers are not published — we use them to inform the
                matching algorithm.
              </p>
            </div>
          </div>
        </motion.div>

        {/* The Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-section border-t border-mono-light pt-12"
        >
          <h3 className="text-caption uppercase tracking-[0.25em] text-mono-grey mb-10">
            The Process
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div>
              <p className="text-body-lg text-mono-grey font-light leading-relaxed">
                When there is a potential match, you will receive an
                introduction. You will see their profile — the facts and their
                words. Not their photos.
              </p>
              <p className="text-body-lg text-mono-grey font-light leading-relaxed mt-6">
                You can message. Get a sense of who they are. Decide whether to
                exchange photos before meeting, or save that for when you are
                face to face.
              </p>
            </div>
            <div>
              <p className="text-body-lg text-mono-grey font-light leading-relaxed">
                Afterwards, you tell us: hit or miss. We learn. The system
                improves.
              </p>
              <p className="font-display text-xl text-mono-black mt-8 italic">
                Photos matter. They're just not the opening move.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
