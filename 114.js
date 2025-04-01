function findMultiples(integer, limit) {
    const arr = []
    for (let i = 1; i <= limit; i++) {
        i % integer === 0 && arr.push(i)
    }
    return arr
}
