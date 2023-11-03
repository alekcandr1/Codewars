function points(games) {
let scores = 0;

    for (i = 0; i < 10; i++) {
        if (Number(games[i].charAt(0)) > Number(games[i].charAt(2))) {
        scores = scores + 3;
        } else if (Number(games[i].charAt(0)) === Number(games[i].charAt(2))) {
        scores++;
        }

  }
return scores;
}
  let _games = ["1:0","2:0","3:4","4:0","2:1","3:1","4:1","3:2","4:2","4:3"];
  points(_games);