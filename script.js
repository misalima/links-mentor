// Definição das turmas e seus respectivos links
const turmasData = {
    // 2º Ano Manhã
    '2MA': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1FU59nwp7xL0V5xeY65EG0B7KUSoFAYhQ/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        ficha: 'https://docs.google.com/spreadsheets/d/19GEnLhkuandwUux0giJPckmdqZinvxCD/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        projeto: 'https://docs.google.com/spreadsheets/d/1oaD9wLoO8Plr9IR_-9fUOAvi5yWoSOKL/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    '2MB': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1493_b8xxsXyq_NQKfn5oP0Wj0yuKmmdN/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        ficha: 'https://docs.google.com/spreadsheets/d/1rqDwasbjH7jzrjZPE0QhZZ1lMQHT-C_S/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        projeto: 'https://docs.google.com/spreadsheets/d/1eSwZ7uFNhSnk7lA4eBWe3LrdFEwRfxbC/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    
    // 2º Ano Tarde
    '2TA': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1p67jrOWgBashyjjDKz0Cgp4uejofqlVc/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        ficha: 'https://docs.google.com/spreadsheets/d/1DELEoss23jl_WXNrwH7qn6EtF_SKWsae/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        projeto: 'https://docs.google.com/spreadsheets/d/1gi8qA_WEYkZVpEQU-Fpl4FUaF_Kx-V91/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    '2TB': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1zwNnEhEp5IEpGila6jrOaAu8YSks8AFz/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        ficha: 'https://docs.google.com/spreadsheets/d/1G6bz9RswfP4BF98vhSeaCiJ_IP0sVfkI/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        projeto: 'https://docs.google.com/spreadsheets/d/1KxdkKKKWcT692F7eXoxoMJzfE7ADqbMX/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    '2TC': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1fMVeI41te-V8MAtwXXI3uLblral8PBLw/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        ficha: 'https://docs.google.com/spreadsheets/d/10znqEJ4rNkwxEMhcKmwJ0_v_tIgtpccy/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        projeto: 'https://docs.google.com/spreadsheets/d/1S8nsfMpmrvwTw7i_fZLGL04QZxiqD-N4/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    '2TD': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1XeV361Ro-AEEddxBnSgGHsdfBWdz5SK1/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        ficha: 'https://docs.google.com/spreadsheets/d/1xRxIdLECci2ebw6LOCnBbb-pWCQHFtmP/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        projeto: 'https://docs.google.com/spreadsheets/d/1ML3PEAs3lMNKg3xWHYdXimDiYP106rYE/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    '2TE': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1v2VTNL7_u7gt1SOswX3bCK8omNbKkUOL/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        ficha: 'https://docs.google.com/spreadsheets/d/1FH5A_Hzn-sZRfY4SS-9AOYeQA7Xvp0Ov/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        projeto: 'https://docs.google.com/spreadsheets/d/1vO0nU1wlyPWUmu83QBbkhQxnDMevXnWP/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    '2TF': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1U1SUhw4O4nyWayv3ZHfWnrj_kfLzah26/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        ficha: 'https://docs.google.com/spreadsheets/d/179znsSM7WxTt4LGa2d5rH3qvcsayxJCw/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        projeto: 'https://docs.google.com/spreadsheets/d/1GK-g7O6zSD_rlprBdpNbwWj7Drp0JQS3/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    
    // 3º Ano Manhã
    '3MA': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1md5pDm-srD08QR__9Ti_RxjqmHHBK_Zp/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        ficha: 'https://docs.google.com/spreadsheets/d/11S9OfUDK--4fV8jF4Hx9RXxzldxl-5cz/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        projeto: 'https://docs.google.com/spreadsheets/d/10tG3gnX-o7cSLcQTAAJzHQD9ZFw6hCG4/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    '3MB': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1VUVjFKzKATp4s5QOiNlR3MGo6tr2uKzG/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        ficha: 'https://docs.google.com/spreadsheets/d/1KbkLdN-VVfx3hnEMWuUylYNzXrExEWtB/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        projeto: 'https://docs.google.com/spreadsheets/d/1sJguEIw3O-o1TSgvJoiE29be_cThcrIC/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    '3MC': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1C3FsC9M039Qychtg72LTqNzMhqcfyIrf/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        ficha: 'https://docs.google.com/spreadsheets/d/1t9sJeFHHyNwwlfpr-dpG3q1G3tZtG_xu/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        projeto: 'https://docs.google.com/spreadsheets/d/1cfSZB82gg7lHk_ptp58zLM3c55_Q5zcJ/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    '3MD': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1A_f6X-0j3d5UkfVYMxltVlb3SuoAaH-G/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        ficha: 'https://docs.google.com/spreadsheets/d/1ZGeMAGhkrcrIkqHX2_lZTdlQkeSRCa6B/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        projeto: 'https://docs.google.com/spreadsheets/d/1JtLVRo8FKQKpz_h1MUXDIlM4zrEK-ziZ/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    '3ME': {
        relatorio: 'https://docs.google.com/spreadsheets/d/15jZGxcixDwuPi8TCdK_JMWH_3qDg2Piy/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        ficha: 'https://docs.google.com/spreadsheets/d/1eU2FVam8jlHbQDvSf-QMSMZa3eq2Pw0r/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        projeto: 'https://docs.google.com/spreadsheets/d/1JtLVRo8FKQKpz_h1MUXDIlM4zrEK-ziZ/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    '3MF': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1KN-PmjVVyAguA538Ua_GH0i6soEbvtiW/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        ficha: 'https://docs.google.com/spreadsheets/d/1_wVx7RT0HcYuMhGiWaRanyGod45O0cTk/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        projeto: 'https://docs.google.com/spreadsheets/d/1ymVroCcwjP3F9FAwJMtnyiQe0rzKKeam/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    '3MG': {
        relatorio: 'https://docs.google.com/spreadsheets/d/11gD-6McjNaKp03YtFuEyJBnMDZmeWwaE/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        ficha: 'https://docs.google.com/spreadsheets/d/15TzVCVj5Vzy1_OwI9EZLeEvTvr4KHAjE/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        projeto: 'https://docs.google.com/spreadsheets/d/1Y4RSbPTed_EGc8uR0sIPFYld1u5rD1Ng/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    
    // 3º Ano Tarde
    '3TA': {
        relatorio: 'https://docs.google.com/spreadsheets/d/11kirPzXBLYhLlDhFpqMwwF-EpnMDDGtB/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        ficha: 'https://docs.google.com/spreadsheets/d/1-RhSdzREQG7OxT9ElSPwDLMNi3mMUwEJ/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        projeto: 'https://docs.google.com/spreadsheets/d/12oqBj7qshYg33zLHeDOi0_dnw9BZH7cO/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    '3TB': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1ICg8N3kwLZe6XaA0uEABYqx-dlJchH7n/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        ficha: 'https://docs.google.com/spreadsheets/d/1UAN9IArDLxiEMEecxLp7OyDaRe8M65P6/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        projeto: 'https://docs.google.com/spreadsheets/d/1MXXP0bW5H7lYXv0UD9p8jScjfyacF1vf/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
    },
    '3TC': {
        relatorio: 'https://docs.google.com/spreadsheets/d/1-s7DufQ8511rpveeBrIX2knSIVQThtz0/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        ficha: 'https://docs.google.com/spreadsheets/d/1-Vud7eQ0qZu5cSy3J0FGQ8oNOzwbHCJ_/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true',
        projeto: 'https://docs.google.com/spreadsheets/d/1P2BH2uYZy4rVb_wAL8HGjkQhIxJIaQwQ/edit?usp=drive_link&ouid=104051255084392386964&rtpof=true&sd=true'
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

// Função para criar o HTML de uma turma
function createTurmaCard(turma, data) {
    return `
        <div class="turma-card" data-turma="${turma}">
            <h3 class="turma-title">Turma ${turma}</h3>
            <div class="links-container">
                <a href="${data.relatorio}" target="_blank" class="link-btn relatorio">
                    📊 Relatório do Estudante Monitor
                </a>
                <a href="${data.ficha}" target="_blank" class="link-btn ficha">
                    📋 Ficha de Acompanhamento de Turma
                </a>
                <a href="${data.projeto}" target="_blank" class="link-btn projeto">
                    🎯 Acompanhamento de Projeto de Vida
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
        Object.entries(data).forEach(([tipo, link]) => {
            if (link.includes('SEU_LINK_AQUI')) {
                invalidLinks.push(`${turma} - ${tipo}`);
            }
        });
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
    localStorage.setItem('professorMentorState', JSON.stringify(state));
}

// Função para carregar estado do localStorage
function loadState() {
    const savedState = localStorage.getItem('professorMentorState');
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
function updateLink(turma, tipo, novoLink) {
    if (turmasData[turma] && turmasData[turma][tipo]) {
        turmasData[turma][tipo] = novoLink;
        renderTurmas();
        console.log(`Link atualizado: ${turma} - ${tipo}`);
    } else {
        console.error(`Turma ou tipo inválido: ${turma} - ${tipo}`);
    }
}

// Exportar função para uso no console (desenvolvimento)
window.updateLink = updateLink;