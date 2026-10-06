const frete = (valorCompra) => valorCompra > 150 ? 'Frete grátis' : 'Cobrar frete';
console.log(frete(200))