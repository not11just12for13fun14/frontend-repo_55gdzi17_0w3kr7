import { motion } from 'framer-motion'
import { Code2, MonitorSmartphone, ShoppingBag, Sparkles, Rocket, Gauge } from 'lucide-react'

const items = [
  { icon: MonitorSmartphone, title: 'Custom Websites', desc: 'Tailored, high-performance websites that feel premium on every device.' },
  { icon: Code2, title: 'Web Apps', desc: 'Robust, scalable applications with modern stacks and DX in mind.' },
  { icon: ShoppingBag, title: 'E-commerce', desc: 'Beautiful, conversion-focused storefronts with seamless checkout.' },
  { icon: Sparkles, title: 'Branding & UI/UX', desc: 'Design systems, identity, and motion crafted for impact.' },
  { icon: Gauge, title: 'SEO + Performance', desc: 'Lighthouse-optimized, accessible, and blazing fast.' },
  { icon: Rocket, title: 'Launch & Growth', desc: 'From MVP to scale — analytics, automation, and iterations.' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(147,51,234,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Services</h2>
        <p className="mt-2 text-white/70">Premium delivery with craft, velocity, and care.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute inset-x-0 -top-1/3 h-1/2 rotate-6 bg-gradient-to-tr from-fuchsia-500/30 to-cyan-400/30 blur-2xl" />
              </div>
              <div className="flex items-center gap-3 text-white">
                <it.icon size={22} className="text-cyan-300" />
                <h3 className="text-lg font-semibold">{it.title}</h3>
              </div>
              <p className="mt-3 text-white/70">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
