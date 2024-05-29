function invert(array) {
    return array.map(e => e === -0 ? 0 : -e);
}

console.log(invert([-1, 2, -3, 4, -5]))
console.log(invert([-0]))