function distinct(arr) {
    const map = new Map();
    arr.forEach(item => map.set(item, true));
    return Array.from(map.keys());
}