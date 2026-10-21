// atividade 1
console.log('\n          ---- ATIVIDADE 1 - e-mail \n')

const usuarios = [
    { nome: 'Ana', ativo: true },
    { nome: 'Beto', ativo: false },
    { nome: 'Caio', ativo: true },
    { nome: 'Duda', ativo: false }
];

const usuariosAtivos = usuarios.filter(usuario => usuario.ativo);

console.log(usuariosAtivos, '\n');

// atividade 2
console.log('\n          ---- ATIVIDADE 2 - 10% \n')

const produtos = [ { nome: 'Teclado', preco: 100 }, { nome: 'Mouse', preco: 50 } ];

const Desconto = produtos.map(produto => ({
    ...produto,
    preco: produto.preco * 10
}));

console.log(Desconto)

// atividade 3
console.log('\n          ---- ATIVIDADE 3 - Pagamento \n')

const carrinho = [25.50, 10.00, 100.00, 5.00];

const valorFinal = carrinho.reduce(
    (total, preco) => total + preco, 0
);

console.log(valorFinal.toFixed(2));

// atividade 4
console.log('\n          ---- ATIVIDADE 4 - Convidados \n')

const nomesRepetidos = ['João', 'Maria', 'João', 'Pedro', 'Maria'];

function lista(nomes) {
    return [...new Set(nomes)];
}
console.log(nomesRepetidos);

// atividade 5
console.log('\n          ---- ATIVIDADE 5 - Produtos \n')

const apiProdutos = [ 
{ id: 101, nome: 'monitor led', preco: 899.9 }, 
{ id: 102, nome: 'teclado mecanico', preco: 250.0 }, 
{ id: 103, nome: 'mouse gamer', preco: 125.45 } 
];

const formatados = apiProdutos.map(produto => ({
    ...produto,
    nome: produto.nome.charAt(0).toUpperCase() + produto.nome.slice(1),
    precoFormatado: `R$ ${produto.preco.toFixed(2).replace('.', ',')}`
}));

console.log(formatados)