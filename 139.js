function mergeArrays(arr1, arr2) {
    const arr3 = arr1.concat(arr2)
    arr3.sort((a, b) => a - b)
    let uniqueArray = [...new Set(arr3)]
    return uniqueArray
}