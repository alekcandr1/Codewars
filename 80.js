// function strCount(str, letter) {
//     let count
//     str.map(e => e === letter
//         ? {
//             count++;
//             return e
//         }
//         : e)
// }

function strCount(str, letter) {
    return str.split('').reduce((a, e) => e === letter ? ++a : a, 0)
}