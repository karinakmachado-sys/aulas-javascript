function lista(anoFinal) {
    for (let ano = 2000; ano <= anoFinal; ano++) {
        if (ano % 4 === 0) {
            console.log(ano);
        }
    }
}
console.log("Anos divisíveis por 4 desde o ano 2000 até 2020");
lista(2020);