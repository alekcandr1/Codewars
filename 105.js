function saleHotdogs(n) {
    switch (true) {
        case (n < 5):
            return n * 100
        case (n >= 5 && n < 10):
            return n * 95
        case (n >= 10):
            return n * 90
        default:
            return null
    }
}