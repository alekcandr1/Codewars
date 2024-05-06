// Create an OR function that takes a list of boolean values and runs OR against all of them, without ( depending on language ) the or keyword or the || operator,.
//
// There will be between 0 and 6 elements ( inclusive ).
//     Return None, nil or a similar empty value for an empty list.

function alternate(items) {
    return items.length > 0 ? !!items.find(el=>el===true) : null
}

console.log(alternate([false]))