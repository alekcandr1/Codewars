var countSheep = function (num){
    let res = ''
    for(let i = 1; i<=num; i++) {
        res += `${i} sheep...`
    }
    return res
}

console.log(countSheep(5))