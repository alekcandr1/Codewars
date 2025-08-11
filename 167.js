function arrayDiff(a, b) {
    const bSet = new Set(b);
    return a.filter(el => !bSet.has(el));
}