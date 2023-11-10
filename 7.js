function noSpace(x) {
    let y = x.indexOf(' ');
    for (let i = 0; y >= 0; y = x.indexOf(' ')) {
        x = x.replace(' ', '');
    }
    return x;
}
noSpace('a b c    d');