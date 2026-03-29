function Inspiration() {
  return (
    <section id="inspiration" className="py-20 md:py-24 bg-surface-container-low">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="bg-surface-container-lowest p-10 md:p-20 rounded-[2rem] md:rounded-[3rem] shadow-sm flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          <span className="material-symbols-outlined text-primary text-5xl md:text-6xl mb-6 md:mb-8 opacity-40">
            format_quote
          </span>
          <h2 className="text-xl md:text-4xl font-headline font-medium text-on-surface leading-snug italic max-w-3xl">
            &ldquo;Allah tidak memanggil yang mampu, tapi Allah memampukan mereka yang rindu. Jangan tunggu &lsquo;nanti&rsquo; untuk sebuah undangan suci. Mari menjemput ketenangan yang sesungguhnya.&rdquo;
          </h2>
          <div className="mt-8 w-20 h-1 bg-gradient-to-r from-primary to-primary-container rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default Inspiration
