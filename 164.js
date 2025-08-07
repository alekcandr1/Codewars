function spinWords(string){
    let arr = string.split(' ')
    arr = arr.map(el=> el.length >= 5 ? el.split('').reverse().join('') : el)
    return arr.join(' ')
}