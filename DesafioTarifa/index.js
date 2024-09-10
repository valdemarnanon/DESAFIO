// digite sua idade
const idade = 60;
// Voce é estudante ou idoso? caso contrario vc é regular
const tipoUsuario = 'idoso'.toLowerCase();
// Valor da entrada
const valor = 2.5;
console.log(`Valor da tarifa ${valor}`);

function tarifa(id, tx, tipo){

    if(id <= 6){
        console.log('Crianças de 6 anos ou menos não paga.');
    }

    if(tipo.includes('estudante')){
        tx = tx / 2;
        console.log(`Estudantes ganham 50% de desconto. valor a pagar: ${tx}`);
    }

    if(tipo.includes('idoso')) {
        tx = (tx * (1-(30/100)));
        console.log(`Idoso ganha 30% de desconto. valor a pagar: ${tx}`);
    } else {
        console.log('Regular pagar valor normal.');
    }
}
tarifa(idade, valor, tipoUsuario);
