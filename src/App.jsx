import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      {/* Parallax background layers */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(236,72,153,0.08),transparent_50%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%\' height=\'100%\'><defs><linearGradient id=\'g\' x1=\'0\' y1=\'0\' x2=\'1\' y2=\'1\'><stop stop-color=\'%23ffffff0d\'/><stop offset=\'1\' stop-color=\'%23ffffff06\'/></linearGradient></defs><rect width=\'100%\' height=\'100%\' fill=\'url(%23g)\'/></svg>')] opacity-40" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Portfolio />
        <About />
        <Services />
        <Testimonials />
        <Contact />
        <footer className="py-12 text-center text-white/60">
          © {new Date().getFullYear()} Your Name — All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
