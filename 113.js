function expressionMatter(a, b, c) {
    const answers = []
    answers.push(a * (b + c))
    answers.push(a * b * c)
    answers.push(a + b * c)
    answers.push((a + b) * c)
    answers.push(a + b + c)
    return Math.max.apply(null, answers);
}

console.log(expressionMatter(3, 5, 7))