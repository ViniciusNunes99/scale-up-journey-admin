const ClosingSection = () => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/10 blur-[180px] pointer-events-none" />

    <div className="relative z-10 space-y-8 max-w-xl">
      <h2 className="text-5xl md:text-7xl font-black leading-[0.95] drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
        <span className="text-white">Nos vemos</span><br />
        <span className="text-white/80">no topo.</span>
      </h2>

      <p className="text-white/80 text-lg leading-relaxed">
        Prepare-se para transformar a forma como você vê negócios, gestão e escala. Você não será mais o mesmo.
      </p>

      <div className="pt-8 space-y-1">
        <p className="text-sm font-bold text-white tracking-widest uppercase">Programa Scale</p>
        <p className="text-xs text-white/60">V4 Company</p>
      </div>
    </div>
  </section>
);

export default ClosingSection;
