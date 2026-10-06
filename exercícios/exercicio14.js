const calcularTotal = function(precos) {
    let total = 0;
    for (const preco of precos) {
        total += preco;
    }
    return total;
}
console.log(calcularTotal([29.90, 15.00, 50.10]))