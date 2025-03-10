/**
 * 2062. Count Vowel Substrings of a String
 *
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function (word) {
    let n = word.length;
    const vowels = new Set("aeiou");

    const atMost = (word, maxVowels) => {
        let left = 0;
        let result = 0;
        const countingVowels = new Map();

        for (let right = 0; right < n; right++) {
            if (vowels.has(word[right])) {
                countingVowels.set(word[right], -~countingVowels.get(word[right]));
                while (countingVowels.size > maxVowels) {
                    countingVowels.set(word[left], countingVowels.get(word[left]) - 1);
                    if (countingVowels.get(word[left]) === 0) {
                        countingVowels.delete(word[left]);
                    }
                    left++;
                }
                result += right - left + 1;
            } else {
                countingVowels.clear();
                left = right + 1;
            }
        }
        return result;
    };

    return atMost(word, 5) - atMost(word, 4);
};

console.log(countVowelSubstrings("aeiouu"));
console.log(countVowelSubstrings("unicornarihan"));
console.log(countVowelSubstrings("cuaieuouac"));
