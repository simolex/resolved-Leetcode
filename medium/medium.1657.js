/**
 * 1657. Determine if Two Strings Are Close
 *
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }

    const mapWord_1 = word1.split("").reduce((m, v) => {
        if (!m.has(v)) {
            m.set(v, { cnt: 0 });
        }
        m.get(v).cnt++;

        return m;
    }, new Map());

    const mapWord_2 = word2.split("").reduce((m, v) => {
        if (!m.has(v)) {
            m.set(v, { cnt: 0 });
        }
        m.get(v).cnt++;

        return m;
    }, new Map());

    const uniqueLetters_1 = [...mapWord_1.keys()].sort().join("");
    const uniqueLetters_2 = [...mapWord_2.keys()].sort().join("");

    if (uniqueLetters_1 !== uniqueLetters_2) {
        return false;
    }

    const balans_1 = [...mapWord_1.values()].reduce((m, { cnt: v }) => {
        if (!m.has(v)) {
            m.set(v, { cnt: 0 });
        }
        m.get(v).cnt++;

        return m;
    }, new Map());

    const balans_2 = [...mapWord_2.values()].reduce((m, { cnt: v }) => {
        if (!m.has(v)) {
            m.set(v, { cnt: 0 });
        }
        m.get(v).cnt++;

        return m;
    }, new Map());

    for (let [key, v] of balans_1.entries()) {
        if (!balans_2.has(key) || v.cnt !== balans_2.get(key).cnt) {
            return false;
        }
    }

    return true;
};

// console.log(closeStrings("abc", "bca"));
// console.log(closeStrings("a", "aa"));
// console.log(closeStrings("cabbba", "abbccc"));
console.log(closeStrings("aabbcccddd", "abccccdddd"));
