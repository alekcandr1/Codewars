function squareOrSquareRoot(array) {
    return array.map(num=>Math.sqrt(num) % 1 === 0 ? Math.sqrt(num) : num*num);
}