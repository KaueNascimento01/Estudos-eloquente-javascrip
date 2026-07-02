function greet(who) {
    console.log("Hello" + who);
}

greet(" Harry")
console.log("Bye")

//exemplo de stack overflow
function chicken() {
    return egg();
}

function egg() {
    return chicken();
}
console.log(chicken() + " came first.");