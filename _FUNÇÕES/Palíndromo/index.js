const texto = 'RoMa e amor';

function reverseLetra(string){
    return string.split('').reverse().join('').toLowerCase();
}

function palindromo(string){
    const palavra = string.toLowerCase();
    const invertido = reverseLetra(string);

    if(palavra === invertido){
        return true;
    } else {
        return false;
    }
}

if(palindromo(texto) === true){
    console.log('A palavra: [ ' + texto.toUpperCase() + ' ] é um Palíndromo' );
} else{
    console.log('A palavra: [ ' + texto.toUpperCase() + ' ] não é um Palíndromo' );
}