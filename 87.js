function correct(string) {
    return string.split('').map(l => {
        if (l === '5') {
            return 'S'
        } else if (l === '0') {
            return 'O'
        } else if (l === '1') {
            return 'I'
        } else {
            return l
        }
    }).join('')
}

console.log(correct('L0ND0N'))