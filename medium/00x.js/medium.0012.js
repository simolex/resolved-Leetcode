/**
 * 12. Integer to Roman
 *
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const digits = [
        [1, "I"],
        [5, "V"],
        [10, "X"],
        [50, "L"],
        [100, "C"],
        [500, "D"],
        [1000, "M"]
    ];

    const pattern = {
        0: [],
        1: [0],
        2: [0, 0],
        3: [0, 0, 0],
        4: [0, 1],
        5: [1],
        6: [1, 0],
        7: [1, 0, 0],
        8: [1, 0, 0, 0],
        9: [0, 2]
    };

    const roman = [];
    for (let i = digits.length - 1; i >= 0; i -= 2) {
        let base = digits[i][0];
        for (let offset of pattern[Math.floor(num / base)]) {
            roman.push(digits[i + offset][1]);
        }
        num %= base;
    }

    return roman.join("");
};

console.log(intToRoman(3749)); // "MMMDCCXLIX"
console.log(intToRoman(58)); // "LVIII"
console.log(intToRoman(1994)); // "MCMXCIV"
