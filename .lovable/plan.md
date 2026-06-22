## Plano: Solicitação de acesso ao curso via WhatsApp

Na Seção 05, o card destacado "Assista ao Curso: Cientista do Marketing (EAD)" hoje leva para um link da Eduzz. Vamos trocar para que o aluno solicite o acesso pelo mesmo WhatsApp de suporte.

### Alteração em `src/components/scale/Section05.tsx`

- Trocar o `href` do botão de `https://chk.eduzz.com/39ZB237B9E?utm_source=v4formacaoscale` para `https://wa.me/5519936197284?text=Quero%20solicitar%20acesso%20ao%20curso%20Cientista%20do%20Marketing`
- Trocar o label do botão de `CADASTRAR E RECEBER ACESSO →` para `SOLICITAR ACESSO NO WHATSAPP →`
- Atualizar a descrição do card para refletir o novo fluxo: "Este é o curso fundamental do nosso método de gestão e operação. Para receber seu acesso, solicite diretamente pelo nosso WhatsApp."
- Remover (ou ajustar) a linha "📧 Você também pode aguardar o time entrar em contato com o acesso." já que agora o canal único é o WhatsApp

1 arquivo, alteração mínima e localizada no card destacado.
