const Section03 = () => (
  <section className="min-h-screen flex flex-col justify-center px-6 py-16 md:px-16 relative overflow-hidden">
    <div className="max-w-3xl mx-auto w-full space-y-10 relative z-10 glass-container">
      <div>
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-2">Seção 03</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Próximos passos</h2>
      </div>

      <div className="space-y-6">
        {[
          {
            n: 1,
            title: "Acesse o grupo de WhatsApp",
            desc: "Você receberá um convite para o grupo oficial. Aqui compartilharemos datas, atualizações e avisos importantes durante todo o programa.",
            extra: "💬 Ou me chame direto pelo WhatsApp se tiver dúvidas:",
            cta: { label: "CHAMAR NO WHATSAPP →", href: "https://wa.me/555194546083" },
          },
          {
            n: 2,
            title: "Comece a preparação obrigatória",
            desc: "Assista ao curso do Cientista do Marketing e estude todos os materiais disponibilizados: livro \"A Meta\", Blueprints da Winning by Design, apostila e playlist de Revenue Architecture, e playlist ROI Hunters sobre Growth. Isso é fundamental para o melhor aproveitamento da formação completa.",
          },
          {
            n: 3,
            title: "Aguarde o contato da equipa",
            desc: "Em breve, a equipa entrará em contato para confirmar sua data do Encontro Executivo. Tenha seu calendário à mão.",
          },
        ].map((step) => (
          <div key={step.n} className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center text-primary font-bold text-sm">
              {step.n}
            </div>
            <div className="flex-1 space-y-3">
              <p className="text-lg font-bold text-foreground">{step.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              {step.extra && <p className="text-sm text-muted-foreground">{step.extra}</p>}
              {step.cta && (
                <a
                  href={step.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block gradient-primary text-white font-bold text-xs tracking-wide px-6 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg"
                >
                  {step.cta.label}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Section03;
