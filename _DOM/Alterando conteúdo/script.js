const texto = document.querySelector('.texto')
const button = document.querySelector('.btn')

function alteraH1(){
    button.addEventListener('click', () => {
        texto.innerHTML = 'Texto mudado!'
    })
}
alteraH1()