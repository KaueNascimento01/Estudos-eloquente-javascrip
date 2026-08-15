function phi([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10));
}

console.log(phi([ 76, 9, 4, 1 ])); //  0.06859943405700354

let {personName} = {personName: "Faraji", age: 23};
console.log(personName); // Faraji