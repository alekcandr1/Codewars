String.prototype.isUpperCase = function() {
    return this.toString() === this.toUpperCase();
}

console.log('abc'.isUpperCase)