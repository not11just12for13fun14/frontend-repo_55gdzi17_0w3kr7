import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  { name: 'Ava Martinez', role: 'Product Lead, Nova AI', quote: 'An artist-engineer. Our new site feels alive — premium motion, flawless performance, and a process that was a joy.' },
  { name: 'Noah Chen', role: 'Founder, Orbit Labs', quote: 'Translated our vision into a cinematic product. Our conversion rates shot up and brand perception leveled up.' },
  { name: 'Mia Johnson', role: 'CMO, Pulse Health', quote: 'Design systems, accessibility, and speed — all delivered with taste. Would absolutely hire again.' },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((index + 1) % testimonials.length)
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(34,197,94,0.12),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Kind Words</h2>
        <p className="mt-2 text-white/70">Partners who value craft and outcomes.</p>

        <div className="mt-10 relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-10 backdrop-blur-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <blockquote className="text-xl sm:text-2xl text-white/90 leading-relaxed">“{testimonials[index].quote}”</blockquote>
              <div className="mt-6 text-white/70">{testimonials[index].name} — {testimonials[index].role}</div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex items-center justify-center gap-3">
            <button onClick={prev} className="h-2 w-2 rounded-full bg-white/40" aria-label="Previous" />
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} className={`h-2 w-2 rounded-full ${i===index? 'bg-white' : 'bg-white/40'}`} aria-label={`Go to ${i+1}`} />
            ))}
            <button onClick={next} className="h-2 w-2 rounded-full bg-white/40" aria-label="Next" />
          </div>
        </div>
      </div>
    </section>
  )
}
