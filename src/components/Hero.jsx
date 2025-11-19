import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 h-[60vh] w-[60vh] rounded-full bg-fuchsia-500/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[60vh] w-[60vh] rounded-full bg-cyan-400/20 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md text-white"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for new projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
        >
          Building Digital Experiences That Inspire
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mt-5 max-w-2xl text-base sm:text-lg md:text-xl text-white/80"
        >
          Web Designer + Full-Stack Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#work" className="group relative inline-flex items-center gap-2 rounded-full bg-white/10 text-white border border-white/20 px-6 py-3 backdrop-blur-md hover:bg-white/20 transition">
            <span className="relative z-10">View Portfolio</span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/10 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition" />
          </a>
          <a href="#contact" className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-slate-900 font-semibold px-6 py-3 hover:brightness-105 transition">
            Let’s Build Something Amazing
          </a>
        </motion.div>
      </div>

      {/* Bottom scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/80 text-sm">
        <div className="h-6 w-4 mx-auto rounded-full border-2 border-white/40 relative">
          <div className="absolute left-1/2 top-1.5 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-white/80 animate-bounce" />
        </div>
        <p className="mt-3">Scroll</p>
      </div>
    </section>
  )
}
