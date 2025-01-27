/**
 * 2390. Removing Stars From a String
 *
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    return s
        .split("")
        .reduce((stack, v) => {
            if (v === "*") {
                stack.pop();
            } else {
                stack.push(v);
            }
            return stack;
        }, [])
        .join("");
};

console.log(removeStars("leet**cod*e"));
console.log(removeStars("erase*****"));
