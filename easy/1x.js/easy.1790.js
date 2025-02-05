/**
 * 1790. Check if One String Swap Can Make Strings Equal
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
    let n = s1.length;
    let swap_S1;
    let swap_S2;
    let isSwaped = false;

    for (let i = 0; i < n; i++) {
        if (s1[i] !== s2[i]) {
            if (!swap_S1) {
                swap_S1 = s1[i];
                swap_S2 = s2[i];
            } else if (!isSwaped) {
                if (swap_S1 !== s2[i] || swap_S2 !== s1[i]) {
                    return false;
                }
                isSwaped = true;
            } else {
                return false;
            }
        }
    }
    if (!!swap_S1 && !isSwaped) {
        return false;
    }
    return true;
};

console.log(areAlmostEqual("bank", "kanb"));
console.log(areAlmostEqual("attack", "defend"));
console.log(areAlmostEqual("kelb", "kelb"));
console.log(areAlmostEqual("aa", "ac"));
