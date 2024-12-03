/**
 * 2109. Adding Spaces to a String
 *
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
    let pntSpace = 0;
    const result = s.split("").reduce((stack, t, i) => {
        if (pntSpace < spaces.length && i === spaces[pntSpace]) {
            stack.push(" ");
            pntSpace++;
        }
        stack.push(t);

        return stack;
    }, []);

    return result.join("");
};

console.log(addSpaces("LeetcodeHelpsMeLearn", [8, 13, 15]));
console.log(addSpaces("icodeinpython", [1, 5, 7, 9]));
console.log(addSpaces("spacing", [0, 1, 2, 3, 4, 5, 6]));
