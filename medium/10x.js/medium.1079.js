/**
 * 1079. Letter Tile Possibilities
 *
 * @param {string} tiles
 * @return {number}
 */
const fact = [1, 1];
for (let e = 2; e <= 7; e++) {
    fact[e] = fact[e - 1] * e;
}

var numTilePossibilities = function (tiles) {
    const tileMap = {};
    for (let tile of tiles) {
        tileMap[tile] = -~tileMap[tile];
    }

    const tileMapValues = Object.values(tileMap);

    const nextLetter = (maxLength, nextKey = 0, current = fact[maxLength]) => {
        if (maxLength === 0) {
            return current;
        }

        let count = 0;
        for (let i = 0; i <= tileMapValues[nextKey]; i++) {
            if (maxLength - i < 0) {
                continue;
            }
            count += nextLetter(maxLength - i, nextKey + 1, current / fact[i]);
        }
        return count;
    };

    let countPossibilities = 0;
    for (let i = 1; i <= tiles.length; i++) {
        countPossibilities += nextLetter(i);
    }
    return countPossibilities;
};

// Version #2 (DP)
var numTilePossibilities = function (tiles) {
    const tileMap = {};
    for (let tile of tiles) {
        tileMap[tile] = (tileMap[tile] || 0) + 1;
    }

    const tileMapValues = Object.values(tileMap);

    const dp = new Array(tiles.length + 1).fill(0);
    dp[0] = 1;

    for (let count of tileMapValues) {
        for (let i = tiles.length; i >= 0; i--) {
            for (let j = 1; j <= count && j <= i; j++) {
                dp[i] += dp[i - j] * (fact[i] / (fact[j] * fact[i - j]));
            }
        }
    }

    let countPossibilities = 0;
    for (let i = 1; i <= tiles.length; i++) {
        countPossibilities += dp[i];
    }
    return countPossibilities;
};

console.log(numTilePossibilities("AAB"));
// console.log(numTilePossibilities("AAABBC"));
// console.log(numTilePossibilities("V"));
