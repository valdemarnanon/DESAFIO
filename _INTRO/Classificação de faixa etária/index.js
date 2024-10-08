const idade = 14

function faixaEtaria(idade) {
    if(idade <= 12) {
        console.log('Criança');
    } else if(idade <= 17) {
        console.log('Adolescente');
    } else if(idade <= 59) {
        console.log('Adulto')
    } else{
        console.log('Idoso');
    }
}
faixaEtaria(idade);