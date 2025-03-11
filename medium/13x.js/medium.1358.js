/**
 * 1358. Number of Substrings Containing All Three Characters
 *
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
    let count = 0;
    let n = s.length;
    const lastPosition = {
        a: -1,
        b: -1,
        c: -1,
    };

    for (let i = 0; i < n; i++) {
        lastPosition[s[i]] = i;
        count += 1 + Math.min(...Object.values(lastPosition));
    }

    return count;
};

var numberOfSubstrings = function (s) {
    let count = 0;
    let n = s.length;
    const lastPosition = {
        a: -1,
        b: -1,
        c: -1,
    };

    for (let i = 0; i < n; i++) {
        lastPosition[s[i]] = i;
        count += 1 + Math.min(lastPosition.a, lastPosition.b, lastPosition.c);
    }

    return count;
};

var numberOfSubstrings = function (s) {
    let count = 0;
    let n = s.length;
    const lastPosition = [-1, -1, -1];
    const codeA = "a".charCodeAt(0);

    for (let i = 0; i < n; i++) {
        lastPosition[s[i].charCodeAt(0) - codeA] = i;
        count += 1 + Math.min(...lastPosition);
    }

    return count;
};

console.log(numberOfSubstrings("abcabc"));
console.log(numberOfSubstrings("aaacb"));
console.log(numberOfSubstrings("abc"));
