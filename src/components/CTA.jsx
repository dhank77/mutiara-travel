function CTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-on-surface via-stone-900 to-on-surface"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="arabic-text-overlay absolute inset-0 flex items-center justify-center text-[10rem] md:text-[16rem] font-serif whitespace-nowrap opacity-100" style={{ opacity: 0.1 }}>
          بسم الله الرحمن الرحيم
        </div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center">
        <span className="material-symbols-outlined text-primary text-5xl md:text-6xl mb-6 block animate-float">
          mosque
        </span>
        <h2 className="text-3xl md:text-5xl font-headline font-bold text-white leading-tight mb-6">
          Wujudkan Impian Ibadah Anda <br className="hidden md:block" />
          <span className="text-primary">Bersama Kami</span>
        </h2>
        <p className="text-stone-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Jangan tunda lagi panggilan suci Allah. Konsultasikan rencana umroh Anda sekarang dan dapatkan penawaran terbaik.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/6282187942609?text=Assalamualaikum%2C%20saya%20ingin%20daftar%20umroh%20sekarang"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-whatsapp text-white px-10 py-5 rounded-full font-label font-bold text-lg hover:bg-green-600 transition-all shadow-2xl hover:scale-105"
          >
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
            Daftar via WhatsApp
          </a>
          <a
            href="tel:082187942609"
            className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white px-10 py-5 rounded-full font-label font-bold text-lg hover:bg-white/10 transition-all"
          >
            <span className="material-symbols-outlined text-2xl">call</span>
            082187942609
          </a>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-stone-400 text-sm">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">verified</span>
            Resmi Kemenag
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">shield</span>
            Terpercaya
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">support_agent</span>
            CS 24/7
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
