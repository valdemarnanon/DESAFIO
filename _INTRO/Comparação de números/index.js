const numero1 = 20;
const numero2 = 19;

function comparacao(n1, n2) {

    if(n1 > n2) {
        console.log('n1 é maior que n2');
    } else if(n1 == n2) {
        console.log('n1 é igual a n2');
    } else {
        console.log('n1 é menor que n2');
    }
}
comparacao(numero1, numero2);