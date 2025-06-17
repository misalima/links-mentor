# Programa Professor Mentor - Links das Planilhas

Esta é uma página web simples e funcional para organizar e acessar facilmente os links das planilhas do Programa Professor Mentor, organizados por turma.

## 📋 Funcionalidades

### Página Principal (index.html)
- **Organização por turmas**: Todas as turmas (2MA, 2MB, 2TA-2TF, 3MA-3MG, 3TA-3TC) organizadas em cards
- **Três tipos de documentos por turma**:
  - 📊 Relatório do Estudante Monitor
  - 📋 Ficha de Acompanhamento de Turma
  - 🎯 Acompanhamento de Projeto de Vida
- **Barra de pesquisa**: Pesquise por turma específica
- **Filtros por categoria**: 2º Ano Manhã, 2º Ano Tarde, 3º Ano Manhã, 3º Ano Tarde
- **Design responsivo**: Funciona bem em desktop, tablet e celular
- **Atalhos de teclado**: Ctrl+K para pesquisar, Escape para limpar
- **Persistência**: Lembra da última pesquisa e filtro utilizados

### Página dos Estudantes Monitores (monitores.html)
- **Acesso direto aos relatórios**: Exibe apenas os links dos relatórios dos estudantes monitores
- **Mesma funcionalidade de pesquisa e filtros** da página principal
- **Layout simplificado**: Foco nos links de interesse dos monitores
- **Navegação fácil**: Link de volta para a página principal

## 🚀 Como usar

### Página Principal
1. **Abrir a página**: Simplesmente abra o arquivo `index.html` em qualquer navegador
2. **Acessar página dos monitores**: Clique no link "📊 Acessar Links dos Estudantes Monitores"
3. **Pesquisar**: Digite o nome da turma na barra de pesquisa (ex: "2MA", "3TB")
4. **Filtrar**: Use os botões de filtro para ver apenas turmas específicas
5. **Acessar planilhas**: Clique nos botões coloridos para abrir as planilhas no Google Sheets

### Página dos Estudantes Monitores
1. **Acesso direto**: Apenas os links dos relatórios dos estudantes monitores
2. **Mesmas funcionalidades**: Pesquisa e filtros funcionam igual à página principal
3. **Voltar**: Use o link "← Voltar para Todas as Planilhas" para retornar

## ⚙️ Configuração dos Links

Para adicionar os links reais das planilhas:

### Página Principal (script.js)
1. Abra o arquivo `script.js`
2. Localize o objeto `turmasData` no início do arquivo
3. Substitua os links de exemplo pelos links reais das suas planilhas do Google Sheets

### Página dos Monitores (monitores.js)
1. Abra o arquivo `monitores.js`
2. Localize o objeto `turmasData` no início do arquivo
3. Substitua os links de exemplo pelos links reais dos relatórios dos estudantes monitores

### Exemplo de configuração:

```javascript
'2MA': {
    relatorio: 'https://docs.google.com/spreadsheets/d/1ABC123.../edit#gid=0',
    ficha: 'https://docs.google.com/spreadsheets/d/1DEF456.../edit#gid=0',
    projeto: 'https://docs.google.com/spreadsheets/d/1GHI789.../edit#gid=0'
},
```

## 🎨 Personalização

### Cores dos botões
No arquivo `styles.css`, você pode alterar as cores dos botões modificando as classes:
- `.link-btn.relatorio` - Botão verde muito escuro (Relatório)
- `.link-btn.ficha` - Botão verde escuro (Ficha)
- `.link-btn.projeto` - Botão verde claro (Projeto)

### Adicionar novas turmas
No arquivo `script.js`, adicione novas entradas no objeto `turmasData`:

```javascript
'NOVA_TURMA': {
    relatorio: 'link_do_relatorio',
    ficha: 'link_da_ficha',
    projeto: 'link_do_projeto'
}
```

## 📱 Compatibilidade

- ✅ Chrome, Firefox, Safari, Edge (versões modernas)
- ✅ Dispositivos móveis (iOS, Android)
- ✅ Tablets
- ✅ Funciona offline (após o primeiro carregamento)

## 🔧 Estrutura dos arquivos

```
📁 projeto/
├── 📄 index.html      # Página principal (todas as planilhas)
├── 📄 monitores.html  # Página dos estudantes monitores
├── 📄 styles.css      # Estilos e design (compartilhado)
├── 📄 script.js       # Funcionalidades da página principal
├── 📄 monitores.js    # Funcionalidades da página dos monitores
└── 📄 README.md       # Este arquivo
```

## 💡 Dicas de uso

1. **Atalhos úteis**:
   - `Ctrl + K`: Focar na barra de pesquisa
   - `Escape`: Limpar pesquisa
   - `Enter`: Executar pesquisa

2. **Pesquisa inteligente**: A pesquisa funciona com partes do nome (ex: "2M" mostra todas as turmas do 2º ano manhã)

3. **Links externos**: Todos os links abrem em nova aba para não perder a página principal

4. **Estado persistente**: A página lembra da sua última pesquisa quando você voltar

## 🛠️ Manutenção

### Atualizar links via console do navegador:

**Página principal:**
```javascript
updateLink('2MA', 'relatorio', 'novo_link_aqui');
```

**Página dos monitores:**
```javascript
updateLink('2MA', 'novo_link_aqui');
```

## 📞 Suporte

Se precisar de ajuda para configurar ou personalizar a página, as principais áreas a serem modificadas são:

1. **Links das planilhas**: `script.js` → objeto `turmasData`
2. **Cores e design**: `styles.css`
3. **Texto e títulos**: `index.html`

---

**Desenvolvido por Misael Alisson Ursulino de Lima - 2024**  
**Para facilitar o acesso às planilhas do Programa Professor Mentor** 🎓