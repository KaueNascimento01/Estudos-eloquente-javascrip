//função com parâmetro - retorna o quadrado do argumento
const square = function (x){
    return x * x;
};

console.log(square(12))

//função sem parâmetro - imprime uma string
const makeNoise = function(){
    console.log("Pling!");
};

makeNoise()

const roundTo = function(n, step){
    const remainder = n % step;
    return n - remainder + (remainder < step /2 ? 0 : step);
};

console.log(roundTo(23, 10));



