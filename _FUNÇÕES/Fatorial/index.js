function fatorial(num) {
    if(num === 0 || num === 1){
        return 1
    } else {
        return num * fatorial(num - 1)
    }
}

const num = 4

const restulado = fatorial(num);

console.log('O restultado do fatorial de: ' + num + ' é: ' + restulado)