const listaStatus = [true, false, true, false];

function transformarStatus(arrayBooleano) {
    const array = [];
    for (const status of arrayBooleano) {
        array.push(status ? "Concluído" : "Pendente");
    }
    return array;
}
console.log(transformarStatus(listaStatus));