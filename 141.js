function capitalizeWord(word) {
    const newWord = word.split('')
    newWord[0] = newWord[0].toUpperCase()
    return newWord.join('')
}

console.log(capitalizeWord('a'))