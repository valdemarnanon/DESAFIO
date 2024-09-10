const vermelho = 'assets/img/vermelho.png';
const amarelo = 'assets/img/amarelo.png';
const verde = 'assets/img/verde.png';
const desligado = 'assets/img/desligado.png';
let meuTimer;

function vermelhoXD(){
    document.getElementById('img').src = vermelho;
}
function amareloXD(){
    document.getElementById('img').src = amarelo;
}
function verdeXD(){
    document.getElementById('img').src = verde;
}
function vermelhoXD(){
    document.getElementById('img').src = vermelho;
}
function desligadoXD(){
    clearInterval(meuTimer);
    document.getElementById('img').src = desligado;
}

function automaticoXD() {

    if (meuTimer) {
        clearInterval(meuTimer);
    }
    
    meuTimer = setInterval(function() {
        setTimeout(function() {
            document.getElementById('img').src = vermelho;
        }, 3000);
        
        setTimeout(function() {
            document.getElementById('img').src = amarelo;
        }, 2000);
        
        setTimeout(function() {
            document.getElementById('img').src = verde;
        }, 1000);
        
    }, 4000);
}