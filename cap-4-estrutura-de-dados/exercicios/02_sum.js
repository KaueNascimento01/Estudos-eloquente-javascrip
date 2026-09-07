import { range } from "./01_range.js"

function sum(numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }

    return result;
}

console.log(sum(range(1, 10))); // 55