/**
 * 3407. Substring Matching Pattern
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var hasMatch = function (s, p) {
    const [firstPart, secondPart] = p.split("*");

    const firstIndex = firstPart !== "" ? s.indexOf(firstPart) : 0;
    const secondIndex = secondPart !== "" ? s.lastIndexOf(secondPart) : s.length;
    return firstIndex >= 0 && secondIndex >= 0 && firstIndex + firstPart.length - 1 < secondIndex;
};

console.log(hasMatch("leetcode", "ee*e"));
console.log(hasMatch("car", "c*v"));
console.log(hasMatch("luck", "u*"));
console.log(hasMatch("pep", "q*"));
console.log(hasMatch("xks", "s*"));
console.log(hasMatch("tokk", "t*t"));
