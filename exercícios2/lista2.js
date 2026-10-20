const elementosFake = [
  {
    tagName: 'DIV',
    style: { color: 'blue', display: 'flex' },
    classList: ['container', 'active']
  },
  {
    tagName: 'H1',
    style: { color: 'red', display: 'block' },
    classList: ['title']
  },
  {
    tagName: 'BUTTON',
    style: { color: 'white', display: 'inline-block' },
    classList: ['btn', 'btn-primary']
  }
];

// atividade 1
console.log('\n          ---- ATIVIDADE 1 - Acessar o primeiro elemento \n')
const primeiroElemento = elementosFake[0];

for (let chave in primeiroElemento) {
  console.log(chave, primeiroElemento[chave]);
}

// atividade 2
console.log('\n          ---- ATIVIDADE 2 - Verificar a cor \n')

for (let i = 0; i < elementosFake.length; i++) {
  if (elementosFake[i].style.color == 'blue') {
    console.log(`O elemento ${elementosFake[i].tagName} é azul!!`);
  }
}

// atividade 3
console.log('\n          ---- ATIVIDADE 3 - String formatada \n')

elementosFake.forEach(elementos => {
  console.log(`Tag: ${elementos.tagName}`);
});

// atividade 4 
console.log('\n          ---- ATIVIDADE 4 - Modificação da 3 \n')

elementosFake.forEach(elemento => {
  const quantidadeClasse = elemento.classList ? elemento.classList.length : 0;
  console.log(`Tag: ${elemento.classList} 
----- Quantidade de classes: ${quantidadeClasse} \n`);
});

// Atividade 5 
console.log('          ---- ATIVIDADE 5 - Modificação da 4 \n')

elementosFake.forEach(elemento => {
  const quantidadeClasse = elemento.classList ? elemento.classList.length : 0;
  const listaClasses = elemento.classList ? elemento.classList.join(', ') : '';
  console.log(`Nome: ${listaClasses} 
----- Quantidade de classes: ${quantidadeClasse} \n`);
});