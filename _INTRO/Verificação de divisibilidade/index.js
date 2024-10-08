const numero = 10;
const dividir = 2;

function verifica(numero, dividir) {

    if((numero % dividir) === 0){
        return console.log('Numero dividido por 2')
    } else {
        return console.log('Numero não dividido por 2.')
    }
}

verifica(numero, dividir);