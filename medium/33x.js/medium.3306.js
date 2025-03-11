/**
 * 3306. Count of Substrings Containing Every Vowel and K Consonants II
 *
 * @param {string} word
 * @param {number} k
 * @return {number}
 */

var countOfSubstrings = function (word, k) {
    const atLeast = (word, k) => {
        let count = 0;
        let n = word.length;

        const vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };
        let restVowels = Object.keys(vowels).length;
        let usedConsonants = 0;

        let left = 0;
        for (let r = 0; r < n; r++) {
            if (word[r] in vowels) {
                if (vowels[word[r]] === 0) {
                    restVowels--;
                }
                vowels[word[r]]++;
            } else {
                usedConsonants++;
            }

            while (usedConsonants >= k && restVowels === 0) {
                count += n - r;
                if (word[left] in vowels) {
                    vowels[word[left]]--;
                    if (vowels[word[left]] === 0) {
                        restVowels++;
                    }
                } else {
                    usedConsonants--;
                }
                left++;
            }
        }
        return count;
    };

    return atLeast(word, k) - atLeast(word, k + 1);
};

var countOfSubstrings = function (word, k) {
    const atLeast = (word, k) => {
        let count = 0;
        let n = word.length;

        const vowels = new Map([
            ["a", { cnt: 0 }],
            ["e", { cnt: 0 }],
            ["i", { cnt: 0 }],
            ["o", { cnt: 0 }],
            ["u", { cnt: 0 }],
        ]);
        let restVowels = vowels.size;
        let usedConsonants = 0;
        let validCount;

        let left = 0;
        for (let r = 0; r < n; r++) {
            if (vowels.has(word[r])) {
                if (vowels.get(word[r]).cnt === 0) {
                    restVowels--;
                }
                vowels.get(word[r]).cnt++;
            } else {
                usedConsonants++;
            }

            validCount = n - r;

            while (usedConsonants >= k && restVowels === 0) {
                count += validCount;
                if (vowels.has(word[left])) {
                    vowels.get(word[left]).cnt--;
                    if (vowels.get(word[left]).cnt === 0) {
                        restVowels++;
                    }
                } else {
                    usedConsonants--;
                }
                left++;
            }
        }
        return count;
    };

    return atLeast(word, k) - atLeast(word, k + 1);
};

console.log(countOfSubstrings("aeioqq", 1)); //0
console.log(countOfSubstrings("aeiou", 0)); //1
console.log(countOfSubstrings("ieaouqqieaouqq", 1)); //3
console.log(countOfSubstrings("iqeaouqi", 2)); //3
console.log(countOfSubstrings("aadieuoh", 1)); //2
console.log(countOfSubstrings("aoaiuefi", 1)); //4
