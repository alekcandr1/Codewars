function warnTheSheep(queue) {
    const wolfIndex = queue.indexOf('wolf');

    if (wolfIndex === queue.length - 1) {
        return "Pls go away and stop eating my sheep";
    } else {
        const sheepPosition = queue.length - 1 - wolfIndex;
        return `Oi! Sheep number ${sheepPosition}! You are about to be eaten by a wolf!`;
    }
}