// Importar dados das turmas do script principal
// Dados das turmas - mesmos dados do script.js, mas vamos usar apenas os links de 'relatorio'
const turmasData = {
    // 2º Ano Manhã
    '2MA': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1FU59nwp7xL0V5xeY65EG0B7KUSoFAYhQ/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    '2MB': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1493_b8xxsXyq_NQKfn5oP0Wj0yuKmmdN/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    
    // 2º Ano Tarde
    '2TA': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1p67jrOWgBashyjjDKz0Cgp4uejofqlVc/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    '2TB': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1zwNnEhEp5IEpGila6jrOaAu8YSks8AFz/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    '2TC': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1fMVeI41te-V8MAtwXXI3uLblral8PBLw/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    '2TD': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1XeV361Ro-AEEddxBnSgGHsdfBWdz5SK1/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    '2TE': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1v2VTNL7_u7gt1SOswX3bCK8omNbKkUOL/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    '2TF': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1U1SUhw4O4nyWayv3ZHfWnrj_kfLzah26/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    
    // 3º Ano Manhã
    '3MA': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1md5pDm-srD08QR__9Ti_RxjqmHHBK_Zp/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    '3MB': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    '3MC': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    '3MD': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    '3ME': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    '3MF': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    '3MG': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    
    // 3º Ano Tarde
    '3TA': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    '3TB': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    '3TC': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    }
};

// Elementos do DOM
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const turmasContainer = document.getElementById('turmasContainer');
const noResults = document.getElementById('noResults');
const filterButtons = document.querySelectorAll('.filter-btn');

// Variáveis de controle
let currentFilter = 'all';
let currentSearch = '';

// Função para criar o HTML de uma turma (apenas com link do relatório)
function createTurmaCard(turma, data) {
    return `
        <div class="turma-card" data-turma="${turma}">
            <h3 class="turma-title">Turma ${turma}</h3>
            <div class="links-container">
                <a href="${data.relatorio}" target="_blank" class="link-btn relatorio">
                    📊 Relatório do Estudante Monitor
                </a>
            </div>
        </div>
    `;
}

// Função para renderizar as turmas
function renderTurmas() {
    const filteredTurmas = Object.entries(turmasData).filter(([turma]) => {
        // Filtro por categoria
        let matchesFilter = true;
        if (currentFilter !== 'all') {
            matchesFilter = turma.startsWith(currentFilter);
        }
        
        // Filtro por pesquisa
        let matchesSearch = true;
        if (currentSearch) {
            matchesSearch = turma.toLowerCase().includes(currentSearch.toLowerCase());
        }
        
        return matchesFilter && matchesSearch;
    });
    
    if (filteredTurmas.length === 0) {
        turmasContainer.style.display = 'none';
        noResults.style.display = 'block';
    } else {
        turmasContainer.style.display = 'grid';
        noResults.style.display = 'none';
        
        turmasContainer.innerHTML = filteredTurmas
            .map(([turma, data]) => createTurmaCard(turma, data))
            .join('');
    }
}

// Função para lidar com a pesquisa
function handleSearch() {
    currentSearch = searchInput.value.trim();
    renderTurmas();
}

// Função para limpar a pesquisa
function clearSearch() {
    searchInput.value = '';
    currentSearch = '';
    renderTurmas();
}

// Função para lidar com os filtros
function handleFilter(filter) {
    currentFilter = filter;
    
    // Atualizar botões ativos
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
    });
    
    renderTurmas();
}

// Event listeners
searchInput.addEventListener('input', handleSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

clearSearchBtn.addEventListener('click', clearSearch);

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        handleFilter(btn.dataset.filter);
    });
});

// Função para adicionar animação de entrada
function addEntranceAnimation() {
    const cards = document.querySelectorAll('.turma-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Função para validar links (opcional - para desenvolvimento)
function validateLinks() {
    const invalidLinks = [];
    
    Object.entries(turmasData).forEach(([turma, data]) => {
        if (data.relatorio.includes('SEU_LINK_AQUI') || data.relatorio.includes('Ej8Ej8')) {
            invalidLinks.push(`${turma} - relatório`);
        }
    });
    
    if (invalidLinks.length > 0 && window.location.hostname === 'localhost') {
        console.warn('Links que precisam ser atualizados:', invalidLinks);
    }
}

// Função para adicionar atalhos de teclado
function addKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K para focar na pesquisa
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
        
        // Escape para limpar pesquisa
        if (e.key === 'Escape') {
            clearSearch();
            searchInput.blur();
        }
    });
}

// Função para salvar estado no localStorage
function saveState() {
    const state = {
        filter: currentFilter,
        search: currentSearch
    };
    localStorage.setItem('professorMentorMonitoresState', JSON.stringify(state));
}

// Função para carregar estado do localStorage
function loadState() {
    const savedState = localStorage.getItem('professorMentorMonitoresState');
    if (savedState) {
        const state = JSON.parse(savedState);
        currentFilter = state.filter || 'all';
        currentSearch = state.search || '';
        
        searchInput.value = currentSearch;
        
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === currentFilter) {
                btn.classList.add('active');
            }
        });
    }
}

// Salvar estado quando houver mudanças
searchInput.addEventListener('input', saveState);
filterButtons.forEach(btn => {
    btn.addEventListener('click', saveState);
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    renderTurmas();
    addEntranceAnimation();
    validateLinks();
    addKeyboardShortcuts();
    
    // Adicionar tooltip para os atalhos
    searchInput.setAttribute('title', 'Pressione Ctrl+K para focar aqui ou Escape para limpar');
});

// Função utilitária para atualizar links (para facilitar manutenção)
function updateLink(turma, novoLink) {
    if (turmasData[turma]) {
        turmasData[turma].relatorio = novoLink;
        renderTurmas();
        console.log(`Link atualizado: ${turma} - relatório`);
    } else {
        console.error(`Turma inválida: ${turma}`);
    }
}

// Exportar função para uso no console (desenvolvimento)
window.updateLink = updateLink;