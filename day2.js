const input = "Game 1: 20 green, 3 red, 2 blue; 9 red, 16 blue, 18 green; 6 blue, 19 red, 10 green; 12 red, 19 green, 11 blue\nGame 2: 12 green, 3 blue, 16 red; 6 red, 4 blue, 12 green; 11 green, 4 red, 3 blue; 8 green, 15 red, 5 blue\nGame 3: 13 blue, 4 red, 8 green; 2 green, 4 red, 19 blue; 5 blue; 10 blue, 6 green, 2 red; 19 blue; 8 blue, 6 red\nGame 4: 14 green, 8 blue, 10 red; 11 green, 7 blue, 8 red; 8 green, 18 blue, 11 red\nGame 5: 7 red, 7 green, 1 blue; 2 red, 1 green, 2 blue; 2 blue, 7 green; 7 red, 3 blue, 11 green\nGame 6: 3 green, 1 red, 3 blue; 5 green, 19 red, 8 blue; 7 red, 2 green, 10 blue; 1 blue, 1 green, 12 red; 6 blue, 1 green, 16 red\nGame 7: 1 blue; 2 blue, 11 red, 3 green; 1 blue, 7 red; 2 green, 2 red; 3 green, 4 red, 1 blue; 3 blue, 3 green, 9 red\nGame 8: 4 red, 6 green, 4 blue; 4 red, 1 green; 9 blue, 1 green, 11 red\nGame 9: 3 blue, 17 red, 5 green; 8 blue, 9 green, 1 red; 6 green, 2 blue, 2 red\nGame 10: 3 green, 8 blue; 2 green, 2 red, 3 blue; 1 green, 2 red, 1 blue; 1 red, 3 green, 9 blue; 11 blue; 7 blue\nGame 11: 3 red, 3 blue, 9 green; 3 green, 4 red, 8 blue; 1 red, 12 blue; 2 red, 5 blue, 7 green; 11 blue, 2 red, 6 green\nGame 12: 15 green, 3 blue, 1 red; 10 green, 2 blue, 2 red; 2 blue, 15 green; 1 red, 10 green, 2 blue; 16 green, 2 red\nGame 13: 2 green, 3 blue, 5 red; 9 green, 5 blue, 1 red; 10 blue, 4 red\nGame 14: 1 red, 3 green, 20 blue; 8 red, 5 green, 1 blue; 12 blue, 1 green, 2 red; 8 red, 2 green, 2 blue\nGame 15: 14 blue, 3 green, 8 red; 16 red, 10 blue; 2 green, 10 blue, 9 red; 12 red, 3 blue, 2 green; 4 green, 6 red, 4 blue\nGame 16: 9 green, 7 red, 5 blue; 15 green, 4 red; 3 green, 6 red\nGame 17: 1 green, 7 red, 10 blue; 8 blue, 2 red, 1 green; 7 red, 1 green, 9 blue; 1 red\nGame 18: 2 blue, 1 green, 1 red; 9 red, 4 green, 2 blue; 3 green, 10 red, 1 blue\nGame 19: 1 blue, 5 green, 13 red; 8 green, 15 red, 1 blue; 4 green, 6 red, 1 blue; 2 blue, 3 green; 8 red, 2 blue, 9 green\nGame 20: 1 green, 1 blue, 1 red; 7 blue, 2 red; 3 red, 3 blue, 1 green; 2 blue, 2 red\nGame 21: 1 blue, 2 red, 13 green; 13 green, 5 blue, 7 red; 4 green, 13 red, 2 blue\nGame 22: 7 green, 16 red, 6 blue; 1 red, 5 blue, 10 green; 5 blue, 4 green, 14 red; 6 green, 6 blue; 6 blue, 4 green, 2 red\nGame 23: 2 blue, 3 green, 1 red; 2 blue; 3 red, 4 green\nGame 24: 10 red, 6 green, 12 blue; 1 red, 13 blue, 1 green; 7 blue, 9 green, 1 red; 7 red, 7 green, 5 blue\nGame 25: 13 green, 15 blue, 10 red; 14 green, 6 blue, 1 red; 14 green, 5 red, 15 blue; 7 green, 6 red, 14 blue; 6 red, 2 blue, 17 green; 13 blue, 4 red, 4 green\nGame 26: 16 green, 12 blue; 10 blue, 17 green, 3 red; 12 blue, 12 green; 8 blue, 5 green; 1 red, 10 blue, 2 green\nGame 27: 12 blue, 4 red; 12 blue, 2 green, 1 red; 16 blue, 4 red, 1 green; 11 blue, 3 red; 1 green, 3 red, 1 blue\nGame 28: 16 green, 2 blue, 14 red; 7 blue, 9 red, 8 green; 6 blue, 12 green, 19 red; 9 blue, 10 red, 15 green; 19 red, 7 blue, 10 green; 5 green, 6 red, 3 blue\nGame 29: 1 red, 2 green; 11 blue, 5 green, 4 red; 6 red, 6 green, 12 blue; 14 blue, 5 red, 4 green; 5 green, 8 red, 6 blue; 8 blue, 4 red, 4 green\nGame 30: 15 red, 2 blue, 6 green; 4 red, 3 green, 2 blue; 9 blue, 3 green, 16 red; 1 green, 11 blue, 13 red\nGame 31: 2 blue, 4 green, 3 red; 3 red, 3 blue, 4 green; 1 red, 6 blue; 3 red, 6 blue, 2 green; 3 green, 1 red, 6 blue; 7 green, 1 blue, 2 red\nGame 32: 8 green; 3 blue, 14 green; 8 green, 5 blue, 5 red; 6 green, 9 red, 4 blue\nGame 33: 6 red, 10 green; 8 green; 2 blue, 13 green; 3 red, 2 blue, 1 green; 2 red, 3 green; 2 red, 12 green, 1 blue\nGame 34: 1 blue, 12 red, 1 green; 2 blue, 7 red; 9 blue, 1 red, 1 green\nGame 35: 1 blue, 2 green; 3 red, 1 blue; 2 red; 2 green, 5 red; 1 red, 1 green\nGame 36: 12 green, 3 blue, 6 red; 15 green, 10 blue, 3 red; 5 red, 9 green, 14 blue\nGame 37: 2 red, 13 green, 6 blue; 2 green; 17 green, 9 blue, 4 red; 7 blue, 1 red, 2 green\nGame 38: 9 red, 12 blue; 11 blue, 2 red; 5 red; 10 red, 2 blue; 2 blue, 1 green, 13 red\nGame 39: 11 green, 8 red, 17 blue; 3 red, 3 green, 7 blue; 12 blue, 13 red, 11 green; 17 blue, 11 green, 9 red; 8 blue, 12 green, 2 red\nGame 40: 4 green, 2 red; 5 green, 1 blue, 12 red; 11 red, 2 green; 6 red, 1 green\nGame 41: 13 green, 4 red, 1 blue; 9 green, 1 blue, 3 red; 20 red; 3 green, 19 red, 1 blue\nGame 42: 3 green, 1 red, 6 blue; 6 green, 7 blue; 1 red, 11 green, 6 blue; 5 green, 9 blue, 7 red\nGame 43: 2 blue, 9 green, 9 red; 8 red, 2 green, 10 blue; 15 green, 6 blue; 6 red, 2 blue, 2 green; 2 green, 2 blue, 13 red; 7 green, 6 blue, 6 red\nGame 44: 6 blue, 3 green, 3 red; 4 red, 3 blue; 3 red, 4 green\nGame 45: 2 red, 19 blue; 3 red, 19 blue, 17 green; 12 red, 8 green, 19 blue; 14 green, 11 red, 1 blue; 10 red, 8 green, 1 blue; 6 red, 1 blue, 19 green\nGame 46: 4 red; 8 blue, 3 green; 3 red, 3 green, 1 blue; 4 blue, 2 green, 5 red\nGame 47: 5 blue, 9 red, 2 green; 5 blue, 7 green, 6 red; 13 green, 5 blue, 10 red\nGame 48: 8 green, 12 blue, 1 red; 8 green, 9 blue, 2 red; 8 blue, 12 green, 3 red; 5 green, 13 blue, 2 red\nGame 49: 4 red, 18 blue; 4 blue, 3 red, 2 green; 7 red, 2 green, 10 blue; 1 green, 5 red, 5 blue; 6 blue, 4 red\nGame 50: 13 green, 1 blue, 6 red; 1 blue, 1 red, 13 green; 15 green, 2 red; 1 blue, 1 green, 2 red; 5 green, 1 blue, 1 red; 13 green\nGame 51: 1 green, 6 red; 1 green, 3 blue, 6 red; 7 red, 3 blue; 3 blue, 9 red; 2 blue, 2 red\nGame 52: 2 red, 12 green, 9 blue; 8 green, 2 red, 11 blue; 13 blue, 2 red, 10 green; 5 blue, 2 green\nGame 53: 18 red, 13 blue, 3 green; 10 blue, 6 green, 15 red; 7 red, 1 green, 4 blue; 6 blue, 16 red, 10 green\nGame 54: 4 blue, 5 green; 4 green, 4 blue, 2 red; 2 red; 4 green, 1 red\nGame 55: 7 green, 1 red, 4 blue; 2 green, 7 red, 2 blue; 4 blue, 4 red, 2 green; 3 blue; 5 blue, 6 red, 12 green; 13 green\nGame 56: 10 red, 1 green, 6 blue; 1 blue, 4 green; 4 green, 6 blue, 10 red; 7 green, 4 blue; 10 blue, 7 red, 8 green; 7 blue, 1 green\nGame 57: 8 blue, 2 red, 7 green; 8 blue, 1 red, 11 green; 7 blue, 1 green, 7 red; 7 red, 14 green, 5 blue; 7 red, 4 green, 8 blue\nGame 58: 17 green, 1 red; 7 blue, 2 red, 18 green; 4 red, 15 green, 18 blue\nGame 59: 12 green, 6 blue; 10 green, 8 blue, 2 red; 1 red, 11 green, 1 blue; 4 green, 6 blue, 2 red; 5 blue, 1 green, 2 red\nGame 60: 4 green, 2 red; 2 blue, 6 green, 5 red; 1 red, 3 green, 1 blue; 6 blue, 3 green\nGame 61: 1 red, 1 blue; 5 red, 11 blue, 1 green; 1 red, 13 blue, 1 green\nGame 62: 12 green, 5 blue; 1 blue, 5 red, 18 green; 9 green, 2 red, 10 blue; 11 blue, 7 green; 10 green, 4 red, 3 blue\nGame 63: 15 red, 1 blue, 10 green; 2 green, 11 blue, 1 red; 4 blue, 2 green, 9 red\nGame 64: 11 red, 2 blue; 1 blue, 14 red; 2 green, 2 blue, 12 red; 3 red; 13 red, 1 blue; 1 green, 12 red\nGame 65: 10 blue, 1 red; 12 blue, 1 green; 1 green, 3 blue, 1 red\nGame 66: 5 green, 14 blue; 6 green, 9 blue, 1 red; 6 green, 2 blue; 5 green\nGame 67: 2 blue, 1 red; 3 blue, 1 red; 5 blue, 2 red; 2 red, 7 blue, 2 green; 1 green, 2 blue, 2 red\nGame 68: 2 blue, 13 green; 5 green, 1 red; 2 blue, 9 green, 1 red; 18 green, 1 red\nGame 69: 15 green, 8 red, 8 blue; 5 red, 11 green, 2 blue; 9 red, 6 blue, 11 green; 6 green, 4 red, 5 blue\nGame 70: 4 blue, 2 red; 1 red, 1 green, 1 blue; 5 blue, 1 green, 2 red; 1 blue; 1 red, 1 green; 3 blue\nGame 71: 5 red, 2 blue; 1 blue, 4 green; 10 green, 5 red, 2 blue; 2 blue, 6 green, 4 red\nGame 72: 9 blue, 1 green; 1 red, 5 blue; 7 blue, 1 red, 11 green; 3 green, 1 red, 11 blue\nGame 73: 1 green, 1 red, 10 blue; 12 blue; 2 red, 9 blue\nGame 74: 5 blue; 4 blue, 2 red, 8 green; 1 red, 4 blue, 1 green\nGame 75: 9 green, 9 blue, 10 red; 8 blue, 17 green, 1 red; 3 blue, 2 red, 4 green; 10 blue, 8 green, 7 red; 7 blue, 10 red, 5 green\nGame 76: 11 green, 12 blue, 8 red; 11 red, 11 green, 8 blue; 6 red, 9 blue, 14 green; 14 blue, 12 red, 9 green\nGame 77: 1 red, 3 blue, 2 green; 4 green, 5 blue; 1 blue, 1 red; 3 green, 4 blue, 1 red; 5 green, 1 red, 3 blue; 1 red, 2 green\nGame 78: 10 blue, 4 green, 12 red; 6 green, 10 red, 10 blue; 14 blue, 3 green, 8 red; 5 red, 6 green; 4 green; 20 blue, 5 red, 5 green\nGame 79: 13 green; 15 green, 9 blue, 6 red; 5 red, 10 green, 6 blue; 13 green, 6 red, 4 blue\nGame 80: 1 red, 9 blue; 1 green, 10 blue, 3 red; 9 blue, 1 green, 1 red\nGame 81: 2 blue, 1 red; 2 blue, 5 green; 2 red, 7 green, 2 blue; 3 blue; 2 green, 2 red; 7 green, 2 blue, 1 red\nGame 82: 7 red, 12 blue, 4 green; 9 red, 11 green, 8 blue; 10 blue, 8 red, 9 green; 6 red, 2 blue, 7 green; 12 red, 8 green, 9 blue\nGame 83: 14 blue; 10 blue, 3 red, 4 green; 7 blue, 10 green, 2 red; 3 red, 4 blue, 12 green\nGame 84: 12 red, 13 blue, 2 green; 11 red, 3 green, 15 blue; 15 red, 4 green, 5 blue; 1 red, 3 green, 11 blue; 3 green, 4 red, 3 blue\nGame 85: 8 blue, 1 green, 1 red; 1 red, 8 blue, 4 green; 3 red, 13 blue, 8 green\nGame 86: 9 blue, 4 green, 4 red; 4 red, 2 blue, 4 green; 10 red, 2 green; 7 blue, 4 green, 12 red\nGame 87: 1 blue, 9 green, 10 red; 1 red, 11 blue, 2 green; 17 blue, 3 red\nGame 88: 12 red, 6 green, 9 blue; 18 blue, 17 red, 7 green; 16 red, 6 green; 6 green, 5 red, 12 blue\nGame 89: 12 green, 10 blue, 2 red; 4 blue, 15 green, 1 red; 7 green, 11 blue; 12 green, 7 blue, 2 red; 14 blue, 12 green, 2 red\nGame 90: 14 blue, 1 red, 3 green; 3 green, 2 blue, 3 red; 1 red, 16 blue; 1 green, 10 blue\nGame 91: 11 red, 5 green; 5 red, 5 green, 1 blue; 8 red, 1 blue, 4 green; 1 blue, 3 green, 8 red\nGame 92: 19 green, 2 red, 10 blue; 9 blue, 11 green, 4 red; 10 blue, 5 green, 2 red; 3 red, 5 blue, 7 green\nGame 93: 1 green, 7 blue, 5 red; 9 green, 6 red, 13 blue; 11 blue, 12 red, 7 green; 1 red, 12 blue, 7 green\nGame 94: 4 red, 9 green, 1 blue; 11 green, 11 blue, 4 red; 10 red, 17 blue, 11 green; 5 blue, 12 red, 2 green; 14 blue, 6 green, 5 red; 8 green, 19 blue, 13 red\nGame 95: 5 green, 1 blue, 7 red; 3 blue, 14 red, 17 green; 3 blue, 7 red, 9 green; 17 red, 6 green, 1 blue; 17 red, 4 green\nGame 96: 3 red, 10 green; 9 green, 11 red; 2 red, 6 green, 2 blue; 1 blue, 9 red, 1 green; 12 red, 1 blue; 4 green, 12 red\nGame 97: 3 green, 11 red, 1 blue; 3 green, 13 red, 4 blue; 1 green, 3 blue, 12 red; 4 green, 10 red; 4 blue, 10 green, 12 red\nGame 98: 6 blue, 12 red; 17 red, 1 green, 11 blue; 13 blue, 9 red; 9 red, 6 blue, 2 green\nGame 99: 15 green, 1 blue, 11 red; 12 green, 12 blue, 14 red; 12 green, 10 blue, 1 red\nGame 100: 1 green, 11 red, 4 blue; 4 green, 1 red; 9 red, 2 blue; 5 blue, 11 red, 9 green\n"

