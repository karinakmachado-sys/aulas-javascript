function roboAspirador (distanciaParede) {
    let passos = 0;
    while (true) {
        passos++
        if (passos === distanciaParede){
            console.log("Bateu e parou!");
            break;
        }
    }
}
roboAspirador(10)