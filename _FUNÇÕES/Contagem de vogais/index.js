function contarVogais(string) {
    const vogais = "aeiouAEIOU";

    let cont = 0;

    for(let i = 0; i <= string.length; i++){

        if(vogais.includes(string[i])){
            console.log(string[i])
        }
        // cont++;
    }

    return cont;
}

contarVogais('Ola mundo');

// const palavra = 'Ola mundo';
// const arr = ["a", "e", "i", "o", "u"];

// function contagemVogais(string){
//     let contador = 0
//     const tudoMinusculo = string.toLowerCase();

//     for(x of tudoMinusculo){
//         if (arr.find(ar => ar === x)) {
//             contador += 1;
//         }
//     }
//     return contador;
// }

// console.log(contagemVogais(palavra));