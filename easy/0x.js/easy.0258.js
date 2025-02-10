/**
 * 258. Add Digits
 *
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    while (num > 9) {
        let cloneNum = num;
        num = 0;
        while (cloneNum > 0) {
            num += cloneNum % 10;
            cloneNum = Math.floor(cloneNum / 10);
        }
    }
    return num;
};

var addDigits = function (num) {
    if (num === 0) return 0;
    return 1 + ((num - 1) % 9);
};

console.log(addDigits(38));
console.log(addDigits(0));
