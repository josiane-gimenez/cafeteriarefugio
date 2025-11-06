// Este arquivo DEVE ser carregado ANTES do script.js no HTML!
const cardapioData = [

    {
        name: "Expresso Clássico", 
        description: "Puro e intenso, o verdadeiro sabor do café.",
        price: "R$ 7,50", 
        category: "cafe-quente", 
        imageUrl: "img/espresso-classico.jpg"
    },
    {
        name: "Torta de Maçã",
        description: "Feita com maçãs frescas e um toque de canela.",
        price: "R$ 18,00",
        category: "tortas-doces", 
        imageUrl: "img/torta-de-maca.jpg"
    },
    {
        name: "Pão de Queijo Gourmet",
        description: "Receita mineira com queijo canastra, crocante por fora e macio por dentro.",
        price: "R$ 9,00",
        category: "pasteis-salgados", 
        imageUrl: "img/pao-de-queijo-gourmet.jpg"
    },
    {
        name: "Chá Gelado de Hibisco",
        description: "Refrescante, com morangos e adoçado naturalmente.",
        price: "R$ 12,00",
        category: "bebidas",
        imageUrl: "img/cha-de-hibisco.jpg"
    },

    // --- CAFÉS QUENTES ---
    {
        name: "Espresso Intenso",
        description: "Um shot forte e aveludado, com blend 100% Arábica.",
        price: "R$ 6,00",
        category: "cafe-quente",
        imageUrl: "img/intenso-espresso.jpg" 
    },
    {
        name: "Cappuccino Clássico",
        description: "Espresso, leite vaporizado e uma camada generosa de espuma, polvilhado com cacau.",
        price: "R$ 12,00",
        category: "cafe-quente",
        imageUrl: "img/cafe-cappuccino.jpg"
    },
    {
        name: "Latte de Baunilha",
        description: "O conforto do leite cremoso com um toque doce de baunilha natural.",
        price: "R$ 15,00",
        category: "cafe-quente",
        imageUrl: "cafe-latte-baunilha.jpg"
    },
    {
        name: "Mocha Picante (Novidade)",
        description: "Chocolate amargo, espresso, leite e um toque sutil de pimenta e canela. Aquece a alma.",
        price: "R$ 17,00",
        category: "cafe-quente",
        imageUrl: "img/mocha-picante.jpg"
    },
    {
        name: "Café de Coador Especial",
        description: "Grãos selecionados, coado na hora para ressaltar notas cítricas e florais.",
        price: "R$ 9,00",
        category: "cafe-quente",
        imageUrl: "img/especial-de-coador.jpg"
    },

    // --- CAFÉS GELADOS ---
    {
        name: "Cold Brew da Casa",
        description: "Extraído por 18 horas. Sabor suave, baixa acidez e refrescância máxima.",
        price: "R$ 14,00",
        category: "cafe-gelado",
        imageUrl: "img/cold-brew.jpg"
    },
    {
        name: "Affogato de Caramelo",
        description: "Sorvete de creme regado com um shot de espresso quente e calda de caramelo salgado.",
        price: "R$ 18,00",
        category: "cafe-gelado",
        imageUrl: "img/affogato-de-caramelo.jpg"
    },
    {
        name: "Iced Chai Latte (Novo)",
        description: "Blend gelado de especiarias (cardamomo, gengibre, canela) com leite cremoso e espresso.",
        price: "R$ 19,00",
        category: "cafe-gelado",
        imageUrl: "img/iced-chai-latte.jpg"
    },
    {
        name: "Frappuccino Moca",
        description: "Gelo, café, leite, chocolate e chantilly. Perfeito para os dias quentes.",
        price: "R$ 21,00",
        category: "cafe-gelado",
        imageUrl: "img/frappuccino-mocca.jpg"
    },

    // --- TORTAS DOCES ---
    {
        name: "Torta Holandesa Clássica",
        description: "Creme aerado, biscoito maizena e cobertura de chocolate meio amargo.",
        price: "R$ 16,00",
        category: "tortas-doces",
        imageUrl: "img/torta-holandesa.jpg"
    },
    {
        name: "Cheesecake de Frutas Vermelhas",
        description: "Base crocante, recheio cremoso e geleia de morango e amora da fazenda.",
        price: "R$ 18,00",
        category: "tortas-doces",
        imageUrl: "img/cheeasecake-frutas-vermelhas.jpg"
    },
    {
        name: "Torta de Limão Siciliano",
        description: "Recheio azedinho e suave merengue maçaricado.",
        price: "R$ 15,00",
        category: "tortas-doces",
        imageUrl: "img/torta-limao-siciliano.jpg"
    },

    // --- DOCES ---
    {
        name: "Brownie de Nozes",
        description: "Intenso e úmido, com crosta crocante e recheio de nozes pecan.",
        price: "R$ 11,00",
        category: "doces",
        imageUrl: "img/brownie-de-nozes.jpg"
    },
    {
        name: "Pudim de Leite Condensado",
        description: "Receita da vovó, textura perfeita e calda caramelizada.",
        price: "R$ 13,00",
        category: "doces",
        imageUrl: "img/pudim-leite-condensado.jpg"
    },
    {
        name: "Muffin de Blueberry",
        description: "Fofinho, com mirtilos frescos e cobertura streusel.",
        price: "R$ 9,00",
        category: "doces",
        imageUrl: "img/muffin-blueberry.jpg"
    },
    
    // --- QUICHES (SALGADOS) ---
    {
        name: "Quiche de Alho-Poró e Queijo",
        description: "Massa amanteigada e recheio cremoso de alho-poró fresco e queijo gruyère.",
        price: "R$ 19,00",
        category: "quiches-salgados",
        imageUrl: "img/quiche-de-alho-poro.jpg"
    },
    {
        name: "Quiche de Palmito com Tomate Seco",
        description: "Opção vegetariana e leve, com toque de manjericão.",
        price: "R$ 19,00",
        category: "quiches-salgados",
        imageUrl: "salgado-quiche-palmito.jpg"
    },
    
    // --- PASTEIS & SALGADOS ---
    {
        name: "Empanada de Carne Seca",
        description: "Massa levemente adocicada recheada com carne seca desfiada e catupiry.",
        price: "R$ 14,00",
        category: "pasteis-salgados",
        imageUrl: "img/empanada-carne-seca.jpg"
    },
    {
        name: "Pão de Queijo Recheado",
        description: "Pão de queijo gigante recheado com peito de peru e cream cheese.",
        price: "R$ 15,00",
        category: "pasteis-salgados",
        imageUrl: "salgado-pao-queijo.jpg"
    },
    {
        name: "Coxinha de Frango com Catupiry",
        description: "A clássica brasileira: massa macia e muito recheio cremoso.",
        price: "R$ 12,00",
        category: "pasteis-salgados",
        imageUrl: "img/coxinha-catupiry.jpg"
    },

    // --- ESPECIARIAS & CHÁS ---
    {
        name: "Chá Earl Grey",
        description: "Clássico chá preto com aroma cítrico e notas de bergamota.",
        price: "R$ 8,00",
        category: "especiarias-chas",
        imageUrl: "img/text_to_image (5).jpg"
    },
    {
        name: "Chocolate Quente Cremoso",
        description: "Feito com chocolate belga e leite integral, finalizado com raspas de chocolate.",
        price: "R$ 16,00",
        category: "especiarias-chas",
        imageUrl: "img/chololate-quente.jpg"
    },
    {
        name: "Golden Milk (Cúrcuma Latte)",
        description: "Leite quente, cúrcuma, gengibre e canela. Anti-inflamatório e reconfortante.",
        price: "R$ 14,00",
        category: "especiarias-chas",
        imageUrl: "img/golden-milk.jpg"
    },
    
    // --- BEBIDAS REFRESCANTES ---
    {
        name: "Suco de Laranja Natural",
        description: "Espremido na hora, sem adição de açúcar.",
        price: "R$ 10,00",
        category: "bebidas",
        imageUrl:"img/suco.jpg"
    },
    {
        name: "Limonada Suíça com Hortelã",
        description: "Limonada cremosa e gelada com um toque refrescante de hortelã.",
        price: "R$ 11,00",
        category: "bebidas",
        imageUrl: "img/limonada-suica.jpg"
    },
    {
        name: "Água Saborizada",
        description: "Água com rodelas de pepino, limão e alecrim (cortesia da casa).",
        price: "R$ 0,00",
        category: "bebidas",
        imageUrl: "img/agua-saborizada.jpg"
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
