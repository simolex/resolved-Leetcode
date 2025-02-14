/**
 * 2894. Divisible and Non-divisible Sums Difference
 *
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
    let num1 = 0;
    let num2 = 0;
    let current;
    for (let i = 1; i <= n; i++) {
        current = i / m;
        if (~~current === current) {
            num2 += i;
        } else {
            num1 += i;
        }
    }
    return num1 - num2;
};
console.log(differenceOfSums(10, 3));
console.log(differenceOfSums(5, 6));
console.log(differenceOfSums(5, 1));
