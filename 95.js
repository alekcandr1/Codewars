function oddCount(n) {
    const arr = []
    for (let i = 1; i < n; i++) {
        i % 2 !== 0 && arr.push(i)
    }
    return arr.length
}

console.log(oddCount(15))