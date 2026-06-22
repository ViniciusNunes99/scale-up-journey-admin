const Section04 = () => (
  <section className="min-h-screen flex flex-col justify-center px-6 py-16 md:px-16 relative overflow-hidden">
    <div className="max-w-3xl mx-auto w-full space-y-10 relative z-10 glass-container">
      <div>
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-2">Seção 04</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">A Imersão Presencial</h2>
      </div>

      <p className="text-foreground/80 leading-relaxed">
        O clímax da primeira fase do Scale. Será a experiência mais intensa e transformadora que você terá.
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        {[
          { icon: "📍", title: "Local", desc: "R. Sergio Fernandes Borges Soares, 1000\nDistrito Industrial, Campinas - SP\n13054-709", link: "https://maps.app.goo.gl/374J4hFnG1cKtV236" },
          { icon: "🎩", title: "Dress Code", desc: "Smart Casual\nConfortável para negócios" },
          { icon: "💻", title: "Levar", desc: "Notebook & Carregador\nNecessários para as aulas" },
        ].map((item) => (
          <div key={item.title} className="glass-card p-6 text-center space-y-2">
            <span className="text-3xl">{item.icon}</span>
            <p className="font-bold text-foreground">{item.title}</p>
            <p className="text-sm text-muted-foreground whitespace-pre-line">{item.desc}</p>
            {item.link && (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-block gradient-primary text-white font-bold text-xs tracking-wide px-4 py-2 rounded-lg hover:opacity-90 transition-opacity shadow-lg mt-2">
                ABRIR NO MAPS →
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="gradient-primary rounded-2xl p-6 grid grid-cols-3 gap-4 text-center shadow-lg">
        <div>
          <p className="text-3xl font-black text-white">3</p>
          <p className="text-xs text-white/80">Dias intensivos</p>
        </div>
        <div>
          <p className="text-3xl font-black text-white">30+</p>
          <p className="text-xs text-white/80">Horas de conteúdo</p>
        </div>
        <div>
          <p className="text-3xl font-black text-white">10+</p>
          <p className="text-xs text-white/80">Especialistas</p>
        </div>
      </div>

      <div className="glass-card p-8 space-y-5">
        <p className="text-lg font-bold text-foreground">Agenda do V4 Camp</p>
        {[
          { day: "Dia 1", topic: "Estratégia, Estrutura Organizacional e Partnership" },
          { day: "Dia 2", topic: "Modelo de Gestão e Processos (Implementação do Playbook EMPS)" },
          { day: "Dia 3", topic: "Sistemas, Rituais de Cultura e Operação Real com Cases de Sucesso" },
        ].map((d) => (
          <div key={d.day} className="flex items-start gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0">
            <span className="text-sm font-bold text-primary whitespace-nowrap">📅 {d.day}</span>
            <p className="text-sm text-muted-foreground">{d.topic}</p>
          </div>
        ))}
      </div>

      <div className="glass-card p-6 space-y-3">
        <p className="font-bold text-foreground">📍 Mais detalhes sobre a Imersão</p>
        <p className="text-sm text-muted-foreground">Conheça todos os detalhes sobre local, hospedagem, alimentação, transporte e logística.</p>
        <a
          href="https://imersaoscale.lovable.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block gradient-primary text-white font-bold text-xs tracking-wide px-6 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg"
        >
          ACESSAR PÁGINA DA IMERSÃO →
        </a>
      </div>
    </div>
  </section>
);

export default Section04;
