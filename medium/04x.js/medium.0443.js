/**
 * @param {character[]} chars
 * @return {number}
 */
let pntChar = 0;
var Print = function (count, letter) {
    this[pntChar++] = letter;
    if (count > 1) {
        `${count}`.split("").forEach((n) => (this[pntChar++] = n));
    }
};

var compress = function (chars) {
    pntChar = 0;
    let current = chars[0];
    let count = 1;
    for (let i = 1; i < chars.length; i++) {
        if (chars[i] === current) {
            count++;
        } else {
            Print.call(chars, count, current);
            current = chars[i];
            count = 1;
        }
    }
    Print.call(chars, count, current);
    chars.length = pntChar;
    return pntChar;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
console.log(compress(["a"]));
console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]));
