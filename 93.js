function between(a, b) {
    const arr = []
    for (let i = a; i <= b; i++) {
        arr.push(i)
    }
    return arr
}

console.log(between(-3, 3))