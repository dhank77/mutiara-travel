const itineraryItems = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcdqB6UzufJCaDEvsJTRx6cq1nma-BTfSr8Zl-ibra8Nx--nXcNId0DSoTEB3zobEYdtJZfDOW97GBfL-yguoJhkM70f43voC-E3Oyj0WEHJjiSmiqKsVTIdw8zWmZe8-mywXBqIvLxQNqxL-ChALuKELhZAV1aMAGfYIduHUZZpba9Pzr-r3hO137jl_rqtMQJFaFQOirWvdz5acVne65gPIYk3L4u7-gUU6WpPsRMuOzCk737cPNbpmvhVdJ-TDBqzWcwxDaEbCE',
    alt: 'Modern high-end hotel room interior with luxury bedding and views of Makkah',
    label: 'HOTEL SELECTION',
    title: 'Kenyamanan Istirahat di Ring 1 Haram',
    className: 'md:col-span-2 md:row-span-2',
    titleClass: 'text-2xl md:text-3xl',
    padding: 'p-6 md:p-10',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlfXvGTdYDmQmnXwkr9eaFcZxR62XPBvA7SfPahbH2-ZHsLZFzd3Z5H0hU_EYzgRbttAYjQWtkIYhMqYmZlo1Hk3YN-PhUWpIqbU7X83-60VeAcYJeza2VbF0VbK1uyyJoWPRz3NXc3faNjZsy_W_6mhHY74BXqMm23bLllHQuQqy_LTlacicztDIhqoV4Z6t69ifo0C6-zP02rx83CCQJ4USVWAVPvHsXC11vPkNP09MQPg-7cgpF7MoSkMcfHzc1B8O_GiEHqkBJ',
    alt: 'Close-up of premium middle eastern gourmet food',
    title: 'Sajian Kuliner Fullboard',
    className: 'md:col-span-2',
    titleClass: 'text-xl md:text-2xl',
    padding: 'p-6 md:p-8',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCezfPre8BLHbT4lxE3RYpSraHWTxB4P_OSZpdJkeOqWT4AF6HztC9M0mwQkVQWYGxM-x1jD45wbiNPP2Xim_MlbulDxh48yNys8rdnNEoHRuPDFkq6QKoNlgpXGhxgJHEPoaI9Zs-Q_I59MTTBJgxGVvT5bO3WCidZeKTFK27Tb9ygD7jMvj5vvG4XFgfEg8r56i3T5rZLalB8k3Vs8ZUous0WYgLjvn4fna9JQGQdH42YMqDiksLbfdlsJjrgqW8wefn7OgVkjKED',
    alt: 'Beautifully illuminated palm trees at night in Medina',
    title: 'Ziarah City Tour',
    className: 'md:col-span-1',
    titleClass: 'text-lg',
    padding: 'p-5 md:p-6',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi0OSz-H5uufICn61S8sjXcaMTi5Jf3pOWgQFXU9zLZmhg_leqfv3tNgGC761Dh2qjTO1W_LLrtKSNAMUniWhflzZjPoybfS2GkH65WKUwmLjcde815m6iuH1rShs4TbILN5yJX54eUwp8MtVfKXMYTNNsNChVJKOWvEKQvJWMfw_jN79CdXv66-iNgo7i91wrLwKte2NmWvbwLHPuuEYKi6ddwaq7A1aruWTBFimlAG1oU1GDFCspMG3CQ5zMjt8IPhZ2wqj76GNl',
    alt: 'Arabic calligraphy and holy Quran in a masjid',
    title: 'Bimbingan Intensif',
    className: 'md:col-span-1',
    titleClass: 'text-lg',
    padding: 'p-5 md:p-6',
  },
]

function Itinerary() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold font-label uppercase tracking-[0.3em] text-sm block mb-4">
            Fasilitas Terbaik
          </span>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface leading-tight">
            Pengalaman Ibadah yang Sempurna
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
          {itineraryItems.map((item, index) => (
            <div
              key={index}
              className={`${item.className} relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group min-h-[200px] md:min-h-0`}
            >
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt={item.alt}
                src={item.image}
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end ${item.padding}`}>
                {item.label && (
                  <span className="text-primary-container font-bold text-xs md:text-sm tracking-[0.2em] mb-2">
                    {item.label}
                  </span>
                )}
                <h3 className={`${item.titleClass} font-headline font-bold text-white`}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Itinerary
