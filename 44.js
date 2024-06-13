function fakeBin(x) {
    return x.split('').map(e => Number(e) > 5 ? '0' : '1').join('')
}