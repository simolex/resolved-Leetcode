/**
 * 1408. String Matching in an Array
 *
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    const createLPS = (patten, lps) => {
        const n = patten.length;
        let len = 0;

        lps[0] = 0;

        let i = 1;
        while (i < n) {
            if (patten[i] === patten[len]) {
                len++;
                lps[i] = len;
                i++;
            } else {
                if (len !== 0) {
                    len = lps[len - 1];
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }
    };

    const search = (pattern, text) => {
        const n = text.length;
        const m = pattern.length;

        const lps = Array(m);
        const res = [];

        createLPS(pattern, lps);

        let i = 0;
        let j = 0;

        while (i < n) {
            if (text[i] === pattern[j]) {
                i++;
                j++;

                if (j === m) {
                    // res.push(i - j);
                    return true;

                    j = lps[j - 1];
                }
            } else {
                if (j !== 0) j = lps[j - 1];
                else i++;
            }
        }
        // return res;
        return false;
    };

    const result = new Set();

    let word, subword;
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[i].length < words[j].length) {
                word = words[j];
                subword = words[i];
            } else {
                subword = words[j];
                word = words[i];
            }

            if (search(subword, word)) {
                result.add(subword);
            }
        }
    }
    return [...result.keys()];
};

console.log(stringMatching(["mass", "as", "hero", "superhero"]));
console.log(stringMatching(["leetcode", "et", "code"]));
console.log(stringMatching(["blue", "green", "bu"]));
