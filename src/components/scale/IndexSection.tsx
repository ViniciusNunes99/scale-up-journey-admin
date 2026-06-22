const items = [
  { num: "01", title: "O que você adquiriu", desc: "Visão geral e jornada completa do programa Scale" },
  { num: "02", title: "Próximos passos", desc: "O que fazer agora" },
  { num: "03", title: "A Imersão Presencial", desc: "Detalhes do V4 Camp" },
  { num: "04", title: "Preparação obrigatória", desc: "Materiais que você deve consumir" },
  { num: "05", title: "Suporte & Dúvidas", desc: "Como tirar dúvidas" },
];

const IndexSection = () => (
  <section className="min-h-screen flex flex-col justify-center px-6 py-16 md:px-16 relative overflow-hidden">
    <div className="max-w-3xl mx-auto w-full relative z-10 glass-container">
      <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-12">Índice</h2>
      <div className="space-y-0">
        {items.map((item) => (
          <div key={item.num} className="flex items-start gap-6 py-5 border-b border-white/10 group hover:bg-white/5 px-4 -mx-4 rounded-lg transition-colors">
            <span className="text-2xl font-black text-primary">{item.num}</span>
            <div>
              <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IndexSection;
