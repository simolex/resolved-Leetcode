/**
 * 1839. Longest Substring Of All Vowels in Order
 *
 * @param {string} word
 * @return {number}
 */
var longestBeautifulSubstring = function (word) {
    let n = word.length;
    const pattern = "aeiou";
    let pntPattern = 0;
    let longestBeautiful = 0;

    let left = 0;
    let right = 0;
    while (right < n) {
        if (pattern[pntPattern] === word[right]) {
            while (pattern[pntPattern] === word[right]) {
                if (pntPattern === 4) {
                    longestBeautiful = Math.max(longestBeautiful, right - left + 1);
                }
                right++;
            }
            pntPattern++;
        } else {
            while (right < n && "a" !== word[right]) {
                right++;
            }
            left = right;
            pntPattern = 0;
        }
    }
    return longestBeautiful;
};

console.log(longestBeautifulSubstring("aeiaaioaaaaeiiiiouuuooaauuaeiu"));
console.log(longestBeautifulSubstring("aeeeiiiioooauuuaeiou"));
console.log(longestBeautifulSubstring("a"));
