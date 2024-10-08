const valor1 = 10;
const valor2 = 5;
const operador = "*";

function calcular(v1, v2, operador){

    let resultado;

    switch(operador) {
        case "+":
            resultado = v1 + v2;
            console.log("A soma de " + v1 + " + " + v2 + ' É: ' + resultado);
            break;
        case "-":
            resultado = v1 - v2;
            console.log("A subtração de " + v1 + " + " + v2 + ' É: ' + resultado);
            break;
        case "*":
            resultado = v1 * v2;
            console.log("A multiplicação de " + v1 + " + " + v2 + ' É: ' + resultado);
            break;
        case "/":
            resultado = v1 / v2;
            console.log("A divisão de " + v1 + " + " + v2 + ' É: ' + resultado);
            break;
    } 
}
calcular(valor1, valor2, operador)