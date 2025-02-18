String.prototype.toAlternatingCase = function () {
    const arr = this.split('')
    return arr.map(char=>{
        return char.toLowerCase()===char ? char.toUpperCase() : char.toLowerCase()
    }).join('')
}
