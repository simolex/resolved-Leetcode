/**
 * 1415. The k-th Lexicographical String of All Happy Strings of Length n
 *
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const dict = "abc";
const hsStore = {};
const nextStep = (maxLength, happyStrings, length = 0, result = "") => {
    if (length === maxLength) {
        happyStrings.push(result);
        return happyStrings;
    }
    let prev = result.slice(-1);
    for (let char of dict) {
        if (char !== prev) {
            nextStep(maxLength, happyStrings, length + 1, result + char);
        }
    }
    return happyStrings;
};

for (let i = 1; i <= 10; i++) {
    hsStore[i] = nextStep(i, []);
}

var getHappyString = function (n, k) {
    return hsStore[n][k - 1] ? hsStore[n][k - 1] : "";
};

console.log(getHappyString(1, 3));
console.log(getHappyString(1, 4));
console.log(getHappyString(3, 9));
