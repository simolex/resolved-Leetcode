/**
 * 9. Palindrome Number
 *
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let cloneX = x;
    let reverse = 0;
    while (cloneX > 0) {
        reverse = reverse * 10 + (cloneX % 10);
        cloneX = Math.floor(cloneX / 10);
    }
    return reverse === x;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
