function multiTable(number) {
    let str = ''
    for (let i = 1; i < 10; i++) {
        str += `${i} * ${number} = ${i * number}\n`
    }
    return str + `10 * ${number} = ${10 * number}`
}

console.log(multiTable(5))