const rps = (p1, p2) => {
    const players = [p1, p2]
    if (players[0] === players[1] ) {
        return 'Draw!'
    } else if (!players.includes('rock')) {
        return players[0] === 'scissors' ? 'Player 1 won!' : 'Player 2 won!'
    } else if (!players.includes('paper')) {
        return players[0] === 'rock' ? 'Player 1 won!' : 'Player 2 won!'
    }    else if (!players.includes('scissors')) {
        return players[0] === 'paper' ? 'Player 1 won!' : 'Player 2 won!'
    }

    // return (!(p1 === 'rock' || p2 === 'rock')) && p1 === 'scissors' ? one : two
};