import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, Linkedin, Github, Mail } from 'lucide-react'

function ThemeToggle() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    // Load preference
    const stored = localStorage.getItem('theme')
    const preferred = stored || 'dark'
    setTheme(preferred)
    document.documentElement.classList.toggle('dark', preferred === 'dark')
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex items-center gap-2 rounded-full px-3 py-2 bg-white/10 dark:bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      <span className="text-xs hidden sm:block">{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  )
}

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 dark:bg-white/10 backdrop-blur-xl px-4 sm:px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-400 shadow-[0_0_25px_rgba(168,85,247,0.6)]" />
            <span className="text-white font-semibold tracking-tight">Your Name</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a href="mailto:hello@example.com" className="hidden sm:inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition" aria-label="Email">
              <Mail size={16} />
            </a>
            <a href="#" className="hidden sm:inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="#" className="hidden sm:inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition" aria-label="GitHub">
              <Github size={16} />
            </a>
            <ThemeToggle />
            <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 border border-white/20 text-white">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
