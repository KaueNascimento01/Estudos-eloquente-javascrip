let day1 = {
    squirell: false,
    events: ["work", "touched tree", "pizza", "running"]
};

console.log(day1.squirell); // false
console.log(day1.wolf); // undefined
day1.wolf = false;
console.log(day1.wolf); // false

let descriptions = {
    work: "Went to work",
    "touched tree": "Touched tree"
};


let anObject = { left: 1, right: 2};
console.log(anObject.left) // 1

delete anObject.right;
console.log(anObject.right); // undefined

console.log("right" in anObject); // false
console.log("left" in anObject) // true

console.log(Object.keys(anObject)); // [ 'left' ]

let objectA = { a: 1 , b: 2};
console.log(objectA);  // { a: 1, b: 2 }
Object.assign(objectA, {b: 3, c: 4});

console.log(objectA); // {a: 1, b: 3, c: 4}