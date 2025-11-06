// Este arquivo DEVE ser carregado ANTES do script.js no HTML!
const cardapioData = [
    {
        name: "Expresso Clássico", 
        description: "Puro e intenso, o verdadeiro sabor do café.",
        price: "R$ 7,50", 
        category: "cafe-quente", 
        imageUrl: "espresso-classico.jpg"
    },
    {
        name: "Torta de Maçã",
        description: "Feita com maçãs frescas e um toque de canela.",
        price: "R$ 18,00",
        category: "tortas-doces", 
        imageUrl: "torta-de-maca.jpg"
    },
    {
        name: "Pão de Queijo Gourmet",
        description: "Receita mineira com queijo canastra, crocante por fora e macio por dentro.",
        price: "R$ 9,00",
        category: "pasteis-salgados", 
        imageUrl: "pao-de-queijo-gourmet.jpg"
    },
    {
        name: "Chá Gelado de Hibisco",
        description: "Refrescante, com morangos e adoçado naturalmente.",
        price: "R$ 12,00",
        category: "bebidas",
        imageUrl: "cha-de-hibisco.jpg"
    },

    // --- CAFÉS QUENTES ---
    {
        name: "Espresso Intenso",
        description: "Um shot forte e aveludado, com blend 100% Arábica.",
        price: "R$ 6,00",
        category: "cafe-quente",
        imageUrl: "intenso-espresso.jpg" 
    },
    {
        name: "Cappuccino Clássico",
        description: "Espresso, leite vaporizado e uma camada generosa de espuma, polvilhado com cacau.",
        price: "R$ 12,00",
        category: "cafe-quente",
        imageUrl: "cafe-cappuccino.jpg"
    },
    {
        name: "Latte de Baunilha",
        description: "O conforto do leite cremoso com um toque doce de baunilha natural.",
        price: "R$ 15,00",
        category: "cafe-quente",
        imageUrl: "latte-baunilla.jpg" // SEM O "img/"
    },
    {
        name: "Mocha Picante (Novidade)",
        description: "Chocolate amargo, espresso, leite e um toque sutil de pimenta e canela. Aquece a alma.",
        price: "R$ 17,00",
        category: "cafe-quente",
        imageUrl: "mocha-picante.jpg"
    },
    {
        name: "Café de Coador Especial",
        description: "Grãos selecionados, coado na hora para ressaltar notas cítricas e florais.",
        price: "R$ 9,00",
        category: "cafe-quente",
        imageUrl: "especial-de-coador.jpg"
    },

    // --- CAFÉS GELADOS ---
    {
        name: "Cold Brew da Casa",
        description: "Extraído por 18 horas. Sabor suave, baixa acidez e refrescância máxima.",
        price: "R$ 14,00",
        category: "cafe-gelado",
        imageUrl: "cold-brew.jpg"
    },
    {
        name: "Affogato de Caramelo",
        description: "Sorvete de creme regado com um shot de espresso quente e calda de caramelo salgado.",
        price: "R$ 18,00",
        category: "cafe-gelado",
        imageUrl: "affogato-de-caramelo.jpg"
    },
    {
        name: "Iced Chai Latte (Novo)",
        description: "Blend gelado de especiarias (cardamomo, gengibre, canela) com leite cremoso e espresso.",
        price: "R$ 19,00",
        category: "cafe-gelado",
        imageUrl: "iced-chai-latte.jpg"
    },
    {
        name: "Frappuccino Moca",
        description: "Gelo, café, leite, chocolate e chantilly. Perfeito para os dias quentes.",
        price: "R$ 21,00",
        category: "cafe-gelado",
        imageUrl: "frappuccino-mocca.jpg"
    },

    // --- TORTAS DOCES ---
    {
        name: "Torta Holandesa Clássica",
        description: "Creme aerado, biscoito maizena e cobertura de chocolate meio amargo.",
        price: "R$ 16,00",
        category: "tortas-doces",
        imageUrl: "torta-holandesa.jpg"
    },
    {
        name: "Cheesecake de Frutas Vermelhas",
        description: "Base crocante, recheio cremoso e geleia de morango e amora da fazenda.",
        price: "R$ 18,00",
        category: "tortas-doces",
        imageUrl: "cheeasecake-frutas-vermelhas.jpg"
    },
    {
        name: "Torta de Limão Siciliano",
        description: "Recheio azedinho e suave merengue maçaricado.",
        price: "R$ 15,00",
        category: "tortas-doces",
        imageUrl: "torta-limao-siciliano.jpg"
    },

    // --- DOCES ---
    {
        name: "Brownie de Nozes",
        description: "Intenso e úmido, com crosta crocante e recheio de nozes pecan.",
        price: "R$ 11,00",
        category: "doces",
        imageUrl: "brownie-de-nozes.jpg"
    },
    {
        name: "Pudim de Leite Condensado",
        description: "Receita da vovó, textura perfeita e calda caramelizada.",
        price: "R$ 13,00",
        category: "doces",
        imageUrl: "pudim-leite-condensado.jpg"
    },
    {
        name: "Muffin de Blueberry",
        description: "Fofinho, com mirtilos frescos e cobertura streusel.",
        price: "R$ 9,00",
        category: "doces",
        imageUrl: "muffin-blueberry.jpg"
    },
    
    // --- QUICHES (SALGADOS) ---
    {
        name: "Quiche de Alho-Poró e Queijo",
        description: "Massa amanteigada e recheio cremoso de alho-poró fresco e queijo gruyère.",
        price: "R$ 19,00",
        category: "quiches-salgados",
        imageUrl: "quiche-de-alho-poro.jpg"
    },
  
{
    name: "Quiche de Palmito com Tomate Seco",
    description: "Opção vegetariana e leve, com toque de manjericão.",
    price: "R$ 19,00",
    category: "quiches-salgados",
    imageUrl: "quiche-palmito.jpg" 
},
    
    // --- PASTEIS & SALGADOS ---
    {
        name: "Empanada de Carne Seca",
        description: "Massa levemente adocicada recheada com carne seca desfiada e catupiry.",
        price: "R$ 14,00",
        category: "pasteis-salgados",
        imageUrl: "empanada-carne-seca.jpg"
    },

{
    name: "Pão de Queijo Recheado",
    description: "Pão de queijo gigante recheado com peito de peru e cream cheese.",
    price: "R$ 15,00",
    category: "pasteis-salgados",
    imageUrl: "pao-queijo-recheado.jpg" 
},
    {
        name: "Coxinha de Frango com Catupiry",
        description: "A clássica brasileira: massa macia e muito recheio cremoso.",
        price: "R$ 12,00",
        category: "pasteis-salgados",
        imageUrl: "coxinha-catupiry.jpg"
    },

    // --- ESPECIARIAS & CHÁS ---

    {name: "Chá Earl Grey",
    description: "Clássico chá preto com aroma cítrico e notas de bergamota.",
    price: "R$ 8,00",
    category: "especiarias-chas",
    imageUrl: "earl-grey.jpg" 
},
    {
        name: "Chocolate Quente Cremoso",
        description: "Feito com chocolate belga e leite integral, finalizado com raspas de chocolate.",
        price: "R$ 16,00",
        category: "especiarias-chas",
        imageUrl: "chololate-quente.jpg"
    },
    {
        name: "Golden Milk (Cúrcuma Latte)",
        description: "Leite quente, cúrcuma, gengibre e canela. Anti-inflamatório e reconfortante.",
        price: "R$ 14,00",
        category: "especiarias-chas",
        imageUrl: "golden-milk.jpg"
    },
    
    // --- BEBIDAS REFRESCANTES ---
{
    name: "Suco de Laranja Natural",
    description: "Espremido na hora, sem adição de açúcar.",
    price: "R$ 10,00",
    category: "bebidas",
    imageUrl:"suco.jpg" 
},
    {
        name: "Limonada Suíça com Hortelã",
        description: "Limonada cremosa e gelada com um toque refrescante de hortelã.",
        price: "R$ 11,00",
        category: "bebidas",
        imageUrl: "limonada-suica.jpg"
    },
    
{
    name: "Água Saborizada",
    description: "Água com rodelas de pepino, limão e alecrim (cortesia da casa).",
    price: "R$ 0,00",
    category: "bebidas",
    imageUrl: "agua-saborizada.jpg" 
},
];

