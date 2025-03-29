function stringy(size) {
    let str = ''
    for (let i = 1; i<=size; i++){
        if (str.length % 2 === 0) {
            str += 1
        } else {
            str += 0
        }
    }
    return str
}