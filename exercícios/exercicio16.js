const listaVip = ["Gabriel", "Yasmin", "Karina", "Andrew"];

const buscarVip = (nomes, nomeBuscando) => {
    for (const nome of nomes) {
        if (nome === nomeBuscando) {
            return true;
        } 
    }
    return false;
}

console.log(buscarVip(listaVip, "Gabriel"));
console.log(buscarVip(listaVip, "Rafaela"));