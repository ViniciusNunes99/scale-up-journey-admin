# ✅ Checklist de Pré-Deployment

Use este checklist antes de colocar seu projeto no ar em produção.

---

## 🔍 Verificações de Código

- [ ] **npm run lint** sem erros ou warnings
  ```bash
  npm run lint
  ```

- [ ] **npm run test** passando (se houver testes)
  ```bash
  npm run test
  ```

- [ ] **npm run build** sem erros
  ```bash
  npm run build
  ```

- [ ] **Build preview** funcionando
  ```bash
  npm run preview
  ```

- [ ] Sem console.log() em produção
  - Remover todos os `console.log()` do código

- [ ] Sem arquivos temporários ou de debug
  - Remover arquivos `.tmp`, `.bak`, etc

- [ ] TypeScript: sem erros de tipo
  ```bash
  npx tsc --noEmit
  ```

---

## 🔐 Segurança

- [ ] **Variáveis sensíveis em .env**
  - Nunca fazer hardcode de senhas, tokens, chaves
  - Usar `.env.local` ou secrets do provider

- [ ] **Dependências atualizadas**
  ```bash
  npm outdated
  npm audit
  npm audit fix
  ```

- [ ] **Remover pacotes não usados**
  ```bash
  npm prune
  ```

- [ ] **HTTPS/SSL habilitado**
  - Certificado válido instalado
  - Redirecionar HTTP → HTTPS

- [ ] **Headers de segurança configurados**
  ```
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  ```

- [ ] **CORS configurado corretamente**
  - Apenas domínios autorizados

- [ ] **Sem informações sensíveis em cookies**
  - Usar HttpOnly flag
  - Usar SameSite=Strict

- [ ] **Validação de entrada do usuário**
  - Nunca confiar em dados do cliente
  - Validar no servidor também

---

## 📊 Performance

- [ ] **Tamanho do bundle** razoável
  ```bash
  npm run build
  # Verificar tamanho de dist/
  ```

- [ ] **Imagens otimizadas**
  - Usar formatos modernos (WebP)
  - Comprimir antes de usar
  - Usar lazy loading quando apropriado

- [ ] **Código splitting** implementado
  - Rotas lazy loaded
  - Componentes pesados splitados

- [ ] **Cache configurado**
  - Static assets: max-age=31536000
  - HTML: no-cache
  - API: conforme necessário

- [ ] **CDN habilitado** (se usando Vercel/Netlify)
  - Distribuição global de conteúdo

- [ ] **Minificação ativada**
  - Vite já faz por padrão em build

- [ ] **Gzip/Brotli compressão** ativada
  - Servidor deve comprimir respostas

---

## 🌐 Deployment

- [ ] **Arquivo .env.production criado**
  - Com variáveis corretas para produção

- [ ] **Base URL correta em vite.config.ts**
  - Se usar subpath, ajustar `base: '/caminho/'`

- [ ] **Domain/DNS apontando**
  - Testes de DNS propagação (24-48h)
  - Registros A ou CNAME corretos

- [ ] **Environment variables no provider**
  - Vercel: Settings > Environment Variables
  - Netlify: Build & Deploy > Environment
  - Seu servidor: .env.production

- [ ] **Redirect rules configuradas**
  - SPA: redirecionar /* para /index.html
  - Exemplo: `/old-url` → `/new-url`

- [ ] **Headers customizados** (se necessário)
  - Security headers já configurados nos arquivos

- [ ] **Webhooks/deploys** automáticos configurados
  - GitHub → Vercel/Netlify
  - Auto-deploy em novo push

---

## 📱 Compatibilidade

- [ ] **Testado em Chrome, Firefox, Safari, Edge**
  - Desktop e mobile

- [ ] **Responsivo** em todos os tamanhos
  - Mobile: 320px+
  - Tablet: 768px+
  - Desktop: 1024px+

- [ ] **JavaScript desabilitado?**
  - Aplicação mostra fallback gracioso?

- [ ] **Performance Mobile** testado
  - Usar Lighthouse: https://developers.google.com/web/tools/lighthouse
  - Score > 80 em Performance

- [ ] **Acessibilidade** verificada
  - Lighthouse: > 80 em Accessibility
  - Tab navigation funciona
  - Screen reader compatível

---

## 🔄 CI/CD (se tiver)

- [ ] **GitHub Actions / GitLab CI configurado**
  - Testes rodam automaticamente
  - Build falha se testes falharem
  - Deploy só após testes passarem

- [ ] **Pre-commit hooks** (husky)
  - Lint obrigatório antes de commit
  - Build check before push

---

## 🚨 Monitoramento

- [ ] **Error Tracking** configurado
  - Sentry, LogRocket, ou similar
  - Alertas para errors críticos

- [ ] **Analytics** integrado
  - Google Analytics ou Plausible
  - Rastrear eventos importantes

- [ ] **Uptime monitoring** configurado
  - UptimeRobot ou Statuspage
  - Alerta se site cair

- [ ] **Performance monitoring**
  - Web Vitals rastreados
  - Alertas se performance degradar

- [ ] **Logs configurados**
  - Acesso ao histórico de erros
  - Dados de uso

---

## 📋 Documentação

- [ ] **README.md** atualizado
  - Instruções de setup
  - Como reportar bugs
  - Como contribuir

- [ ] **API documentation** (se aplicável)
  - Endpoints documentados
  - Exemplos de uso

- [ ] **Variáveis de ambiente** documentadas
  - O que cada uma faz
  - Valores default

- [ ] **Deployment process** documentado
  - Como fazer rollback
  - Como escalar
  - Contato de emergência

---

## 👥 Equipe

- [ ] **Acesso ao hosting** delegado
  - Mínimo 2 pessoas com acesso
  - Senhas em gerenciador seguro

- [ ] **Runbook/playbook** criado
  - O que fazer se site cair
  - Contatos de emergência
  - Procedure de rollback

- [ ] **On-call rotation** estabelecido
  - Quem monitora cada turno
  - Escalação de responsabilidades

---

## 🎯 Último Check

- [ ] **Data/hora do deployment** agendada
  - Melhor em horário de expediente
  - Evitar madrugada ou feriados

- [ ] **Rollback plan** pronto
  - Como reverter se der problema
  - Scripts de rollback preparados

- [ ] **Comunicação** com stakeholders
  - Time informado sobre deploy
  - Usuários notificados de downtime

- [ ] **Backup** atualizado
  - Database backups
  - Code backups (git)
  - Config backups

---

## ✅ Deploy!

Se tudo passou no checklist acima:

```bash
# Build final
npm run build

# Deploy (escolha sua plataforma)
vercel      # ou
netlify deploy --prod    # ou
docker build -t app . && docker push registry/app
```

**Depois do deploy:**
1. Testar o site ao vivo
2. Monitorar logs por erros
3. Validar todas as funcionalidades
4. Comunicar sucesso ao time

---

## 🚨 Se algo der errado

1. **Verificar logs**
   - Console do navegador (F12)
   - Logs do servidor
   - Error tracking service

2. **Rollback imediato**
   ```bash
   # Se usando git
   git revert HEAD
   npm run build
   # Re-deploy versão anterior
   ```

3. **Comunicar o incidente**
   - Time deve saber imediatamente
   - Post-mortem depois

---

**Boa sorte no deploy! 🚀**
