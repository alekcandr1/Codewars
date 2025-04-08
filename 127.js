function combat(health, damage) {
    let res = health - damage
    return res < 0 ? 0 : res
}