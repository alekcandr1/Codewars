function solution(number) {
    let arr = 0
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            arr += i
        }
    }
    return arr
}

console.log(solution(10))