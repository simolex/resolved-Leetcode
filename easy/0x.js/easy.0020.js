/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const brackets = {
        "(": ")",
        "{": "}",
        "[": "]"
    };
    const stack = [];
    for (let chr of s) {
        if (chr in brackets) {
            stack.push(chr);
        } else if (brackets[stack.pop()] !== chr) {
            return false;
        }
    }
    return stack.length === 0;
};
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
