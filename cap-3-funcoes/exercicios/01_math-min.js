// Função que retorna o menor entre dois números
function min (a, b){
    if(a > b){
        return b;
    } else{
        return a;
    }
}

console.log(min(0,9)); // 0
console.log(min(9,3)); // 3
console.log(min(-1 , 1)) // -1
