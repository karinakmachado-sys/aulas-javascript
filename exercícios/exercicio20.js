const ganho = [1500, 2500, 1800, 3000];

const calcular = (salarios) => {
    let gasto = 0;
    for (const salario of salarios) {
        gasto += salario < 2000 ? salario * 1.1 : salario;
    }
    return gasto;
}
console.log(calcular(ganho));