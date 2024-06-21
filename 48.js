function bmi(weight, height) {
    let bmi = weight / (height * height);
    switch (true) {
        case bmi <= 18.5:
            return 'Underweight'
        case bmi <= 25:
            return 'Normal'
        case bmi <= 30:
            return 'Overweight'
        case bmi > 30:
            return 'Obese'
        default:
            return 'Error'
    }
}

console.log(bmi(80, 1.80))