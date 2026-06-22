const Section06 = () => (
  <section className="min-h-screen flex flex-col justify-center px-6 py-16 md:px-16 relative overflow-hidden">
    <div className="max-w-3xl mx-auto w-full space-y-10 relative z-10 glass-container">
      <div>
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-2">Seção 06</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Suporte & Dúvidas</h2>
      </div>

      <div className="space-y-4">
        <p className="text-lg font-bold text-foreground">Onde tirar dúvidas?</p>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              icon: "💬",
              title: "Grupo de WhatsApp",
              desc: "Seu primeiro ponto de contato. Aqui você terá acesso a toda a equipa, mentores e outras pessoas do programa.",
            },
            {
              icon: "🤳",
              title: "WhatsApp Direto",
              desc: "Precisa tirar uma dúvida mais rápido? Pode nos chamar direto no WhatsApp:",
              cta: { label: "CHAMAR AGORA", href: "https://wa.me/5519971640438" },
            },
            {
              icon: "🤝",
              title: "Mentores Designados",
              desc: "Durante a vivência, você terá mentores dedicados que te guiarão. Eles serão apresentados no Encontro Executivo.",
            },
          ].map((item) => (
            <div key={item.title} className="glass-card p-6 space-y-3 hover:shadow-lg transition-all">
              <span className="text-2xl">{item.icon}</span>
              <p className="font-semibold text-foreground">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
              {item.cta && (
                <a
                  href={item.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block gradient-primary text-white font-bold text-xs tracking-wide px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity shadow-lg"
                >
                  {item.cta.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/5 border-l-4 border-primary rounded-r-xl p-6">
        <p className="text-sm text-foreground">
          ⚡ <span className="font-bold">Importante:</span> Respeitamos seu tempo. Qualquer dúvida será respondida em até 24 horas. Não fique com dúvidas pendentes!
        </p>
      </div>
    </div>
  </section>
);

export default Section06;
