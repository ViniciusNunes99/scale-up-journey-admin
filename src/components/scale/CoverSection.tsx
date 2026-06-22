const CoverSection = () => (
  <section className="min-h-screen flex flex-col justify-between px-6 py-10 md:px-16 md:py-14 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white/10 blur-[150px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-[120px] pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/8 blur-[200px] pointer-events-none" />

    <div className="relative z-10">
      <p className="text-sm font-bold tracking-[0.3em] uppercase text-white">V4COMPANY</p>
    </div>

    <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center">
      <p className="text-sm font-medium tracking-widest uppercase text-white/70 mb-3">Bem-vindo(a) ao</p>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-6">
        <span className="text-white">Scale</span>{" "}
        <span className="text-white/80">Program</span>
      </h1>
      <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
        Seu guia completo de preparação para a jornada de transformação e alta performance.
      </p>
    </div>

    <div className="relative z-10 flex items-center gap-6 text-xs text-white/70">
      <p className="border border-white/30 px-3 py-1.5 rounded-full text-white/80">Documento Confidencial</p>
      <p>Exclusivo para participantes do programa Scale</p>
    </div>
  </section>
);

export default CoverSection;
