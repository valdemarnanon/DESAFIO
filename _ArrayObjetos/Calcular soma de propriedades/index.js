const numeros = {
    a: 30,
    b: 15,
    c: 20
}

function somaValoresObj(obj) {
    let soma = 0

    for(const chave in obj) {
        // console.log(obj.hasOwnProperty(chave))
        if(obj.hasOwnProperty(chave) && typeof obj[chave] === 'number') {
            soma += obj[chave];
        }
    }

    return soma;
}
const somaObj = somaValoresObj(numeros);
console.log(somaObj);



// const numeros = [
//     {id: 1, numero: 4},
//     {id: 2, numero: 14},
//     {id: 3, numero: 27},
//     {id: 4, numero: 38},
// ]

// function soma(arr, propriedade){
//     return arr.reduce((a, b) => a + (b[propriedade] || 0), 0)
// }

// const somaEle = soma(numeros, "numero");
// console.log(somaEle);