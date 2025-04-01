function solution(a, b) {
    const rule = a.length > b.length
    return rule ? b + a + b : a + b + a
}
