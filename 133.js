function removeTrailingZeros(number) {
    let numStr = number.toString();
    if (numStr === '0') {
        return 0;
    }
    numStr = numStr.replace(/0+$/, '');
    return parseInt(numStr, 10);
}