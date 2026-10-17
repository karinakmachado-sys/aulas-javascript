// 1
console.log('---- atividade 1 \n')

const triplo = n => n * 3;
console.log(triplo(5), '\n');


// 2
console.log('---- atividade 2 \n')

const idades = [5, 12, 8, 130, 44];
const adultos = idades.filter(idade => idade >= 10);

console.log(adultos, '\n');


// 3
console.log('---- atividade 3 \n')

const numeros = [1, 2, 3];
const somados = numeros.map(n => n + 5);

console.log(somados);