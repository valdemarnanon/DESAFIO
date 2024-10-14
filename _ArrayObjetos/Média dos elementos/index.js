const arr = [1, 2, 3, 4, 5, 6, 7]

function mediaArray(arr) {
    const soma = arr.reduce((acumulador, valor) => acumulador + valor, 0);

    return soma / arr.length;
}
const media = mediaArray(arr);

console.log(media);