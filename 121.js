function well(x) {
    const countGoodIdeas = x.filter(o => o === 'good').length
    switch (true) {
        case countGoodIdeas > 2:
            return 'I smell a series!'
        case countGoodIdeas === 1 || countGoodIdeas === 2:
            return 'Publish!'
        default:
            return 'Fail!'
    }
}

console.log(well(["bad","bad","good","bad","bad","bad","good","bad","bad","bad","bad","bad"]))