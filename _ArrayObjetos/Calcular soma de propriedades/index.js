const numeros = [
    {id: 1, numero: 4},
    {id: 2, numero: 14},
    {id: 3, numero: 27},
    {id: 4, numero: 38},
]

function soma(arr, propriedade){
    return arr.reduce((a, b) => a + (b[propriedade] || 0), 0)
}

const somaEle = soma(numeros, "numero");
console.log(somaEle)