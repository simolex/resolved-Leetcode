/**
 * 605. Can Place Flowers
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function (flowerbed, n) {
    let i = 0;
    const LengthFlowerbed = flowerbed.length;
    while (i < LengthFlowerbed && n > 0) {
        if (flowerbed[i] === 0) {
            if (flowerbed[i + 1] === 0) {
                n -= 1;
                i += 2;
            }
        } else {
            i += 2;
        }
    }
    return n < 1;
};

canPlaceFlowers([1, 0, 0, 0, 1], 2);
