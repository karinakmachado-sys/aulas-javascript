function cheque(idade = 18) {
    if (idade >= 18){
        return "Permitido" 
    }else{
        return "Bloqueado"
    }
}
console.log(cheque(22))