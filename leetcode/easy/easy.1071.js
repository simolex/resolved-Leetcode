// 1071. Greatest Common Divisor of Strings
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    const min = Math.min(len1, len2);
    let commonDivisor = "";

    for (let i = min; i > 0; i--) {
        if (len1 % i === 0 && len2 % i === 0) {
            const tempDivisor = str1.substring(0, i);
            if (tempDivisor.repeat(len1 / i) === str1 && tempDivisor.repeat(len2 / i) === str2) {
                commonDivisor = tempDivisor;
                break;
            }
        }
    }
    return commonDivisor;
};
