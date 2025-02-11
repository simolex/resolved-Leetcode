/**
 * 1910. Remove All Occurrences of a Substring
 *
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
    let m = part.length;
    const stack = [];
    let lastSubstr = "";

    for (let c of s) {
        lastSubstr = (stack.length >= m ? lastSubstr.substring(1) : lastSubstr) + c;
        stack.push(c);
        if (stack.length >= m && lastSubstr === part) {
            for (let i = 0; i < m; i++) {
                stack.pop();
            }
            lastSubstr = stack.slice(-m).join("");
        }
    }
    return stack.join("");
};

var removeOccurrences = function (s, part) {
    let m = part.length;

    let index;
    while ((index = s.indexOf(part)) !== -1) {
        s = s.substring(0, index) + s.substring(index + m);
    }

    return s;
};

console.log(removeOccurrences("daabcbaabcbc", "abc"));
console.log(removeOccurrences("axxxxyyyyb", "xy"));
console.log(removeOccurrences("eemckxmckx", "emckx"));
