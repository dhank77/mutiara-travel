const testimonials = [
  {
    name: 'Ibu Siti Aminah',
    location: 'Jakarta',
    trip: 'Umroh Premium 12 Hari',
    rating: 5,
    text: 'Alhamdulillah, perjalanan umroh bersama Mutiara Travel sangat berkesan. Hotelnya dekat sekali dengan Masjidil Haram, jadi bisa sholat 5 waktu di sana. Pembimbingnya sangat sabar dan informatif.',
    avatar: 'SA',
  },
  {
    name: 'Bapak H. Ahmad Rizki',
    location: 'Surabaya',
    trip: 'Umroh Plus Turki 15 Hari',
    rating: 5,
    text: 'Pelayanan luar biasa dari awal pendaftaran sampai kembali ke tanah air. Tim Mutiara sangat profesional dan perhatian. Istanbul-nya juga amazing, benar-benar perjalanan yang tak terlupakan.',
    avatar: 'AR',
  },
  {
    name: 'Ibu Nur Halimah',
    location: 'Bandung',
    trip: 'Umroh Reguler 9 Hari',
    rating: 5,
    text: 'Ini umroh kedua saya, dan Mutiara Travel jauh lebih baik dari travel sebelumnya. Makanannya enak, busnya nyaman, dan yang paling penting bimbingan ibadahnya sangat detail.',
    avatar: 'NH',
  },
  {
    name: 'Bapak Irwan Firmansyah',
    location: 'Makassar',
    trip: 'Umroh Premium 12 Hari',
    rating: 5,
    text: 'Saya bawa orang tua yang sudah 70 tahun, alhamdulillah semua terlayani dengan baik. Tim Mutiara sangat membantu dari proses visa sampai ziarah. Highly recommended!',
    avatar: 'IF',
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="material-symbols-outlined text-lg"
          style={{
            fontVariationSettings: i < rating ? "'FILL' 1" : "'FILL' 0",
            color: i < rating ? '#c5a059' : '#d1c5b4',
          }}
        >
          star
        </span>
      ))}
    </div>
  )
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold font-label uppercase tracking-[0.3em] text-sm block mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface leading-tight mb-4">
            Apa Kata Jamaah Kami
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto font-medium leading-relaxed">
            Kepuasan dan keberkahan jamaah adalah prioritas utama kami.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold font-headline text-sm">{t.avatar}</span>
                </div>
                <div>
                  <p className="font-bold text-on-surface font-body">{t.name}</p>
                  <p className="text-xs text-on-surface-variant">{t.location} &bull; {t.trip}</p>
                </div>
              </div>
              <StarRating rating={t.rating} />
              <p className="mt-4 text-sm text-on-surface-variant leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://wa.me/6282187942609?text=Assalamualaikum%2C%20saya%20ingin%20melihat%20testimoni%20lebih%20banyak"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-label font-bold text-sm hover:underline"
          >
            Lihat lebih banyak testimoni
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
