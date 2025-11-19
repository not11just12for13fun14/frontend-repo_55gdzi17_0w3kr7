import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Placeholder submit — integrate backend later if needed
    setTimeout(() => setStatus('Thanks! I will get back to you shortly.'), 800)
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s Build Something Amazing</h2>
        <p className="mt-2 text-white/70">Tell me about your project — I’ll reply within 24 hours.</p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 space-y-4 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl text-left"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Your name" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-white/40" />
            <input type="email" required placeholder="Email" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-white/40" />
          </div>
          <input placeholder="Company / Website" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-white/40" />
          <textarea required rows="5" placeholder="Project details" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-white/40" />
          <div className="flex items-center justify-between">
            <p className="text-white/60 text-sm">I’ll never share your information.</p>
            <button className="rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 font-semibold text-slate-900 hover:brightness-105 transition">Send Message</button>
          </div>
          {status && <p className="text-emerald-300 text-sm">{status}</p>}
        </motion.form>
      </div>
    </section>
  )
}
