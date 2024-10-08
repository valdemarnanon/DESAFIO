const comprimento = 150;
const largura = 100;

function calculoArea(comprimento, largura) {
    return comprimento * largura
}

//

function calculoPerimetro(comprimento, largura) {
    return 2 * (comprimento + largura);
}

const area = calculoArea(comprimento, largura);
const perimetro = calculoPerimetro(comprimento, largura);

console.log('Calculo da area: ' + area + ' // ' + ' Calculo do perímetro ' + perimetro);