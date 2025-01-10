/**
 * 916. Word Subsets
 *
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
    const counter = new Map();
    const pattern = new Map();
    const newPattern = new Map();

    words2.forEach((word) => {
        newPattern.clear();
        word.split("").forEach((letter) => {
            if (!newPattern.has(letter)) {
                newPattern.set(letter, { cnt: 0 });
            }
            newPattern.get(letter).cnt++;
        });
        newPattern.forEach((val, letter) => {
            if (!pattern.has(letter)) {
                pattern.set(letter, val);
            } else {
                pattern.get(letter).cnt = Math.max(pattern.get(letter).cnt, val.cnt);
            }
        });
    });

    return words1.filter((word) => {
        counter.clear();

        word.split("").forEach((letter) => {
            if (!counter.has(letter)) {
                counter.set(letter, { cnt: 0 });
            }
            counter.get(letter).cnt++;
        });

        for (let letter of pattern.keys()) {
            if (!counter.has(letter) || counter.get(letter).cnt < pattern.get(letter).cnt) {
                return false;
            }
        }

        return true;
    });
};

console.log(wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["e", "o"]));
console.log(wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["l", "e"]));
console.log(wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["lo", "eo"]));
