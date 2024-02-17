
function createPhoneNumber(numbers){
    const toString = numbers.join('')
    const correctFormNumber = `(${toString.slice(0, 3)}) ${toString.slice(3, 6)}-${toString.slice(6, 10)}`;

    return correctFormNumber
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // => returns "(123) 456-7890"


// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//
//     Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
//
//     Don't forget the space after the closing parentheses!