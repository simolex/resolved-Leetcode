/**
 * 17. Letter Combinations of a Phone Number
 *
 * @param {string} digits
 * @return {string[]}
 */
const buttons = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"]
};

var letterCombinations = function (digits) {
    const len = digits.length;
    let result = [];

    if (digits.length == 0) {
        return result;
    }

    const dfs = (char, index, path) => {
        path.push(char);

        if (index === len) {
            result.push(Array.from(path).join(""));
        } else {
            buttons[digits[index]].forEach((s) => dfs(s, index + 1, path));
        }

        path.pop();
    };

    dfs("", 0, []);

    return result;
};

console.log(letterCombinations("23"));
console.log(letterCombinations(""));
console.log(letterCombinations("2"));
console.log(letterCombinations("2456"));
