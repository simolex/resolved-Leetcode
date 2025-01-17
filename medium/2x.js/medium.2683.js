/**
 * 2683. Neighboring Bitwise XOR
 *
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function (derived) {
    let n = derived.length;

    let original = 1;
    for (let i = 1; i < n; i++) {
        original ^= derived[i - 1];
    }
    return (original ^ derived[n - 1]) === 1;
};

console.log(doesValidArrayExist([1, 1, 0]));
console.log(doesValidArrayExist([1, 1]));
console.log(doesValidArrayExist([1, 0]));
