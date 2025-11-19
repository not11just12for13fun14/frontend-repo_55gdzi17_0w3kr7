import { motion } from 'framer-motion'

const timeline = [
  { year: '2024', title: 'Senior Full-Stack', desc: 'Leading product experiences with React, Node, and cloud-native architectures.' },
  { year: '2022', title: 'Product Designer', desc: 'Design systems, prototyping, and motion — Figma and advanced UI craft.' },
  { year: '2020', title: 'Frontend Engineer', desc: 'Built high-performance interfaces with modern tooling and accessibility.' },
]

const tools = [
  'Figma','Adobe CC','React','Next.js','Node','TypeScript','Tailwind','Framer Motion','Three.js','MongoDB'
]

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(34,211,238,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About</h2>
          <p className="mt-4 text-white/80">Designer-engineer blending aesthetics with systems thinking. I craft immersive, performant web experiences with a cinematic feel.</p>

          <div className="mt-8 relative">
            <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-white/40 via-white/10 to-transparent" />
            <div className="space-y-8">
              {timeline.map((t, i) => (
                <motion.div key={t.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay: i*0.1 }} className="pl-8">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    <p className="text-white/60 text-sm">{t.year}</p>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-white">{t.title}</h3>
                  <p className="text-white/70">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 blur opacity-40" />
            <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop" alt="Portrait" className="relative h-64 w-64 rounded-full object-cover border border-white/20" />
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
            {tools.map((tool) => (
              <div key={tool} className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-center text-white/80 backdrop-blur-md">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
