function range(start, end, step=1){
    let inner_value = [];
    for (let i = start; (end - i) * step >= 0 ; i += step) {
        inner_value.push(i);
    }
  
    return inner_value;
}

console.log(range(1, 10, 2)); // [ 1, 3, 5, 7, 9 ]
console.log(range(10, 1, -2)); // [ 10, 8, 6, 4, 2 ]