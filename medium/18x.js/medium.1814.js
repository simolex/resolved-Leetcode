/**
 * 1814. Count Nice Pairs in an Array
 *
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function (nums) {
    let mod = 10 ** 9 + 7;
    const mapPairs = new Map();

    let offset;
    let reverse;
    let prevNum;
    let count = 0;
    for (let num of nums) {
        // Переварачиваем число
        reverse = 0;
        prevNum = num;
        while (prevNum > 0) {
            reverse *= 10;
            reverse += prevNum % 10;
            prevNum = Math.floor(prevNum / 10);
        }
        // Расчитываем разницу числа с его перевернутым
        offset = num - reverse;
        // Увеличиваем количество возможных пар
        count = (count + (mapPairs.get(offset) || 0)) % mod;
        // Считаем совпадающие разницы
        mapPairs.set(offset, -~mapPairs.get(offset));
    }
    return count;
};

console.log(countNicePairs([42, 11, 1, 97]));
console.log(countNicePairs([13, 10, 35, 24, 76]));

console.log(countNicePairs([352171103, 442454244, 42644624, 152727101, 413370302, 293999243]));
