/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    let len = s.length;
    const stack = [];

    for (let i = 0; i < len; i++) {
        if (!isNaN(Number(s[i]))) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join("");
};

console.log(clearDigits("abc"));
console.log(clearDigits("cb34"));
