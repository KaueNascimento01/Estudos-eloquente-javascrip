export function range(start, end){
    let inner_value = [];
    for (let i = start; i <= end; i++) {
        inner_value.push(i);
    }

    return inner_value;
}

// console.log(range(1, 10)); // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10]