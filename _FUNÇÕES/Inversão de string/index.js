const nome = 'Valdemar';
function inverteString(string){

    // const recebeNome = string.split('');
    // const inverteNome = recebeNome.reverse();
    // const nomeInvertido = inverteNome.join('');
    // return nomeInvertido;

    // JEITO MAIS SIMPLES
    return string.split("").reverse().join("");
}

const inverterNome = inverteString(nome);
console.log('Seu nome invertido é: ' + inverterNome)