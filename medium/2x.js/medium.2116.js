/**
 * 2116. Check if a Parentheses String Can Be Valid
 *
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function (s, locked) {
    const n = s.length;
    if (n % 2) return false;
    let unlocked = 0;
    let openLocked = 0;
    let closeLocked = 0;

    for (let i = 0; i < n; i++) {
        if (locked[i] === "0") {
            unlocked++;
        } else if (s[i] === ")") {
            closeLocked++;
        } else {
            openLocked++;
        }
        if (unlocked + openLocked < closeLocked) return false;
    }

    unlocked = 0;
    openLocked = 0;
    closeLocked = 0;

    for (let i = n - 1; i >= 0; i--) {
        if (locked[i] === "0") {
            unlocked++;
        } else if (s[i] === ")") {
            closeLocked++;
        } else {
            openLocked++;
        }
        if (unlocked + closeLocked < openLocked) return false;
    }

    return true;
};

console.log(canBeValid("))()))", "010100"));
console.log(canBeValid("()()", "0000"));
console.log(canBeValid(")", "0"));
console.log(canBeValid("()", "11"));

console.log(canBeValid("()))", "0010"));
console.log(
    canBeValid(
        "())(()(()(())()())(())((())(()())((())))))(((((((())(()))))(",
        "100011110110011011010111100111011101111110000101001101001111"
    )
);
