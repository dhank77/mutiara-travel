import { useState } from 'react'

const faqs = [
  {
    question: 'Apa saja persyaratan untuk mendaftar umroh?',
    answer: 'Persyaratan umroh meliputi: paspor yang masih berlaku minimal 6 bulan, foto ukuran 4x6 background putih, KTP, Kartu Keluarga, buku nikah (untuk suami istri), dan akte lahir (untuk anak). Tim kami akan membantu pengurusan visa dan dokumen lainnya.',
  },
  {
    question: 'Berapa lama proses pengurusan visa umroh?',
    answer: 'Proses pengurusan visa umroh biasanya memakan waktu 7-14 hari kerja setelah dokumen lengkap diserahkan. Kami akan menginformasikan perkembangan proses visa secara berkala.',
  },
  {
    question: 'Apakah ada program cicilan/angsuran?',
    answer: 'Ya, kami menyediakan program cicilan yang fleksibel. Anda bisa membayar DP minimal 30% dari total biaya, dan sisanya bisa dicicil hingga 3 bulan sebelum keberangkatan. Hubungi CS kami untuk konsultasi lebih lanjut.',
  },
  {
    question: 'Bagaimana dengan jadwal keberangkatan?',
    answer: 'Kami memiliki jadwal keberangkatan setiap bulan. Anda bisa memilih jadwal yang paling sesuai dengan waktu luang. Jadwal lengkap bisa didapatkan dengan menghubungi customer service kami.',
  },
  {
    question: 'Apakah ada pembimbing ibadah selama di tanah suci?',
    answer: 'Ya, setiap jamaah akan didampingi oleh pembimbing ibadah yang berpengalaman dan bersertifikat. Mereka akan membimbing Anda dari manasik sebelum keberangkatan hingga selama di tanah suci.',
  },
  {
    question: 'Bagaimana jika ada jamaah yang sakit atau butuh bantuan medis?',
    answer: 'Kami menyediakan asuransi perjalanan untuk setiap jamaah. Selain itu, tim kami juga siap membantu jika ada kebutuhan medis darurat. Hotel-hotel yang kami pilih juga dekat dengan fasilitas kesehatan.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold font-label uppercase tracking-[0.3em] text-sm block mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface leading-tight mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto font-medium leading-relaxed">
            Temukan jawaban atas pertanyaan umum seputar umroh bersama Mutiara Tour &amp; Travel.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-surface-container-low rounded-2xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-bold text-on-surface font-body pr-4">{faq.question}</span>
                <span className={`material-symbols-outlined text-primary transition-transform duration-300 flex-shrink-0 ${openIndex === i ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p className="text-sm text-on-surface-variant leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-12 p-8 bg-surface-container-low rounded-3xl">
          <p className="text-on-surface font-bold mb-2">Masih ada pertanyaan?</p>
          <p className="text-on-surface-variant text-sm mb-6">Tim customer service kami siap membantu Anda 24/7</p>
          <a
            href="https://wa.me/6282187942609?text=Assalamualaikum%2C%20saya%20ada%20pertanyaan%20tentang%20umroh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp text-white px-8 py-4 rounded-full font-label font-bold hover:bg-green-600 transition-all shadow-lg"
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
            Tanya via WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ
