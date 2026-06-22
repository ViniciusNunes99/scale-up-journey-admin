const Section05 = () => (
  <section className="min-h-screen flex flex-col justify-center px-6 py-16 md:px-16 relative overflow-hidden">
    <div className="max-w-5xl mx-auto w-full space-y-10 relative z-10 glass-container">
      <div>
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-2">Seção 05</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Preparação obrigatória</h2>
      </div>

      <p className="text-foreground/80 leading-relaxed">
        Para garantir que você chega à Imersão pronto para discutir negócios em alto nível, é obrigatório consumir estes materiais:
      </p>

      {/* Featured: Course */}
      <div className="glass-card p-8 flex gap-6 items-start">
        <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-black text-lg shadow-lg">!</div>
        <div className="space-y-3">
          <p className="text-lg font-bold text-foreground">🎓 Assista ao Curso: Cientista do Marketing (EAD)</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Este é o curso fundamental do nosso método de gestão e operação. Para receber seu acesso, solicite diretamente pelo nosso WhatsApp.
          </p>
          <div className="text-xs text-muted-foreground space-y-1">
            <p>Tempo estimado: 8-12 horas de consumo</p>
            <p>Formato: Vídeos, aulas práticas e materiais interativos</p>
          </div>
          <a
            href="https://wa.me/5519971640438?text=Quero%20solicitar%20acesso%20ao%20curso%20Cientista%20do%20Marketing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block gradient-primary text-white font-bold text-xs tracking-wide px-6 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            SOLICITAR ACESSO NO WHATSAPP →
          </a>
        </div>
      </div>

      {/* Grid of materials */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {[
          {
            emoji: "📚",
            title: 'Livro "A Meta"',
            author: "Eliyahu M. Goldratt",
            desc: "Obra indispensável sobre Teoria das Restrições e eficiência operacional. Base conceitual da V4.",
            info: "15-20h de leitura",
            cta: "COMPRAR NA AMAZON →",
            href: "https://www.amazon.com.br/Meta-processo-melhoria-cont%C3%ADnua-comemorativa/dp/6550474612/ref=asc_df_6550474612",
          },
          {
            emoji: "📕",
            title: "Blueprints — Winning by Design",
            author: "Winning by Design",
            desc: "Material essencial de Revenue Architecture. Modelos científicos de receita recorrente usados como referência na V4.",
            info: "Acesso online",
            cta: "ACESSAR BLUEPRINTS →",
            href: "https://winningbydesign.com/resources/blueprints/",
          },
          {
            emoji: "📄",
            title: "Revenue Architecture (Apostila)",
            author: "Resumo dos Modelos",
            desc: "Apostila com resumo dos principais modelos de Revenue Architecture. Material complementar aos blueprints.",
            info: "Livro físico/digital",
            cta: "COMPRAR NA AMAZON →",
            href: "https://www.amazon.com.br/Revenue-Architecture-English-Jacco-Kooij-ebook/dp/B0D276CWPQ/ref=sr_1_1",
          },
          {
            emoji: "🎬",
            title: "Revenue Architecture (Playlist)",
            author: "Scientific Models",
            desc: "Série de vídeos sobre os modelos científicos essenciais de Revenue Architecture.",
            info: "Playlist YouTube",
            cta: "ASSISTIR PLAYLIST →",
            href: "https://www.youtube.com/playlist?list=PLyxDgAG4FWYxk2GHIU2xbaBasb8hRjXzA",
          },
          {
            emoji: "🎬",
            title: "ROI Hunters sobre Growth",
            author: "ROI Hunters",
            desc: "Conteúdo prático e estratégico sobre crescimento acelerado de negócios.",
            info: "Playlist YouTube",
            cta: "ASSISTIR PLAYLIST →",
            href: "https://www.youtube.com/playlist?list=PLyxDgAG4FWYxk2GHIU2xbaBasb8hRjXzA",
          },
        ].map((item, index) => (
          <div key={item.title} className={`glass-card p-6 space-y-3 hover:shadow-lg transition-all flex flex-col ${index < 3 ? 'md:col-span-2' : 'md:col-span-3'}`}>
            <span className="text-3xl">{item.emoji}</span>
            <p className="text-base font-bold text-foreground">{item.title}</p>
            <p className="text-xs font-medium text-muted-foreground">{item.author}</p>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.desc}</p>
            <p className="text-xs text-muted-foreground">{item.info}</p>
            <div className="flex flex-wrap gap-2">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block gradient-primary text-white font-bold text-xs tracking-wide px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity shadow-lg"
              >
                {item.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Section05;
