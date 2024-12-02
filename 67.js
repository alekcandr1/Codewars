function feast(beast, dish) {
    let beastArray = Array.from(beast)
    let dishArray = Array.from(dish)
    return beastArray[0] === dishArray[0] && beastArray[beastArray.length - 1] === dishArray[dishArray.length - 1]
}

feast('first', 'second')