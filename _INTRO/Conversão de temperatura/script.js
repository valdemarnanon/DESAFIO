const celsius = 30;
const farenheit = 86;

function converterParaFarenheit(celsius) {
    return(celsius * 9) / 5 + 32;
}

function converterParaCelsius(farenheit) {
    return((farenheit - 32) * 5) / 9;
}

console.log(`${celsius} graus Celsius equivalem a ${converterParaFarenheit(celsius)}`);
console.log(`${farenheit} graus Farenheit equivalem a ${converterParaCelsius(farenheit)}`);