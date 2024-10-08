const altura = prompt('Digite seu Altura: ');
const peso = prompt('Digite seu Peso: ');

const calculaIMC = (altura, peso) => peso / (altura * altura);

document.write('<h1>Seu IMC é de: ' + calculaIMC(altura, peso).toFixed(2) + '</h1>')