const idade = 5;

const verificaIdade = (id) => {
    const verifica = idade;
    if (verifica <= 12){
        console.log(`Com ${idade} você é criança.`);
    } else if (verifica <= 17){
        console.log(`Com ${idade} você é adolescente.`);
    }  else if (verifica <= 59){
        console.log(`Com ${idade} você é adulto.`);
    } else if (verifica > 60){
        console.log(`Com ${idade} você é idoso.`);
    }
    return verifica;
};
verificaIdade(idade);