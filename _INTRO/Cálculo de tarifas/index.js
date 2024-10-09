// Crie um programa que determina o valor de uma tarifa dependendo da idade do usuário
//Tarifas:
    // Crianças menores de 6 anos: gratis
    // Estudantes: 50% de desconto
    // Idosos (60 anos ou mais): 30% de desconto
    // Regular: tarifa normal
// O preço da tarifa normal é de R$2,50
// Exiba os resultados no console ou na tela.


// const pessoa = 'Criança';
const idade = 18;
const tipoPessoa = 'idoso';

const tarifa = 2.50;

function calcularTarifa(idade, tarifa, tipoPessoa){
    const descontoDe50 = tarifa / 2;
    const descontoDe30 = tarifa = (tarifa * (1-(30/100)));

    if(idade <= 6 && idade >= 0) {
        console.log('Crianças de até 6 anos, não paga.');
    }

    if(tipoPessoa.includes('estudante')) {
        console.log('Estudantes recebem 50% de desconto, totalizando: ' + 'R$' + descontoDe50);
    }

    if(idade >= 60 && tipoPessoa.includes('idoso')) {
        console.log('Idosos recebem 30% de desconto, totalizando: ' + 'R$' + descontoDe30);
    } else {
        console.log('Tarifa normal: ' + 'R$' + tarifa)
    }
}
calcularTarifa(idade, tarifa, tipoPessoa);