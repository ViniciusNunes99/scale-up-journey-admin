# 🚀 Vercel Setup Guide

## Conectar Vercel com seu repositório GitHub

Depois que você fizer push para GitHub (ver instruções acima), siga estes passos:

### 1. Abrir Vercel
- Acesse https://vercel.com
- Faça login com sua conta `vinicius.nunes@v4company.com`

### 2. Importar Projeto
- Clique em "Add New..." > "Project"
- Clique em "Import Git Repository"
- Selecione GitHub
- Procure por `scale-up-journey-admin`
- Clique em "Import"

### 3. Configurar Projeto
- **Project Name**: `scale-up-journey-admin`
- **Framework**: Vite
- **Root Directory**: ./
- ✅ Tudo já está pré-configurado no `vercel.json`

### 4. Environment Variables (Opcional)
Se precisar de variáveis de ambiente, clique em "Environment Variables" e adicione:
```
VITE_API_URL = https://api.seu-dominio.com
VITE_ENV = production
```

### 5. Deploy!
- Clique em "Deploy"
- Vercel vai compilar e fazer deploy automaticamente
- Você recebe um URL: https://scale-up-journey-admin.vercel.app

### 6. Custom Domain (Opcional)
Se quiser usar seu próprio domínio:
- Vá em Project Settings > Domains
- Adicione seu domínio
- Configure DNS (instruções aparecem lá)

---

## Deploy automático após cada git push

Pronto! Agora sempre que você fizer push para GitHub, Vercel vai:
1. ✅ Fazer download do código
2. ✅ Compilar (npm run build)
3. ✅ Deploy automático
4. ✅ Enviar link da preview

---

## Status do Deploy

Você pode acompanhar em:
- https://vercel.com/dashboard (seu painel)
- Cada push no GitHub gera uma "Preview Deployment"
- Deploy para produção após merge em `main`

---

## 🆘 Troubleshooting

### Build falha no Vercel
- Clique em Deployments > ver logs
- Copie o erro e corrija no código local
- Faça novo push

### Site em branco
- Abra DevTools (F12)
- Veja aba Console por erros
- Verifique `.env.production` no Vercel Settings

### Domínio não funciona
- Espere 24-48h para DNS propagar
- Verifique configuração de DNS em Vercel > Domains

---

## Resumo Rápido

```
GitHub (seu código)
        ↓
      git push
        ↓
    GitHub recebe
        ↓
Vercel vê mudança
        ↓
   npm run build
        ↓
    Deploy automático
        ↓
   Seu site no ar! 🚀
```

Boa sorte! 🎉
