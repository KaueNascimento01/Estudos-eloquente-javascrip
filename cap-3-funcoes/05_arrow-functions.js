//Exemplo de arrow function
const roundTo = (n, step) => {
    let remainder = n % step
    return n - remainder + (remainder < step /2 ? 0 : step );
};

//Geram o mesmo resultado
const square1 = (x) => {return x * x};
const square2 = x => x * x;//Retorno implícito

const horn = () => {
    console.log("Toot");
};

