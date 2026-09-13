function reverseArray(array){
    let newArray = [];
    for(let number of array){
        newArray.unshift(number)
    }
    return newArray;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]));