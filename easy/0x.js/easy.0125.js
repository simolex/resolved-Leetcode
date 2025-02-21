/**
 * 125. Valid Palindrome
 *
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase();
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && /[^a-z0-9]/.test(s[left])) {
            left++;
        }
        while (left < right && /[^a-z0-9]/.test(s[right])) {
            right--;
        }
        if (left < right && s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
