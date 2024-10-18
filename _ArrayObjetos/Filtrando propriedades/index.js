const pessoa = {
    nome: 'Valdemar',
    sobrenome: 'Nanon',
    idade: 21,
    sexo: 'gay',
};

function filtrarPropriedades(obj, propriedadesPermitidas) {
    const novoObj = {}

    for(const prop of propriedadesPermitidas) {
        if(obj.hasOwnProperty(prop)) {
            novoObj[prop] = obj[prop];
        }
    }
    return novoObj;
}

const propriedadesPermitidas = ['nome', 'sobrenome', 'sexo'];

const pessoaFiltrada = filtrarPropriedades(pessoa, propriedadesPermitidas);
console.log(pessoaFiltrada)