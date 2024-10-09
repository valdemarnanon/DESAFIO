const num = 0;
const n = 30;

function somatorio(num, n){
    let soma = num;
    for(let i = 0; i < n; i++) {
        soma += i
    }
    return soma
}
const soma1AN = somatorio(num, n);

console.log('O somatorio de ' + num + ' até ' + n + ' é: ' + soma1AN);