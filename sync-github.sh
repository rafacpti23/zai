#!/bin/bash

# Script para sincronizar o projeto com o GitHub
# Execute este script manualmente após configurar suas credenciais Git

echo "🚀 Sincronizando projeto com GitHub..."
echo "Repositório: https://github.com/rafacpti23/zai.git"
echo ""

# Verificar se estamos no diretório correto
if [ ! -f "package.json" ]; then
    echo "❌ Erro: Este script deve ser executado no diretório raiz do projeto"
    exit 1
fi

# Verificar status do Git
echo "📋 Verificando status do Git..."
git status

# Verificar remote configurado
echo ""
echo "🔗 Verificando repositório remoto..."
git remote -v

# Tentar fazer push
echo ""
echo "⬆️  Tentando fazer push para o GitHub..."
echo "Se for solicitado, insira suas credenciais do GitHub"
echo ""

git push -u origin master

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Sucesso! Projeto sincronizado com GitHub"
    echo "🌐 Acesse seu repositório: https://github.com/rafacpti23/zai"
else
    echo ""
    echo "❌ Falha ao fazer push. Verifique suas credenciais do GitHub"
    echo ""
    echo "💡 Soluções possíveis:"
    echo "   1. Configure suas credenciais Git:"
    echo "      git config --global user.name 'Seu Nome'"
    echo "      git config --global user.email 'seu.email@example.com'"
    echo ""
    echo "   2. Use Personal Access Token (PAT) do GitHub"
    echo "   3. Configure SSH keys"
fi