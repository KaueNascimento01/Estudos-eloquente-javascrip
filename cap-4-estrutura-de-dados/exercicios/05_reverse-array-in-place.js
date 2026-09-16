function reverseArrayInPlace(array){
    let sizeArray = array.length;

    for(let i = 0; i < array.length / 2; i++){
        sizeArray--;
        [array[i], array[sizeArray]] = [array[sizeArray], array[i]];
    }

    return array;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6])); // [ 6, 5, 4, 3, 2, 1 ]