// As categorias devem ser definidas aqui para que o JS possa criar os botões de filtro
const menuCategories = [
    "Todos", 
    "cafe-quente", 
    "cafe-gelado",
    "tortas-doces", 
    "doces", 
    "quiches-salgados",
    "pasteis-salgados",
    "especiarias-chas",
    "bebidas"
];

// Mapeamento para exibir os nomes bonitos dos botões
const categoryMap = {
    "Todos": "Todos os Itens",
    "cafe-quente": "Cafés Quentes",
    "cafe-gelado": "Cafés Gelados",
    "tortas-doces": "Tortas & Doces",
    "doces": "Doces Extras",
    "quiches-salgados": "Quiches",
    "pasteis-salgados": "Pastéis & Salgados",
    "especiarias-chas": "Especiarias e Chás",
    "bebidas": "Bebidas Refrescantes"
};                   
// 🚨 CORREÇÃO 2: MOVENDO O DOMContentLoaded PARA AQUI 🚨

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------
    // 1. FUNCIONALIDADE DO MENU RESPONSIVO (para todas as páginas)
    // ----------------------------------------------------------------
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            menuToggle.classList.toggle('active');
        });

        // Fecha o menu ao clicar em um link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    document.body.classList.remove('menu-open');
                    menuToggle.classList.remove('active');
                }
            });
        });
    }

    // ----------------------------------------------------------------
    // 2. CARREGAMENTO E FILTRO DO CARDÁPIO (específico para cardapio.html)
    // ----------------------------------------------------------------
    const menuListContainer = document.getElementById('menu-list-content');
    const filterContainer = document.querySelector('.filter-controls');

    // Verifica se os elementos do cardápio existem (ou seja, estamos na página cardapio.html)
    if (menuListContainer && filterContainer) {
        
        // Função para buscar os dados do Cardápio
        function fetchMenuData() {
            // Agora a variável cardapioData está acessível e definida.
            if (typeof cardapioData === 'undefined') {
                 console.error("Erro: A variável 'cardapioData' não foi definida. Os dados estão faltando!");
                 return null;
            }
            return cardapioData;
        }

        // Função para criar o HTML de um item do cardápio
        function createMenuItemHTML(item) {
            
            // 🚨 CORREÇÃO 3: CAMINHO DA IMAGEM AJUSTADO PARA SER APENAS 'img/' + nome do arquivo 🚨
            return `
                <div class="menu-item" data-category="${item.category}">
                    <img src="./img/${item.imageUrl}" alt="${item.name}" class="item-img">
                    <div class="item-info">
                        <h3>${item.name}</h3>
                        <p class="description">${item.description}</p>
                        <p class="price">${item.price}</p>
                    </div>
                </div>
            `;
        }


        // Função principal para renderizar a lista de cardápio
        function renderMenu(filter = 'Todos') {

            const data = fetchMenuData();
            if (!data) return;

            // Limpa o container antes de adicionar novos itens
            menuListContainer.innerHTML = '';

            const itemsToRender = (filter === 'Todos')
                ? data
                : data.filter(item => item.category.toLowerCase() === filter.toLowerCase());

            if (itemsToRender.length === 0) {
                 menuListContainer.innerHTML = '<p class="empty-message">Nenhum item encontrado nesta categoria. Tente outra!</p>';
                 return;
            }

            itemsToRender.forEach(item => {
                menuListContainer.innerHTML += createMenuItemHTML(item);
            });
            
            // Atualiza a classe 'active' do botão de filtro
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            const activeBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
            if (activeBtn) activeBtn.classList.add('active');
        }
        
        // Função para criar e adicionar os botões de filtro dinamicamente
        function createFilterButtons() {
            if (typeof menuCategories === 'undefined' || typeof categoryMap === 'undefined') {
                 console.error("Erro: As variáveis de categoria não foram definidas.");
                 return;
            }
            
            filterContainer.innerHTML = '';

            menuCategories.forEach((categoryKey) => {
                const button = document.createElement('button');
                button.classList.add('btn', 'filter-btn');
                
                button.setAttribute('data-filter', categoryKey);
                button.textContent = categoryMap[categoryKey] || categoryKey;
                
                // Adiciona o evento de clique
                button.addEventListener('click', (e) => {
                    const filter = e.currentTarget.getAttribute('data-filter');
                    renderMenu(filter);
                });
                
                filterContainer.appendChild(button);
            });
        }

        // Função de Inicialização da Página de Cardápio
        function initMenuPage() {
            createFilterButtons();
            renderMenu('Todos');    
        }

        // Executa a inicialização do menu
        initMenuPage();
    }
    // --- FIM DA LÓGICA ESPECÍFICA DO CARDÁPIO ---


    // ----------------------------------------------------------------
    // 3. VALIDAÇÃO DO FORMULÁRIO DE CONTATO (específico para contato.html)
    // ----------------------------------------------------------------
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        
        contactForm.addEventListener('submit', function(e) {
            
            e.preventDefault();
            
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();
            
            let isValid = true;
            
            // --- Validação dos campos obrigatórios ---
            if (nome === "") {
                 alert('Por favor, preencha o campo "Seu Nome".');
                 isValid = false;
                 document.getElementById('nome').focus();
            } else if (email === "") {
                 alert('Por favor, preencha o campo "Seu Email".');
                 isValid = false;
                 document.getElementById('email').focus();
            } else if (mensagem === "") {
                 alert('Por favor, preencha o campo "Mensagem".');
                 isValid = false;
                 document.getElementById('mensagem').focus();
            }
            // Adicionar validação de formato de email (simples)
            else if (!email.includes('@') || !email.includes('.')) {
                 alert('Por favor, insira um endereço de e-mail válido.');
                 isValid = false;
                 document.getElementById('email').focus();
            }

            // Se for válido, podemos tentar enviar (Simulação)
            if (isValid) {
                 alert('Mensagem enviada com sucesso! (Simulação)');
                 e.target.reset(); // Limpa o formulário
            }
        });
    }

}); // Fim do DOMContentLoaded
