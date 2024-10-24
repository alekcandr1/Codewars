function sumMix(x){
    return x.reduce((acc, number)=>{
        return acc + Number(number)
    }, 0)
}

console.log(sumMix([1,'2',3]))