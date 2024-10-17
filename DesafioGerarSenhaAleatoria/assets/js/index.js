const senhaGerada = document.querySelector('.senha-gerada');
const qtdNumeros = document.querySelector('.qtd-numeros');
const chkMaiusculos = document.querySelector('.chk-maiusculos');
const chkMinusculos = document.querySelector('.chk-minusculos');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbulos = document.querySelector('.chk-simbulos');
const enviar = document.querySelector('.enviar');

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const geraMaisuculo = () => String.fromCharCode(rand(65, 90));
const geraMinusculo = () => String.fromCharCode(rand(97, 122));
const geraNumero = () => String.fromCharCode(rand(48, 57));
const simbulos = '!@#$%^&*()_+-={}][';
const geraSimbulos = () => simbulos[rand(0, simbulos.length)];

function criaSenha(qtd, maiusculos, minusculos, numeros, simbulos) {
    const arraySenha = [];
    qtd = Number(qtd);

    for(let i = 0; i < qtd; i++){
        maiusculos && arraySenha.push(geraMaisuculo());
        minusculos && arraySenha.push(geraMinusculo());
        numeros && arraySenha.push(geraNumero());
        simbulos && arraySenha.push(geraSimbulos());
    }
    return arraySenha.join('').slice(0, qtd);
}

function gerarSenha(){
    const senha = criaSenha(
        qtdNumeros.value,
        chkMaiusculos.checked,
        chkMinusculos.checked,
        chkNumeros.checked,
        chkSimbulos.checked,
    )
    return senha || 'Selecione checkbox';
}

enviar.addEventListener('click', () => {
    senhaGerada.innerHTML = gerarSenha();
})



