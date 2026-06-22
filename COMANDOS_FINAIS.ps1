# ════════════════════════════════════════════════════════════════════════════
# SCALE-UP JOURNEY ADMIN - COMANDOS FINAIS PARA VERCEL
# ════════════════════════════════════════════════════════════════════════════

# EXECUTE ISTO NO POWERSHELL:

Write-Host "🚀 INICIANDO DEPLOY NO VERCEL..." -ForegroundColor Green
Write-Host ""

# Navegar para o projeto
cd "C:\Users\vinicius.nunes_v4com\.claude\projects\scale-up-journey-admin"

Write-Host "✅ Navegado para pasta do projeto" -ForegroundColor Green
Write-Host ""
Write-Host "Próximo passo: Vercel CLI vai abrir" -ForegroundColor Yellow
Write-Host ""
Write-Host "Instruções:" -ForegroundColor Cyan
Write-Host "  1. Clique em 'Y' para continuar com Vercel"
Write-Host "  2. Selecione sua conta (vinicius.nunes@v4company.com)"
Write-Host "  3. Escolha 'Project' (novo)"
Write-Host "  4. Deixe o resto com valores padrão"
Write-Host "  5. Aperte Enter para deployar"
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor White
Write-Host ""

# EXECUTAR VERCEL
vercel

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor White
Write-Host ""
Write-Host "✅ DEPLOY CONCLUÍDO!" -ForegroundColor Green
Write-Host ""
Write-Host "Seu site está ao vivo em: https://scale-up-journey-admin-xxxxx.vercel.app" -ForegroundColor Cyan
Write-Host ""
Write-Host "PRÓXIMOS PASSOS:" -ForegroundColor Yellow
Write-Host "  1. Abra o link no navegador"
Write-Host "  2. Compartilhe com seu time!"
Write-Host "  3. Para atualizar: git push (e Vercel atualiza automaticamente)"
Write-Host ""
Write-Host "Documentação: Leia os arquivos .md no projeto para mais detalhes" -ForegroundColor Gray
Write-Host ""

# ════════════════════════════════════════════════════════════════════════════
# FIM
# ════════════════════════════════════════════════════════════════════════════
