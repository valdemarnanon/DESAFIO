const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
function concatenarArray(arr1, arr2){
    // return arr1.concat(arr2);
    // ou
    return [ ...arr1, ...arr2];
}

const uni = concatenarArray(arr1, arr2);
console.log('Os Arrays unidos ' + uni.join(", "));