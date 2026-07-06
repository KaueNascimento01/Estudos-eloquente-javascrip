function wrapValue (n){
    let local = n;
    return () => local; 
}

let wrap1 = wrapValue(10); // 10
let wrap2 = wrapValue(29); // 29
console.log(wrap1());
console.log(wrap2());

function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5)); // 10