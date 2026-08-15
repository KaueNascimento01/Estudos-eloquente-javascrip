function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {x: radius * Math.cos(angle), y: radius * Math.sin(angle)};
}

console.log(randomPointOnCircle(2)); // { x: 1.175812, y: -1.618033 }

console.log(Math.random()); // 0.7492038471

console.log(Math.floor(Math.random() * 10)); // 7