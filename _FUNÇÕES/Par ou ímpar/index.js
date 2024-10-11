const num = 34;

function impaOuPar(num) {
    if(num % 2 === 0){
        console.log(num + ' é um número (par)');
    } else{
        console.log(num + ' é um número (impar)');
    }
}

impaOuPar(num);