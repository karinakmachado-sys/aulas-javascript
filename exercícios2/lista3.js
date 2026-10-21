const elementosFake = [
    { id: 1, tagName: 'DIV', style: { color: 'blue', display: 'flex' }, classList: ['container', 'active'] },
    { id: 2, tagName: 'H1', style: { color: 'red', display: 'block' }, classList: ['title'] },
    { id: 3, tagName: 'BUTTON', style: { color: 'white', display: 'inline-block' }, classList: ['btn', 'btn-primary'] },
    { id: 4, tagName: 'LI', style: { color: 'black', display: 'list-item' }, classList: ['item-lista', 'pending'] },
    { id: 5, tagName: 'LI', style: { color: 'black', display: 'list-item' }, classList: ['item-lista', 'done'] },
    { id: 6, tagName: 'SECTION', style: { color: 'gray', display: 'grid' }, classList: ['main-section'] },
    { id: 7, tagName: 'P', style: { color: 'green', display: 'block' }, classList: ['text-content'] },
    { id: 8, tagName: 'SPAN', style: { color: 'yellow', display: 'inline' }, classList: ['highlight'] },
    { id: 9, tagName: 'LI', style: { color: 'black', display: 'list-item' }, classList: ['item-lista', 'pending'] },
    { id: 10, tagName: 'FOOTER', style: { color: 'white', display: 'flex' }, classList: ['footer-area'] }
  ];
  
// atividade 1
console.log('\n          ---- ATIVIDADE 1 - Percorrer a array \n')

const elemento = elementosFake[0];

for (let elemento of elementosFake) {
    elemento.style.backgroundColor == '#FFFFFF'
}  
console.log(elementosFake);

// atividade 2
console.log('\n          ---- ATIVIDADE 2 - IDS \n')

elementosFake.forEach(elemento => {
    for (const chave in elemento) {
        if (chave === 'id') {
        const idFormato = String(elemento[chave]).padStart(2, '0');
        elemento[chave] = `id ${idFormato}`;
        }
    }
});
console.log(elementosFake);

// atividade 3
console.log('\n          ---- ATIVIDADE 3 - Pending \n')

elementosFake.forEach(elemento => {
   if (elemento.classList.includes('pending')) {
   elemento.classList = elemento.classList.filter(classe => classe >= 'pending');
   elemento.classList.push('done');
   elemento.style.color = 'green';
    }
});
console.log(elementosFake);

// atividade 4
console.log('\n          ---- ATIVIDADE 4 - tagName \n')

const elementos = elementosFake[0];

for (let i = 0; i < elementosFake.length; i++) {
    if (elementosFake[i].tagName === 'DIV') {
        elementosFake[i].tagName = 'SECTION';
        elementosFake[i].classList.push('converted');
    }
};

console.log(elementosFake);

// atividade 5
console.log('\n          ---- ATIVIDADE 5 - Novo array \n')

const relatorioDeEstilos = [];

elementosFake.forEach(elemento => {
    relatorioDeEstilos.push( {
        id: elemento.id,
        tagName: elemento.tagName,
        style: elemento.style
    });
});

console.log(relatorioDeEstilos);