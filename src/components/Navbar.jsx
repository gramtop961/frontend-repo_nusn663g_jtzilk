import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#how', label: 'Как это работает' },
    { href: '#features', label: 'Функции' },
    { href: '#books', label: 'Книги' },
    { href: '#audience', label: 'Для кого' },
    { href: '#results', label: 'Результаты' },
    { href: '#roadmap', label: 'Roadmap' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#top" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 shadow-md" />
              <span className="text-white font-semibold tracking-wide">UNITY</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#cta" className="px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-colors">
                Начать бесплатно
              </a>
            </nav>

            <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden backdrop-blur-xl bg-black/60 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-white/90" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#cta" className="px-4 py-2 rounded-lg bg-white text-black font-medium text-center" onClick={() => setOpen(false)}>
              Начать бесплатно
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
