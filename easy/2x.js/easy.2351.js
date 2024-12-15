/**
 * 2351. First Letter to Appear Twice
 *
 * @param {string} s
 * @return {character}
 */

var repeatedCharacter = function (s) {
    const findedLetter = new Set();
    for (let i = 0; i < s.length; i++) {
        if (findedLetter.has(s[i])) {
            return s[i];
        }
        findedLetter.add(s[i]);
    }
};
console.log(repeatedCharacter("abccbaacz"));
console.log(repeatedCharacter("abcdd"));
console.log(repeatedCharacter("abcdad"));
