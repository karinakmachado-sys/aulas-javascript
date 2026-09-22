const frutas = ['Maçã', 'Banana', 'Uva'];

frutas.push('Morango', 'Manga', 'Abacaxi');
frutas.unshift('Tangerina', 'Abacate');
// frutas.pop();
// frutas.shift();

for (const fruta of frutas) {
  console.log(fruta);
}