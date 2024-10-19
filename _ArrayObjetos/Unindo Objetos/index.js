const pessoa = {
    nome: 'Valdemar',
    sobrenome: 'Nanon'
}

const salario = {
    salario: 100000000,
}

function unirObjetos(obj1, obj2) {
    return { ...obj1, ...obj2};
}


const objetoUnido = unirObjetos(pessoa, salario);
console.log(objetoUnido);