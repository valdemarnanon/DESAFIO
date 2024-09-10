// Contagem de vogais
// Crie uma função que recebe uma string e retorna a quantidade de vogais no texto recebido. Imprima o resultado na tela.

const nomes = 'aeiouaeiou';
const arr = ['a', 'e', 'i', 'o', 'u'];

function contagemDeVogais(str) {
    const minusculo = nomes.toLowerCase();
    let contador = 0;

    for(letra of minusculo){
        if (arr.find(ar => ar === letra)) {
            contador += 1;
        }
        
        // if(letra.includes("a")){
        //     contador += 1;
        // }
        // if(letra.includes("e")){
        //     contador += 1;
        // }
        // if(letra.includes("i")){
        //     contador += 1;
        // }
        // if(letra.includes("o")){
        //     contador += 1;
        // }
        // if(letra.includes("u")){
        //     contador += 1;
        // }
    }
    return contador;
}

console.log(contagemDeVogais(nomes));