function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          alt="Mutiara Tour & Travel Banner"
          src="/banner.png"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full py-20">
        <div className="max-w-2xl space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-widest uppercase animate-fade-in-up">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            Official Umroh &amp; Hajj Partner
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-bold text-on-surface leading-[1.1] tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Perjalanan Terbaik adalah Menuju{' '}
            <span className="text-primary italic">Baitullah</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant font-body leading-relaxed border-l-4 border-primary pl-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            MUDAH, MURAH, TERBAIK. Kami antar Anda meraih mimpi suci bersama{' '}
            <span className="font-bold text-on-surface">Mutiara Tour &amp; Travel</span>.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="https://wa.me/6282187942609?text=Assalamualaikum%2C%20saya%20ingin%20mendaftar%20umroh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 md:px-10 py-4 md:py-5 bg-on-surface text-surface-container-lowest rounded-full font-label font-bold text-base md:text-lg hover:bg-stone-800 transition-all flex items-center gap-3 group shadow-xl shadow-stone-900/10"
            >
              DAFTAR SEKARANG
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
            <a
              href="#packages"
              className="px-8 md:px-10 py-4 md:py-5 border-2 border-on-surface/20 text-on-surface rounded-full font-label font-bold text-base md:text-lg hover:bg-on-surface hover:text-white transition-all flex items-center gap-3"
            >
              Lihat Paket
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 md:gap-10 pt-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {[
              { value: '10+', label: 'Tahun Pengalaman' },
              { value: '5000+', label: 'Jamaah Berangkat' },
              { value: '100%', label: 'Keberangkatan' },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="text-3xl md:text-4xl font-headline font-bold text-primary">{stat.value}</p>
                <p className="text-xs md:text-sm text-on-surface-variant font-label font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <a href="#inspiration" className="flex flex-col items-center gap-2 text-stone-400 hover:text-primary transition-colors">
          <span className="text-xs font-label tracking-widest uppercase">Scroll</span>
          <span className="material-symbols-outlined text-2xl">keyboard_arrow_down</span>
        </a>
      </div>
    </section>
  )
}

export default Hero
