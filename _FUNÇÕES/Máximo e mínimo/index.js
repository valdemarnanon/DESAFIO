let num1 = 50;
let num2 = 30;

function retornaMax(n1, n2) {
    return n1 > n2 ? n1 : n2
}

function retornaMin(n1, n2) {
    return n1 < n2 ? n1 : n2
}

const numeroMax = retornaMax(num1, num2);
const numeroMin = retornaMin(num1, num2);

console.log('o numero maior entre (n1 e n2) é: ' + numeroMax);
console.log('o numero menor entre (n1 e n2) é: ' + numeroMin);
