// Set recebe array e remove itens duplicados. E recebe pelo Array.from
function removeDuplicados(arr){
    return Array.from(new Set(arr));
}

const arrayOriginal = [1, 2, 2, 3, 3, 3, 4, 5, 6, 6, 7];

const arraySemDuplicar = removeDuplicados(arrayOriginal);

console.log(arrayOriginal.join(", "));
console.log(arraySemDuplicar.join(", "));