/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let equalCount = 0;
    let ptrT = 0;
    for (let i = 0; i < s.length && ptrT < t.length; i++) {
        while (ptrT < t.length && s[i] !== t[ptrT]) {
            ptrT++;
        }
        if (ptrT < t.length && s[i] === t[ptrT]) {
            equalCount++;
            ptrT++;
        }
    }
    return s.length === equalCount;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("aaaaaa", "bbaaaa"));