const games = input.split("\n");

const limit = {
  red: 12,
  green: 13,
  blue: 14
}

const parseColors = (set) => {
  const obj = {};
  const colorNumbers = set.split(",");
  colorNumbers.forEach(colorNumber => {
    const color = colorNumber.split(" ")[2];
    const amount = colorNumber.split(" ")[1];
    obj[color] = Number(amount);
  });
  return obj;
}

const parsedGames = games.map(game => {
  const key = game.split(":")[0];
  const sets = game && game.split(":")[1].split(";").map(set => parseColors(set));
  return {key: key, sets: sets};
});

const verifyImpossibleGames = (parsedGames) => {
  let impossibleGames = [];
  parsedGames.forEach(game => {
    game.sets.length && game.sets.forEach(set => {
      if (impossibleGames.includes(game.key)) {
        return;
      }
      if (set.green && set.green > limit.green) {
        impossibleGames.push(game.key);
        return;
      }
      if (set.red && set.red > limit.red) {
        impossibleGames.push(game.key);
        return;
      }
      if (set.blue && set.blue > limit.blue) {
        impossibleGames.push(game.key);
        return;
      }
      return;
    })
  })
  return impossibleGames;
};

const impossibleGames = verifyImpossibleGames(parsedGames);

const possibleGames = parsedGames.filter(game => {
  if (impossibleGames.includes(game.key)) {
    return;
  }
  return(game.key);
}).map(filteredGames => filteredGames.key);

const possibleIds = possibleGames.map(game => {
  const id = game.split(' ')[1];
  return Number(id);
})

let sum = 0;

possibleIds.forEach(id => sum = sum + id)

// part 1
// console.log('sum', sum)

const gamesMinimumColorsSets = parsedGames.map(game => {
  let minimumColorSet = {
    red: 0,
    green: 0,
    blue: 0
  }
  game.sets.length && game.sets.forEach(set => {
    if (set.red > minimumColorSet.red) {
      minimumColorSet.red = set.red;
    }
    if (set.green > minimumColorSet.green) {
      minimumColorSet.green = set.green;
    }
    if (set.blue > minimumColorSet.blue) {
      minimumColorSet.blue = set.blue;
    }
  })

  return {
    key: game.key, 
    minimumSets: 
      [
        minimumColorSet.green, 
        minimumColorSet.red, 
        minimumColorSet.blue
      ]
    }
})

const gamesMinimumPower = gamesMinimumColorsSets.map(game => {
  const power = game.minimumSets[0] * game.minimumSets[1] * game.minimumSets[2];
  return power;
})

let powerSum = 0;

gamesMinimumPower.forEach(gamePower => powerSum = powerSum + gamePower);

console.log(gamesMinimumPower)
console.log(powerSum)
