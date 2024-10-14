const arr1 = [1, 4, 2, 5, 6]
const arr2 = [1, 2, 2, 7, 5]

function intersecaoArray(arr1, arr2) {
    return arr1.filter(elem => arr2.includes(elem));
}
const intersecao = intersecaoArray(arr1, arr2);

console.log('A interseção dos dois arrays: ' + intersecao.join(", "));