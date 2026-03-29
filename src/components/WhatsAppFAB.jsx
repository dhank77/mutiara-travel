import { useState, useEffect } from 'react'

function WhatsAppFAB() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-whatsapp text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 flex items-center gap-2 pr-5 md:pr-6 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      href="https://wa.me/6282187942609?text=Assalamualaikum%2C%20saya%20ingin%20bertanya%20tentang%20paket%20umroh"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-pulse-ring -z-10"></span>
      <span
        className="material-symbols-outlined text-2xl"
        style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
      >
        chat
      </span>
      <span className="font-bold text-sm tracking-wide hidden sm:inline">Tanya CS</span>
    </a>
  )
}

export default WhatsAppFAB
