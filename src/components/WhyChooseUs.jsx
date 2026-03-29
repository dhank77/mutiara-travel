const services = [
  {
    icon: 'flight',
    title: 'Tiket PP',
    description: 'Penerbangan terbaik dengan maskapai ternama menuju tanah suci.',
    isSecondary: false,
  },
  {
    icon: 'directions_bus',
    title: 'Transportasi',
    description: 'Armada bus terbaru dan private car untuk kenyamanan ziarah.',
    isSecondary: true,
  },
  {
    icon: 'mosque',
    title: 'Ziarah',
    description: 'Pendampingan penuh ke tempat-tempat bersejarah di Makkah & Madinah.',
    isSecondary: false,
  },
  {
    icon: 'apartment',
    title: 'Hotel Nyaman',
    description: 'Akomodasi hotel bintang 4 & 5 dengan jarak yang sangat dekat.',
    isSecondary: true,
  },
  {
    icon: 'description',
    title: 'Visa & Paspor',
    description: 'Pengurusan dokumen perjalanan yang cepat, aman, dan terpercaya.',
    isSecondary: false,
  },
]

function ServiceCard({ icon, title, description, isSecondary }) {
  const bgClass = isSecondary ? 'bg-secondary/10 group-hover:bg-secondary/20' : 'bg-primary/10 group-hover:bg-primary/20'
  const textClass = isSecondary ? 'text-secondary' : 'text-primary'

  return (
    <div className="group bg-surface-container-lowest p-6 md:p-8 rounded-3xl hover:bg-on-surface transition-all duration-500 shadow-sm">
      <div className={`w-14 h-14 rounded-2xl ${bgClass} flex items-center justify-center mb-6 transition-colors`}>
        <span className={`material-symbols-outlined ${textClass} text-3xl`}>
          {icon}
        </span>
      </div>
      <h3 className="text-xl font-headline font-bold mb-3 group-hover:text-surface-container-lowest">
        {title}
      </h3>
      <p className="text-sm text-on-surface-variant group-hover:text-surface-variant leading-relaxed">
        {description}
      </p>
    </div>
  )
}

function WhyChooseUs() {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden bg-mesh">
      <div className="arabic-text-overlay absolute inset-0 flex items-center justify-center text-[8rem] md:text-[12rem] font-serif whitespace-nowrap">
        موتيارا تور أند ترافل
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-primary font-bold font-label uppercase tracking-[0.3em] text-sm block mb-4">
              Excellence in Service
            </span>
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface leading-tight">
              Mengapa Memilih Mutiara Tour &amp; Travel?
            </h2>
          </div>
          <p className="text-on-surface-variant max-w-sm font-medium leading-relaxed">
            Umroh jadi lebih mudah saat pendampingan ada di setiap langkah ibadah Anda.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
