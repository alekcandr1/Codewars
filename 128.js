function peopleWithAgeDrink(old) {
    switch (true) {
        case (old < 14):
            return "drink toddy"
        case (old >= 14 && old < 18):
            return "drink coke"
        case (old >= 18 && old < 21):
            return "drink beer"
        case (old >= 21):
            return "drink whisky"
    }
}