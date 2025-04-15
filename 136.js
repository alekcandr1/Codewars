function replace(s) {
    let vowel = 'aeiouAEIOU'
    return s.split('').map(l => vowel.includes(l) ? '!' : l).join('')
}

console.log(replace('aaaH'))