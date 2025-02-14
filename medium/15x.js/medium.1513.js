/**
 * 1513. Number of Substrings With Only 1s
 *
 * @param {string} s
 * @return {number}
 */
var numSub = function (s) {
    const mod = 10 ** 9 + 7;
    let len = s.length;
    let result = 0;

    let prev = "0";
    let count = 0;
    for (let i = 0; i < len; i++) {
        if (s[i] === prev) {
            count++;
        } else {
            if (prev === "1") {
                result += ((count * (count + 1)) / 2) % mod;
            }
            prev = s[i];
            count = 1;
        }
    }
    if (prev === "1") result += ((count * (count + 1)) / 2) % mod;

    return result % mod;
};

var numSub = function (s) {
    const mod = 10 ** 9 + 7;

    return (
        s
            .split("0")
            .reduce(
                (sum, str) =>
                    sum + (Boolean(str) ? ((str.length * (str.length + 1)) / 2) % mod : 0),
                0
            ) % mod
    );
};

console.log(numSub("0110111"));
console.log(numSub("101"));
console.log(numSub("111111"));
console.log(numSub("0100001"));
