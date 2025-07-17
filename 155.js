function chromosomeCheck(sperm) {
    if (sperm.includes('Y')) {
        return "Congratulations! You're going to have a son.";
    } else if (sperm.includes('X')) {
        return "Congratulations! You're going to have a daughter.";
    } else {
        return "Invalid input. Expected 'X', 'Y', 'XX', or 'XY'.";
    }
}