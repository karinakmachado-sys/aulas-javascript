let notas = ["10", "4", "6", "1", "8", "5"]

const filtrarAlunos = notas => {
    for (const nota of notas){
        if (nota >= 7) {
            console.log(nota);
        }
    }
}
filtrarAlunos(notas)