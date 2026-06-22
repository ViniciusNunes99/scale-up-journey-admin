# 🚀 Scale-Up Journey Admin - Guia de Deployment

## 📋 Informações do Projeto

- **Nome**: Scale-Up Journey Admin
- **Stack**: React 18 + TypeScript + Vite
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Runtime**: Node.js (npm/bun)
- **Package Manager**: npm (pode usar bun também)

---

## 🏃 Quick Start - Desenvolvimento Local

### Pré-requisitos
- Node.js 18+ ou Bun
- npm/yarn/bun instalado

### Passos

```bash
# 1. Instalar dependências
npm install
# ou com Bun:
bun install

# 2. Executar servidor de desenvolvimento
npm run dev
# ou com Bun:
bun run dev

# 3. Acessar em http://localhost:5173
```

---

## 🏗️ Build para Produção

### Compilar aplicação

```bash
# Build normal (otimizado)
npm run build

# Build em modo development
npm run build:dev

# Preview do build
npm run preview
```

A pasta `dist/` será criada com os arquivos estáticos prontos para deploy.

---

## 🌐 Opções de Deployment

### 1️⃣ **Vercel** (Recomendado - Mais rápido)

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Ou conectar diretamente no painel Vercel:
- Conectar repositório Git
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

### 2️⃣ **Netlify**

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy
```

**netlify.toml** (já configurado):
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### 3️⃣ **GitHub Pages**

Atualizar `vite.config.ts`:
```ts
export default {
  base: '/scale-up-journey-admin/',
  // ...
}
```

```bash
npm run build
# Fazer push da pasta dist/
```

### 4️⃣ **Servidor próprio (Node.js/Docker)**

```bash
# Build
npm run build

# Servir com http-server (teste)
npx http-server dist -p 3000

# Ou com Express
npm install express
# Criar server.js:
```

```javascript
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.static(join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

```bash
node server.js
```

### 5️⃣ **Docker**

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview"]
```

```bash
# Build e run
docker build -t scale-up-journey-admin .
docker run -p 3000:3000 scale-up-journey-admin
```

---

## 📊 Environment Variables

Se o projeto precisar de variáveis de ambiente:

Criar arquivo `.env.production`:
```env
VITE_API_URL=https://api.seu-dominio.com
VITE_APP_NAME=Scale-Up Journey Admin
```

Acessar no código:
```tsx
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## ✅ Checklist de Deploy

- [ ] Dependências instaladas e testadas (`npm install && npm run dev`)
- [ ] Build testado localmente (`npm run build && npm run preview`)
- [ ] `.gitignore` atualizado (node_modules, dist, .env)
- [ ] Environment variables configuradas
- [ ] Tests passando (`npm run test`)
- [ ] Linting sem erros (`npm run lint`)
- [ ] Cache limpo no navegador (Ctrl+Shift+Delete)
- [ ] Certificado SSL configurado (HTTPS)
- [ ] DNS apontando corretamente
- [ ] Monitoramento de erros configurado (Sentry, LogRocket)

---

## 🔍 Troubleshooting

### "Module not found" errors
```bash
npm install
npm run build
```

### Porta 5173 já em uso
```bash
npm run dev -- --port 3000
```

### Build falha com TypeScript errors
```bash
npx tsc --noEmit  # Ver erros
npm run lint  # Ver problemas de linting
```

### App em branco após deploy
- Verificar console do navegador (F12) por erros
- Confirmar que `dist/index.html` existe
- Validar variáveis de ambiente
- Limpar cache do navegador

---

## 📞 Suporte

Para mais informações:
- [Documentação Vite](https://vitejs.dev/guide/ssr.html)
- [Guia Vercel](https://vercel.com/docs)
- [Guia Netlify](https://docs.netlify.com)
- [shadcn/ui Docs](https://ui.shadcn.com)

