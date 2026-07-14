// Verifica se um número é par usando recusão: true se for par e false se for ímpar
function isEven(number){
    if(number === 0){
        return true;
    } else if(number === 1){
        return false;
    } else if( number < 0){
        return isEven(number +2);
    } else{
        return isEven(number -2);
    }
}

console.log(isEven(50)); // true
console.log(isEven(75)); // false
console.log(isEven(-1)); // false
console.log(isEven(-2)); // true