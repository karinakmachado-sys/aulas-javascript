function estoque(quantidade) {
    if (quantidade < 5){
        return "Estoque crítico"
    }else{ 
        return "Estoque normal"
    }
}

console.log(estoque(2))