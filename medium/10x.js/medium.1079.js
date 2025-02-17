/**
 * 1079. Letter Tile Possibilities
 *
 * @param {string} tiles
 * @return {number}
 */
const fact = [0, 1];
for (let e = 2; e <= 7; e++) {
    fact[e] = fact[e - 1] * e;
}

var numTilePossibilities = function (tiles) {
    let n = tiles.length;
    const tileMap = {};
    for (let tile of tiles) {
        tileMap[tile] = -~tileMap[tile];
    }
};

console.log(numTilePossibilities("AAB"));
console.log(numTilePossibilities("AAABBC"));
console.log(numTilePossibilities("V"));
