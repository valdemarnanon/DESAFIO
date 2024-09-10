//  Inversão de string
//  Crie uma função que recebe uma string e retorna seu inverso. Imprima o resultado na tela.

//  Digite seu nome na linha 5 dentro de " aqui "
const nome = " Digite seu nome AQUI < ";
const inverterNome = (str) => {
    const nome = str.split('');
    return nome.reverse().join('');
};

console.log(inverterNome(nome));