import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = ['All', 'Web Design', 'Web Apps', 'Branding', 'UI/UX']

const projects = [
  { id: 1, title: 'Neon Studio', category: 'Web Design', image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1600&auto=format&fit=crop' },
  { id: 2, title: 'Aurora Commerce', category: 'E-commerce', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop' },
  { id: 3, title: 'Orbit UI', category: 'UI/UX', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop' },
  { id: 4, title: 'Vortex App', category: 'Web Apps', image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop' },
  { id: 5, title: 'Pulse Brand', category: 'Branding', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600&auto=format&fit=crop' },
  { id: 6, title: 'Quantum SaaS', category: 'Web Apps', image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1600&auto=format&fit=crop' },
]

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(168,85,247,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Work</h2>
            <p className="mt-2 text-white/70">A curated mix of design and engineering.</p>
          </div>
          <div className="hidden md:flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-2 text-sm backdrop-blur-md transition ${active===cat? 'bg-white/20 border-white/30 text-white' : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/15'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((p) => (
              <motion.button
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelected(p)}
                className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md"
              >
                <img src={p.image} alt="" className="h-60 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-xs text-white/60">{p.category}</p>
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-fuchsia-500/30 to-transparent" />
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Filters for mobile */}
        <div className="mt-8 flex md:hidden flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 text-sm backdrop-blur-md transition ${active===cat? 'bg-white/20 border-white/30 text-white' : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/15'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="relative max-w-3xl w-full overflow-hidden rounded-3xl border border-white/20 bg-slate-900/90 backdrop-blur-2xl"
              onClick={(e)=>e.stopPropagation()}
            >
              <img src={selected.image} alt="" className="h-72 w-full object-cover" />
              <div className="p-6">
                <p className="text-white/60 text-sm">Case Study</p>
                <h3 className="mt-1 text-2xl font-bold text-white">{selected.title}</h3>
                <p className="mt-3 text-white/70">A cinematic walkthrough of strategy, design systems, and engineering craft. Motion-first approach with premium micro-interactions and performance at the core.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
