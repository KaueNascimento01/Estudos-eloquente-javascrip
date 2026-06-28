//local
const halve = function(n) {
    return n / 2;
};

let n = 10; //global

console.log(halve(100));
console.log(n);

