function Footer() {
  return (
    <footer className="w-full rounded-t-[2rem] mt-0 bg-stone-50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-6 md:px-8 py-16 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="space-y-6 md:col-span-1">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Mutiara Tour & Travel" className="h-10 w-auto" />
            <span className="text-xl font-headline font-bold text-stone-900">
              Mutiara Tour &amp; Travel
            </span>
          </div>
          <p className="text-stone-500 font-body text-sm leading-relaxed max-w-sm">
            Menghadirkan pelayanan ibadah Umroh dan Haji yang personal, profesional, dan berorientasi pada ketenangan spiritual Anda.
          </p>
          <div className="flex gap-3">
            <a
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface hover:bg-primary hover:text-white transition-all"
              href="https://wa.me/6282187942609"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[20px]">public</span>
            </a>
            <a
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px]">photo_camera</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="font-headline font-bold text-stone-900 uppercase tracking-widest text-sm">
            Quick Links
          </h4>
          <nav className="flex flex-col gap-3">
            <a className="text-stone-500 hover:text-primary transition-colors text-sm font-medium" href="#home">Home</a>
            <a className="text-stone-500 hover:text-primary transition-colors text-sm font-medium" href="#packages">Paket Umroh Reguler</a>
            <a className="text-stone-500 hover:text-primary transition-colors text-sm font-medium" href="#packages">Umroh Plus Turki</a>
            <a className="text-stone-500 hover:text-primary transition-colors text-sm font-medium" href="#services">Keunggulan Kami</a>
            <a className="text-stone-500 hover:text-primary transition-colors text-sm font-medium" href="#testimonials">Testimoni</a>
          </nav>
        </div>

        {/* Paket */}
        <div className="space-y-6">
          <h4 className="font-headline font-bold text-stone-900 uppercase tracking-widest text-sm">
            Paket Kami
          </h4>
          <nav className="flex flex-col gap-3">
            <a className="text-stone-500 hover:text-primary transition-colors text-sm font-medium" href="#packages">Umroh Reguler 9 Hari</a>
            <a className="text-stone-500 hover:text-primary transition-colors text-sm font-medium" href="#packages">Umroh Premium 12 Hari</a>
            <a className="text-stone-500 hover:text-primary transition-colors text-sm font-medium" href="#packages">Umroh Plus Turki 15 Hari</a>
            <a className="text-stone-500 hover:text-primary transition-colors text-sm font-medium" href="#packages">Haji Furoda</a>
            <a className="text-stone-500 hover:text-primary transition-colors text-sm font-medium" href="#">Syarat &amp; Ketentuan</a>
          </nav>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h4 className="font-headline font-bold text-stone-900 uppercase tracking-widest text-sm">
            Contact Details
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-xl">call</span>
              <div className="text-sm">
                <p className="font-bold text-on-surface">WhatsApp</p>
                <a href="https://wa.me/6282187942609" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-primary transition-colors">082187942609</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-xl">alternate_email</span>
              <div className="text-sm">
                <p className="font-bold text-on-surface">Instagram</p>
                <p className="text-stone-500">@mutiaratourntravel</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-xl">location_on</span>
              <div className="text-sm">
                <p className="font-bold text-on-surface">Address</p>
                <p className="text-stone-500">Jakarta, Indonesia</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-stone-400 text-xs font-label">
          &copy; 2024 Mutiara Tour &amp; Travel. All rights reserved.
        </p>
        <div className="flex items-center gap-1 text-stone-400 text-xs">
          <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          Dibuat dengan cinta untuk jamaah Indonesia
        </div>
      </div>
    </footer>
  )
}

export default Footer
