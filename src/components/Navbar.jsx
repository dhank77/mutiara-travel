import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Paket', href: '#packages' },
  { label: 'Keunggulan', href: '#services' },
  { label: 'Testimoni', href: '#testimonials' },
  { label: 'Kontak', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-stone-200/50' : 'bg-white/70 backdrop-blur-xl shadow-sm shadow-stone-200/50'}`}>
        <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo.png" alt="Mutiara Tour & Travel" className="h-10 w-auto" />
            <span className="text-xl font-headline font-bold text-stone-900">
              Mutiara Tour &amp; Travel
            </span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className="text-stone-600 hover:text-stone-900 transition-all duration-300 font-label text-sm uppercase tracking-wider"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/6282187942609?text=Assalamualaikum%2C%20saya%20ingin%20bertanya%20tentang%20paket%20umroh"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-full font-label text-sm font-semibold hover:scale-105 active:scale-95 transition-all shadow-md"
            >
              Hubungi Kami
              <span className="material-symbols-outlined text-[18px]">chat</span>
            </a>
            <button
              className="md:hidden text-on-surface p-2 hover:bg-stone-100 rounded-xl transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-3xl">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[300px] bg-white shadow-2xl animate-slide-in">
            <div className="flex justify-between items-center px-6 py-5 border-b border-stone-100">
              <span className="text-lg font-headline font-bold text-stone-900">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-stone-100 rounded-xl transition-colors"
                aria-label="Close menu"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <nav className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 px-4 py-4 rounded-2xl text-stone-700 hover:bg-primary/5 hover:text-primary transition-all font-label text-base font-semibold"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="px-6 pt-4 border-t border-stone-100">
              <a
                href="https://wa.me/6282187942609?text=Assalamualaikum%2C%20saya%20ingin%20bertanya%20tentang%20paket%20umroh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-whatsapp text-white px-6 py-4 rounded-2xl font-label text-base font-bold hover:bg-green-600 transition-all shadow-lg"
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                Chat via WhatsApp
              </a>
              <div className="flex items-center gap-3 mt-6 px-2">
                <span className="material-symbols-outlined text-primary text-2xl">call</span>
                <div>
                  <p className="text-xs text-stone-400 font-label">Hubungi kami</p>
                  <p className="text-sm font-bold text-on-surface">082187942609</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
