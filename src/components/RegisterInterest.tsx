import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

function RegisterInterest() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return

    setIsSubmitting(true)

    // Reason: Simulated submission delay for demo purposes
    setTimeout(() => {
      setSubmitted(true)
      setIsSubmitting(false)
    }, 1200)
  }

  return (
    <section
      id="register"
      ref={ref}
      className="relative py-section px-6 md:px-12 lg:px-24 bg-mono-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <div className="editorial-divider" />
          <span className="text-caption uppercase tracking-[0.25em] text-mono-grey">
            Join the Experiment
          </span>
          <div className="editorial-divider" />
        </motion.div>

        {/* Headline — actual client copy */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-display-lg text-mono-black mb-6"
        >
          Register your interest
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-body-lg text-mono-grey font-light mb-4 max-w-lg mx-auto"
        >
          When the London cohort opens, you'll receive an invitation to apply.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-body-sm text-mono-silver font-light mb-12 max-w-lg mx-auto"
        >
          All applications are reviewed. Accepted applicants pay the annual fee
          and join the cohort. Each cohort only proceeds once a minimum number
          of members has been reached.
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            >
              {/* Name field */}
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="flex-1 bg-transparent border border-mono-light px-5 py-3.5 text-mono-black placeholder:text-mono-silver text-body-sm focus:outline-none focus:border-mono-charcoal transition-colors duration-300"
              />

              {/* Email field */}
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-transparent border border-mono-light px-5 py-3.5 text-mono-black placeholder:text-mono-silver text-body-sm focus:outline-none focus:border-mono-charcoal transition-colors duration-300"
              />

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center justify-center gap-2 bg-mono-black border border-mono-black px-6 py-3.5 text-mono-white text-body-sm uppercase tracking-[0.1em] hover:bg-mono-charcoal transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? (
                  <span className="inline-block w-4 h-4 border-2 border-mono-grey border-t-mono-white rounded-full animate-spin" />
                ) : (
                  <>
                    Submit
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full border border-mono-charcoal flex items-center justify-center">
                <Check className="w-5 h-5 text-mono-black" />
              </div>
              <p className="font-display text-xl text-mono-black">
                You're on the list.
              </p>
              <p className="text-body-sm text-mono-grey font-light">
                We'll be in touch when the London cohort opens.
              </p>
            </motion.div>
          )}

          {/* Privacy note */}
          <p className="text-caption text-mono-silver mt-6">
            Your information is kept private. No spam, ever.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default RegisterInterest
