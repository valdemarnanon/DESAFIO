let arr = [];
function gerarArray(tamanho, max){
    for(let i = 0; i <= tamanho; i++){
        arr.push(Math.floor(Math.random() * (max + 1)));
        // console.log(temp);
    }
    return arr
}

const tamanho = 10;
const maxValor = 50;

const resultadoArray = gerarArray(tamanho, maxValor);
console.log(`O array gerado de números aleatórios é: [${resultadoArray.join(", ")}].`);