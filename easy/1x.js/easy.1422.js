/**
 * 1422. Maximum Score After Splitting a String
 *
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    const n = s.length;
    const bitwise = s.split("").map(Number);
    const prefixOnes = bitwise.reduce((p, bit) => {
        if (p.length) {
            p.push(p[p.length - 1] + bit);
        } else {
            p.push(bit);
        }
        return p;
    }, []);

    let countOnes;
    let countZeros = 0;
    return bitwise.reduce((max, bit, i) => {
        if (i < n - 1) {
            countZeros += 1 - bit;
            countOnes = prefixOnes[n - 1] - prefixOnes[i];
            return countOnes + countZeros > max ? countOnes + countZeros : max;
        } else {
            return max;
        }
    }, 0);
};
console.log(maxScore("011101"));
console.log(maxScore("00111"));
console.log(maxScore("1111"));
console.log(maxScore("00"));
console.log(maxScore("01001"));
