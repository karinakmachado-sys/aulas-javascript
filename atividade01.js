const prompt = require('prompt-sync')();

let Itens = [];

// ===========================
// ETAPA 2 - Regra de negócio
// ===========================

function RegraNegocio(preco) {
    if (preco < 100) {
        return "Comum";
    } else if (preco >= 100 && preco < 500) {
        return "Raro";
    } else {
        return "Lendário";
    }
}

// ===========================
// ETAPA 3 - Cadastro
// ===========================

for (let i = 0; i < 5; i++) {
    let nomeItem = "";

// Validação de dados

    while (nomeItem.trim() === "") {
        nomeItem = prompt(`Insira o nome do ${i+1}º item: `);
    }

let precoItem = NaN;

    while (isNaN(precoItem) || precoItem <= 0) {
        precoItem = parseFloat(prompt(`Insira o preço do ${i+1}º item: `));
    }

let raridadeItem = RegraNegocio(precoItem);

// ===========================
// ETAPA 1 - Ficha do item
// ===========================

// Criação do item

    let Item = {
        Nome: nomeItem,
        Preco: precoItem,
        Raridade: raridadeItem,
        Estoque: 12,
        Promocao: ((i+1) % 2 === 0),
        Destaque: (precoItem > 500)
    };

// Guardar na array 

    Itens.push(Item);
}

// ===========================
// ETAPA 4 - Estoque (while)
// ===========================

console.table(Itens);

let opcao = -1;
console.log(`\n⊰⋯⋯ SIMULAÇÃO DE VENDA ⋯⋯⊱\n`);

// Valida para aceitar apenas índices válidos de 0 a 4

while (isNaN(opcao) || opcao < 0 || opcao >= Itens.length) {
    opcao = parseInt(prompt(`\nEscolha um item de 0 a ${Itens.length - 1} para simular a venda: `));
}

let itemSelecionado = Itens[opcao];

// Decrementa 1 unidade por vez e mostra uma mensagem até que o estoque chegue a zero

while (itemSelecionado.Estoque > 0) {
    itemSelecionado.Estoque -= 1;
    console.log(`Vendeu o item ${itemSelecionado.Nome}, quantidade restante: ${itemSelecionado.Estoque}`);
}

// ===========================
// ETAPA 5 - Tabela com os itens
// ===========================

// Chamado novamente para mostrar que o item vendido zerou

console.log(`\n⊰⋯⋯ CATÁLOGO DE VENDAS ⋯⋯⊱\n`);
console.table(Itens);