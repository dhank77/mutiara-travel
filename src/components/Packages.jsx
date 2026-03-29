const packages = [
  {
    name: 'Umroh Reguler',
    duration: '9 Hari',
    price: '27.500.000',
    hotel: 'Hotel Bintang 4',
    hotelDistance: '500m dari Masjidil Haram',
    airline: 'Saudia Airlines / Garuda',
    features: [
      'Tiket pesawat PP',
      'Hotel Makkah & Madinah',
      'Makan 3x sehari (Fullboard)',
      'Transportasi AC selama di tanah suci',
      'Ziarah Makkah & Madinah',
      'Pembimbing ibadah berpengalaman',
      'Manasik umroh sebelum keberangkatan',
      'Air zam-zam 5 liter',
    ],
    popular: false,
  },
  {
    name: 'Umroh Premium',
    duration: '12 Hari',
    price: '39.500.000',
    hotel: 'Hotel Bintang 5',
    hotelDistance: '100m dari Masjidil Haram',
    airline: 'Saudia Airlines / Garuda',
    features: [
      'Tiket pesawat PP (Premium)',
      'Hotel Makkah & Madinah Bintang 5',
      'Makan 3x sehari (Fullboard Premium)',
      'Transportasi AC eksklusif',
      'Ziarah lengkap Makkah & Madinah',
      'Pembimbing ibadah senior',
      'Manasik umroh & bimbingan intensif',
      'Air zam-zam 10 liter',
      'Laundry 2x selama perjalanan',
      'Asuransi perjalanan',
    ],
    popular: true,
  },
  {
    name: 'Umroh Plus Turki',
    duration: '15 Hari',
    price: '52.000.000',
    hotel: 'Hotel Bintang 5',
    hotelDistance: '100m dari Masjidil Haram + Hotel Turki',
    airline: 'Turkish Airlines',
    features: [
      'Tiket pesawat PP (Turkish Airlines)',
      'Hotel Makkah, Madinah & Istanbul',
      'Makan 3x sehari (Fullboard)',
      'Transportasi mewah',
      'Ziarah lengkap 3 kota',
      'City tour Istanbul, Bursa, Cappadocia',
      'Pembimbing ibadah + tour guide',
      'Air zam-zam 10 liter',
      'Laundry & asuransi perjalanan',
      'Blue Mosque & Hagia Sophia',
    ],
    popular: false,
  },
]

function PackageCard({ pkg }) {
  const waMessage = encodeURIComponent(`Assalamualaikum, saya ingin bertanya tentang paket ${pkg.name} (${pkg.duration}) dengan harga Rp ${pkg.price}`)
  const waLink = `https://wa.me/6282187942609?text=${waMessage}`

  return (
    <div className={`relative bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col ${pkg.popular ? 'border-2 border-primary md:scale-105' : 'border border-stone-100'}`}>
      {pkg.popular && (
        <div className="absolute top-0 right-0 bg-primary text-on-primary text-xs font-bold font-label px-4 py-2 rounded-bl-2xl tracking-wider uppercase">
          Terpopuler
        </div>
      )}
      <div className="p-8 flex-1">
        <div className="flex items-center gap-3 mb-4">
          <span className="material-symbols-outlined text-primary text-3xl">mosque</span>
          <div>
            <h3 className="text-2xl font-headline font-bold text-on-surface">{pkg.name}</h3>
            <p className="text-sm text-on-surface-variant font-label">{pkg.duration}</p>
          </div>
        </div>
        <div className="mb-6">
          <p className="text-sm text-on-surface-variant font-label mb-1">Mulai dari</p>
          <p className="text-3xl font-headline font-bold text-primary">
            Rp {pkg.price}
            <span className="text-sm font-normal text-on-surface-variant">/orang</span>
          </p>
        </div>
        <div className="space-y-3 mb-6 p-4 bg-surface-container-low rounded-2xl">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary text-xl">apartment</span>
            <div>
              <p className="text-sm font-bold text-on-surface">{pkg.hotel}</p>
              <p className="text-xs text-on-surface-variant">{pkg.hotelDistance}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary text-xl">flight</span>
            <p className="text-sm font-bold text-on-surface">{pkg.airline}</p>
          </div>
        </div>
        <ul className="space-y-3">
          {pkg.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-lg mt-0.5 flex-shrink-0">check_circle</span>
              <span className="text-sm text-on-surface-variant">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 border-t border-stone-100">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-label font-bold text-base transition-all ${
            pkg.popular
              ? 'bg-primary text-on-primary hover:bg-primary/90 shadow-lg'
              : 'bg-on-surface text-white hover:bg-stone-800'
          }`}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
          Pesan via WhatsApp
        </a>
      </div>
    </div>
  )
}

function Packages() {
  return (
    <section id="packages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold font-label uppercase tracking-[0.3em] text-sm block mb-4">
            Our Packages
          </span>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface leading-tight mb-4">
            Pilih Paket Umroh Terbaik
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto font-medium leading-relaxed">
            Berbagai pilihan paket umroh yang dirancang khusus untuk memenuhi kebutuhan ibadah Anda dengan fasilitas terbaik.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} />
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-on-surface-variant text-sm mb-4">
            Tidak menemukan paket yang cocok? Konsultasikan kebutuhan Anda.
          </p>
          <a
            href="https://wa.me/6282187942609?text=Assalamualaikum%2C%20saya%20ingin%20konsultasi%20tentang%20paket%20umroh%20yang%20sesuai%20dengan%20kebutuhan%20saya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-full font-label font-bold hover:bg-primary hover:text-on-primary transition-all"
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </section>
  )
}

export default Packages
