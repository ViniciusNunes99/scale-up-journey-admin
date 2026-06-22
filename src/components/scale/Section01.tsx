const steps = [
  { n: 1, title: "Encontro Executivo", desc: "Um encontro oficial de boas-vindas com líderes da matriz para integrar sua turma, alinhar expectativas e iniciar a jornada.", status: "A nossa equipa entrará em contacto para confirmar a data e o horário exatos." },
  { n: 2, title: "Imersão Presencial (EMPS)", desc: "3 dias intensos de treinamento sobre estratégia, gestão, partnership e processos. Mentoria com franqueados seniores.", status: "A data já foi marcada. Detalhes serão divulgados no grupo oficial." },
  { n: 3, title: "Vivência Real (Shadowing)", desc: "30 a 40 dias imersos numa operação V4. Acompanhamento prático das frentes de ADM, Pessoas, Execução & Gestão e Receita.", status: "Data e funcionamento serão divulgados no grupo." },
  { n: 4, title: "Plano de Crescimento", desc: "Construção de um plano real de crescimento para a futura operação com simulação de clientes reais e apresentação do Business Plan.", status: "Apresentação final do plano de crescimento." },
  { n: 5, title: "Encerramento e Forecasting", desc: "Conclusão da formação com entrega do plano final e projeções de crescimento para a sua operação.", status: "Apresentação final do plano de crescimento." },
];

const Section01 = () => (
  <section className="min-h-screen flex flex-col justify-center px-6 py-16 md:px-16 relative overflow-hidden">
    <div className="max-w-3xl mx-auto w-full space-y-10 relative z-10 glass-container">
      <div>
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-2">Seção 01</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">O que você adquiriu</h2>
      </div>

      <p className="text-foreground/80 leading-relaxed text-lg">
        Parabéns! Você acaba de fazer um investimento estratégico em transformação de negócios. O Scale Program é muito mais que um curso ou treinamento. É um processo de imersão desenhado para preparar você a operar com alta performance.
      </p>

      <div>
        <p className="text-sm font-bold uppercase tracking-widest text-foreground mb-6">Sua jornada em 5 etapas</p>
        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.n} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-black text-lg shadow-lg">
                {step.n}
              </div>
              <div className="flex-1 glass-card p-6">
                <p className="text-lg font-bold text-foreground mb-2">{step.title}</p>
                <p className="text-sm text-muted-foreground mb-3">{step.desc}</p>
                <p className="text-xs font-medium text-primary bg-primary/10 inline-block px-3 py-1 rounded-full">
                  {step.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/5 border-l-4 border-primary rounded-r-xl p-6">
        <p className="text-sm text-foreground leading-relaxed">
          <span className="font-bold">Importante:</span> O Scale não é um programa passivo. Você será desafiado e orientado em cada passo. O objetivo é transformar a forma como você pensa e opera negócios.
        </p>
      </div>
    </div>
  </section>
);

export default Section01;
