function findAverage(array) {
    return array.length === 0
        ? 0
        : array.reduce((acc, value) => {
            return acc + value
        }, 0) / array.length
}

console.log(findAverage([1, 2, 3]))