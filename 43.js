function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) {
        return [];
    }
    return input.reduce(
        (acc, value) => {
            if (value > 0) {
                acc[0]++
            } else if (value < 0) {
                acc[1] += value
            }
            return acc
        }, [0, 0]
    )
}

countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])