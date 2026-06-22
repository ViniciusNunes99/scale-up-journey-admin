#!/bin/bash

# 🚀 Scale-Up Journey Admin - Setup Script
# Este script configura o projeto para desenvolvimento e deployment

set -e

echo "==================================="
echo "🚀 Scale-Up Journey Admin"
echo "Setup & Deployment Tool"
echo "==================================="
echo ""

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Função para printar com cores
print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warn() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# 1. Verificar pré-requisitos
echo "📋 Verificando pré-requisitos..."

if ! command -v node &> /dev/null; then
    print_error "Node.js não encontrado. Instale em https://nodejs.org/"
    exit 1
fi
print_status "Node.js $(node --version)"

if ! command -v npm &> /dev/null; then
    print_error "npm não encontrado."
    exit 1
fi
print_status "npm $(npm --version)"

echo ""

# 2. Menu principal
echo "O que você deseja fazer?"
echo ""
echo "1) 🛠️  Setup para desenvolvimento local"
echo "2) 🏗️  Build para produção"
echo "3) 📦 Preparar para Vercel"
echo "4) 📦 Preparar para Netlify"
echo "5) 🐳 Preparar para Docker"
echo "6) ✅ Executar testes"
echo "7) 🔍 Executar linting"
echo ""
read -p "Escolha uma opção (1-7): " choice

case $choice in
    1)
        echo ""
        print_status "Iniciando setup de desenvolvimento..."
        echo ""

        if [ ! -d "node_modules" ]; then
            echo "📦 Instalando dependências..."
            npm install
            print_status "Dependências instaladas"
        else
            print_warn "node_modules já existe"
        fi

        if [ ! -f ".env.local" ]; then
            echo "📝 Criando .env.local..."
            cp .env.example .env.local
            print_status "Arquivo .env.local criado (edite conforme necessário)"
        fi

        echo ""
        print_status "Setup completo! Execute: npm run dev"
        ;;

    2)
        echo ""
        print_status "Compilando para produção..."
        npm run lint
        npm run test
        npm run build
        echo ""
        print_status "Build completo! Pasta 'dist/' pronta para deploy"
        echo "Para visualizar: npm run preview"
        ;;

    3)
        echo ""
        print_status "Preparando para Vercel..."

        if [ ! -f "vercel.json" ]; then
            cat > vercel.json << 'EOF'
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "outputDirectory": "dist"
}
EOF
            print_status "vercel.json criado"
        fi

        if command -v vercel &> /dev/null; then
            echo ""
            read -p "Fazer deploy agora? (s/n): " deploy
            if [ "$deploy" = "s" ]; then
                vercel
            fi
        else
            print_warn "Vercel CLI não instalado. Execute: npm install -g vercel"
        fi
        ;;

    4)
        echo ""
        print_status "Preparando para Netlify..."

        if [ ! -f "netlify.toml" ]; then
            cat > netlify.toml << 'EOF'
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
EOF
            print_status "netlify.toml criado"
        fi

        if command -v netlify &> /dev/null; then
            echo ""
            read -p "Fazer deploy agora? (s/n): " deploy
            if [ "$deploy" = "s" ]; then
                netlify deploy --prod
            fi
        else
            print_warn "Netlify CLI não instalado. Execute: npm install -g netlify-cli"
        fi
        ;;

    5)
        echo ""
        print_status "Preparando para Docker..."

        if [ ! -f "Dockerfile" ]; then
            cat > Dockerfile << 'EOF'
# Build stage
FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
EOF
            print_status "Dockerfile criado"
        fi

        if [ ! -f ".dockerignore" ]; then
            cat > .dockerignore << 'EOF'
node_modules
npm-debug.log
dist
.git
.gitignore
README.md
.env
.env.local
EOF
            print_status ".dockerignore criado"
        fi

        if command -v docker &> /dev/null; then
            echo ""
            read -p "Fazer build da imagem Docker agora? (s/n): " build
            if [ "$build" = "s" ]; then
                docker build -t scale-up-journey-admin .
                print_status "Imagem Docker criada! Execute: docker run -p 3000:3000 scale-up-journey-admin"
            fi
        else
            print_warn "Docker não instalado. Instale em https://docker.com/"
        fi
        ;;

    6)
        echo ""
        print_status "Executando testes..."
        npm run test
        ;;

    7)
        echo ""
        print_status "Executando linting..."
        npm run lint
        ;;

    *)
        print_error "Opção inválida!"
        exit 1
        ;;
esac

echo ""
echo "==================================="
print_status "Operação concluída!"
echo "==================================="
