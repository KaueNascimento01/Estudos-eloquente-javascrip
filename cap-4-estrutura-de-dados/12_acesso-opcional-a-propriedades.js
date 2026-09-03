function city(object) {
    return object.address?.city;
}
console.log(city({address: {city: "Toronto"}})); // Toronto
console.log(city({name: "Vera"})); // undefined

console.log("string".notAMethod?.()); // undefined
console.log({}.arrayProp?.[0]); // undefined
